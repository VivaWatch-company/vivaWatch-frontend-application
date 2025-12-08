// types/index.ts
export type UserRole = 'admin' | 'caregiver' | 'elderly';

export interface User {
  id: string;
  name: string;
  document: string;
  email: string;
  password?: string;
  role: UserRole;
  careDevices?: string[];       
  notifications?: string[];
  subscription?: string;       
  deviceCount: number;        
  createdAt: string;
  updatedAt: string;
}