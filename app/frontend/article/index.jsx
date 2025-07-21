import { FormProviderWrapper } from "../../modules/form";
import { ArticleProvider, useArticle } from "./context/articleContext";
import { DeleteModalProvider } from "./context/deleteContext";
import GlobalApp from "../../"; 

import "./styles/main.css";
import "./styles/render.css";

export const Wrapper = ({ children, data, ...props }) => (
    <div data-cms="index"> 
         <ArticleProvider data={data}>
        <App {...props}>
          {children}
        </App>
        </ArticleProvider>
    </div>
  );

const App = ({ children, isDelete }) => {
  const { form } = useArticle(); 

  return (
    <FormProviderWrapper initialData={form}>
      <DeleteModalProvider isDelete={isDelete}>
        {children}
      </DeleteModalProvider>
    </FormProviderWrapper>
  );
};

