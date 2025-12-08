// components/devices/DeviceModal.tsx
'use client';

import { useState } from 'react';
import { Device} from '@/types';
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
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      <div
        className="absolute inset-0 flex items-center justify-center p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full max-w-3xl rounded-2xl bg-white shadow-2xl">
          <div className="flex items-center justify-between border-b p-6">
            <h2 className="text-2xl font-bold text-gray-900">{device.name}</h2>
            <button
              onClick={onClose}
              className="rounded-lg p-2 hover:bg-gray-100 transition-colors"
            >
              <X className="h-6 w-6 text-gray-500" />
            </button>
          </div>

          <div className="flex border-b bg-gray-50">
            <button
              onClick={() => setActiveTab('device')}
              className={cn(
                'flex-1 px-6 py-4 text-sm font-medium transition-colors',
                activeTab === 'device'
                  ? 'border-b-2 border-blue-600 text-blue-600 font-semibold'
                  : 'text-gray-600 hover:text-gray-900'
              )}
            >
              Detalhes do Dispositivo
            </button>
            <button
              onClick={() => setActiveTab('elderly')}
              className={cn(
                'flex-1 px-6 py-4 text-sm font-medium transition-colors',
                activeTab === 'elderly'
                  ? 'border-b-2 border-blue-600 text-blue-600 font-semibold'
                  : 'text-gray-600 hover:text-gray-900'
              )}
            >
              Informações do Idoso
            </button>
          </div>

          <div className="max-h-[70vh] overflow-y-auto p-6">
            {activeTab === 'device' ? (
              <div className="space-y-5">
          
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
                  <input
                    type="text"
                    value={editedInfo.name}
                    onChange={(e) => setEditedInfo({ ...editedInfo, name: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 
                    text-gray-900 font-semibold 
                    focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Idade</label>
                  <input
                    type="number"
                    value={editedInfo.age}
                    onChange={(e) => setEditedInfo({ ...editedInfo, age: Number(e.target.value) })}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 
                    text-gray-900 font-semibold 
                    focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Histórico Médico</label>
                  <textarea
                    value={editedInfo.medicalHistory}
                    onChange={(e) => setEditedInfo({ ...editedInfo, medicalHistory: e.target.value })}
                    rows={5}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 
                    text-gray-900 font-semibold 
                    focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition"
                  />
                </div>

                <div className="flex gap-4 pt-4">
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