import { useState } from 'react';
export function RNTabs({
  tabs,
}: {
  tabs: { id: string; label: string; content: React.ReactNode }[];
}) {
  const [active, setActive] = useState(tabs[0]?.id);
  return (
    <div>
      <div className="flex flex-wrap gap-2 border-b border-[var(--RN-Base-20)]">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setActive(t.id)}
            className={
              'px-3 py-2 -mb-[1px] border-b-2 text-[var(--RN-Base-80)] hover:text-[var(--RN-Base-100)] ' +
              (active === t.id
                ? 'border-[var(--RN-Blue-100)] text-[var(--RN-Blue-100)]'
                : 'border-transparent')
            }
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="py-4">{tabs.find((t) => t.id === active)?.content}</div>
    </div>
  );
}
