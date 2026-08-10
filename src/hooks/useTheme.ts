import { useSyncExternalStore } from "react";

import { readServerTheme, readTheme, subscribeToTheme, toggleTheme, type Theme } from "../lib/theme";

export interface UseThemeResult {
  theme: Theme;
  toggle: () => void;
}

/**
 * Subscribes a component to the shared theme store. Every consumer sees the same
 * value, so the desktop navbar and the mobile menu can never disagree.
 */
export function useTheme(): UseThemeResult {
  const theme = useSyncExternalStore(subscribeToTheme, readTheme, readServerTheme);

  return { theme, toggle: toggleTheme };
}
