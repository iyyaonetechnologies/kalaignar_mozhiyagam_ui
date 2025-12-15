import { TextareaHTMLAttributes } from 'react';
export function RNTextarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const { className, ...rest } = props;
  return (
    <textarea
      className={
        'min-h-[96px] rounded-md border border-[var(--RN-Base-20)] bg-[var(--RN-Base-0)] px-3 py-2 outline-none text-[var(--RN-Base-100)] placeholder:text-[var(--RN-Base-50)] ' +
        (className || '')
      }
      {...rest}
    />
  );
}
