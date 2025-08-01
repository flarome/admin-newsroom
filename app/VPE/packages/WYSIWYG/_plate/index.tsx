import "./styles/globals.css";
import "katex/dist/katex.min.css";

import { memo } from "react";
import { Toaster } from "sonner";
import { PlateEditor } from "./components/editor/plate-editor";
import Loading from "./loading";
import { ClientOnly } from "../../../../components/utils/client-only";

const App = () => {
  return (
    <>

     <ClientOnly
              fallback={
               
                  <Loading />
       
              }
            >
              {() => (
                <>
      <PlateEditor />

      <Toaster />
</>
            )} 
            </ClientOnly>
    </>
  );
};

export default memo(App);
