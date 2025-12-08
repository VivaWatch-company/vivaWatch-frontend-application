import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  change?: string;
  className?: string;
}

export function Card({ title, value, icon, change, className }: CardProps) {
  return (
    <div className={cn('rounded-xl bg-white p-6 shadow-sm', className)}>
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-600">{title}</h3>
        {icon}
      </div>
      <p className="mt-2 text-3xl font-bold text-gray-900">{value}</p>
      {change && <p className="mt-1 text-xs text-green-600">{change}</p>}
    </div>
  );
}