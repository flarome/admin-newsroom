const CONFIG_SYMBOL = Symbol('langLoaderConfig');


type TranslationType = 
  | { type: 'json'; value: string }                      // JSON brut (string à parser)
  | { type: 'parsed'; value: object }                    // Objet JSON déjà parsé
  | { type: 'import'; value: (lang: string) => Promise<any> }        // Fonction lazy import
  | { type: 'stringFn'; value: () => string }            // Fonction retournant string JSON à parser
  | { type: 'objectFn'; value: () => object }            // Fonction retournant objet synchronement
  | { type: 'path'; value: string };     // Chemin pour import()


  
export type LangLoaderConfig<Lang extends string> = {
  fallback?: Lang;
   translations: Partial<Record<Lang, TranslationType>>;
};

type LangLoader<Lang extends string> = Record<Lang, () => Promise<any>> & {
  [CONFIG_SYMBOL]: LangLoaderConfig<Lang> & { availableLangs: readonly Lang[] };
};

export function createLangLoader<
  Lang extends string,
  Config extends LangLoaderConfig<Lang> 
>(
  config: Config
): LangLoader<Lang> {

    const availableLangs = Object.keys(config.translations) as Lang[];

  if (availableLangs.length === 0) {
    throw new Error("No languages provided in translations");
  }


  const loader: Partial<Record<Lang, () => Promise<any>>> = {};



   for (const lang of availableLangs) {
    loader[lang] = createLangLoadFunction(config.translations[lang], lang);
  }

   if (config.fallback && !loader[config.fallback as Lang]) {
    if (config.translations[config.fallback]) {
  loader[config.fallback] = createLangLoadFunction(
      config.translations[config.fallback],
      config.fallback
    );
    } else {
 throw new Error("Fallabck language must be in translations");
    }
  
  }
  




 
  Object.defineProperty(loader, CONFIG_SYMBOL, {
  value: {
    ...config,
    availableLangs, // ajouté ici pour qu’on puisse y accéder ensuite
  },
  enumerable: false,
  writable: false,
  configurable: false,
});


  return loader as LangLoader<Lang>;
}

function createLangLoadFunction<Lang extends string>(
  translation: TranslationType | undefined,
  lang: Lang
): () => Promise<any> {
  if (!translation) {
    return () => Promise.reject(new Error(`No translation provided for language "${lang}"`));
  }

  switch (translation.type) {
    case 'json':
      return () => Promise.resolve(JSON.parse(translation.value));

    case 'parsed':
      return () => Promise.resolve(translation.value);

    case 'import':
      // lazy import function
      return () => translation.value(lang);

    case 'stringFn':
      return () => Promise.resolve(JSON.parse(translation.value()));

    case 'objectFn':
      return () => Promise.resolve(translation.value());

      case 'path':
      return () =>
        import(/* @vite-ignore */ translation.value);

      
    default:
      return () => Promise.reject(new Error(`Unsupported translation type for language "${lang}"`));
  }
}


export async function loadLang<
  Lang extends string
>(
  loader: LangLoader<Lang>,
  requestedLang: Lang
): Promise<Record<string, any>> {
  const config = loader[CONFIG_SYMBOL];
  const { availableLangs, fallback } = config;

  const langToUse = availableLangs.includes(requestedLang) ? requestedLang : fallback;

  if (!langToUse) {
    throw new Error(`No available language or fallback defined for requested "${requestedLang}"`);
  }

  const module = await loader[langToUse]();
  return module.default ?? module;
}