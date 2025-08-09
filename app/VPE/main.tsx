import { styles as ThemeStyles } from "@VPE/styles/Theme";
import { AppProviderClass } from "@VPE/styles/OnlineStore";

import { memo, useState } from "react";

import {ShortcutProvider} from '@shopify/react-shortcuts'
import { DesignSystemProvider, FeatureFlagsProvider, PropsProvider, type  VPEBase, UniqueIdProvider, ViewportProvider, LayoutRefsProvider} from "@VPE/contexts";

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

<ShortcutProvider>
<FeatureFlagsProvider features={{denseUIEnabled: true}}>

<ViewportProvider>
<UniqueIdProvider>


<LayoutRefsProvider>


              <PropsProvider {...props} id={uniqueId}>
                <DesignSystemProvider {...props}>
                  <App {...props} />
                </DesignSystemProvider>
              </PropsProvider>

              

</LayoutRefsProvider>


              </UniqueIdProvider>
              </ViewportProvider>
              </FeatureFlagsProvider>
              </ShortcutProvider>
            </div>
          </div>
        </div>
      </div>
      </>
  );
};

export const VPE = memo(Main);
