import React from "react";

import { getArticleInfo } from "../../modules/getInfo";

/**
 * Composant pour afficher une liste d'articles en colonne unique
 * @param {Object[]} articles - Liste des articles
 * @param {Function} EditArticle - Fonction appelée lorsque l'utilisateur clique sur un article
 */
const Articles = ({ articles, selectedArticles, setSelectedArticles, hasSelected, EditArticle }) => {
  const toggleSelectArticle = id => {
    const newSelectedArticles = new Set(selectedArticles);
    if (newSelectedArticles.has(id)) {
      newSelectedArticles.delete(id);
    } else {
      newSelectedArticles.add(id);
    }
    setSelectedArticles(newSelectedArticles);
  };

  return (
    <ul className={`Polaris-ResourceList${hasSelected ? " Polaris-ResourceList--disableTextSelection" : ""}`} aria-live="polite" aria-busy="false">
      {articles.map((article, index) => {
        const { title, mainImageScare, mainImageAlt, isPublished, id, splitId, lastModifiedText } = getArticleInfo(["title", "downloadsAllsMedia", "handle", "date", "mainImage", "content", "tags", "template", "isPublished", "id", "modified"], article, "fr-FR", 50);
        const isSelected = selectedArticles.has(id);

        return (
          <li key={splitId} onClick={() => EditArticle(id)} className={`Polaris-ResourceItem__ListItem Polaris-ResourceItem--hasBulkActions${isSelected ? " Polaris-ResourceItem--selected " : ""}Polaris-ResourceItem--selectable`}>
            <div className="Polaris-ResourceItem__ItemWrapper">
              <div className={`Polaris-ResourceItem${isSelected ? " Polaris-ResourceItem--selected " : ""}Polaris-ResourceItem--selectable`}>
                <div
                  className="Polaris-Box"
                  style={{
                    "--pc-box-padding-block-start-xs": "var(--p-space-300)",
                    "--pc-box-padding-block-end-xs": "var(--p-space-300)",
                    "--pc-box-padding-inline-start-xs": "var(--p-space-300)",
                    "--pc-box-padding-inline-end-xs": "var(--p-space-300)",
                    position: "relative",
                    zIndex: "var(--pc-resource-item-content-stacking-order)",
                  }}
                >
                  <div
                    className="Polaris-InlineGrid"
                    style={{
                      "--pc-inline-grid-grid-template-columns-xs": "1fr auto",
                    }}
                  >
                    <div
                      className="Polaris-InlineGrid"
                      style={{
                        "--pc-inline-grid-grid-template-columns-xs": "auto 1fr",
                        "--pc-inline-grid-gap-xs": "var(--p-space-300)",
                      }}
                    >
                      <div
                        className="Polaris-InlineStack"
                        style={{
                          "--pc-inline-stack-block-align": "center",
                          "--pc-inline-stack-wrap": "wrap",
                          "--pc-inline-stack-gap-xs": "var(--p-space-300)",
                          "--pc-inline-stack-flex-direction-xs": "row",
                        }}
                      >
                        <div className="Polaris-ResourceItem__CheckboxWrapper">
                          <label
                            className="Polaris-Choice Polaris-Choice--labelHidden Polaris-Checkbox__ChoiceLabel"
                            htmlFor=":r1im:"
                            style={{
                              "--pc-choice-bleed-block-end-xs": "var(--p-space-300)",
                              "--pc-choice-bleed-block-start-xs": "var(--p-space-300)",
                              "--pc-choice-bleed-inline-start-xs": "var(--p-space-300)",
                              "--pc-choice-bleed-inline-end-xs": "var(--p-space-300)",
                              "--pc-choice-fill-xs": "100%",
                            }}
                          >
                            <span className="Polaris-Choice__Control">
                              <span className="Polaris-Checkbox">
                                <input
                                  className="Polaris-Checkbox__Input"
                                  type="checkbox"
                                  checked={isSelected}
                                  onClick={e => {
                                    e.stopPropagation(); // Stopper la propagation pour ne pas affecter le clic global
                                  }}
                                  onChange={e => {
                                    toggleSelectArticle(id);
                                  }}
                                />
                                <span className="Polaris-Checkbox__Backdrop"></span>
                                <span className="Polaris-Checkbox__Icon Polaris-Checkbox--animated">
                                  <svg viewBox="0 0 16 16" shapeRendering="geometricPrecision" textRendering="geometricPrecision">
                                    <path className="Polaris-Checkbox--checked" d="M1.5,5.5L3.44655,8.22517C3.72862,8.62007,4.30578,8.64717,4.62362,8.28044L10.5,1.5" transform="translate(2 2.980376)" opacity="0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" pathLength="1"></path>
                                  </svg>
                                </span>
                              </span>
                            </span>
                            <span className="Polaris-Choice__Label">
                              <span className="Polaris-Text--root Polaris-Text--bodyMd">Afficher les détails</span>
                            </span>
                          </label>
                        </div>

                        {mainImageScare ? (
                          <span className="Polaris-Thumbnail Polaris-Thumbnail--sizeLarge">
                            <img alt={mainImageAlt} src={mainImageScare} />
                          </span>
                        ) : (
                          <div className="PCdp6 O3SI5">
                            <svg viewBox="0 0 20 20" className="mGpXg SwMUh">
                              <path d="M12.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                              <path fillRule="evenodd" d="M9.018 3.5h1.964c.813 0 1.469 0 2 .043.546.045 1.026.14 1.47.366a3.75 3.75 0 0 1 1.64 1.639c.226.444.32.924.365 1.47.043.531.043 1.187.043 2v1.964c0 .813 0 1.469-.043 2-.045.546-.14 1.026-.366 1.47a3.75 3.75 0 0 1-1.639 1.64c-.444.226-.924.32-1.47.365-.531.043-1.187.043-2 .043h-1.964c-.813 0-1.469 0-2-.043-.546-.045-1.026-.14-1.47-.366a3.75 3.75 0 0 1-1.64-1.639c-.226-.444-.32-.924-.365-1.47-.043-.531-.043-1.187-.043-2v-1.964c0-.813 0-1.469.043-2 .045-.546.14-1.026.366-1.47a3.75 3.75 0 0 1 1.639-1.64c.444-.226.924-.32 1.47-.365.531-.043 1.187-.043 2-.043Zm-1.877 1.538c-.454.037-.715.107-.912.207a2.25 2.25 0 0 0-.984.984c-.1.197-.17.458-.207.912-.037.462-.038 1.057-.038 1.909v1.428l.723-.867a1.75 1.75 0 0 1 2.582-.117l2.695 2.695 1.18-1.18a1.75 1.75 0 0 1 2.604.145l.216.27v-2.374c0-.852 0-1.447-.038-1.91-.037-.453-.107-.714-.207-.911a2.25 2.25 0 0 0-.984-.984c-.197-.1-.458-.17-.912-.207-.462-.037-1.056-.038-1.909-.038h-1.9c-.852 0-1.447 0-1.91.038-.453-.037-.714-.107-.911-.207a2.25 2.25 0 0 1-.984-.984c-.1-.197-.17-.458-.207-.912Z"></path>
                            </svg>
                          </div>
                        )}
                      </div>
                      <div
                        className="Polaris-InlineStack"
                        style={{
                          "--pc-inline-stack-block-align": "start",
                          "--pc-inline-stack-wrap": "wrap",
                          "--pc-inline-stack-flex-direction-xs": "row",
                        }}
                      >
                        <div
                          className="Polaris-Box"
                          style={{
                            "--pc-box-padding-block-start-xs": "var(--p-space-0)",
                            "--pc-box-padding-block-end-xs": "var(--p-space-0)",
                            "--pc-box-padding-inline-start-xs": "var(--p-space-0)",
                            "--pc-box-padding-inline-end-xs": "var(--p-space-0)",
                            "--pc-box-width": "100%",
                          }}
                        >
                          <div className="Polaris-BlockStack" style={{ "--pc-block-stack-order": "column" }}>
                            <div
                              className="Polaris-InlineStack"
                              style={{
                                "--pc-inline-stack-wrap": "wrap",
                                "--pc-inline-stack-gap-xs": "var(--p-space-100)",
                                "--pc-inline-stack-flex-direction-xs": "row",
                              }}
                            >
                              <h3 className="Polaris-Text--root Polaris-Text--bodyMd Polaris-Text--semibold" tabIndex="-1">
                                {title}
                              </h3>

                              {!isPublished && (
                                <span className="Polaris-Badge Polaris-Badge--toneInfo">
                                  <span className="Polaris-Text--root Polaris-Text--visuallyHidden">Informations</span>
                                  <span className="Polaris-Text--root Polaris-Text--bodySm">Masqué</span>
                                </span>
                              )}
                            </div>
                            <span className="Polaris-Text--root Polaris-Text--bodyMd Polaris-Text--breakAlways Polaris-Text--subdued">Dernière édition : {lastModifiedText}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Articles;
