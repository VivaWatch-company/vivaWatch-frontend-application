export const mockDashboard = {
  activeDevices: 12,
  deviceChange: '+2 esta semana',
  pendingAlerts: 3,
  bpmAverage: 76,
  spo2Average: 97,
  vitalSignsData: [  // para o gráfico (últimas 24h)
    { time: '00:00', bpm: 75, spo2: 98 },
    { time: '04:00', bpm: 80, spo2: 97 },
    { time: '08:00', bpm: 78, spo2: 96 },
    { time: '12:00', bpm: 76, spo2: 97 },
    { time: '16:00', bpm: 74, spo2: 98 },
    { time: '20:00', bpm: 77, spo2: 96 },
    { time: '24:00', bpm: 76, spo2: 97 },
  ],
  realTimeEvents: [
    { id: 1, time: '14:32', description: 'Queda detectada — D...', color: 'red' },
    { id: 2, time: '14:30', description: 'BPM: 82 — SpO2: 96%', color: 'blue' },
    { id: 3, time: '14:25', description: 'Status normal — Seu J...', color: 'green' },
  ],
};