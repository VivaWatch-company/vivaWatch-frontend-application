'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import {
  Home,
  Users,
  Smartphone,     
  Bell,          
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from '@/components/ui/Icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  { icon: Home, label: 'Dashboard', href: '/dashboard' },
  { icon: Smartphone, label: 'Dispositivos', href: '/dashboard/devices' },
  { icon: Users, label: 'Usários', href: '/dashboard/users' },
  { icon: Bell, label: 'Notificações', href: '/dashboard/notifications' },
  { icon: Settings, label: 'Configurações', href: '/dashboard/settings' },
];

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <div
      className={cn(
        'relative flex flex-col bg-gray-900 text-white transition-all duration-300',
        isCollapsed ? 'w-16' : 'w-64'
      )}
    >
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-9 z-10 flex h-7 w-7 items-center justify-center rounded-full border border-gray-700 bg-gray-900 shadow-md hover:bg-gray-800"
      >
        {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
      </button>

      <div className="flex h-16 items-center justify-center border-b border-gray-800">
        {isCollapsed ? (
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-xl font-bold text-white">
            V
          </div>
        ) : (
          <h1 className="text-2xl font-bold">VivaWatch</h1>
        )}
      </div>

      <nav className="flex-1 space-y-1 p-3">
        {menuItems.map((item) => {
          const isActive = pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center rounded-lg px-3 py-3 text-sm font-medium transition-all',
                isCollapsed ? 'justify-center px-0' : 'justify-start',
                'text-gray-300 hover:text-white hover:bg-gray-800'
              )}
            >
              <item.icon
                className={cn(
                  'h-5 w-5 text-gray-400',
                  !isCollapsed && 'mr-3',
                  'group-hover:text-white' 
                )}
              />
              {!isCollapsed && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-gray-800 p-3">
        <button
          className={cn(
            'flex w-full items-center rounded-lg px-3 py-3 text-sm font-medium text-gray-300 transition-colors hover:bg-gray-800 hover:text-white',
            isCollapsed && 'justify-center px-0'
          )}
        >
          <LogOut className={cn('h-5 w-5', !isCollapsed && 'mr-3')} />
          {!isCollapsed && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
}