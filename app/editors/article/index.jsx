// libs
import { useEffect, cloneElement } from "react";

// context
import { ArticleProvider, useArticle } from "./context/articleContext";

import { useFetcherWithPromise } from "../../utils/useFetcherWithPromise";

import { MetaobjectModalProvider } from "../../routes/metaobjects/context/ModalContext";
import { MetaobjectModal } from "../../routes/metaobjects/main";

// states
import App from "./states/app";

import './styles/main.css'


const Editor = ({ data, isDelete }) => {





  return (

    <MetaobjectModalProvider>
      <ArticleProvider data={data}>
        <App isDelete={isDelete} />
        
      </ArticleProvider>
      <MetaobjectModal />
    </MetaobjectModalProvider>

  );
};

export default Editor;
