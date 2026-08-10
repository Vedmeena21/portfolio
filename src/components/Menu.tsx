import type { MouseEventHandler } from "react";
import ThemeToggle from "./ThemeToggle";
import { NAV_LINKS } from "../constants/navigation";
import type { Theme } from "../lib/theme";

export interface MenuProps {
  onNavigate: MouseEventHandler<HTMLAnchorElement>;
}

const Menu = ({ onNavigate }: MenuProps) => {
  return (
    <nav
      id="mobile-menu"
      aria-label="Mobile"
      className="text-lg tracking-wider leading-10 border shadow-xl border-text-slate-300 text-[#00040f] dark:text-slate-300 mt-5 max-w-[150px] p-3 rounded-lg hidden bg-gradient-to-tl from-[#e1e1e1] to-[#fff] dark:from-[#00040F] dark:to-[#0B274C] max-sm:block absolute right-5 top-16 z-50"
    >
      <ul className="pl-2">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={onNavigate}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <ThemeToggle
        className="text-xl font-semibold tracking-widest justify-start pl-2"
        renderIcon={(theme: Theme) => (theme === "dark" ? "Dark" : "Light")}
      />
    </nav>
  );
};

export default Menu;
