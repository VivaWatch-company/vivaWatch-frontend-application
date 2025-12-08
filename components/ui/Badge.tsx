// components/ui/Badge.tsx
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: ReactNode;
  variant?: 'blue' | 'green' | 'yellow' | 'default';
}

export function Badge({ children, variant = 'default' }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset',
        {
          'bg-blue-50 text-blue-700 ring-blue-600/20': variant === 'blue',
          'bg-green-50 text-green-700 ring-green-600/20': variant === 'green',
          'bg-yellow-50 text-yellow-800 ring-yellow-600/20': variant === 'yellow', // ← novo
          'bg-gray-50 text-gray-600 ring-gray-500/20': variant === 'default',
        }
      )}
    >
      {children}
      {children}
    </span>
  );
}