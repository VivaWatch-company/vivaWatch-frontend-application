export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'caregiver' | 'elderly';
  deviceCount: number;
  createdAt: string; 
}

export type RoleColor = 'blue' | 'green' | 'default';