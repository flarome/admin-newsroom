import { memo, useEffect, useState } from "react";
import { VPE } from ".";
import GlobalApp from "../";
import { PolarisBridge } from "../polaris";

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

  return (
    <PolarisBridge>
      <VPE {...dataFromParent} />
    </PolarisBridge>
  );
};

const Route = () => (
  <GlobalApp>
    <Layout />
  </GlobalApp>
);

export default memo(Route);
