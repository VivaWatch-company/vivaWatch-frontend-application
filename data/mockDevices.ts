import { Device } from '@/types';

export const mockDevices: Device[] = [
  {
    id: '1',
    name: 'VivaWatch-001',
    elderlyName: 'Dona Maria',
    status: 'ativo',
    lastMeasurement: '14:32',
    bpm: 81,
    spo2: 97,
    measurements: [
      { time: '14:32', bpm: 81, spo2: 97, alert: '' },
      { time: '14:30', bpm: 82, spo2: 96, alert: 'Queda detectada' },
    ],
    elderlyInfo: { name: 'Dona Maria', age: 78, medicalHistory: 'Hipertensão' },
  },
  {
    id: '2',
    name: 'VivaWatch-002',
    elderlyName: 'Dona Joana',
    status: 'alerta',
    lastMeasurement: '14:30',
    bpm: 135,
    spo2: 88,
    measurements: [
      { time: '14:30', bpm: 135, spo2: 88, alert: 'Alerta de BPM alto' },
    ],
    elderlyInfo: { name: 'Dona Joana', age: 82, medicalHistory: 'Diabetes' },
  },
  {
    id: '3',
    name: 'VivaWatch-003',
    elderlyName: 'Seu José',
    status: 'ativo',
    lastMeasurement: '14:28',
    bpm: 74,
    spo2: 98,
    measurements: [],
    elderlyInfo: { name: 'Seu José', age: 75, medicalHistory: '' },
  },
  {
    id: '4',
    name: 'VivaWatch-004',
    elderlyName: 'Seu Pedro',
    status: 'desconectado',
    lastMeasurement: '12:15',
    bpm: 78,
    spo2: 96,
    measurements: [],
    elderlyInfo: { name: 'Seu Pedro', age: 80, medicalHistory: '' },
  },
];