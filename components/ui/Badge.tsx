import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: ReactNode;
  variant?: 'blue' | 'green' | 'default';
}

export function Badge({ children, variant = 'default' }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px- px-3 py-1 text-xs font-medium ring-1 ring-inset',
        {
          'bg-blue-50 text-blue-700 ring-blue-600/20': variant === 'blue',
          'bg-green-50 text-green-700 ring-green-600/20': variant === 'green',
          'bg-gray-50 text-gray-600 ring-gray-500/20': variant === 'default',
        }
      )}
    >
      {children}
    </span>
  );
}