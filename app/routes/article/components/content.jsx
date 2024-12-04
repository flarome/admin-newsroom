import React from "react";
import EditorText from "../../components/Editor";

const Content = ({ content, setContent  }) => {

  return (
    <div className="Polaris-FormLayout__Item Polaris-FormLayout--grouped">
    <div className="Polaris-Labelled__LabelWrapper">
      <div className="Polaris-Label">
        <label className="Polaris-Label__Text">
          <span className="Polaris-Text--root Polaris-Text--bodyMd">Contenu</span>
        </label>
      </div>
    </div>

    <div className="v7Z1h">
      <EditorText content={content} setContent={setContent} />
    </div>
  </div>
  );
};

export default Content;
