// context
import { ArticleProvider } from "./context/articleContext";

// states
import App from "./app";

import "./styles/main.css";
import "./styles/render.css";

const Editor = ({ data, isDelete }) => {
  return (
    <div data-cms="index">
      <ArticleProvider data={data}>
        <App isDelete={isDelete} />
      </ArticleProvider>
    </div>
  );
};

export default Editor;
