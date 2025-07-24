

import * as React from 'react';
import type { PlateElementProps } from 'platejs/react';
import { PlateElement, useElement } from 'platejs/react';

import { cn } from '../../lib/utils';





export function ParagraphElement(props: PlateElementProps) {
  const element = useElement();
  const { children } = props;
  const { location, date } = element as any;

  const prefix =
    location || date
      ? `${location || ''}${location && date ? ' — ' : ''}${date || ''} — `
      : '';

  return (
    <PlateElement {...props} className={cn('m-0 px-0 py-1')}>
      {prefix && (
    <span contentEditable={false} className="text-muted-foreground font-medium mr-1">
      {prefix}
    </span>
  )}
      {children}
    </PlateElement>
  );
}



