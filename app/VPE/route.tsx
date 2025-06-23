import { memo, useEffect, useState } from "react";
import { VPE } from ".";
import GlobalApp from "../";

// @ts-ignore
import DesignSystemProviderStyles from "./styles/DesignSystemProvider.css?url";
// @ts-ignore
import MainStyles from "./styles/Main.css?url"; 

export const links = [
  { rel: "stylesheet", href: DesignSystemProviderStyles },
  { rel: "stylesheet", href: MainStyles },
];

const Layout = () => {
  const [dataFromParent, setDataFromParent] = useState(null);

  // Écoute le message postMessage du parent
  useEffect(() => {
    function handleMessageFromMainApp(ev) {
      console.log("Message received in modal:", ev.data);
      if (ev.data?.type === "EDITOR_INIT") {
        setDataFromParent(ev.data.payload);
      }
    }

    window.addEventListener("message", handleMessageFromMainApp);
    return () => {
      window.removeEventListener("message", handleMessageFromMainApp);
    };
  }, []);

  return <VPE {...dataFromParent} />;
};

const RouteInner = () => (
  <div data-cms="vpe">
    <GlobalApp>
      <Layout />
    </GlobalApp>
  </div>
);

export const Route = memo(RouteInner);
