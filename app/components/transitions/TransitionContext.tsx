// src/components/transitions/TransitionContext.tsx
import { useViewportContext } from '@VPE/contexts';
import React, { ReactNode, useRef, useCallback, useMemo, useEffect, createContext } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group'; // supposé

// Types
interface TransitionClassNames {
  appear?: string;
  appearActive?: string;
  appearDone?: string;
  enter?: string;
  enterActive?: string;
  enterDone?: string;
  exit?: string;
  exitActive?: string;
  exitDone?: string;
}

type TransitionStatus = 'appear' | 'enter' | 'exit';

interface TransitionContextValue {
  in: boolean;
  depth: number;
  onExited?: (node: HTMLElement | null) => void;
}

interface ChildProps {
  in: boolean;
  onExited?: (node: HTMLElement | null) => void;
  [key: string]: any;
}

interface WrapperProps {
  child: React.ReactElement<ChildProps>;
}

interface TransitionWrapperProps {
  children: ReactNode;
  sharedTransition?: boolean;
  transitionClassNames?: { [key: string]: string };
  onEnter?: () => void;
  onExited?: (node: HTMLElement | null) => void;
}


export function pickTransitionClassNames(input: Partial<TransitionClassNames>): TransitionClassNames {
  return {
    appear: input.appear,
    appearActive: input.appearActive,
    appearDone: input.appearDone,
    enter: input.enter,
    enterActive: input.enterActive,
    enterDone: input.enterDone,
    exit: input.exit,
    exitActive: input.exitActive,
    exitDone: input.exitDone,
  };
}

// Contexte pour transmettre état imbriqué de la transition
export const TransitionContext = createContext<TransitionContextValue | null>(null);

// Liste des props à propager (exemple)
const validTransitionProps: TransitionStatus[] = ['appear', 'enter', 'exit'];

// Fonction utilitaire pour filtrer props sur base de keys valide
function excludeProps<T extends Record<string, any>>(obj: T, ...excludedKeys: (keyof T)[]): Partial<T> {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (!excludedKeys.includes(key as keyof T)) {
      (acc as any)[key] = value;
    }
    return acc;
  }, {} as Partial<T>);
}

function filterStringValues<T extends Record<string, any>>(input: T): Partial<Record<keyof T, string>> | undefined {
  const result: Partial<Record<keyof T, string>> = {};

  Object.keys(input).forEach(key => {
    const value = input[key];
    if (typeof value === 'string') {
      result[key as keyof T] = value;
    }
  });

  return Object.keys(result).length > 0 ? result : undefined;
}


// Composant interne utilisé comme childFactory dans TransitionGroup
function ChildFactoryWrapper({ child }: WrapperProps) {
  const { in: inProp, onExited, ...restProps } = child.props;

  const savedOnExited = useRef(onExited);
  const handleExited = useCallback((node: HTMLElement | null) => {
    if (savedOnExited.current) savedOnExited.current(node);
  }, []);

  const contextValue = useMemo<TransitionContextValue>(() => ({
    in: inProp,
    depth: 0,
    onExited: handleExited
  }), [inProp, handleExited]);

  useEffect(() => {
    savedOnExited.current = onExited;
  }, [onExited]);

  return (
    <TransitionContext.Provider key={child.key} value={contextValue}>
      {React.createElement(
        child.type,
        {
            ...excludeProps(restProps, ...validTransitionProps),
          ref: (child as any).ref,
        }
      )}
    </TransitionContext.Provider>
  );
}

// Fonction passée en childFactory à TransitionGroup
function childFactory(child: React.ReactElement<ChildProps>) {
  return <ChildFactoryWrapper key={child.key} child={child} />;
}

// Composant wrapper principal de transition
export function TransitionWrapper({
  children,
  sharedTransition = false,
  transitionClassNames = {},
  onEnter,
  onExited
}: TransitionWrapperProps) {
 const {prefersReducedMotion} = useViewportContext();
  const context = React.useContext(TransitionContext);
  const parentOnExited = context?.onExited;

  // Fusion des onExited (parent + props)
  const combinedOnExited = useCallback((node: HTMLElement | null) => {
    onExited?.(node);
    parentOnExited?.(node);
  }, [onExited, parentOnExited]);

  const inProp = context ? context.in : true;

  // Incrémentation profondeur imbriquée
  const newContextValue = useMemo(() => {
    if (!context) return null;
    return {
      ...context,
      depth: context.depth + 1,
    };
  }, [context]);

  return (
    <CSSTransition
      appear={true}
      mountOnEnter={true}
      unmountOnExit={true}
      classNames={filterStringValues(transitionClassNames)}
      in={inProp}
      timeout={{ enter: 0, exit: prefersReducedMotion ? 0 : 200 }}
      onEnter={onEnter}
      onExited={combinedOnExited}
    >
      <TransitionContext.Provider value={newContextValue}>
        {children}
      </TransitionContext.Provider>
    </CSSTransition>
  );
}

// Composant TransitionGroup avec childFactory
export const NestedTransitionGroup = ({ show, children }: {
  show: boolean;
  children: React.ReactNode;
}) => {
 const ShouldRender = show && children;
    return (
        <TransitionGroup childFactory={childFactory} component={null}>{ShouldRender}</TransitionGroup>
    )

};
