

import './styles/reset.css';
import './styles/app.css';
import './styles/PolarisFixe.css';
import './styles/DesignSystemProvider.css';
import { styles as ThemeStyles } from 'styles/Theme';
import { getAppProviderClass } from 'styles/OnlineStore';

import { memo, useId } from 'react';

import { DesignSystemProvider } from './context/DesignSystemContext';
import { PropsProvider } from 'context/PropsContext';

import App from './app' 

const Main = (props) => {

  const uniqueId =  useId();

  return (
    <div data-cms="vpe">
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