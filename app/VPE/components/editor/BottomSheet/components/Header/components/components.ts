import { HeaderElementType } from "../../../constants"
import { ComponentProps, useComponentLifecycle } from "../hooks"

export function VisuallyHiddenTitle(props: ComponentProps) {
  // Appelle la fonction S0 avec Button et les props
  useComponentLifecycle(HeaderElementType.VisuallyHiddenTitle, props)

  // Ne rend rien
  return null
}

export function Title(props: ComponentProps) {
  // Appelle la fonction S0 avec Button et les props
  useComponentLifecycle(HeaderElementType.Title, props)

  // Ne rend rien
  return null
}



export function Button(props: ComponentProps) {
  // Appelle la fonction S0 avec Button et les props
  useComponentLifecycle(HeaderElementType.Button, props)

  // Ne rend rien
  return null
}

