import { styles as ThemeStyles } from "@VPE/styles/Theme";
import { AppProviderClass } from "@VPE/styles/OnlineStore";

import { memo, useState } from "react";

import { DesignSystemProvider, FeatureFlagsProvider, PropsProvider, type  VPEBase, UniqueIdProvider, KeyboardShortcutProvider, ViewportProvider} from "@VPE/contexts";

import App from "@VPE/app";
import { useSafeId } from "lib";;


const Main = (props: VPEBase) => { 
  const uniqueId = useSafeId();
  const [ref,setRef] = useState<HTMLDivElement | null>(null);

  return ( 
<>
      <div className={`${ThemeStyles["html"]} ${ThemeStyles["p-theme-light"]}`}>
        <div className={ThemeStyles["body"]}>
          <div id={`vpe-app-${uniqueId}`}>
            <div ref={setRef} className={AppProviderClass._({ dense: true })}>

<KeyboardShortcutProvider>
<FeatureFlagsProvider features={{denseUIEnabled: true}}>

<ViewportProvider>
<UniqueIdProvider>


              <PropsProvider {...props} id={uniqueId}>
                <DesignSystemProvider {...props}>
                  <App {...props} />
                </DesignSystemProvider>
              </PropsProvider>

              
              </UniqueIdProvider>
              </ViewportProvider>
              </FeatureFlagsProvider>
              </KeyboardShortcutProvider>
            </div>
          </div>
        </div>
      </div>
      </>
  );
};

export const VPE = memo(Main);
