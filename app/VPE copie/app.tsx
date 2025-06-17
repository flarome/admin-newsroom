import appStyles from './styles/app.module.css';
import './styles/globals.css';

import App from './src';
import { ClientOnly } from '../components/utils/client-only';
import Loading from 'loading';
import { cn } from '@/lib/utils';
import { memo } from 'react';

type ModeType = 'PAGE' | 'EMBEDDED';

interface UIConfig {
  mode: ModeType;
  height?: string;
}

interface MainProps {
  config?: Record<string, any>;
  ui?: UIConfig;
}

const Main = ({ config = {}, ui = { mode: 'PAGE' } }: MainProps) => {
  return (
    <div data-cms="vpe">
      <div className={cn(ui.mode === 'PAGE' ? 'h-screen' : 'h-full', 'w-full')}>
      <div className={appStyles.page} style={{ height: ui.mode === 'PAGE' ? '100%' : ui.height ?? '100%' }}>
        <div className={appStyles.root}>
          <div className={appStyles.container}>
            <ClientOnly
              fallback={
                <div className={appStyles.spinner}>
                  <Loading />
                </div>
              }
            >
              {() => (
               <div className={appStyles.section}>
                    <div className="h-full">

                  <App  />
                  </div>
                </div>
              )}
            </ClientOnly>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};





export default memo(Main);