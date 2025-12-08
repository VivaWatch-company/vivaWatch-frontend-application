'use client';

import { useState } from 'react';
import { Device } from '@/types';
import { Button } from '@/components/ui/Button';
import { X } from '@/components/ui/Icons';
import { cn } from '@/lib/utils';

interface DeviceModalProps {
  device: Device;
  onClose: () => void;
  onUpdate: (updated: Device) => void;
}

export function DeviceModal({ device, onClose, onUpdate }: DeviceModalProps) {
  const [activeTab, setActiveTab] = useState<'device' | 'elderly'>('device');
  const [editedInfo, setEditedInfo] = useState(device.elderlyInfo);

  const handleSave = () => {
    onUpdate({ ...device, elderlyInfo: editedInfo });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />

      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-3xl rounded-2xl bg-white shadow-2xl">
          <div className="flex items-center justify-between border-b p-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {device.name}
            </h2>
            <button
              onClick={onClose}
              className="rounded-lg p-2 hover:bg-gray-100 transition"
            >
              <X className="h-6 w-6 text-gray-500" />
            </button>
          </div>

          <div className="flex border-b">
            <button
              onClick={() => setActiveTab('device')}
              className={cn(
                'flex-1 px-6 py-4 text-sm font-medium transition',
                activeTab === 'device'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              )}
            >
              Detalhes do Dispositivo
            </button>
            <button
              onClick={() => setActiveTab('elderly')}
              className={cn(
                'flex-1 px-6 py-4 text-sm font-medium transition',
                activeTab === 'elderly'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              )}
            >
              Informações do Idoso
            </button>
          </div>

          <div className="p-6">
            {activeTab === 'device' ? (
              <div className="space-y-4">
                <div>
                  <span className="font-medium text-gray-600">Serial:</span>{' '}
                  <span className="text-gray-900">{device.id}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-600">Tipo:</span>{' '}
                  <span className="text-gray-900">Pulseira VivaWatch</span>
                </div>
                <div>
                  <span className="font-medium text-gray-600">Status:</span>{' '}
                  <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium">
                    {device.status === 'ativo' && (
                      <span className="h-2 w-2 rounded-full bg-green-500 mr-2" />
                    )}
                    {device.status === 'alerta' && (
                      <span className="h-2 w-2 rounded-full bg-yellow-500 mr-2" />
                    )}
                    {device.status === 'desconectado' && (
                      <span className="h-2 w-2 rounded-full bg-gray-400 mr-2" />
                    )}
                    {device.status.charAt(0).toUpperCase() + device.status.slice(1)}
                  </span>
                </div>

                <div className="mt-6">
                  <h3 className="mb-3 text-lg font-semibold">Últimas Medições</h3>
                  {device.measurements.length === 0 ? (
                    <p className="text-gray-500">Nenhuma medição registrada</p>
                  ) : (
                    <div className="space-y-2">
                      {device.measurements.map((m, i) => (
                        <div key={i} className="flex justify-between rounded-lg bg-gray-50 p-3">
                          <span className="font-medium">{m.time}</span>
                          <span>BPM: {m.bpm} • SpO₂: {m.spo2}%</span>
                          {m.alert && <span className="text-red-600">{m.alert}</span>}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nome</label>
                  <input
                    type="text"
                    value={editedInfo.name}
                    onChange={(e) => setEditedInfo({ ...editedInfo, name: e.target.value })}
                    className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Idade</label>
                  <input
                    type="number"
                    value={editedInfo.age}
                    onChange={(e) => setEditedInfo({ ...editedInfo, age: Number(e.target.value) })}
                    className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Histórico Médico</label>
                  <textarea
                    value={editedInfo.medicalHistory}
                    onChange={(e) => setEditedInfo({ ...editedInfo, medicalHistory: e.target.value })}
                    rows={4}
                    className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none resize-none"
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <Button variant="ghost" onClick={onClose} className="flex-1">
                    Cancelar
                  </Button>
                  <Button onClick={handleSave} className="flex-1">
                    Salvar Alterações
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}