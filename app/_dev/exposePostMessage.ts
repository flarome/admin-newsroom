type DevPostMessage = {
  send: (message: any) => void;
  simulateReceive: (message: any) => void;
  type: "iframe" | "opener";
};

type MessageListener = (event: MessageEvent) => void;


declare global {
  interface Window {
    __MESSAGES__?: Record<string, DevPostMessage>;
  }
}

/**
 * Expose un outil de postMessage dev dans `window.__MESSAGES__`
 *
 * @param key Nom unique du canal
 * @param options Cible : soit une iframe, soit "opener" (fenêtre parente)
 * @param targetOrigin Origine du destinataire (par défaut "*")
 */
export function exposePostMessageTools(
  key: string,
  options: { iframe?: HTMLIFrameElement; opener?: boolean },
  targetOrigin: string = "*"
): void {
  if (typeof window === "undefined" || process.env.NODE_ENV === "production") return;

  if (!window.__MESSAGES__) window.__MESSAGES__ = {};

  const isIframe = !!options.iframe;
  const isOpener = !!options.opener;

  if (!isIframe && !isOpener) {
    console.warn(`[devtools] ❌ Aucune cible fournie pour exposePostMessageTools(${key})`);
    return;
  }

  if (targetOrigin !== "*" && !/^https?:\/\/[\w.-]+(?::\d+)?$/.test(targetOrigin)) {
    console.warn(`[devtools] ⚠️ Origine invalide : "${targetOrigin}"`);
    return;
  }

    // Liste des callbacks enregistrés
  const messageListeners: MessageListener[] = [];

  const messageHandler = (event: MessageEvent) => {
    if (targetOrigin !== "*" && event.origin !== targetOrigin) return;

    if (isIframe) {
      if (event.source !== options.iframe?.contentWindow) return;
    } else if (isOpener) {
      if (event.source !== window.opener) return;
    }

    console.log(
      `%c📥 [devtools] ${key} - Message reçu depuis "${(isIframe ? "iframe" : "opener")}" :`,
      "color: #2196F3; font-weight: bold",
      event.data
    );

    messageListeners.forEach((listener) => listener(event));
  };

  window.addEventListener("message", messageHandler);


  const send = (message: any) => {
    if (isIframe && options.iframe?.contentWindow) {
      options.iframe.contentWindow.postMessage(message, targetOrigin);
      console.log(
        "%c📤 [devtools] Message envoyé à l'iframe :",
        "color: #4CAF50; font-weight: bold",
        message,
        `→ ${targetOrigin}`
      );
    } else if (isOpener && window.opener) {
      window.opener.postMessage(message, targetOrigin);
      console.log(
        "%c📤 [devtools] Message envoyé à la fenêtre parente (opener) :",
        "color: #FF9800; font-weight: bold",
        message,
        `→ ${targetOrigin}`
      );
    } else {
      console.warn(`[devtools] ❌ Impossible d’envoyer le message : cible indisponible`);
    }
  };

  const simulateReceive = (message: any) => {
    window.dispatchEvent(new MessageEvent("message", { data: message }));
    console.log(
      "%c📥 [devtools] Message simulé depuis l'" +
        (isIframe ? "iframe" : "opener") +
        " :",
      "color: #2196F3; font-weight: bold",
      message
    );
  };

  window.__MESSAGES__[key] = {
    send,
    simulateReceive,
    type: isIframe ? "iframe" : "opener",
  };

  console.log(
    `✅ [devtools] Messages "${key}" exposés dans window.__MESSAGES__ (type: ${isIframe ? "iframe" : "opener"})`
  );
}
