import React, { useState } from 'react'
import { PopoverClass } from '@VPE/styles/OnlineStore';
import { useScrollAbility } from 'hooks/useScrollAbility';

// === Constante de tolérance pour les ombres
const SCROLL_TOLERANCE_PX = 5

// === Composant principal
type ScrollShadowCardProps = {
  children: React.ReactNode
}

export function PopoverCard({ children }: ScrollShadowCardProps) {
  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null)

  const { canScrollUp, canScrollDown } = useScrollAbility(containerRef, {
    tolerance: SCROLL_TOLERANCE_PX,
  })

  const containerClass = PopoverClass.Card._({topShadow:canScrollUp,bottomShadow: canScrollDown});

  return (
    <div ref={setContainerRef} className={containerClass}>
      {children}
    </div>
  )
}