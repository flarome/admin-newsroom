
  import {
  useSensor,
  PointerSensor,
  useSensors,
  useDraggable,
  type ClientRect as Rect,
  type Modifier,
  type DragMoveEvent,
  type DragEndEvent,
  DndContext,
} from '@dnd-kit/core';
import type { Transform } from '@dnd-kit/utilities';


import { useUniqueId } from "@VPE/contexts";
import { useMedia } from '@shopify/react-hooks';
import { type ReactNode, type Ref, forwardRef, useCallback, useContext, useEffect, useImperativeHandle, useMemo, useRef, useState } from "react";
import { calculateSheetDimensions, useExpansionState } from '../helpers';
import { classnames } from 'lib';
import { variationName as capitalizeConcat } from '@shopify/css-utilities';
import { BottomSheetClass } from '@VPE/styles/OnlineStore';
import { TransitionContext, TransitionWrapper } from 'components/transitions/TransitionContext';
import { FramePortal } from '@VPE/components/ui/Frame';
import { DRAG_CONSTRAINT, SheetExpansion, VELOCITY_MULTIPLIER, VELOCITY_THRESHOLD } from '../constants';
import { Backdrop, ButtonGroup, Portal, Text, TrapFocus } from '@polaris/npm';
import { DroppableRegion } from './Droppable';
import { HeaderProvider, useHeaderContext } from './Header';
import { Button as UIButton } from '@VPE/components/ui';
import { DragIcon } from '../../DragIcon';
import { PanelTitle, type PanelTitleProps } from './Header/components/Panel';
import { ActionButton, type ButtonProps, ActionButtonType } from '../../../ui/ActionButton';

/*
import classNames from 'classnames';
import { useHeaderContext } from './Header/context';
import { ActionButton, type ButtonProps, ActionButtonType } from '../../ui/ActionButton';
import { BottomSheetClass } from '@VPE/styles/OnlineStore';
import { ButtonGroup, Text } from '@polaris/npm';
import { Button } from '../../ui/Button';
import  { type PanelTitleProps, PanelTitle} from './Panel';*/



interface HeaderProps {
  expanded: boolean;
  onTap?: () => void;
  actionButtonWidth?: string;
  renamingOptions?: PanelTitleProps["renamingOptions"];
  tone?:PanelTitleProps["tone"];
}



interface VisuallyHiddenTitleProps {
  title: string;
  isSubtitle?: boolean;
}

const VisuallyHiddenTitle: React.FC<VisuallyHiddenTitleProps> = ({ title, isSubtitle }) => (
  <Text
    variant="bodySm"
    as={isSubtitle ? "p" : "h2"}
    visuallyHidden={true}
  >
    {title}
  </Text>
);



function renderVisuallyHiddenTitles(titlesMap: Map<string, { id: string; title: string; isSubtitle?: boolean }> | null) {
  if (!titlesMap) return null;
  return Array.from(titlesMap.values()).map(titleItem => (
    <VisuallyHiddenTitle
      key={`${titleItem.id}-${titleItem.title}`}
      title={titleItem.title}
      isSubtitle={titleItem.isSubtitle}
    />
  ));
}




