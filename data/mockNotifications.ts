export type NotificationPriority = 'alta' | 'media';
export type NotificationStatus = 'pendente' | 'resolvido';

export interface Notification {
  id: string;
  type: 'fall' | 'bpm' | 'spo2';
  title: string;
  message: string;
  elderlyName: string;
  deviceName: string;
  timestamp: string;
  priority: NotificationPriority;
  status: NotificationStatus;
}

export const mockNotifications: Notification[] = [
  {
    id: '1',
    type: 'fall',
    title: 'Queda detectada',
    message: 'Dona Maria • VivaWatch-001',
    elderlyName: 'Dona Maria',
    deviceName: 'VivaWatch-001',
    timestamp: '15/01/2024, 14:32:00',
    priority: 'alta',
    status: 'pendente',
  },
  {
    id: '2',
    type: 'bpm',
    title: 'BPM elevado: 135 bpm',
    message: 'Dona Joana • VivaWatch-002',
    elderlyName: 'Dona Joana',
    deviceName: 'VivaWatch-002',
    timestamp: '15/01/2024, 13:15:00',
    priority: 'media',
    status: 'pendente',
  },
  {
    id: '3',
    type: 'spo2',
    title: 'SpO₂ baixo: 88%',
    message: 'Seu Pedro • VivaWatch-004',
    elderlyName: 'Seu Pedro',
    deviceName: 'VivaWatch-004',
    timestamp: '15/01/2024, 12:45:00',
    priority: 'alta',
    status: 'resolvido',
  },
];