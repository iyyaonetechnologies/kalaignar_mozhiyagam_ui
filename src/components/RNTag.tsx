export function RNTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-gray-300 px-2 py-1 text-xs">
      {children}
    </span>
  );
}