export function Header({
  expanded,
  onTap,
  actionButtonWidth,
  renamingOptions,
  tone,
}: HeaderProps) {
  const { buttons, visuallyHiddenTitles } = useHeaderContext();
  const isEditing = renamingOptions?.canRename && renamingOptions?.isEditing;

  const {
    secondaryActionMarkup,
    primaryActionMarkup,
    moreActionsMarkup,
  } = extractActionMarkup(buttons, expanded, onTap);

  const mainActions = (
    <div className={BottomSheetClass.Header.PrimaryActionGroup}>
      <div className={BottomSheetClass.Header.PrimaryActionGroupWrapper}>
        <ButtonGroup variant='segmented' >
          {primaryActionMarkup}
          {moreActionsMarkup}
        </ButtonGroup>
      </div>
    </div>
  );



  // middleSection function
function renderMiddleSection(children: React.ReactNode) {
  if (onTap && !isEditing) {
    return (
      <div className={BottomSheetClass.Header.MiddleActionInteractive}>
        <UIButton
          className={BottomSheetClass.Header.MiddleActionButton}
          onClick={onTap}
          aria-expanded={expanded}
        >
          {children}
        </UIButton>
      </div>
    );
  }

  return <div className={BottomSheetClass.Header.MiddleAction}>{children}</div>;
}

// Usage
const dragHandleAndTitle = (
  <>
    <div className={BottomSheetClass.Header.DragHandleIcon}>
      <DragIcon /> {/* p2 renamed to DragIconComponent */}
    </div>
    <div className={BottomSheetClass.Header.Title}>
      <PanelTitle renamingOptions={renamingOptions} tone={tone} />
      {renderVisuallyHiddenTitles(visuallyHiddenTitles)} {/* J2 renamed */}
    </div>
  </>
);

const middleSection = renderMiddleSection(dragHandleAndTitle);



 if (isEditing) {
    return (
      <nav className={BottomSheetClass.Header._base}>
        <div className={classnames(BottomSheetClass.Header.Interior, BottomSheetClass.Header.EditMode)}>
          {middleSection}
        </div>
      </nav>
    );
  }

  const gridStyle = actionButtonWidth
    ? {
        gridTemplateColumns: `minmax(${actionButtonWidth}, 1fr) auto minmax(${actionButtonWidth}, 1fr)`,
      }
    : undefined;

  return (
    <nav className={BottomSheetClass.Header._base}>
      <div className={BottomSheetClass.Header.Interior} style={gridStyle}>
        <div className={BottomSheetClass.Header.SecondaryAction}>{secondaryActionMarkup}</div>
        {middleSection}
        {mainActions}
      </div>
    </nav>
  );
}



function extractActionMarkup(
  buttons:  Map<string, ButtonProps>,
  expanded: boolean,
  onExpandToggle?: () => void,
) {
  const result = {
    secondaryActionMarkup: null as ReactNode,
    primaryActionMarkup: null as ReactNode,
    moreActionsMarkup: null as ReactNode,
  };

  Array.from(buttons.values()).forEach(button => {
    const markup = (
      <ActionButton
        button={button}
        isSheetExpanded={expanded}
        onSheetExpandChange={onExpandToggle}
      />
    );

    if (button.type === ActionButtonType.Primary) {
      result.primaryActionMarkup = markup;
    } else if (button.type === ActionButtonType.MoreActions) {
      result.moreActionsMarkup = markup;
    } else if (button.type === ActionButtonType.Secondary) {
      result.secondaryActionMarkup = markup;
    }
  });

  return result;
}





interface BottomSheetContentProps extends 
  Partial<HeaderProps> {
  children: ReactNode;
  expansion: NonNullable<BottomSheetProps["expansion"]>;
  fullCollapse?: BottomSheetProps["fullCollapse"];
  isModal: NonNullable<BottomSheetProps["isModal"]>;
  backgroundSheetContent?: BottomSheetProps["backgroundSheetContent"];
  showBackgroundSheet?: boolean;
  minHeightCollapsed?: number;
  maxHeight: NonNullable<BottomSheetProps["maxHeight"]>;
  scrollable?: boolean;
  onTitleTap?: () => void;
  backgroundSheetVariant?: BottomSheetProps["backgroundSheetVariant"];
  renamingOptions?: HeaderProps["renamingOptions"];
}




/**
 * Hook qui retourne une callback pour lancer une animation sur un élément référencé,
 * sauf si le mode "préférer réduction de mouvement" est activé ou si désactivé via props.
 */

const slideUpKeyframes = {
  transform: ["", "translate3d(0,-20px,0)", ""],
  easing: "ease-in-out",
};


const slideUpAnimationOptions: KeyframeAnimationOptions = {
  duration: 400,
};

function useAnimateIfAllowed<T extends HTMLElement>({
  ref,
  disabled,
}: {
  ref: React.RefObject<T>;
  disabled?: boolean;
}): () => void {
  // Media query pour vérifier la préférence réduction du mouvement
  const prefersReducedMotion = useMedia("(prefers-reduced-motion: reduce)");

  const isAnimating = useRef(false);

  return useCallback(() => {
    if (prefersReducedMotion || disabled) {
      return;
    }

    const element = ref.current;
    if (!element || isAnimating.current) {
      return;
    }

    // Exemple d’animation (à adapter selon PO et IO)
    const animation = element.animate(slideUpKeyframes, slideUpAnimationOptions);

    if (animation.playState === "running") {
      isAnimating.current = true;
    }

    animation.onfinish = () => {
      isAnimating.current = false;
    };
  }, [ref, disabled, prefersReducedMotion]);
}



