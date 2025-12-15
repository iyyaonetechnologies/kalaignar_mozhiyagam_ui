import type { HTMLAttributes } from 'react';
import { composeStyles } from '@/utils/composeStyles';
export function RNView({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return <div className={composeStyles('', className)} {...rest} />;
}
