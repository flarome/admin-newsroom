import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote, useEditorChange, useEditorSelectionChange, createReactBlockSpec } from "@blocknote/react";
import { ClientOnly } from "components/utils/client-only";
import { memo } from "react";

const B = () => {
   const editor = useCreateBlockNote({
    
      

   });

   // Ecoute fine des changements
  useEditorChange((editor, ctx) => {
    const changes = ctx.getChanges();
    console.log("changes", changes);
  }, editor);

    // Ecoute des changements de sélection
  useEditorSelectionChange(() => {
    const selection = editor.getSelection(); // { anchor: {...}, focus: {...} }
    console.log("Sélection changée :", selection);
  }, editor);
   
  return (
<BlockNoteView editor={editor}  />
  )
}


const App = () => {
  return (
    <>

        <ClientOnly
              fallback={
               
          <></>
       
              }
            >
              {() => (
                <>
      <B />
</>
            )} 
            </ClientOnly>
    </>
  );
};

export default memo(App);
