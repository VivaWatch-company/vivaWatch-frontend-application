// data/mockUsers.ts
import { User } from '@/types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Dr. Carlos Silva',
    email: 'carlos@vivawatch.com',
    role: 'admin',
    deviceCount: 0,
    createdAt: '14/01/2024',
  },
  {
    id: '2',
    name: 'Maria Santos',
    email: 'maria@vivawatch.com',
    role: 'caregiver',
    deviceCount: 5,
    createdAt: '31/10/2024',
  },
  {
    id: '3',
    name: 'João Oliveira',
    email: 'joao@vivawatch.com',
    role: 'caregiver',
    deviceCount: 7,
    createdAt: '09/02/2024',
  },
  {
    id: '4',
    name: 'Dona Maria',
    email: 'maria.elder@email.com',
    role: 'elderly',
    deviceCount: 1,
    createdAt: '29/02/2024',
  },
];