import { useSections } from "../context/SectionsContext";
import { useDesignSystem } from "../context/DesignSystemContext";

import Sections from "./Sections";
import Settings from "./Settings";

export default function Sidebar() {
  const { panel } = useDesignSystem();

  return (
    <div className="Online-Store-UI-Frame-PanelArea_coe3f">
      <a id="OSUI-SkipTarget" tabIndex="-1"></a>

      {panel === "sections" ? <Sections /> : panel === "settings" ? <Settings /> : (<div></div>)}
    </div>
  );
}
