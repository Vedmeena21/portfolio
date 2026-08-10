import { CgMenuRightAlt } from "react-icons/cg";
import { HiSun, HiMoon } from "react-icons/hi";
import { useState } from "react";
import Menu from "./Menu";
import ThemeToggle from "./ThemeToggle";
import { NAV_LINKS } from "../constants/navigation";
import type { Theme } from "../lib/theme";

const Navbar = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="NAVBAR p-5 mx-5 md:mx-10 lg:mx-20 mt-5 font-['Poppins'] max-sm:p-2 max-sm:max-h-[48px]">
      <div className="NAVBAR flex justify-between capitalize">
        <div className="LOGO">
          <a
            href="#about"
            className="text-3xl bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent dark:text-cyan-500 max-sm:text-2xl"
          >
            {"<Ved/>"}
          </a>
        </div>

        <nav
          aria-label="Main"
          className="NAVLINKS text-[20px] max-sm:hidden flex gap-6 md:gap-8 lg:gap-12 text-[#00040f] dark:text-[#e1e1e1] items-center"
        >
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-cyan-500">
              {link.label}
            </a>
          ))}
          <ThemeToggle
            renderIcon={(theme: Theme) =>
              theme === "dark" ? (
                <HiMoon className="-translate-y-1 text-2xl" />
              ) : (
                <HiSun className="-translate-y-1 text-2xl" />
              )
            }
          />
        </nav>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          className="hidden max-sm:flex items-center justify-center min-w-[44px] min-h-[44px] -mr-2"
        >
          <CgMenuRightAlt className="text-[#00040f] dark:text-[#e1e1e1] text-[32px]" />
        </button>
      </div>
      {isMenuOpen && <Menu onNavigate={() => setIsMenuOpen(false)} />}
    </header>
  );
};

export default Navbar;
