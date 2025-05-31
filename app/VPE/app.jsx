// UI
import "./styles/addOn.css";
import "./styles/styles.css";
import "./styles/DesignSystemProvider.css";
import "./styles/main.css";
import "./styles/useShopPlan.css";
import "./styles/index.css";
import "./styles/Editor.css";

// Framework
import {
  useMemo,
  memo,
  useEffect,
  useState,
} from "react"

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

// ------ LAYOUT -------
function Layout({}) {
  const { mode } = usePreview();

  return (
    <>
      <div className="Online-Store-UI-Frame_1r70i">
        <header
          className="Online-Store-UI-Frame-HeaderArea_n7ivb"
          aria-label="Éditeur de boutique en ligne"
        >
          <div className="Online-Store-UI-SkipToAction_1cg49">
            <a
              href="#OSUI-SkipTarget"
              className="Online-Store-UI-SkipToAction__SkipAnchor_kdf0i"
            >
              Passer à la partie modification dans la barre latérale
            </a>
          </div>
          <Header />
        </header>

        <aside
          className={`Online-Store-UI-Frame-Sidebar_19zeo Online-Store-UI-Frame-Sidebar--aux_15227${mode === "full" ? " Online-Store-UI-Frame-Sidebar--hide_5bgp3" : ""}`}
        >
          <ActionBar />
        </aside>

        <aside
          className={`Online-Store-UI-Frame-Sidebar_19zeo${mode === "full" ? " Online-Store-UI-Frame-Sidebar--hide_5bgp3" : ""}`}
        >
          <Sidebar />
        </aside>
        <main className="Online-Store-UI-Frame-MainArea_h6r4w Online-Store-UI-Frame-MainArea--usesBottomSheet_1y3tx">
          <Preview />
        </main>
      </div>
    </>
  );
}



const App = memo(function App({ onReady, sections, settings, sectionsCatalog, settingsCatalog, onSectionsChange, onSettingsChange }) {
  useEffect(() => {
    onReady?.();
  }, [onReady]);
 
  return (
    <div key={JSON.stringify({sections, sectionsCatalog, settings, settingsCatalog})} >
    <SettingsProvider catalog={settingsCatalog} data={settings} onChange={onSettingsChange}>
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

const Main = memo(function Main({ open = true, sections, settings, sectionsCatalog, settingsCatalog, onSectionsChange, onSettingsChange, themes }) {
  const [alreadyOpen, setAlreadyOpen] = useState(false);

  if (!open && !alreadyOpen) return null;

  if (!alreadyOpen) {
    setAlreadyOpen(true);
  }
 

  return (
    <div data-cms="vpe">
        <DesignSystemProvider themes={themes}>
          <App sections={sections} settings={settings} sectionsCatalog={sectionsCatalog} settingsCatalog={settingsCatalog} onSectionsChange={onSectionsChange} onSettingsChange={onSettingsChange} />
        </DesignSystemProvider>
    </div>
  );
});

export default Main;
