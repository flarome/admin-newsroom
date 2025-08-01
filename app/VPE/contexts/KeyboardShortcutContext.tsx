import { createContext, useEffect, useRef, ReactNode } from "react";

const SHORTCUTS_TIMEOUT_MS = 500;

type Shortcut = {
  ordered: string[][];
  held?: string[][];
  ignoreInput?: boolean;
  ignoredTags?: string[];
  allowDefault?: boolean;
  onMatch: (detail: { ordered: string[][]; held?: string[][] }) => void;
  node?: Element | null;
};

function isIgnoredElement(ignoredTags: string[] | undefined): boolean {
  const active = document.activeElement;
  if (!active || !active.tagName) return false;
  return ignoredTags?.includes(active.tagName) || active.hasAttribute("contenteditable") || false;
}

function arraysEqual(a: any, b: any): boolean {
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    return a.every((val, idx) => arraysEqual(val, b[idx]));
  }
  return a === b;
}

export class KeyboardShortcutManager {
  private keysPressed: string[] = [];
  private shortcuts: Shortcut[] = [];
  private shortcutsMatched: Shortcut[] = [];
  private isShortcutsDisabled = false;
  private timer?: number;

  constructor() {
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(event: KeyboardEvent) {
    if (this.isShortcutsDisabled) return;

    const key = event.key;
    this.keysPressed.push(key);
    this.updateMatchingShortcuts(event);

    switch (this.shortcutsMatched.length) {
      case 0:
        this.resetKeys();
        break;
      case 1:
        this.callMatchedShortcut(event);
        break;
      default:
        if (typeof window !== "undefined") {
  this.timer = window.setTimeout(() => {
    this.callMatchedShortcut(event);
  }, SHORTCUTS_TIMEOUT_MS);
}
    }
  }

  setup() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  subscribe(shortcut: Shortcut) {
    this.shortcuts.push(shortcut);
    return {
      unsubscribe: () => {
        const index = this.shortcuts.findIndex(s => s === shortcut);
        if (index !== -1) this.shortcuts.splice(index, 1);
      }
    };
  }

  disableShortcuts() {
    this.isShortcutsDisabled = true;
  }

  enableShortcuts() {
    this.isShortcutsDisabled = false;
  }

  triggerShortcut(shortcut: Shortcut) {
    const matched = this.shortcuts.find(s =>
      arraysEqual(shortcut.ordered, s.ordered) &&
      arraysEqual(shortcut.held || [], s.held || []) &&
      (shortcut.ignoredTags == null || arraysEqual(shortcut.ignoredTags, s.ignoredTags || [])) &&
      (shortcut.ignoreInput == null || shortcut.ignoreInput === s.ignoreInput) &&
      (shortcut.allowDefault == null || shortcut.allowDefault === s.allowDefault)
    );

    if (matched) {
      matched.onMatch({
        ordered: matched.ordered,
        held: matched.held,
      });
    }
  }

  resetKeys() {
    this.keysPressed = [];
    this.shortcutsMatched = [];
  }

  private allModifiersAreHeld(heldKeys: string[][], event: KeyboardEvent): boolean {
    const isNestedArray = (arr: any[]) => arr.every(el => Array.isArray(el));
    const areModifiersHeld = (mods: string[]) =>
      mods.every(mod => event.getModifierState && event.getModifierState(mod));

    if (isNestedArray(heldKeys)) {
      return heldKeys.some(areModifiersHeld);
    } else {
      return areModifiersHeld(heldKeys as string[]);
    }
  }




  updateMatchingShortcuts(e: KeyboardEvent) {
    const candidates = this.shortcutsMatched.length > 0 ? this.shortcutsMatched : this.shortcuts;
    this.shortcutsMatched = candidates.filter(shortcut => {
      const { ordered, held, node, ignoreInput, ignoredTags } = shortcut;
      if ((isIgnoredElement(ignoredTags) && !ignoreInput) || (held && !this.allModifiersAreHeld(held, e))) {
        return false;
      }
      const keysMatch = arraysEqual(this.keysPressed, ordered.slice(0, this.keysPressed.length));
      if (node) {
        const active = document.activeElement === node;
        return keysMatch && active;
      }
      return keysMatch;
    });
  }

  callMatchedShortcut(e: KeyboardEvent) {
    const matched = this.shortcutsMatched.find(shortcut =>
      arraysEqual(shortcut.ordered, this.keysPressed)
    );
    if (matched) {
      if (!matched.allowDefault) e.preventDefault();
      matched.onMatch({
        ordered: matched.ordered,
        held: matched.held,
      });
      if (this.timer) clearTimeout(this.timer);
      this.resetKeys();
    }
  }
}

// React context and provider

export const KeyboardShortcutContext = createContext<KeyboardShortcutManager | null>(null);

export function KeyboardShortcutProvider({ children }: { children: ReactNode }) {
  const managerRef = useRef(new KeyboardShortcutManager());

  useEffect(() => {
    managerRef.current.setup();
  }, []);

  return (
    <KeyboardShortcutContext.Provider value={managerRef.current}>
      {children}
    </KeyboardShortcutContext.Provider>
  );
}