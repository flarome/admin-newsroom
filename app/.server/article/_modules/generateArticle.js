import generateArticle from "../../../data/article/input";

const fallbackKey = "fallback_guard";
const fallbackNs = "debug";
const fastMarker = "fast";
const fullMarker = "full";

export async function articleWithFallback(
  config,
  fields,
  mutation,
  variables,
  isNew,
  operationName,
) {
  const { adminClient } = config;

  if (!operationName) throw new Error("operationName requis");

  let resolved = false;
  const fastTimestamp = Date.now();
  const fullTimestamp = fastTimestamp + 1;

  const fastPromise = generateArticle(config, fields, isNew, true)
    .then((fastInput) => {
       
      if (resolved) return null; // ❌ Trop tard → on n'appelle même pas adminClient.graphql

      fastInput.metafields = [
        ...(fastInput.metafields || []),
        {
          namespace: fallbackNs,
          key: fallbackKey,
          type: "single_line_text_field",
          value: `${fastMarker}-${fastTimestamp}`,
        },
      ];
      if (resolved) return null; // ❌ Trop tard → on n'appelle même pas adminClient.graphql

      return adminClient.graphql(mutation, {
        ...variables,
        article: fastInput,
      });
    })
    .then((res) => {
      if (!res || resolved) return null;
      const result = res?.[operationName];
      const hasErrors =
        Array.isArray(result?.userErrors) && result.userErrors.length > 0;

      if (hasErrors) {
        resolved = true;
        return result; // ✅ La fast gagne
      }

      return null; // Sinon on attend la full
    })
    .catch((err) => {
      console.error("⛔ Erreur fast:", err);
      return null;
    });

  const fullPromise = generateArticle(config, fields, isNew, false)
    .then((fullInput) => {
      resolved = true; // ⛔ On verrouille ici

      fullInput.metafields = [
        ...(fullInput.metafields || []),
        {
          namespace: fallbackNs,
          key: fallbackKey,
          type: "single_line_text_field",
         value: `${fullMarker}-${fullTimestamp}`,
        },
      ];

      return adminClient.graphql(mutation, {
        ...variables,
        article: fullInput,
      });
    })
    .then((res) => {
      return res?.[operationName] || null;
    })
    .catch((err) => {
      console.error("❌ Erreur full:", err);
      throw new Error("Échec de la création de l’article.");
    });

  const result = await Promise.race([
    fastPromise.then((res) => res ?? fullPromise),
    fullPromise,
  ]);

  if (!result) throw new Error("Aucun résultat retourné.");

  // 🔍 Vérification finale de qui a gagné
  const fallbackMeta = result?.article?.debug;


  let winnerTag = null;
  let winnerTimestamp = null;

  if (fallbackMeta?.value) {
    const [tag, tsStr] = fallbackMeta.value.split("-");
    winnerTag = tag;
    winnerTimestamp = parseInt(tsStr, 10);
  }



  const isFastWinner = winnerTag === fastMarker;
  const wasOverridden = isFastWinner && winnerTimestamp < fullTimestamp;


  if (wasOverridden) {
   console.warn("⚠️ La fast a été retournée mais la full était plus récente → relance full");

    const fullInput = await generateArticle(config, fields, isNew, false);
    fullInput.metafields = [
      ...(fullInput.metafields || []),
      {
        namespace: fallbackNs,
        key: fallbackKey,
        type: "single_line_text_field",
        value: fullMarker,
      },
    ];

    const final = await adminClient.graphql(mutation, {
      ...variables,
      article: fullInput,
    });

    return (
      {
   __wasRefetched: true,
      __future_dual: true,
      __winningStrategy: "retry",
      __fallbackDebug: fallbackMeta?.value,
        ...final?.[operationName],
      } || null
    );
  }

  return {
      __wasRefetched: false,
    __future_dual: isFastWinner,
    __winningStrategy: isFastWinner ? "fast" : "full",
    __fallbackDebug: fallbackMeta?.value,
    ...result,
  };
}
