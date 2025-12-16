import { HTMLAttributes } from 'react';
import { composeStyles } from '@/utils/composeStyles';
export function RNScroll({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return <div className={composeStyles('overflow-auto', className)} {...rest} />;
}
