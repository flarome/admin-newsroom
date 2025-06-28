(() => {
  const CONFIG = {
    SHOP_DOMAIN: "ddwisp-fd.myshopify.com",
    STOREFRONT_ACCESS_TOKEN: "3022777a4058c9d25ae7511aac611694",
    LANGUAGE: "fr-FR",
    VARIANT_MAP: {
      "offer-price-2674470": "gid://shopify/ProductVariant/51776749666571",
      "offer-price-2674471": "gid://shopify/ProductVariant/51776749699339",
    },
    FAST_SHIPPING_ID: "gid://shopify/ProductVariant/51776746160395",
    EMAIL_INPUT_SELECTOR: "#field-4a87faa0",
    ORDER_BUMP_CHECKBOX_SELECTOR:
      ".order-bump-check-box-ui__OrderBumpCheckBoxUi-sc-16y7gi9-0",
    POLLING_MAX_TRIES: 20,
    POLLING_INTERVAL_MS: 500,
    BUY_BUTTON_SELECTOR: "#commander-button",
    BUTTON_POLL_INTERVAL_MS: 500,
  };

  const client = ShopifyBuy.buildClient({
    domain: CONFIG.SHOP_DOMAIN,
    storefrontAccessToken: CONFIG.STOREFRONT_ACCESS_TOKEN,
    language: CONFIG.LANGUAGE,
  });

  let checkout = null;
  let emailInput = null;

  function openUrlSafely(url) {
    try {
      // 1. Tentative immédiate synchrone
      window.location.href = url;

      // Méthode 3 : fallback HTML si redirection JS échoue
      setTimeout(() => {
        const a = document.createElement("a");
        a.href = url;
        a.target = "_self";
        a.rel = "noopener noreferrer";
        a.click();
      }, 1500); // Si au bout de 1.5s on n’est toujours pas parti
    } catch (err) {
      console.error("[Shopify] Erreur ouverture de fenêtre :", err);
      window.location.href = url; // Fallback ultime
    }
  }

  async function initCheckoutIfNeeded() {
    if (!checkout) {
      try {
        console.log("[Shopify] Création du checkout...");
        checkout = await client.checkout.create();
        console.log("[Shopify] Checkout créé avec ID:", checkout.id);
      } catch (err) {
        console.error("[Shopify] Erreur création checkout :", err);
        throw err;
      }
    }
  }

  async function updateCheckoutEmail(email) {
    if (!checkout) await initCheckoutIfNeeded();
    try {
      const updated = await client.checkout.updateEmail(checkout.id, email);
      console.log("[Shopify] Email mis à jour :", updated.email);
    } catch (err) {
      console.error("[Shopify] Erreur lors de la mise à jour email :", err);
    }
  }

  function getEmailParamFromUrl() {
    try {
      return new URLSearchParams(window.location.search).get("email");
    } catch (err) {
      console.warn("[Shopify] Erreur parsing URL email :", err);
      return null;
    }
  }

  function findEmailInputWithPolling(
    maxTries = CONFIG.POLLING_MAX_TRIES,
    intervalMs = CONFIG.POLLING_INTERVAL_MS,
  ) {
    return new Promise((resolve) => {
      let tries = 0;
      const intervalId = setInterval(() => {
        tries++;
        try {
          const input = document.querySelector(CONFIG.EMAIL_INPUT_SELECTOR);
          if (input) {
            clearInterval(intervalId);
            resolve(input);
          } else if (tries >= maxTries) {
            console.warn("[Shopify] Email introuvable après essais.");
            clearInterval(intervalId);
            resolve(null);
          }
        } catch (err) {
          clearInterval(intervalId);
          console.error("[Shopify] Erreur polling email:", err);
          resolve(null);
        }
      }, intervalMs);
    });
  }

  async function setupEmailListener() {
    try {
      emailInput = await findEmailInputWithPolling();
      if (!emailInput) return;

      const initial = emailInput.value.trim();
      const emailFromUrl = getEmailParamFromUrl();

      if (initial?.includes("@")) {
        await updateCheckoutEmail(initial);
      } else if (emailFromUrl?.includes("@")) {
        emailInput.value = emailFromUrl;
        await updateCheckoutEmail(emailFromUrl);
      }

      emailInput.addEventListener("input", async (e) => {
        const email = e.target.value.trim();
        if (email && email.includes("@")) {
          try {
            await updateCheckoutEmail(email);
          } catch (err) {
            console.error("[Shopify] Erreur update email :", err);
          }
        }
      });
    } catch (err) {
      console.error("[Shopify] setupEmailListener error:", err);
    }
  }

  async function commanderDepuisSystemeIO(button = null) {
    console.log("[Shopify] Début de la commande...");

    try {
      if (!checkout) await initCheckoutIfNeeded();

      const selectedRadio = document.querySelector(
        'input[type="radio"]:checked',
      );
      if (!selectedRadio) return alert("Veuillez sélectionner une formule.");

      const container = selectedRadio.closest("[data-test-id]");
      if (!container) return alert("Option sélectionnée introuvable.");

      const testId = container.getAttribute("data-test-id");
      const variantId = CONFIG.VARIANT_MAP[testId];
      if (!variantId) return alert("Variante introuvable.");

      const fastShipping = document.querySelector(
        CONFIG.ORDER_BUMP_CHECKBOX_SELECTOR,
      )?.checked;

      const lineItems = [{ variantId, quantity: 1 }];
      if (fastShipping)
        lineItems.push({ variantId: CONFIG.FAST_SHIPPING_ID, quantity: 1 });

      let retryOnce = true;

      const tryOrder = async () => {
        try {
          // UI loading state
          if (button) {
            button.disabled = true;
            button.dataset.originalText = button.innerHTML;
            button.innerHTML = `<span style="font-weight: bold;
    font-size: 18px;">⌛ Veuillez patienter...</span>`;
          }

          const updatedCheckout = await client.checkout.replaceLineItems(
            checkout.id,
            lineItems,
          );

          console.log("[Shopify] Checkout prêt :", updatedCheckout.webUrl);
          openUrlSafely(updatedCheckout.webUrl);
        } catch (err) {
          if (retryOnce) {
            console.warn("[Shopify] Erreur commande, retry sans email...");
            retryOnce = false;
            try {
              await client.checkout.updateEmail(checkout.id, null); // Supprime l’email
            } catch (e) {
              console.warn(
                "[Shopify] Impossible de réinitialiser l'email :",
                e,
              );
            }
            return tryOrder(); // Retry une fois
          }

          console.error("[Shopify] Échec commande après retry :", err);
          alert("Erreur pendant la commande. Veuillez réessayer.");
        } finally {
          if (button) {
            button.disabled = false;
            button.innerHTML =
              button.dataset.originalText ||
              ` <span
   style="font-weight: bold;
    font-size: 18px;">Commander maintenant</span>`;
          }
        }
      };

      await tryOrder();
    } catch (err) {
      console.error("[Shopify] Erreur commande :", err);
      alert("Erreur pendant la commande.");
    }
  }

  function watchBuyButton() {
    const selector = CONFIG.BUY_BUTTON_SELECTOR;
    let attached = false;

    const tryAttach = () => {
      try {
        const btn = document.querySelector(selector);
        if (btn && !attached) {
          attached = true;
          console.log("[Shopify] Bouton 'Commander' trouvé");

          btn.addEventListener("click", async (e) => {
            e.preventDefault();
            await commanderDepuisSystemeIO(btn);
          });
        } else if (!btn) {
          setTimeout(tryAttach, CONFIG.BUTTON_POLL_INTERVAL_MS);
        }
      } catch (err) {
        console.error("[Shopify] Erreur watchBuyButton:", err);
        setTimeout(tryAttach, CONFIG.BUTTON_POLL_INTERVAL_MS);
      }
    };

    tryAttach();
  }

  document.addEventListener("DOMContentLoaded", () => {
    setupEmailListener().catch((err) => {
      console.error("[Shopify] setupEmailListener global error:", err);
    });

    watchBuyButton();
  });
})();
