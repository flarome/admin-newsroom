const CONFIG_SYMBOL = Symbol('langLoaderConfig');

type LangLoaderConfig<Lang extends string> = {
  availableLangs: readonly Lang[];
  fallback?: Lang;
  path: (lang: Lang) => string;
};

type LangLoader<Lang extends string> = Record<Lang, () => Promise<any>> & {
  [CONFIG_SYMBOL]: LangLoaderConfig<Lang>;
};

export function createLangLoader<
  Lang extends string,
  Config extends LangLoaderConfig<Lang>
>(
  config: Config
): LangLoader<Lang> {
  const loader: Partial<Record<Lang, () => Promise<any>>> = {};

  config.availableLangs.forEach((lang) => {
    loader[lang] = () => import(config.path(lang));
  });

  if (config.fallback && !loader[config.fallback as Lang]) {
    const fallbackLang = config.fallback as Lang;
    loader[fallbackLang] = () => import(config.path(fallbackLang));
  }

  Object.defineProperty(loader, CONFIG_SYMBOL, {
    value: config,
    enumerable: false,
  });

  return loader as LangLoader<Lang>;
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