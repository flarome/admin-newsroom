import { Toaster } from 'sonner';

import { PlateEditor } from '@/components/editor/plate-editor';

import "katex/dist/katex.min.css";
import { memo } from 'react';
import { PropsProvider } from './context/PropsContext';

import OnlineStoreStyles from "../styles/OnlineStore.module.css";

import getClassNameFactory from '../../lib/get-class-name-factory';

const getFrameClass = getClassNameFactory("Online-Store-UI-Frame", OnlineStoreStyles);

const getFrameSidebarClass = getClassNameFactory(
  "Online-Store-UI-Frame-Sidebar",
  OnlineStoreStyles,
);
const getFrameMainAreaClass = getClassNameFactory(
  "Online-Store-UI-Frame-MainArea",
  OnlineStoreStyles,
);
const getSkipToActionStyles = getClassNameFactory(
  "Online-Store-UI-SkipToAction",
  OnlineStoreStyles,
);



const Page = (props) => {
  return (

        <PropsProvider {...props}>
 <div className={getFrameClass({})}>
      <PlateEditor />

      <Toaster />
      </div>
</PropsProvider>
  );
} 

export default memo(Page)


