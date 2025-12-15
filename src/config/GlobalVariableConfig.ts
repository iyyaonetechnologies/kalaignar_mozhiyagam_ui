// Centralized place for global variables: navigation items and theme-related classes

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'about', href: '/about' },
  { label: 'services', href: '/services' },
  { label: 'portfolio', href: '/portfolio' },
  { label: 'careers', href: '/careers' },
  { label: 'resources', href: '/resources' },
  { label: 'contact', href: '/contact' },
];

// Tailwind class that uses a CSS variable for the navbar background with a sensible fallback.
// Use this in components as a className so themes can override the navbar color by setting
// --RN-Navbar-Bg in the theme CSS files.
export const NAV_BG_CLASS = 'bg-[var(--RN-Navbar-Bg,var(--RN-Blue-80))]';

// Export a helper for sidebar specific background + text if needed elsewhere
export const SIDEBAR_BG_CLASS = `${NAV_BG_CLASS} text-[var(--RN-Base-0)]`;

export default {
  NAV_ITEMS,
  NAV_BG_CLASS,
  SIDEBAR_BG_CLASS,
};
