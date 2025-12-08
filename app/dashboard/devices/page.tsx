'use client';  

import { Device } from '@/types';
import { useState, useEffect } from 'react';
import { mockDevices } from '@/data/mockDevices';
import { DeviceTable } from '@/components/devices/DeviceTable';
import { CreateDeviceModal } from '@/components/devices/CreateDeviceModal';
import { Button } from '@/components/ui/Button';

export default function DevicesPage() {
  const [devices, setDevices] = useState(mockDevices);
  const [showCreateModal, setShowCreateModal] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setDevices((prev) => prev.map(d => ({ ...d, bpm: d.bpm + Math.floor(Math.random() * 5 - 2) })));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleUpdate = (updated: Device) => {
    setDevices(devices.map(d => d.id === updated.id ? updated : d));
  };

  const handleCreate = (newDevice: Partial<Device>) => {
    setDevices([...devices, { ...newDevice, id: Date.now().toString(), status: 'desconectado', lastMeasurement: 'Agora', bpm: 0, spo2: 0, measurements: [], elderlyInfo: { name: '', age: 0, medicalHistory: '' } } as Device]);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Dispositivos</h2>
          <p className="text-gray-700">Gerencie e monitore todos os dispositivos</p>
        </div>
        <Button onClick={() => setShowCreateModal(true)}>+ Novo Dispositivo</Button>
      </div>

      <DeviceTable devices={devices} onUpdate={handleUpdate} />

      {showCreateModal && (
        <CreateDeviceModal
          onClose={() => setShowCreateModal(false)}
          onCreate={handleCreate}
          elderlyList={[{ id: '1', name: 'Dona Maria' }, { id: '2', name: 'Dona Joana' }]}  // mock de idosos
        />
      )}
    </div>
  );
}