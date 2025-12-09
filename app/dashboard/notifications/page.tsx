'use client';

import { useState } from 'react';
import { mockNotifications } from '@/data/mockNotifications';
import { Bell, AlertTriangle, Activity, Heart } from '@/components/ui/Icons';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export default function NotificationsPage() {
  const [notifications] = useState(mockNotifications);
  const [filter, setFilter] = useState<'todas' | 'pendente' | 'resolvido'>('todas');

  const filtered = notifications.filter(n =>
    filter === 'todas' ? true : n.status === filter
  );

  const getIcon = (type: string) => {
    switch (type) {
      case 'fall': return <AlertTriangle className="h-6 w-6 text-red-600" />;
      case 'bpm': return <Heart className="h-6 w-6 text-orange-600" />;
      case 'spo2': return <Activity className="h-6 w-6 text-blue-600" />;
      default: return <Bell className="h-6 w-6 text-gray-600" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Notificações
          </h2>
          <p className="text-gray-600 mt-1">
            Gerencie alertas e notificações do sistema
          </p>
        </div>

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value as any)}
          className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none"
        >
          <option value="todas">Todas</option>
          <option value="pendente">Pendentes</option>
          <option value="resolvido">Resolvidas</option>
        </select>
      </div>

      <div className="space-y-4">
        {filtered.map((notif) => (
          <div
            key={notif.id}
            className={cn(
              'rounded-2xl bg-white p-6 shadow-sm border-l-4 transition-all',
              notif.priority === 'alta' ? 'border-red-500' : 'border-orange-400',
              notif.status === 'resolvido' && 'opacity-75'
            )}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  {getIcon(notif.type)}
                </div>

                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{notif.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{notif.message}</p>
                  <div className="flex items-center gap-3 mt-3">
                    <Badge variant={notif.status === 'pendente' ? 'blue' : 'default'}>
                      {notif.status === 'pendente' ? 'Pendente' : 'Resolvido'}
                    </Badge>
                    <Badge variant={notif.priority === 'alta' ? 'red' : 'yellow'}>
                      {notif.priority === 'alta' ? 'Alta' : 'Média'}
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="text-right text-sm">
                <p className="text-gray-500">{notif.timestamp}</p>
                {notif.status === 'pendente' && (
                  <Button size="sm" className="mt-3">
                    Marcar como Resolvido
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          Nenhuma notificação encontrada
        </div>
      )}
    </div>
  );
}