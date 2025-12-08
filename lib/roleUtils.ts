// lib/roleUtils.ts
import type { User } from '@/types';

export const getRoleColor = (role: User['role']): 'blue' | 'green' | 'default' => {
  switch (role) {
    case 'admin':
      return 'blue';
    case 'caregiver':
      return 'green';
    case 'elderly':
      return 'default';
    default:
      return 'default';
  }
};

export const getRoleLabel = (role: User['role']): string => {
  switch (role) {
    case 'admin':
      return 'Admin';
    case 'caregiver':
      return 'Cuidador';
    case 'elderly':
      return 'Idoso';
    default:
      return role;
  }
};