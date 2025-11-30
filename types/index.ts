// types/index.ts
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'caregiver' | 'elderly';
  deviceCount: number;
  createdAt: string; // format "DD/MM/YYYY"
}

export type RoleColor = 'blue' | 'green' | 'default';