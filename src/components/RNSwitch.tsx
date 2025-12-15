import { composeStyles } from '@/utils/composeStyles';
export function RNSwitch({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={composeStyles(
        'w-12 h-6 rounded-full transition-colors',
        checked ? 'bg-[var(--RN-Blue-100)]' : 'bg-[var(--RN-Base-30)]'
      )}
    >
      <span
        className={composeStyles(
          'block w-5 h-5 rounded-full bg-[var(--RN-Base-0)] translate-x-1 transition-transform',
          checked && 'translate-x-6'
        )}
      />
    </button>
  );
}
