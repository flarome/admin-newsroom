import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

const ActionsModal = ({ isModalOpen, onRequestClose, actions, targetRef, offset = { bottom: 10, right: 1 } }) => {
    const [position, setPosition] = useState({ top: 0, right: 0 });
  
    useEffect(() => {
      if (isModalOpen && targetRef?.current) {
        const targetRect = targetRef.current.getBoundingClientRect();
  
        setPosition({
          top: targetRect.bottom + offset.bottom, // Bas de l'élément + décalage
          right: window.innerWidth - targetRect.right + offset.right, // Distance par rapport à la droite de l'écran
        });
      }
    }, [isModalOpen, targetRef, offset]);
  
  const handleAction = (actionType) => {
    console.log(`Action ${actionType} exécutée sur articles`);
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={onRequestClose}
      className="p-theme-light Polaris-ThemeProvider--themeContainer"
      overlayClassName="default-modal"

    >



      <div
        className="Polaris-PositionedOverlay Polaris-Popover__PopoverOverlay Polaris-Popover__PopoverOverlay--open"
        style={{ position: 'absolute', top: `${position.top}px`, right: `${position.right}px` }}
      >
        <div className="Polaris-Popover" data-polaris-overlay="true">
          <div className="Polaris-Popover__FocusTracker" tabIndex="0"></div>
          <div className="Polaris-Popover__ContentContainer">
            <div id=":rhp:" tabIndex="-1" className="Polaris-Popover__Content" style={{ height: '225px' }}>
              <div
                className="Polaris-Popover__Pane Polaris-Scrollable Polaris-Scrollable--vertical Polaris-Scrollable--horizontal Polaris-Scrollable--scrollbarWidthThin"
                data-polaris-scrollable="true"
              >
                <div className="Polaris-Box">
                  <div
                    className="Polaris-Box"
                    tabIndex="-1"
                    style={{
                      '--pc-box-padding-block-start-xs': 'var(--p-space-0)',
                      '--pc-box-padding-block-start-md': 'var(--p-space-150)',
                      '--pc-box-padding-block-end-xs': 'var(--p-space-0)',
                      '--pc-box-padding-block-end-md': 'var(--p-space-150)',
                      '--pc-box-padding-inline-start-xs': 'var(--p-space-0)',
                      '--pc-box-padding-inline-start-md': 'var(--p-space-150)',
                      '--pc-box-padding-inline-end-xs': 'var(--p-space-0)',
                      '--pc-box-padding-inline-end-md': 'var(--p-space-150)',
                    }}
                  >
                    <ul
                      className="Polaris-BlockStack Polaris-BlockStack--listReset"
                      style={{
                        '--pc-block-stack-order': 'column',
                        '--pc-block-stack-gap-xs': 'var(--p-space-0)',
                        '--pc-block-stack-gap-md': 'var(--p-space-050)',
                      }}
                    >
                      {actions.map((action, index) => (
                        <li className="Polaris-Box" key={action.key}>
                          <div
                            className="Polaris-InlineStack"
                            style={{ '--pc-inline-stack-wrap': 'nowrap', '--pc-inline-stack-flex-direction-xs': 'row' }}
                          >
                            <button
                              type="button"
                              className={`Polaris-ActionList__Item Polaris-ActionList--default${
                                action.destructive ? ' Polaris-ActionList--destructive' : ''
                              }`}
                              onClick={handleAction(action.key)}
                            >
                              <div className="Polaris-Box" style={{ '--pc-box-width': '100%' }}>
                                <div className="Polaris-ActionList__ContentElement">
                                  <div
                                    className="Polaris-InlineStack"
                                    style={{
                                      '--pc-inline-stack-block-align': 'center',
                                      '--pc-inline-stack-wrap': 'nowrap',
                                      '--pc-inline-stack-gap-xs': 'var(--p-space-200)',
                                      '--pc-inline-stack-gap-md': 'var(--p-space-150)',
                                      '--pc-inline-stack-flex-direction-xs': 'row',
                                    }}
                                  >
                                    <span className="Polaris-ActionList__Text">
                                      <span className="Polaris-Text--root Polaris-Text--bodyMd Polaris-Text--regular">

                                        
                                        {action.label}
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Polaris-Popover__FocusTracker" tabIndex="0"></div>
        </div>
      </div>



     
    </Modal>
  );
};

export default ActionsModal;

