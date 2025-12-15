export function RNAvatar({ name, src, size = 40 }: { name?: string; src?: string; size?: number }) {
  const initials = (name || '')
    .split(' ')
    .map((s) => s[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
  const style = { width: size, height: size };
  if (src)
    return (
      <img src={src} alt={name || 'avatar'} style={style} className="rounded-full object-cover" />
    );
  return (
    <div
      style={style}
      className="rounded-full bg-[var(--RN-Blue-20)] text-[var(--RN-Blue-300)] grid place-items-center text-sm font-medium"
    >
      {initials || '?'}
    </div>
  );
}
