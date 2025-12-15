import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

type Item = { title: string; content: React.ReactNode };
export function RNAccordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);

  const toggle = (i: number) => setOpen((prev) => (prev === i ? null : i));

  return (
    <div className="divide-y divide-[var(--RN-Base-20)] border border-[var(--RN-Base-20)] rounded-md">
      {items.map((it, i) => {
        const isOpen = open === i;
        const panelId = `rn-accordion-panel-${i}`;
        const btnId = `rn-accordion-button-${i}`;
        return (
          <div key={i}>
            <button
              id={btnId}
              type="button"
              onClick={() => toggle(i)}
              onMouseDown={(e) => e.preventDefault()} // prevents accidental text selection
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="w-full flex items-center justify-between p-2 cursor-pointer select-none text-left"
            >
              <span>{it.title}</span>
              <ChevronDown
                size={20}
                className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </button>

            {isOpen && (
              <div id={panelId} role="region" aria-labelledby={btnId} className="px-3 pb-3">
                {it.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
