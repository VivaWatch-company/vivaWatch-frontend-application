'use client';

import { Bell, User } from '@/components/ui/Icons';
import { Badge } from '@/components/ui/Badge';

export function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6">
      <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>

      <div className="flex items-center space-x-4">
        <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
            3
          </span>
        </button>

        <div className="flex items-center space-x-3">
          <div className="text-right">
            <p className="text-sm font-medium text-gray-900">Admin</p>
            <p className="text-xs text-gray-500">admin@vivawatch.com</p>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
            <User className="h-5 w-5" />
          </div>
        </div>
      </div>
    </header>
  );
}