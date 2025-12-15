export function RNTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: (string | number | React.ReactNode)[][];
}) {
  return (
    <div className="overflow-auto">
      <table className="min-w-full border border-[var(--RN-Base-20)] text-sm">
        <thead className="bg-[var(--RN-Base-10)]">
          <tr>
            {headers.map((h, i) => (
              <th key={i} className="px-3 py-2 text-left border-b border-gray-200">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="even:bg-[var(--RN-Base-20)]">
              {r.map((c, j) => (
                <td key={j} className="px-3 py-2 border-b border-gray-200">
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
