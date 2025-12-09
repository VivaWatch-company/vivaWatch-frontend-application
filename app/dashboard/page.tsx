import { mockDashboard } from '@/data/mockDashboard';
import { Card } from '@/components/dashboard/Card';
import { VitalSignsChart } from '@/components/dashboard/VitalSignsChart';
import { RealTimeEvents } from '@/components/dashboard/RealTimeEvents';
import { Smartphone, Bell, Heart, Activity } from '@/components/ui/Icons';

export default function DashboardPage() {
  const { activeDevices, deviceChange, pendingAlerts, bpmAverage, spo2Average, vitalSignsData, realTimeEvents } = mockDashboard;

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h2>
      <p className="text-gray-700">Visão geral dos dispositivos e alertas</p>

      <div className="grid gap-6 grid-cols-2">
        <Card
            title="Dispositivos Ativos"
            value={activeDevices}
            change={deviceChange}
            icon={<Smartphone className="h-5 w-5 text-blue-500" />}
        />
        <Card
            title="Alertas Pendentes"
            value={pendingAlerts}
            icon={<Bell className="h-5 w-5 text-yellow-500" />}
        />
        <Card
            title="BPM Médio (24h)"
            value={bpmAverage}
            icon={<Heart className="h-5 w-5 text-green-500" />}
        />
        <Card
            title="SpO2 Médio (24h)"
            value={`${spo2Average}%`}
            icon={<Activity className="h-5 w-5 text-green-500" />}
        />
        </div>


      <div className="grid gap-6 md:grid-cols-2">
        <VitalSignsChart data={vitalSignsData} />
        <RealTimeEvents events={realTimeEvents} />
      </div>
    </div>
  );
}