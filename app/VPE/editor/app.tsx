import "katex/dist/katex.min.css";

import { memo } from "react";
import { Toaster } from "sonner";
import { PlateEditor } from "./components/editor/plate-editor";

const App = (props: any) => {
  return (
    <>
      <PlateEditor />

      <Toaster />
    </>
  );
};

export default memo(App);
