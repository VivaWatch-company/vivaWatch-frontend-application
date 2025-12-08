import { Dot } from 'lucide-react';
import clsx from 'clsx';

interface Event {
  id: number;
  time: string;
  description: string;
  color: 'red' | 'blue' | 'green';
}

interface RealTimeEventsProps {
  events: Event[];
}

export function RealTimeEvents({ events }: RealTimeEventsProps) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900">Eventos em Tempo Real</h3>
      <ul className="mt-4 space-y-3">
        {events.map((event) => (
          <li key={event.id} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <Dot
                className={clsx(
                  'h-5 w-5',
                  event.color === 'red' && 'text-red-500',
                  event.color === 'blue' && 'text-blue-500',
                  event.color === 'green' && 'text-green-500'
                )}
              />
              <span>{event.description}</span>
            </div>
            <span className="text-gray-500">{event.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
