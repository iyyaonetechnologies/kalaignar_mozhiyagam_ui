export type Crumb = { label: string; href?: string };

export function RNBreadCrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-2 text-[var(--RN-Base-70)]">
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-2">
            {it.href ? (
              <a href={it.href} className="hover:underline text-[var(--RN-Blue-100)]">
                {it.label}
              </a>
            ) : (
              <span aria-current="page" className="text-[var(--RN-Base-100)]">
                {it.label}
              </span>
            )}
            {i < items.length - 1 && <span aria-hidden="true">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
