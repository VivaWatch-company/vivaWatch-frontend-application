'use client';

import { getStatusVariant, getStatusLabel } from '@/lib/deviceUtils';
import { Device } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Eye } from '@/components/ui/Icons';
import { useState } from 'react';
import { DeviceModal } from './DeviceModal';


interface DeviceTableProps {
  devices: Device[];
  onUpdate: (updatedDevice: Device) => void;  // para edição
}

export function DeviceTable({ devices, onUpdate }: DeviceTableProps) {
  const [selectedDevice, setSelectedDevice] = useState<Device | null>(null);

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b text-left text-sm font-medium text-gray-600">
            <th className="px-6 py-4">Nome</th>
            <th className="px-6 py-4">Idoso</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4">Última Medição</th>
            <th className="px-6 py-4">BPM</th>
            <th className="px-6 py-4">SpO₂</th>
            <th className="px-6 py-4 text-right">Ações</th>
          </tr>
        </thead>
        <tbody>
          {devices.map((device) => (
            <tr key={device.id} className="border-b hover:bg-gray-50">
              <td className="px-6 py-4 font-medium text-gray-900">{device.name}</td>
              <td className="px-6 py-4 text-gray-600">{device.elderlyName}</td>
              <td className="px-6 py-4">
                <Badge variant={getStatusVariant(device.status)}>
                  {getStatusLabel(device.status)}
                </Badge>
              </td>
              <td className="px-6 py-4 text-gray-600">{device.lastMeasurement}</td>
              <td className="px-6 py-4 text-gray-700">{device.bpm}</td>
              <td className="px-6 py-4 text-gray-700">{device.spo2}%</td>
              <td className="px-6 py-4 text-right">
                <Button variant="ghost" size="sm" onClick={() => setSelectedDevice(device)}>
                  <Eye className="h-4 w-4" />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedDevice && (
        <DeviceModal
          device={selectedDevice}
          onClose={() => setSelectedDevice(null)}
          onUpdate={onUpdate}
        />
      )}
    </div>
  );
}
