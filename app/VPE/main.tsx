import { styles as ThemeStyles } from "@VPE/styles/Theme";
import { getAppProviderClass } from "@VPE/styles/OnlineStore";

import { memo } from "react";

import { DesignSystemProvider, PropsProvider, type  VPEBase} from "@VPE/context";

import App from "@VPE/app";
import { useSafeId } from "@/lib";


const Main = (props: VPEBase) => {
  const uniqueId = useSafeId();
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
