
import "./styles/globals.css";

import { memo } from "react";
import { SimpleEditor } from "./components/tiptap-templates/simple/simple-editor";
import { ClientOnly } from "components/utils/client-only";
const App = (props: any) => {
  return (
  
         <ClientOnly
                  fallback={
                   
              <></>
           
                  }
                >
                  {() => (
                    <>
         <SimpleEditor  />
    </>
                )} 
                </ClientOnly>
   

  );
};

export default memo(App);
 