import { styles as EditorStyles } from "@VPE/styles/Editor";
import { styles as LoadingStyles } from "@VPE/styles/Loading";
import {
  getFrameSidebarClass,
  getFrameMainAreaClass,
  getSkipToActionClass,
  getPreviewClass,
  getFrameClass,
  styles as OnlineStoreStyles,
} from "@VPE/styles/OnlineStore";

import { memo } from "react";

import { useAppStore } from "@VPE/store";
import { usePropsContext } from "@VPE/context";


import {
  SkeletonHeader,
  SkeletonActionsBar,
  SkeletonPanelArea,
  Header,
  ActionsBar,
  PanelArea,
  SkeletonEditor,
  Editor
} from "./components/index";

const Loading = () => (
  <div className={LoadingStyles["Frame"]}>
    <div className={LoadingStyles["Header"]}>
      <SkeletonHeader />
    </div>

    <div className={LoadingStyles["PrimaryAuxSidebar"]}>
      <SkeletonActionsBar />
    </div>

    <div className={LoadingStyles["PrimarySidebar"]}>
      <SkeletonPanelArea />
    </div>

    <SkeletonEditor />
  </div>
);

const LayoutInner = () => {
  const zoomConfig = useAppStore((s) => s.zoomConfig);
 // const [canRenderEditor, setCanRenderEditor] = useState(false);

 /* // On attend que le layout soit monté (hors Editor)
  useEffect(() => {
    setStatus("READY"); // Tout est prêt sauf l'éditeur
    setCanRenderEditor(true); // On débloque le rendu de l'éditeur
  }, []);*/

  const { id } = usePropsContext();
  const skipTargetId = `OSUI-SkipTarget-${id}`;

  return (
    <div className={getFrameClass({})}>
      <header
        className={OnlineStoreStyles["Online-Store-UI-Frame-HeaderArea"]}
        aria-label="Éditeur de l'article de blog"
      >
        <div className={getSkipToActionClass({ focused: false })}>
          <a href={`#${skipTargetId}`}
            className={
              OnlineStoreStyles["Online-Store-UI-SkipToAction__SkipAnchor"]
            }
          >
            Passer à la partie modification dans la barre latérale
          </a>
        </div>

        <Header />
      </header>

      <aside
        className={getFrameSidebarClass({
          aux: true,
          hide: zoomConfig === "FULLSCREEN",
        })}
      >
        <ActionsBar />
      </aside>

      <aside
        className={getFrameSidebarClass({ hide: zoomConfig === "FULLSCREEN" })}
      >
        <PanelArea skipTargetId={skipTargetId} />
      </aside>

      <main className={getFrameMainAreaClass({ usesBottomSheet: true })}>
        <Editor /*canRenderEditor={canRenderEditor}*/ />
      </main>
    </div>
  );
};

const Layout = memo(LayoutInner);

const App = (props: any) => {
 const status = useAppStore((s) => s.status);

  return (
    <>
      {status === "LOADING" && <Loading />}
      <div style={{ display: status === "LOADING" ? "none" : "block" }}>
        <Layout />
      </div>
    </>
  );
};

export default memo(App);
 