import { useViewportContext } from "@VPE/contexts"
import { NestedTransitionGroup } from "components/transitions/TransitionContext"

// -- BOTTOM SHEET TransitionWrapper --
export interface TransitionWrapperProps {
  children: React.ReactNode
  show: boolean
}

export function TransitionWrapper({ children, show }: TransitionWrapperProps) {
  const { mobile } = useViewportContext()

  if (mobile) {
    // Sur mobile, on utilise TransitionWrapper qui gère l’affichage animé
    return <NestedTransitionGroup show={show}>{children}</NestedTransitionGroup>
  }

  // Sur desktop / autre, on affiche directement ou rien selon show
  return show ? <>{children}</> : null
}