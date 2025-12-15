import { ChevronDown, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { RNImage } from './RNImage';
import { RNLabel } from './RNLabel';
import { ThemeSwitcher } from './ThemeSwitcher';
import { NAV_ITEMS, SidebarMenu } from './ui/SidePanel';
import logoImage from '../assets/logo.png';

export function RNNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);

  // Handles hover and click for dropdown menus
  const handleMouseEnter = (idx: number) => setDropdownOpen(idx);
  const handleMouseLeave = () => setDropdownOpen(null);
  const handleDropdownClick = (idx: number) => setDropdownOpen(dropdownOpen === idx ? null : idx);

  return (
    <header className="sticky top-0 z-40">
      {/* Top Header Bar */}
      <div className="bg-[var(--RN-Blue-80)] border-b border-[var(--RN-Blue-100)]">
        <div className="flex items-center justify-between py-3 px-4">
          {/* Logo and Brand */}
          <a className="font-semibold flex items-center gap-3 text-white" href="/">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-1">
              <RNImage src={logoImage} alt="logo" className="w-full h-full object-contain" />
            </div>
            <span className="hidden lg:block text-lg font-bold"></span>
            <RNLabel label="appName" variant="h2Bold" />
            <span className="lg:flex md:hidden">
              <div className="">
                <div className="container">
                  <nav className="hidden md:flex items-center justify-center">
                    {NAV_ITEMS.map((item, idx) => (
                      <div
                        key={item.label}
                        className="relative group"
                        onMouseEnter={() => item.children && handleMouseEnter(idx)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {item.children ? (
                          <>
                            <button
                              className="uppercase font-bold text-xs tracking-wide px-3 py-4 text-white hover:bg-[var(--RN-Light-Blue-80)] transition-colors flex items-center gap-1"
                              onClick={() => handleDropdownClick(idx)}
                            >
                              <RNLabel variant="p4Bold" label={item.label} />

                              <ChevronDown className="h-3 w-3" />
                            </button>
                            {/* Dropdown menu */}
                            {dropdownOpen === idx && (
                              <div className="absolute left-0 top-full min-w-48 mt-0 bg-white border border-gray-200 py-1 rounded-b-md shadow-lg z-50">
                                {item.children.map((child) => (
                                  <a
                                    key={child.label}
                                    href={child.href}
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors text-sm"
                                    onClick={() => setDropdownOpen(null)}
                                  >
                                    <RNLabel variant="p4Bold" label={child.label} />
                                  </a>
                                ))}
                              </div>
                            )}
                          </>
                        ) : (
                          <a
                            href={item.href}
                            className="uppercase font-bold text-xs tracking-wide px-3 py-4 text-white hover:bg-[var(--RN-Light-Blue-80)] transition-colors block"
                          >
                            <RNLabel variant="p4Bold" label={item.label} />
                          </a>
                        )}
                      </div>
                    ))}
                  </nav>
                </div>
              </div>
            </span>
          </a>

          {/* Right side controls */}
          <div className="flex items-center gap-4">
            {/* Theme Switcher */}
            <div className="hidden md:flex">
              <ThemeSwitcher />
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden p-2 rounded-md text-white hover:bg-[var(--RN-Blue-100)] focus:outline-none focus:ring-2 focus:ring-white/20"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}

      {/* Mobile Sidebar Menu */}
      <SidebarMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