const resetTranslateX: Modifier = (args) => {
  const { transform } = args; // args est un objet, pas une fonction

  return {
    ...transform,
    x: 0,
  };
};


/**
 * Ajuste le transform en fonction du ratio donné et des rectangles.
 */
const computeAdjustedTransform =
  (ratio: number): Modifier =>
  (args) => {
    const { transform, draggingNodeRect, over, windowRect } = args;

    if (!draggingNodeRect || !over || !windowRect) {
      return transform;
    }

    const adjustedWindowRect = {
      ...windowRect,
      top: (1 - ratio) * windowRect.height,
      height: ratio * windowRect.height,
    };

    return adjustTransformWithinBounds(transform, draggingNodeRect, adjustedWindowRect);
  };


  /**
 * Ajuste le transform pour que le rectangle déplacé reste dans les bornes d'un autre rectangle.
 */
function adjustTransformWithinBounds(
  transform: Transform,
  movingRect: Rect,
  boundsRect: Rect
): Transform {





      /*  const n = {
            ...r
        };
        return e.top + r.y <= t.top ? n.y = t.top - e.top : e.bottom + r.y >= t.top + t.height && (n.y = t.top + t.height - e.bottom),
        e.left + r.x <= t.left ? n.x = t.left - e.left : e.right + r.x >= t.left + t.width && (n.x = t.left + t.width - e.right),
        */


  const newTransform = { ...transform };

  // Ajustement vertical
  if (movingRect.top + (transform.y ?? 0) <= boundsRect.top) {
    newTransform.y = boundsRect.top - movingRect.top;
  } else if (
    movingRect.bottom + (transform.y ?? 0) >=
    boundsRect.top + boundsRect.height
  ) {
    newTransform.y = boundsRect.top + boundsRect.height - movingRect.bottom;
  }

  // Ajustement horizontal
  if (movingRect.left + (transform.x ?? 0) <= boundsRect.left) {
    newTransform.x = boundsRect.left - movingRect.left;
  } else if (
    movingRect.right + (transform.x ?? 0) >=
    boundsRect.left + boundsRect.width
  ) {
    newTransform.x = boundsRect.left + boundsRect.width - movingRect.right;
  }

  return newTransform;
}





