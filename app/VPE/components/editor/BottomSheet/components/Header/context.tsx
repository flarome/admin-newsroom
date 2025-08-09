import React, { createContext, useContext, useReducer, useMemo, ReactNode, Dispatch } from "react";
import { HeaderActionType } from "../../constants";

// Définition de la structure d'état pour le contexte
export interface HeaderState {
  buttons: Map<string, any>;
  titles: Map<string, any>;
  visuallyHiddenTitles: Map<string, any>;
  noVisibleHeaderContent: boolean;
}

// Type pour les actions dispatchées
interface HeaderAction {
  type: HeaderActionType;
  payload?: any;
}

// Valeur initiale de l'état
const initialHeaderState: HeaderState = {
  buttons: new Map(),
  titles: new Map(),
  visuallyHiddenTitles: new Map(),
  noVisibleHeaderContent: true,
};

export function getInitialHeaderState(): HeaderState {
  return initialHeaderState
}

// Reducer pour gérer les actions sur l'état
function headerReducer(state: HeaderState, action: HeaderAction): HeaderState {
  switch (action.type) {

    case HeaderActionType.RegisterButton: {
      const newButtons = new Map(state.buttons.entries());
      newButtons.set(action.payload.id, action.payload);
      return {
        ...state,
        buttons: newButtons,
       // noVisibleHeaderContent: newButtons.size === 0 && state.titles.size === 0,
      };
    }



        case HeaderActionType.UpdateButton: {
      const newButtons = new Map(state.buttons.entries());
      newButtons.set(action.payload.id, action.payload);
      return   action.payload.id ? {
                    ...state,
                    buttons: newButtons
                } : {
                    ...state
                }
    }


    
    case HeaderActionType.UnregisterButton: {
      const newButtons = new Map(state.buttons.entries());
      newButtons.delete(action.payload.id);
      return {
        ...state,
        buttons: newButtons,
      //  noVisibleHeaderContent: newButtons.size === 0 && state.titles.size === 0,
      };
    }
   

    
    case HeaderActionType.RegisterTitle: {
      const newTitles = new Map(state.titles.entries());
      newTitles.set(action.payload.id, action.payload);
      return {
        ...state,
        titles: newTitles,
      //  noVisibleHeaderContent: newButtons.size === 0 && state.titles.size === 0,
      };
    }
   


     case HeaderActionType.UpdateTitle:
            {
                const t = new Map(state.titles.entries());
                return t.set(action.payload.id, action.payload),
                action.payload.id ? {
                    ...state,
                    titles: t
                } : {
                    ...state
                }
            }
        case HeaderActionType.UnregisterTitle:
            {
                const t = new Map(state.titles.entries());
                return t.delete(action.payload.id),
                {
                    ...state,
                    titles: t
                }
            }
        case HeaderActionType.RegisterVisuallyHiddenTitle:
            {
                const t = new Map(state.visuallyHiddenTitles.entries());
                return t.set(action.payload.id, action.payload),
                {
                    ...state,
                    visuallyHiddenTitles: t
                }
            }
        case HeaderActionType.UpdateVisuallyHiddenTitle:
            {
                const t = new Map(state.visuallyHiddenTitles.entries());
                return t.set(action.payload.id, action.payload),
                action.payload.id ? {
                    ...state,
                    visuallyHiddenTitles: t
                } : {
                    ...state
                }
            }
        case HeaderActionType.UnregisterVisuallyHiddenTitle:
            {
                const t = new Map(state.visuallyHiddenTitles.entries());
                return t.delete(action.payload.id),
                {
                    ...state,
                    visuallyHiddenTitles: t
                }
            }




    // Par défaut, retourne l'état actuel
    default:
      return {
        ...state
      };
  }
}

// Contexte React
interface HeaderContextValue extends HeaderState {
  dispatch: Dispatch<HeaderAction>;
}

const HeaderContext = createContext<HeaderContextValue>({
  ...initialHeaderState,
  dispatch: () => {}, // noop
});

// Provider React
interface HeaderProviderProps {
  children: ReactNode;
}

export function HeaderProvider({ children }: HeaderProviderProps) {
  const [state, dispatch] = useReducer(headerReducer, undefined, getInitialHeaderState);

  // Calcul du contexte à fournir
  const contextValue = useMemo(() => {
    return {
      dispatch,
      buttons: state.buttons,
      titles: state.titles,
      visuallyHiddenTitles: state.visuallyHiddenTitles,
      noVisibleHeaderContent:
        state.buttons.size === 0 && state.titles.size === 0,
    };
  }, [state]);

  return (
    <HeaderContext.Provider value={contextValue}>
      {children}
    </HeaderContext.Provider>
  );
}

// Hook pour utiliser facilement le contexte
export function useHeaderContext() {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error("useHeaderContext must be used within a HeaderProvider");
  }
  return context;
}