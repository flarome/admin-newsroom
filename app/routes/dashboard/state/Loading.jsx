import React from "react";

const Loading = () => {
  return (
    <div className="_Skeleton_1lmrp_21 _WithTitleBar_1lmrp_27">
      <div
        className="Polaris-BlockStack"
        style={{
          "--pc-block-stack-inline-align": "center",
          "--pc-block-stack-order": "column",
          "--pc-block-stack-gap-xs": "var(--p-space-400)",
        }}
      >
        <div
          className="Polaris-Box"
          role="status"
          aria-label="Chargement de la page"
          style={{
            "--pc-box-max-width": "none",
            "--pc-box-padding-block-start-xs": "var(--p-space-0)",
            "--pc-box-padding-block-end-xs": "var(--p-space-0)",
            "--pc-box-padding-inline-start-sm": "var(--p-space-600)",
            "--pc-box-padding-inline-end-sm": "var(--p-space-600)",
            "--pc-box-width": "100%",
          }}
        >
          <div
            className="Polaris-BlockStack"
            style={{
              "--pc-block-stack-order": "column",
            }}
          >
            <div
              className="Polaris-Box"
              style={{
                "--pc-box-padding-block-start-xs": "var(--p-space-400)",
                "--pc-box-padding-block-start-md": "var(--p-space-500)",
                "--pc-box-padding-block-end-xs": "var(--p-space-400)",
                "--pc-box-padding-block-end-md": "var(--p-space-500)",
                "--pc-box-padding-inline-start-xs": "var(--p-space-400)",
                "--pc-box-padding-inline-start-sm": "var(--p-space-0)",
                "--pc-box-padding-inline-end-xs": "var(--p-space-400)",
                "--pc-box-padding-inline-end-sm": "var(--p-space-0)",
                "--pc-box-width": "100%",
              }}
            >
              <div
                className="Polaris-InlineStack"
                style={{
                  "--pc-inline-stack-align": "space-between",
                  "--pc-inline-stack-block-align": "center",
                  "--pc-inline-stack-wrap": "wrap",
                  "--pc-inline-stack-gap-xs": "var(--p-space-400)",
                  "--pc-inline-stack-flex-direction-xs": "row",
                }}
              >
                <div
                  className="Polaris-InlineStack"
                  style={{
                    "--pc-inline-stack-wrap": "wrap",
                    "--pc-inline-stack-gap-xs": "var(--p-space-400)",
                    "--pc-inline-stack-flex-direction-xs": "row",
                  }}
                >
                  <div
                    className="Polaris-Box"
                    style={{
                      "--pc-box-padding-block-start-xs": "var(--p-space-100)",
                      "--pc-box-padding-block-end-xs": "var(--p-space-100)",
                    }}
                  >
                    <div className="Polaris-SkeletonPage__SkeletonTitle">
                      <div
                        className="Polaris-Box"
                        style={{
                          "--pc-box-background": "var(--p-color-bg-fill-tertiary)",
                          "--pc-box-border-radius": "var(--p-border-radius-100)",
                          "--pc-box-min-height": "28px",
                          "--pc-box-min-width": "120px",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="Polaris-Box"
              style={{
                "--pc-box-padding-block-end-xs": "var(--p-space-200)",
                "--pc-box-width": "100%",
              }}
            >
              <div className="Polaris-Layout">
                <div className="Polaris-Layout__Section">
                  <div className="Polaris-LegacyCard">
                    <div className="_Tabs_63i8w_4">
                      <div className="_Tab_63i8w_4 _Tab-short_63i8w_15">
                        <div className="Polaris-SkeletonBodyText__SkeletonBodyTextContainer">
                          <div className="Polaris-SkeletonBodyText"></div>
                        </div>
                      </div>
                      <div className="_Tab_63i8w_4 _Tab-long_63i8w_19">
                        <div className="Polaris-SkeletonBodyText__SkeletonBodyTextContainer">
                          <div className="Polaris-SkeletonBodyText"></div>
                        </div>
                      </div>
                    </div>
                    <div className="Polaris-LegacyCard__Section Polaris-LegacyCard__LastSectionPadding">
                      <div className="Polaris-Labelled--hidden Polaris-Labelled--disabled">
                        <div className="Polaris-Connected">
                          <div className="Polaris-Connected__Item">
                            <div className="_FilterButton_1me89_8" aria-hidden="true">
                              <button className="Polaris-Button Polaris-Button--pressable Polaris-Button--variantSecondary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter Polaris-Button--fullWidth Polaris-Button--disabled" aria-disabled="true" type="button" tabIndex="-1"></button>
                            </div>
                          </div>
                          <div className="Polaris-Connected__Item Polaris-Connected__Item--primary">
                            <div className="Polaris-TextField Polaris-TextField--disabled">
                              <input id=":rn:" disabled placeholder="" autoComplete="off" className="Polaris-TextField__Input" type="text" aria-labelledby=":rn:Label" aria-invalid="false" data-1p-ignore="true" data-lpignore="true" data-form-type="other" value="" />
                              <div className="Polaris-TextField__Backdrop"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="_IndexTableContent_1me89_1">
                        <span className="Polaris-Spinner Polaris-Spinner--sizeLarge">
                          <svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.542 1.487A21.507 21.507 0 00.5 22c0 11.874 9.626 21.5 21.5 21.5 9.847 0 18.364-6.675 20.809-16.072a1.5 1.5 0 00-2.904-.756C37.803 34.755 30.473 40.5 22 40.5 11.783 40.5 3.5 32.217 3.5 22c0-8.137 5.3-15.247 12.942-17.65a1.5 1.5 0 10-.9-2.863z"></path>
                          </svg>
                        </span>
                        <span role="status">
                          <span className="Polaris-Text--root Polaris-Text--visuallyHidden"></span>
                        </span>
                      </div>
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

export default Loading;