const BottomSheetContent = forwardRef<HTMLDivElement, BottomSheetContentProps>(function BottomSheetContent(
  props,
  ref
) {
  const {
    children,
    expansion,
    fullCollapse = false,
    isModal = false,
    backgroundSheetContent,
    showBackgroundSheet = false,
    minHeightCollapsed,
    maxHeight,
    scrollable = false,
    onTitleTap,
    backgroundSheetVariant = "primary",
    renamingOptions,
    ...restProps
  } = props;


  // Hook de drag (ex: $b)
  const { isDragging, listeners, transform, setNodeRef } = useDraggable({
    id: useUniqueId("BottomSheetDraggableRegion"),
  });

  // Hook local (ex: cp())
  const { noVisibleHeaderContent } = useHeaderContext();

  // Hook expansion state (ex: Xb(i))
  const isExpanded = useExpansionState(expansion);

  // State pour animation mount
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  // Contexte pour savoir si on doit envelopper dans un modal (ex: Fd)
  const hasTransitionContext = useContext(TransitionContext);

  // Classes CSS conditionnelles (dr est un helper de classes)

   const draggableRegionClass = classnames(BottomSheetClass.DraggableRegion._({dragging: isDragging, expanded: isExpanded && isMounted, fullCollapse,isModal }))

  const backgroundSheetClass = classnames({[BottomSheetClass.DraggableRegion.BackgroundSheet]: !!backgroundSheetContent}, BottomSheetClass._({showBackgroundSheet: showBackgroundSheet && !isDragging && !isExpanded, warning: backgroundSheetVariant === "warning", primary: backgroundSheetVariant === "primary"}, false))


 const dragHandleClass = classnames(BottomSheetClass.DraggableRegion.DragHandle, BottomSheetClass._({reducedHeightDragHandle: noVisibleHeaderContent}, false))


  // Calcul des hauteurs et translations (ex: Jb(c, i, Fe))
  const { sheetHeight, translateHeight } = calculateSheetDimensions(maxHeight, expansion, isDragging);

  // Styles CSS personnalisés dynamiques
  const collapsedStyles =
    noVisibleHeaderContent && minHeightCollapsed != null
      ? {
          "--osui_height-bottom-sheet-collapsed-drag-handle": `${maxHeight * minHeightCollapsed * 100}dvh`,
          "--osui_height-bottom-sheet-header": `${maxHeight * minHeightCollapsed * 100}dvh`,
        }
      : undefined;

  const sheetStyles = {
    "--osui_translate-y-bottom-sheet-draggable-region": `${transform?.y ?? 0}px`,
    "--osui_max-height-bottom-sheet": `${sheetHeight * 100}dvh`,
    "--osui_translate-height-bottom-sheet": `${translateHeight * 100}dvh`,
    ...collapsedStyles,
  } as React.CSSProperties;

  // Classes pour l'animation d'exit
  const exitTransitionClasses = {
    exit: BottomSheetClass._({exiting: true}, false)
  };

  // Props pour scrollable
  const scrollableProps = scrollable ? { "data-polaris-scrollable": "true" } : {};

  
  // Structure JSX
  const content = (
    <div className={draggableRegionClass} style={sheetStyles} ref={ref}>
      <div className={backgroundSheetClass}>{backgroundSheetContent}</div>
      <div className={dragHandleClass} {...listeners} ref={setNodeRef}>
        <Header
          {...restProps}
          expanded={isExpanded}
          onTap={onTitleTap}
          renamingOptions={renamingOptions}
        />
      </div>
      <div className={classnames(BottomSheetClass.DraggableRegion.Content, BottomSheetClass.DraggableRegion._({scrollable}, false))} {...scrollableProps}>
        <div className={BottomSheetClass.DraggableRegion.ContentInterior}>{children}</div>
      </div>
    </div>
  );

  return hasTransitionContext ? (
    <TransitionWrapper transitionClassNames={exitTransitionClasses}>{content}</TransitionWrapper>
  ) : (
    content
  );
});



export interface BottomSheetProps extends 
  Partial<HeaderProps> {
  children: ReactNode;
  maxHeight?: number;
  isModal?: boolean;
  fullCollapse?: boolean;
  useFramePortal?: boolean;
  backgroundSheetContent?: ReactNode;
  showBackgroundSheet?: BottomSheetContentProps["showBackgroundSheet"];
  horizontalHeaderPadding?: string;
  transparentBackdrop?: boolean;
  expansion?: SheetExpansion;
  titleTapExpansion?: SheetExpansion;
  minHeightCollapsed?: BottomSheetContentProps["minHeightCollapsed"];
  scrollable?: BottomSheetContentProps["scrollable"];
  onExpansionChange: (state: SheetExpansion) => void;
  backgroundSheetVariant?: "primary" | "warning";
  renamingOptions?: BottomSheetContentProps["renamingOptions"];
  analyticsMetadata?: Record<string, any>;
}


