// UI
import "./styles/addOn.css";
import "./styles/styles.css";
import "./styles/DesignSystemProvider.css";
import "./styles/main.css";
import "./styles/useShopPlan.css";
import "./styles/index.css";
import "./styles/Editor.css";

// Framework 
import { memo, useEffect } from "react";

// context
import { usePreview, PreviewProvider } from "./context/PreviewContext";
import { DesignSystemProvider } from "./context/DesignSystemContext";
import { SectionsProvider } from "./context/SectionsContext";
import { SettingsProvider } from "./context/SettingsContext";

// components
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Preview from "./components/Preview";
import ActionBar from "./components/ActionBar";

import { SECTIONS_CATALOG, SETTINGS_CATALOG } from "./test/data";
import { PropsProvider } from "./context/PropsContext";

import frameStyles from "./styles/Frame.module.css";
import SkipToActionStyles from "./styles/SkipToAction.module.css";
import getClassNameFactory from "../../lib/get-class-name-factory";
const getFrameClass = getClassNameFactory("Online-Store-UI-Frame", frameStyles);
const getFrameSidebarClass = getClassNameFactory(
  "Online-Store-UI-Frame-Sidebar",
  frameStyles,
);
const getFrameMainAreaClass = getClassNameFactory(
  "Online-Store-UI-Frame-MainArea",
  frameStyles,
);
const getSkipToActionStyles = getClassNameFactory(
  "Online-Store-UI-SkipToAction",
  SkipToActionStyles,
);
// ------ LAYOUT -------
function Layout({}) {
  const { mode } = usePreview();
  return (
    <>
      <div className={getFrameClass({})}>
        <header
          className={frameStyles["Online-Store-UI-Frame-HeaderArea"]}
          aria-label="Éditeur de boutique en ligne"
        >
          <div className={getSkipToActionStyles({ focused: false })}>
            <a
              href="#OSUI-SkipTarget"
              className={
                SkipToActionStyles["Online-Store-UI-SkipToAction__SkipAnchor"]
              }
            >
              Passer à la partie modification dans la barre latérale
            </a>
          </div>
          <Header />
        </header>

        <aside
          className={getFrameSidebarClass({ aux: true, hide: mode === "full" })}
        >
          <ActionBar />
        </aside>

        <aside className={getFrameSidebarClass({ hide: mode === "full" })}>
          <Sidebar />
        </aside>
        <main className={getFrameMainAreaClass({ usesBottomSheet: true })}>
          <Preview />
        </main>
      </div>
    </>
  );
}

const App = memo(function App({
  onReady,
  sections,
  settings,
  sectionsCatalog,
  settingsCatalog,
  onSectionsChange,
  onSettingsChange,
}) {
  useEffect(() => {
    onReady?.();
  }, [onReady]);

  return (
    <div
      key={JSON.stringify({
        sections,
        sectionsCatalog,
        settings,
        settingsCatalog,
      })}
    >
      <SettingsProvider
        catalog={settingsCatalog}
        data={settings}
        onChange={onSettingsChange}
      >
        <SectionsProvider
          catalog={sectionsCatalog}
          data={sections}
          onChange={onSectionsChange}
        >
          <PreviewProvider>
            <Layout />
          </PreviewProvider>
        </SectionsProvider>
      </SettingsProvider>
    </div>
  );
});

const Main = memo(function Main({
  sections = {},
  settings = {},
  sectionsCatalog = SECTIONS_CATALOG,
  settingsCatalog = SETTINGS_CATALOG,
  onSectionsChange = () => "",
  onSettingsChange = () => "",
  themes = [],
  ...props
}) {
  /* const [alreadyOpen, setAlreadyOpen] = useState(false);

  if (!open && !alreadyOpen) return null;

  if (!alreadyOpen) {
    setAlreadyOpen(true);
  }
 */

  return (
    <div data-cms="vpe">
      <PropsProvider {...props}>
        <DesignSystemProvider themes={themes}>
          <App
            sections={sections}
            settings={settings}
            sectionsCatalog={sectionsCatalog}
            settingsCatalog={settingsCatalog}
            onSectionsChange={onSectionsChange}
            onSettingsChange={onSettingsChange}
          />
        </DesignSystemProvider>
      </PropsProvider>
    </div>
  );
});

export default Main;
