import { createContext, useContext} from 'react';

// Contexte
interface PopoverContextValue {
  closePopover: () => void;
}

export const PopoverContext = createContext<PopoverContextValue>({
  closePopover: () => {}
});

export function usePopoverContext(): PopoverContextValue {
  return useContext(PopoverContext);
}