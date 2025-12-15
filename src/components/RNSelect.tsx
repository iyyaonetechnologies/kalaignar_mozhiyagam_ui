export function RNSelect({
  options,
  ...rest
}: {
  options: { label: string; value: string }[];
} & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...rest}
      className="h-10 rounded-md border border-[var(--RN-Base-20)] bg-[var(--RN-Base-0)] px-3 outline-none   text-[var(--RN-Base-100)]"
    >
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
}
