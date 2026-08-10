import type { ReactNode } from "react";

import { useTheme } from "../hooks/useTheme";
import type { Theme } from "../lib/theme";

export interface ThemeToggleProps {
  renderIcon: (theme: Theme) => ReactNode;
  className?: string;
}

/**
 * Shared theme switch. The caller supplies the visual so the desktop navbar and the
 * mobile menu can look different while driving the same store.
 */
const ThemeToggle = ({ renderIcon, className = "" }: ThemeToggleProps): JSX.Element => {
  const { theme, toggle } = useTheme();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      className={`flex items-center justify-center min-w-[44px] min-h-[44px] ${className}`}
    >
      {renderIcon(theme)}
    </button>
  );
};

export default ThemeToggle;
