import React from 'react';

export function RNToast({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 rounded bg-[var(--RN-Blue-100)] text-[var(--RN-Base-0)] px-3 py-2 text-sm">
      {children}
    </div>
  );
}