export const BottomSheet = forwardRef(function BottomSheetInner(
  props: BottomSheetProps,
  ref: Ref<{ bounce: any }>
) {
  const {
    children,
    maxHeight = .85,
    isModal = false,
    fullCollapse = false,
    useFramePortal = false,
    backgroundSheetContent,
    showBackgroundSheet,
    horizontalHeaderPadding = "base",
    transparentBackdrop = false,
    expansion = SheetExpansion.MidExpand,
    titleTapExpansion = SheetExpansion.MidExpand,
    minHeightCollapsed,
    scrollable = true,
    onExpansionChange,
    backgroundSheetVariant,
    renamingOptions,
    analyticsMetadata = {},
    ...rest
  } = props;


  const dragStateRef = useRef({
    distance: 0,
    timestamp: 0,
    velocity: 0,
  });

  const isExpanded = useExpansionState(expansion);

  const sensors = useSensors(useSensor(PointerSensor, DRAG_CONSTRAINT));
  
  const modifiers = useMemo(() => [resetTranslateX, computeAdjustedTransform(maxHeight)], [maxHeight]);



  const sheetRef = useRef<HTMLDivElement>(null);
  const bounce = useAnimateIfAllowed({ ref: sheetRef, disabled: isExpanded });

  const bounceMemo = useMemo( () => ({
        bounce: bounce
    }), [bounce]);


useImperativeHandle(ref, () => bounceMemo);



  const sheetClassName = classnames(BottomSheetClass._({fullCollapse,expanded:isExpanded,  isModal, [capitalizeConcat("padding",horizontalHeaderPadding)]: Boolean(horizontalHeaderPadding)}));



  const sheetInteriorClassName = classnames(BottomSheetClass.BottomSheetInterior, BottomSheetClass._({isModal}, false));


  const content = useFramePortal ? <FramePortal>{children}</FramePortal> : children;

  const sheetContent = (
    <BottomSheetContent
      expansion={expansion}
      onTitleTap={titleTapExpansion === SheetExpansion.Disabled ? undefined : handleTitleTap}
      fullCollapse={fullCollapse}
      backgroundSheetContent={backgroundSheetContent}
      showBackgroundSheet={showBackgroundSheet}
      backgroundSheetVariant={backgroundSheetVariant}
      ref={sheetRef}
      maxHeight={maxHeight}
      minHeightCollapsed={minHeightCollapsed}
      isModal={isModal}
      scrollable={scrollable}
      renamingOptions={renamingOptions}
      {...rest}
    >
      {content}
    </BottomSheetContent>
  );

  const trappedContent = <TrapFocus trapping={isExpanded && isModal}>{sheetContent}</TrapFocus>;

  const modalProps = isModal
    ? {
        role: "dialog",
        "aria-modal": true,
      }
    : undefined;

  return (
    <Portal>
      <div {...modalProps} className={sheetClassName} {...analyticsMetadata}>
        {isExpanded && isModal ? (
          <Backdrop transparent={transparentBackdrop} onClick={handleBackdropClick} />
        ) : null}

<HeaderProvider>
        <DndContext autoScroll={!1} modifiers={modifiers}    sensors={sensors} onDragMove={handleDragMove}       onDragEnd={handleDragEnd}
            onDragCancel={handleDragCancel} >
  
            <div
              style={{
                "--osui_max-droppable-height-bottom-sheet": `${maxHeight * 100}vh`,
              } as React.CSSProperties}
              className={sheetInteriorClassName}
            >
              <DroppableRegion />
              {trappedContent}
            </div>
            
        </DndContext>
</HeaderProvider>
      </div>
    </Portal>
  );

  // --- Handlers ---
  function handleTitleTap() {
    if (titleTapExpansion === "disabled") return;
    onExpansionChange?.(isExpanded ? SheetExpansion.Collapse : titleTapExpansion);
  }

  function handleBackdropClick() {
    onExpansionChange?.(SheetExpansion.Collapse);
  }

  function handleDragMove({ delta }: DragMoveEvent) {
    const now = Date.now();
    const elapsed = now - dragStateRef.current.timestamp;
    const moved = dragStateRef.current.distance - delta.y;
    const velocity = Math.round((moved / elapsed) * VELOCITY_MULTIPLIER);

    dragStateRef.current = {
      distance: delta.y,
      velocity,
      timestamp: now,
    };
  }

  function handleDragCancel() {
    handleTitleTap();
    resetDragState();
  }

  function handleDragEnd({ over }: DragEndEvent) {
    const { velocity } = dragStateRef.current;

    if (Math.abs(velocity) > VELOCITY_THRESHOLD) {
      applyExpansionByVelocity(velocity);
    } else if (Math.abs(velocity) < VELOCITY_THRESHOLD && over)  {
  onExpansionChange?.(over.id as SheetExpansion);
    }

    resetDragState();
  }

function applyExpansionByVelocity(
  direction: number, 
): void {
  if (direction > 0) {
    switch (expansion) {
      case SheetExpansion.Collapse:
      case SheetExpansion.MidExpand:
        onExpansionChange?.(SheetExpansion.FullExpand);
        break;
    }
  } else {
    switch (expansion) {
      case SheetExpansion.FullExpand:
      case SheetExpansion.MidExpand:
        onExpansionChange?.(SheetExpansion.Collapse);
        break;
    }
  }
}

      
  function resetDragState() {
    dragStateRef.current = {
      distance: 0,
      timestamp: 0,
      velocity: 0,
    };
  }

 

  });


