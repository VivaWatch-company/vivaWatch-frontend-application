import { Device } from '@/types';

export const getStatusVariant = (status: Device['status']): 'green' | 'yellow' | 'default' => {
  switch (status) {
    case 'ativo':
      return 'green';
    case 'alerta':
      return 'yellow';
    case 'desconectado':
      return 'default';
    default:
      return 'default';
  }
};

export const getStatusLabel = (status: Device['status']): string => {
  return status.charAt(0).toUpperCase() + status.slice(1);
};