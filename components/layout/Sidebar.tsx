'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Home, Users, Settings, LogOut, ChevronLeft, Menu } from '@/components/ui/Icons';
import Link from 'next/link';

const menuItems = [
  { icon: Home, label: 'Dashboard', href: '/dashboard' },
  { icon: Users, label: 'Users', href: '/dashboard/users' },
  { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
];

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={cn(
        'relative flex flex-col bg-gray-900 text-white transition-all duration-300',
        isCollapsed ? 'w-16' : 'w-64'
      )}
    >
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-9 z-10 flex h-6 w-6 items-center justify-center rounded-full border border-gray-700 bg-gray-900"
      >
        {isCollapsed ? <Menu className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
      </button>

      <div className="flex h-16 items-center justify-center border-b border-gray-800">
        <h1 className={cn('font-bold', isCollapsed ? 'text-lg' : 'text-2xl')}>VivaWatch</h1>
      </div>

      <nav className="flex-1 space-y-1 p-4">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex items-center rounded-lg px-3 py-3 text-sm font-medium transition-colors hover:bg-gray-800',
              isCollapsed && 'justify-center'
            )}
          >
            <item.icon className="h-5 w-5" />
            {!isCollapsed && <span className="ml-3">{item.label}</span>}
          </Link>
        ))}
      </nav>

      <div className="border-t border-gray-800 p-4">
        <button className={cn('flex w-full items-center rounded-lg px-3 py-3 text-sm hover:bg-gray-800', isCollapsed && 'justify-center')}>
          <LogOut className="h-5 w-5" />
          {!isCollapsed && <span className="ml-3">Logout</span>}
        </button>
      </div>
    </div>
  );
}