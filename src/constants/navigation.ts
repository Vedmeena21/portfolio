export interface NavLink {
  readonly href: string;
  readonly label: string;
}

/** Nav destinations, shared by the desktop navbar and the mobile menu. */
export const NAV_LINKS: readonly NavLink[] = [
  { href: "#about", label: "Home" },
  { href: "#aboutme", label: "About Me" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];
