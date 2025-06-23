

import './styles/reset.css';
import './styles/app.css';
import './styles/PolarisFixe.css';
import './styles/DesignSystemProvider.css';
import { styles as ThemeStyles } from 'styles/Theme';
import { getAppProviderClass } from 'styles/OnlineStore';

import { memo, useId } from 'react';

import { DesignSystemProvider } from './context/DesignSystemContext';
import { PropsProvider, VPEProps } from 'context/PropsContext';

import App from './app' 
import { globalAppI18n } from '..';

const Main = (props: VPEProps) => {

  const uniqueId =  useId();
 
  const i18n = globalAppI18n.useI18nStore((s) => s.i18n);
  return (
    <div data-cms="vpe"> 

      <p>{i18n.translate("test")}</p>
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
    </div>
  );
};

export default memo(Main);