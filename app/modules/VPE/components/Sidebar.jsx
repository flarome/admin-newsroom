import { useDesignSystem } from "../context/DesignSystemContext";

import Sections from "./Sections";
import Settings from "./Settings";

import frameStyles from "../styles/Frame.module.css";

export default function Sidebar() {
  const { panel } = useDesignSystem();

  return (
    <div className={frameStyles["Online-Store-UI-Frame-PanelArea"]}>
      <a id="OSUI-SkipTarget" tabIndex="-1"></a>

      {panel === "sections" ? <Sections /> : panel === "settings" ? <Settings /> : (<div></div>)}
    </div>
  );
}
