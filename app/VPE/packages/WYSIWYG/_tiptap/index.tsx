
import "./styles/globals.css";

import { memo } from "react";
import {NotionEditor } from "./components/tiptap-templates/notion-like/notion-like-editor";


const App = (props: any) => {
  return (
  
    <NotionEditor room="my-document-room" placeholder="Start writing..." />

  );
};

export default memo(App);
