import { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';
import { RNImage } from '../RNImage';
import { ThemeSwitcher } from '../ThemeSwitcher';
import { RNLabel } from '../RNLabel';

export const NAV_ITEMS = [
  // { label: 'HOME', href: '/' },
  { label: 'ABOUT US', href: '/about' },
  { label: 'EDUCATION', href: '/education' },
  { label: 'SPORTS', href: '/sports' },
  { label: 'EVENTS', href: '/events' },
  { label: 'AWARDS', href: '/awards' },
  { label: 'VISION & MISSION', href: '/vision' },
  { label: 'CONTACT US', href: '/contact' },
];

export function SidebarMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  const toggleExpand = (key: number) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} aria-hidden="true" />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[var(--RN-Blue-80)] text-[var(--RN-Base-0)] shadow-lg z-50 transition-transform duration-300 flex flex-col ${open ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Header with logo and close button */}
        <div className="flex items-center p-4 border-b border-[var(--RN-Blue-100)] flex-shrink-0">
          <RNImage src="src/assets/logo.png" alt="logo" className="w-12 h-12 rounded-full mr-2" />
          <RNLabel label="appName" variant="h2Bold" className="font-bold text-lg truncate" />
          <button className="ml-auto" onClick={onClose} aria-label="Close Menu">
            <X className="h-8 w-8 text-[var(--RN-Base-10)]" />
          </button>
        </div>

        {/* Scrollable Navigation Container */}
        <div className="flex-1 overflow-y-auto">
          <nav className="flex flex-col gap-2 p-4">
            {NAV_ITEMS.map((item, idx) => (
              <div key={item.label} className="relative">
                {item.children ? (
                  <>
                    <button
                      className="flex items-center w-full px-4 py-3 font-semibold text-left hover:bg-[var(--RN-Blue-100)] focus:outline-none rounded"
                      onClick={() => toggleExpand(idx)}
                    >
                      {item.label}
                      <ChevronDown
                        className={`ml-auto h-5 w-5 transition-transform ${expanded[idx] ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {expanded[idx] && (
                      <div className="bg-[var(--RN-Blue-70)] ml-4 rounded-b-md py-1">
                        {item.children.map((child) => (
                          <a
                            key={child.label}
                            className="block px-4 py-2 hover:bg-[var(--RN-Blue-30)] rounded text-sm"
                            href={child.href}
                            onClick={onClose}
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    className="block px-4 py-3 font-semibold hover:bg-[var(--RN-Blue-100)] rounded transition-all"
                    href={item.href}
                    onClick={onClose}
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}

            {/* Theme Switcher at bottom */}
            <div className="mt-6 pt-4 border-t border-[var(--RN-Blue-100)]">
              <ThemeSwitcher />
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
