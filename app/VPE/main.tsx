import { styles as ThemeStyles } from "styles/Theme";
import { getAppProviderClass } from "styles/OnlineStore";

import { memo, useId } from "react";

import { DesignSystemProvider } from "./context/DesignSystemContext";
import { PropsProvider, VPEBase } from "context/PropsContext";

import App from "./app";


const Main = (props: VPEBase) => {
  const uniqueId = useId();
  return ( 
<>
      <div className={`${ThemeStyles["html"]} ${ThemeStyles["p-theme-light"]}`}>
        <div className={ThemeStyles["body"]}>
          <div id={`vpe-app-${uniqueId}`}>
            <div className={getAppProviderClass({ dense: true })}>
              <PropsProvider {...props} id={uniqueId}>
                <DesignSystemProvider {...props}>
                  <App {...props} />
                </DesignSystemProvider>
              </PropsProvider>
            </div>
          </div>
        </div>
      </div>
      </>
  );
};

export const VPE = memo(Main);
