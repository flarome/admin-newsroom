import "./styles/reset.css";
import appStyles from "./styles/app.module.css";



import { memo } from "react";
// import App from "./_blocknote";
//import App from "./_plate";
//import App from "./_tiptap"; 

import App from "./_tiptap-simple"
/*
import { PropsProvider } from "./_plate/context/PropsContext";
import { EditorProps } from "./_plate/context/PropsContext";
import { EditorContextProvider } from "./_plate/context/EditorContext";*/


import { usePropsContext } from "@VPE/contexts/PropsContext";



const Page = () => {


  const {root} = usePropsContext();

  return (



 <div data-cms="editor">
    <div className={appStyles.inner}>
      <div
        className={appStyles.page}
        style={{
          minHeight: 
            root.mode === "VPE" ? undefined : (root.minHeight ?? undefined),
          maxHeight:
            root.mode === "VPE" ? undefined : (root.maxHeight ?? undefined),
          height: root.mode === "VPE" ? "100%" : (root.height ?? "100%"),
        }}
      >
        <div className={appStyles.root}>
          <div className={appStyles.container}>
           
                <div className={appStyles.section}>


    <App /> 


    {/*
      <PropsProvider {...editorProps}>
                      <EditorContextProvider {...editorProps}>

                        <App {...editorProps} /> 
                      
                    
                      </EditorContextProvider>
                    </PropsProvider>
    
    
    */}
                  


                </div>
        
          </div>
        </div>
      </div>
    </div>
  </div>
); 
}
 
 
export default memo(Page);
