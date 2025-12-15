import { useState } from 'react';
export function RNTooltip({ content, children }: { content: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <span
      className="relative inline-block"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {children}
      {open && (
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 rounded bg-black text-[var(--RN-Base-0)] text-xs py-1 px-2 whitespace-nowrap">
          {content}
        </span>
      )}
    </span>
  );
}
