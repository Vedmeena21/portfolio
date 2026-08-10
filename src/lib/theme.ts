/**
 * Theme store shared by every component that reads or toggles the theme.
 *
 * Kept outside React so the pre-paint inline script in index.html and the React tree
 * agree on one storage key and one class name, which is what prevents a flash of the
 * wrong theme on a prerendered page.
 */

export const THEME_STORAGE_KEY = "portfolio-theme";
export const DARK_CLASS = "dark";

export type Theme = "dark" | "light";

const DEFAULT_THEME: Theme = "dark";

type Listener = () => void;

const listeners = new Set<Listener>();

function isTheme(value: string | null): value is Theme {
  return value === "dark" || value === "light";
}

/** Reads the theme the document is currently displaying. */
export function readTheme(): Theme {
  if (typeof document === "undefined") {
    return DEFAULT_THEME;
  }

  return document.documentElement.classList.contains(DARK_CLASS) ? "dark" : "light";
}

/** Reads the visitor's stored preference, falling back to the site default. */
export function readStoredTheme(): Theme {
  if (typeof window === "undefined") {
    return DEFAULT_THEME;
  }

  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    return isTheme(stored) ? stored : DEFAULT_THEME;
  } catch {
    // Private browsing modes can throw on localStorage access; the default is fine.
    return DEFAULT_THEME;
  }
}

/** Applies a theme to the document and persists it. */
export function setTheme(theme: Theme): void {
  if (typeof document === "undefined") {
    return;
  }

  document.documentElement.classList.toggle(DARK_CLASS, theme === "dark");

  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Persistence is a nicety; the applied class already took effect.
  }

  for (const listener of listeners) {
    listener();
  }
}

export function toggleTheme(): void {
  setTheme(readTheme() === "dark" ? "light" : "dark");
}

export function subscribeToTheme(listener: Listener): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

/** Server render has no document, so it always reports the default. */
export function readServerTheme(): Theme {
  return DEFAULT_THEME;
}
