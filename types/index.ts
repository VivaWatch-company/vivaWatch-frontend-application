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

export type DeviceStatus = 'ativo' | 'alerta' | 'desconectado';

export interface Device {
  id: string;
  name: string;                    // ex: VivaWatch-001
  elderlyName: string;             // nome do idoso
  status: DeviceStatus;
  lastMeasurement: string;         // ex: 14:32
  bpm: number;
  spo2: number;

  // Dados para o modal de detalhes
  measurements: {
    time: string;
    bpm: number;
    spo2: number;
    alert?: string;
  }[];

  elderlyInfo: {
    name: string;
    age: number;
    medicalHistory: string;
  };
}