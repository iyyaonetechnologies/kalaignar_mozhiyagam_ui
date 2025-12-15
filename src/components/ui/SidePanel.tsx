import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, X } from 'lucide-react';
import { ThemeSwitcher } from '../ThemeSwitcher';
import { RNLabel } from '../RNLabel';
import { NAV_ITEMS, SIDEBAR_BG_CLASS } from '@/config/GlobalVariableConfig';

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
        className={`fixed top-0 left-0 w-full h-screen ${SIDEBAR_BG_CLASS} shadow-2xl z-50 transition-all duration-500 ease-in-out flex flex-col backdrop-blur-lg ${open ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Header with logo and close button */}
        <div className="flex items-center p-6 border-b border-[var(--RN-Blue-100)] flex-shrink-0">
          <div className="w-14 h-14 rounded-2xl mr-3 bg-white p-1.5 flex items-center justify-center shadow-lg">
            <span className="text-2xl font-bold text-[var(--RN-Blue-100)]">RN</span>
          </div>
          <RNLabel label="appName" variant="h2Bold" className="font-bold text-lg truncate" />
          <button className="ml-auto p-2 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-110" onClick={onClose} aria-label="Close Menu">
            <X className="h-8 w-8 text-[var(--RN-Base-10)]" />
          </button>
        </div>

        {/* Scrollable Navigation Container */}
        <div className="flex-1 overflow-y-auto">
          <nav className="flex flex-col gap-3 p-6">
            {NAV_ITEMS.map((item, idx) => (
              <div key={item.label} className="relative">
                {item.children ? (
                  <>
                    <button
                      className="flex items-center w-full px-5 py-4 font-semibold text-left hover:bg-white/10 focus:outline-none rounded-2xl transition-all duration-300 hover:scale-105"
                      onClick={() => toggleExpand(idx)}
                    >
                      <RNLabel label={item.label} variant="p2Bold" />
                      <ChevronDown
                        className={`ml-auto h-5 w-5 transition-transform ${expanded[idx] ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {expanded[idx] && (
                      <div className="bg-white/5 ml-4 rounded-2xl py-2 mt-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            className="block px-5 py-3 mx-2 hover:bg-white/10 rounded-xl text-sm transition-all duration-300 hover:translate-x-2"
                            to={child.href}
                            onClick={onClose}
                          >
                            <RNLabel label={child.label} variant="p3" />
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    className="block px-5 py-4 font-semibold hover:bg-white/10 rounded-2xl transition-all duration-300 hover:scale-105 hover:translate-x-1"
                    to={item.href}
                    onClick={onClose}
                  >
                    <RNLabel label={item.label} variant="p2Bold" />
                  </Link>
                )}
              </div>
            ))}

            {/* Theme Switcher at bottom */}
            <div className="mt-8 pt-6 border-t border-[var(--RN-Blue-100)]">
              <ThemeSwitcher />
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
