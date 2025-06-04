import { useRef, useEffect, useState } from "react";
import { usePreview } from "../context/PreviewContext";
import Frame from "react-frame-component";
import { v4 as uuidv4 } from 'uuid';
import { customRequest } from "../../../lib/client/request";
import { useDesignSystem } from "../context/DesignSystemContext";
import { useSections } from "../context/SectionsContext";


const MAX_SILENT_RETRIES = 7;
export default function Preview({}) {
   const { mode } = usePreview();
  const { setProgress } = useDesignSystem();




  const {exportSections: sections} = useSections();

  const { fields } = {};

 
  const { theme, staticData } = {};

  const [url, setUrl] = useState(null);
  const [next, setNext] = useState(null);
  const [silentRetryCount, setSilentRetryCount] = useState(0);

  const prevUrlRef = useRef(null);
  const prevThemeId = useRef(null);
  const iframeRef = useRef(null);

  const lastContentRef = useRef(sections);
const lastBodyHTMLRef = useRef("");
const fetchIdRef = useRef(0); // identifiant du fetch en cours
const abortControllerRef = useRef(null);

const fetchHtmlWithRetry = async (fetchUrl, tryCount = 0, fetchId) => {
  // Nouvelle instance pour CHAQUE fetch
  const controller = new AbortController();
  abortControllerRef.current = controller;

  try {
    const response = await fetch(fetchUrl, { 
      credentials: "include",
      signal: controller.signal,
    });
    const htmlText = await response.text();
    const parser = window ? new window.DOMParser() : new DOMParser();
    const doc = parser.parseFromString(htmlText, "text/html");
    const bodyInnerHTML = doc.body?.innerHTML ?? "";

    // Si ce n'est plus le fetch actif, on ignore le résultat
    if (fetchIdRef.current !== fetchId) return;

    // Cas du cache: retry silencieux
    if (
      bodyInnerHTML === lastBodyHTMLRef.current &&
      sections !== lastContentRef.current &&
      tryCount < MAX_SILENT_RETRIES
    ) {
      setTimeout(() => {
        fetchHtmlWithRetry(fetchUrl, tryCount + 1, fetchId);
      }, 500);
      return;
    }

    // OK: mémorisation et injection
    lastBodyHTMLRef.current = bodyInnerHTML;
    lastContentRef.current = sections;

    if (iframeRef.current && iframeRef.current.contentDocument) {
      iframeRef.current.contentDocument.body.innerHTML = bodyInnerHTML;
      setProgress(100);
    }
  } catch (err) {
    if (err.name === "AbortError") {
      // fetch annulé, on fait rien
      return;
    }
    console.error("[Preview] Erreur lors du refetch HTML:", err);
    setProgress(0);
  }
};


  useEffect(() => {
    setProgress(10);

     // Annule l'ancien fetchHtmlWithRetry si il y en a un
  if (abortControllerRef.current) {
    abortControllerRef.current.abort();
  }

   // On incrémente l'id, unique pour chaque modif
  fetchIdRef.current += 1;
  const currentFetchId = fetchIdRef.current;


    const body = {
      ...(next || {}),
      data: {
        ...fields,
        sections: sections,
      },
    };




    /*apiRequest("previewArticle", body)
    .then((res) => {
      setProgress(60);
      if (res?.next) setNext(res.next);

      if (res?.path) {
        if (res.path !== prevUrlRef.current || theme.id !== prevThemeId.current) {
          setUrl(`/preview?url=${staticData.shop.url}${res.path}&preview_theme_id=${theme.id.split('/').pop()}`);
          prevUrlRef.current = res.path;
          prevThemeId.current = theme.id;
          lastContentRef.current = sections;
          lastBodyHTMLRef.current = "";
        } else {
          // On fetch le HTML et on passe le nouvel id
          if (iframeRef.current) {
            const currentUrl = iframeRef.current.src;
  const URL_CURRENT = new URL(currentUrl);
URL_CURRENT.searchParams.append('_cd', String(Math.floor(Math.random() * 2 ** 32)));
URL_CURRENT.searchParams.append('_uid', uuidv4());
URL_CURRENT.searchParams.append('preview_token', uuidv4());
URL_CURRENT.searchParams.append('_ab', '0');
URL_CURRENT.searchParams.append('_fd', '0');
URL_CURRENT.searchParams.append('_sc', '1');
            const finalUrl = URL_CURRENT.toString();

            fetchHtmlWithRetry(finalUrl, 0, currentFetchId);
          }
        }
      }
    })
    .catch((err) => {
      console.error("Erreur de preview:", err);
      setProgress(0);
    });*/

      // Reset silent retries si sections redevient comme avant (rollback utilisateur)
  if (sections === lastContentRef.current && silentRetryCount !== 0) {
    setSilentRetryCount(0);
  }
    // eslint-disable-next-line
  }, [sections, theme]);

  const getWrapperClass = () => {
    switch (mode) {
      case "mobile":
        return "Online-Store-UI-Preview--modeMobile_bx1rn";
      case "full":
        return "Online-Store-UI-Preview--modeFullscreen_1g7cn";
      default:
        return "Online-Store-UI-Preview--modeDesktop_1tb9v";
    }
  };



  const initialContent = `
<!DOCTYPE html>
<html>
  <head>
    <style>
      #__frameContent__:not(:empty) + #__static__ {
        display: none;
      }
    </style>
  </head>
  <body>
   <div id="__frameContent__"></div>
   <div id="__static__"></div>
  </body>
</html>
`;

  // useEffect pour setProgress(100) dans le cas du mode statique (Frame) quand pas d'url
  useEffect(() => {
    if (!url) {
      setProgress(100);
    }
  }, [url]);



const handleIframeLoad = () => {
  setProgress(100);
  const iframe = iframeRef.current;
  if (!iframe?.contentWindow) return;
  try {
    const script = iframe.contentDocument.createElement("script");
    script.type = "text/javascript";
    script.text = `
      document.addEventListener('click', function(e) {
        let el = e.target;
        // Traverse jusqu'à trouver un lien ou pas
        while (el && el !== document.body) {
          if (el.tagName === 'A' && el.href) {
            // Autorise <a href="#"> ou <a href=""> ou <a href="javascript:...">
            const href = el.getAttribute('href');
            if (href === '#' || href === '' || href?.startsWith('javascript:')) {
              return;
            }
            // Interdit les autres liens
            e.preventDefault();
            e.stopPropagation();
            return false;
          }
          if (el.tagName === 'BUTTON' || el.type === 'submit') {
            // Autorise bouton, pas d'action ici
            return;
          }
          el = el.parentElement;
        }
      }, true); // Capture phase
    `;
    iframe.contentDocument.body.appendChild(script);
  } catch (e) {
    console.error("[Preview] Erreur injection script anti-lien", e);
  }
};


  return (
    <div className="Online-Store-UI-Preview_q672v">
      <div className="Online-Store-UI-Preview__PreviewInner_1b3ww">
        <div className="Online-Store-UI-Preview__HeaderWrapper_1mwgk"></div>
        <div className="Online-Store-UI-Preview__Main_t13h3">
          <div className={`Online-Store-UI-Preview__Interior_fjd4l ${getWrapperClass()}`}>
            <div className="_SafeArea_9lz9y_1"></div>
            <div className="Online-Store-UI-Preview__ShopFrame_pcixf">
         
              {url ? (
                <iframe
                ref={iframeRef}
                  src={url}
                  title="Online store preview"
                  className="_StaticIframe_14gz9_1 _visible_14gz9_22"
                  style={{ width: "100%", height: "100%", border: "none" }}
                  sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-modals allow-storage-access-by-user-activation"
                  onLoad={handleIframeLoad}
                />
              ) : (
                <Frame
                  initialContent={initialContent}
                  mountTarget="#__frameContent__"
                  className="_StaticIframe_14gz9_1 _visible_14gz9_22"
                  scrolling="auto"
                  sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-modals allow-storage-access-by-user-activation"
                  title="Online store preview"
                >
        
                </Frame>
              )}
           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}