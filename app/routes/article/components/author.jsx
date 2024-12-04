import React, { useState, useEffect, useMemo, useRef } from "react";
import { Popover } from "react-tiny-popover";

import { authorAutocomplete } from "../../modules/api";


const Author = ({ author, setAuthor }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Etat pour ouvrir/fermer le modal pour l'image principale
  const [isLoading, setIsLoading] = useState(false);
  const [allAuthor, setAllAuthor] = useState([]);
  const [isCH, setCH] = useState(false);

  const refElement = useRef(null); // Référence à l'élément parent
  const [popoverWidth, setPopoverWidth] = useState(0);
  useEffect(() => {
    const updatePopoverWidth = () => {
      if (refElement.current) {
        setPopoverWidth(refElement.current.offsetWidth);
      }
    };
  
    // Utiliser ResizeObserver pour observer les changements de taille de l'élément
    const resizeObserver = new ResizeObserver(updatePopoverWidth);
  
    // On copie la référence dans une variable pour éviter les problèmes avec le nettoyage
    const refCurrent = refElement.current;
  
    if (refCurrent) {
      resizeObserver.observe(refCurrent);
    }
  
    // Nettoyer l'observateur à la destruction du composant
    return () => {
      if (refCurrent) {
        resizeObserver.unobserve(refCurrent);
      }
    };
  }, []); // [] car l'observateur reste actif sans redéclencher l'effet
  
  const handleAuthor = () => {
    setIsModalOpen(true);

    async function loadAuthor() {
      try {
        if (!isCH) {
          setIsLoading(true);
          const authors = await authorAutocomplete({ first: 250 });

          // Mise à jour des états
          setCH(true);
          setAllAuthor(authors);

        }
      } catch (error) {
        console.error("Erreur lors du chargement des auteurs :", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadAuthor();
  };

  const filteredAuthor = useMemo(() => {
    return allAuthor.filter(author1 => {
      return author === "" || (author1.toLowerCase().trim().includes(author.toLowerCase().trim()) && author1.trim() !== author.trim());
    });
  }, [author, allAuthor]);

  return (
    <div>
      <h2 className="Polaris-Text--root Polaris-Text--headingMd Polaris-Text--semibold" tabIndex="-1">
        Organisation
      </h2>
      <div
        className="Polaris-BlockStack"
        style={{
          "--pc-block-stack-order": "column",
          "--pc-block-stack-gap-xs": "var(--p-space-400)",
        }}
      >
        <div className="Polaris-FormLayout__Item Polaris-FormLayout--grouped">
          <div>
            <div>
              <div>
                <div className="Polaris-Labelled__LabelWrapper Polaris-Labelled--animated">
                  <div className="Polaris-Label">
                    <label id="authorLabel" htmlFor="authorInput" className="Polaris-Label__Text">
                      <span className="Polaris-Text--root Polaris-Text--bodyMd">Auteur</span>
                    </label>
                  </div>
                </div>

                <div className="Polaris-Connected">
                  <div className={`Polaris-Connected__Item Polaris-Connected__Item--primary${isFocused ? " Polaris-Connected__Item--focused" : ""}`}>
                    <div ref={refElement} className={`Polaris-TextField${author.length > 0 ? " Polaris-TextField--hasValue" : ""}${isFocused ? " Polaris-TextField--focus" : ""}`}>
                      <Popover
                        isOpen={isModalOpen}
                        positions={["bottom", "top", "left", "right"]} // preferred positions by priority
                        containerClassName="p-theme-light Polaris-ThemeProvider--themeContainer"
                        onClickOutside={() => {
                          setIsModalOpen(false);
                          setIsFocused(false);
                        }}
                        reposition={false} // prevents automatic readjustment of content position that keeps your popover content within its parent's bounds
                        content={
                          <div style={{ width: popoverWidth }} className="Polaris-Popover Polaris-Popover--fullWidth">
                            <div className="Polaris-Popover__ContentContainer">
                              <div className="Polaris-Popover__Content">
                                <div className="Polaris-Popover__Pane Polaris-Scrollable Polaris-Scrollable--vertical Polaris-Scrollable--horizontal Polaris-Scrollable--scrollbarWidthThin">
                                  <div aria-expanded={true}>
                                    {isLoading ? (
                                      <div className="QfILU">
                                        <span className="Polaris-Spinner Polaris-Spinner--sizeSmall">
                                          <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.229 1.173a9.25 9.25 0 1011.655 11.412 1.25 1.25 0 10-2.4-.698 6.75 6.75 0 11-8.506-8.329 1.25 1.25 0 10-.75-2.385z"></path>
                                          </svg>
                                        </span>
                                        <span role="status">
                                          <span className="Polaris-Text--root Polaris-Text--visuallyHidden">Chargement des Auteurs en cours</span>
                                        </span>
                                      </div>
                                    ) : (
                                      <div>
                                        {filteredAuthor && filteredAuthor.length > 0 && (
                                          <div className="KeC30">
                                            <ul
                                              className="Polaris-Box Polaris-Box--listReset"
                                              style={{
                                                "--pc-box-padding-block-start-xs": "var(--p-space-150)",
                                                "--pc-box-padding-block-end-xs": "var(--p-space-150)",
                                                "--pc-box-padding-inline-start-xs": "var(--p-space-150)",
                                                "--pc-box-padding-inline-end-xs": "var(--p-space-150)",
                                              }}
                                            >
                                              <li
                                                className="Polaris-Box"
                                                style={{
                                                  "--pc-box-padding-block-start-xs": `var(--p-space-0)`,
                                                }}
                                              >
                                                <div
                                                  className="Polaris-BlockStack"
                                                  style={{
                                                    "--pc-block-stack-order": "column",
                                                  }}
                                                >
                                                  <ul className="Polaris-Box Polaris-Box--listReset">
                                                    {filteredAuthor.map((author1, index) => {
                                                      return (
                                                        <li key={index} className="Polaris-OptionList-Option" tabIndex={-1}>
                                                          <button onClick={e => setAuthor(author1)} type="button" className="Polaris-OptionList-Option__SingleSelectOption" aria-pressed="false">
                                                            <div
                                                              className="Polaris-InlineStack"
                                                              style={{
                                                                "--pc-inline-stack-block-align": "start",
                                                                "--pc-inline-stack-wrap": "nowrap",
                                                                "--pc-inline-stack-flex-direction-xs": "row",
                                                              }}
                                                            >
                                                              {author1}
                                                            </div>
                                                          </button>
                                                        </li>
                                                      );
                                                    })}
                                                  </ul>
                                                </div>
                                              </li>
                                            </ul>
                                          </div>
                                        )}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        }
                      >
                        <input
                          id="authorInput"
                          onFocus={() => {
                            handleAuthor();

                            setIsFocused(true);
                          }}
                          autoComplete="off"
                          className="Polaris-TextField__Input"
                          maxLength="255"
                          type="text"
                          aria-labelledby="authorLabel"
                          aria-invalid="false"
                          data-1p-ignore="true"
                          data-lpignore="true"
                          data-form-type="other"
                          value={author}
                          onChange={e => setAuthor(e.target.value)}
                          aria-autocomplete="list"
                          role="combobox"
                          autoCapitalize="off"
                          aria-expanded="false"
                          aria-controls="Autocomplete6-disclosure"
                          tabIndex="0"
                          data-state="closed"
                        />
                      </Popover>
                      <div className="Polaris-TextField__Backdrop"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Author;
