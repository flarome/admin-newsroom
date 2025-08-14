import { useCallback, useEffect, useMemo, useRef } from "react";
import { HeaderActionType, HeaderElementType } from "../../constants";
import _ from "lodash";
import { useUniqueId } from "@VPE/contexts";
import { useHeaderContext } from "./context";


export interface ComponentProps {
  // à adapter selon ce que contient `e`
   id?: string;
  [key: string]: any;
}

function useComponentRegistry() {
  // Récupère le contexte header (dispatch + state)
  const context = useHeaderContext();

  // Génère un identifiant unique pour le composant (ex: "BottomSheet")
  const id = useUniqueId("BottomSheet");

  // Fonction pour enregistrer un composant
  const registerComponent = useCallback(
    (componentType: string, props: ComponentProps) => {
      if (!context || !componentType || !props) return null;

      let actionType: HeaderActionType | undefined;

      switch (componentType) {
        case HeaderElementType.Button:
          actionType = HeaderActionType.RegisterButton;
          break;
        case HeaderElementType.Title:
          actionType = HeaderActionType.RegisterTitle;
          break;
        case HeaderElementType.VisuallyHiddenTitle:
          actionType = HeaderActionType.RegisterVisuallyHiddenTitle;
          break;
        default:
          return null;
      }

       const {dispatch} = context;

      dispatch({
        type: actionType,
        payload: {
          id,
          ...props,
        },
      });

      return id;
    },
    [context, id]
  );

  // Fonction pour mettre à jour un composant
  const updateComponent = useCallback(
    (componentType: string, componentId: string, props: ComponentProps) => {



      if (!context || !componentType || !componentId || !props) return;

      let actionType: HeaderActionType | undefined;

      switch (componentType) {
        case HeaderElementType.Button:
          actionType = HeaderActionType.UpdateButton;
          break;
        case HeaderElementType.Title:
          actionType = HeaderActionType.UpdateTitle;
          break;
        case HeaderElementType.VisuallyHiddenTitle:
          actionType = HeaderActionType.UpdateVisuallyHiddenTitle;
          break;
        default:
          return;
      }

      context.dispatch({
        type: actionType,
        payload: {
          id: componentId,
          ...props,
        },
      });
    },
    [context]
  );

  // Fonction pour désenregistrer un composant
  const unregisterComponent = useCallback(
    (componentType: string, componentId: string) => {
      if (!context || !componentType || !componentId) return;

      let actionType: HeaderActionType | undefined;

      switch (componentType) {
        case HeaderElementType.Button:
          actionType = HeaderActionType.UnregisterButton;
          break;
        case HeaderElementType.Title:
          actionType = HeaderActionType.UnregisterTitle;
          break;
        case HeaderElementType.VisuallyHiddenTitle:
          actionType = HeaderActionType.UnregisterVisuallyHiddenTitle;
          break;
        default:
          return;
      }

      context.dispatch({
        type: actionType,
        payload: {
          id: componentId,
        },
      });
    },
    [context]
  );

  // Retourne les fonctions mémorisées
  return useMemo(
    () => ({
      registerComponent,
      updateComponent,
      unregisterComponent,
    }),
    [registerComponent, updateComponent, unregisterComponent]
  );
}



export function useComponentLifecycle(
  componentType: string,
  props: ComponentProps
): void {
  const { registerComponent, updateComponent, unregisterComponent } = useComponentRegistry();

  // Ref pour stocker l'élément HTML enregistré
  const elementRef = useRef<string | null>(null);

  // Ref pour stocker les props précédentes
  const prevPropsRef = useRef(props);

  // Effet pour détecter les changements de props et appeler updateComponent
  useEffect(() => {
    if (elementRef.current !== null) {
      // Si les props ont changé (DC retourne false), on met à jour
      if (!_.isEqual(props, prevPropsRef.current)) {
        prevPropsRef.current = props;
        updateComponent(componentType, elementRef.current, props);
      }
    }
  }, []);

  
  // Effet au montage / démontage pour enregistrer et désenregistrer le composant
  useEffect(() => {
    const element = registerComponent(componentType, props);
    if (element) {
      elementRef.current = element;
      return () => {
        unregisterComponent(componentType, element);
      };
    }

    return ()  => {}
  }, [componentType]);
}
