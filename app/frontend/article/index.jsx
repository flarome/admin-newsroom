import { FormProviderWrapper } from "../../modules/form";
import { ArticleProvider, useArticle } from "./context/articleContext";
import { DeleteModalProvider } from "./context/deleteContext";
import GlobalApp from "../../"; 

import "./styles/main.css";
import "./styles/render.css";

import {GraphQL} from 'graphql/GraphQL';

export const Wrapper = ({ children, data, ...props }) => (
<GraphQL>
    <div data-cms="index"> 
         <ArticleProvider data={data}>
        <App {...props}>
          {children}
        </App>
        </ArticleProvider>
    </div>
    </GraphQL>
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

