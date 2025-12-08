// components/devices/CreateDeviceModal.tsx
'use client';

import { useState } from 'react';
import { Device } from '@/types';
import { Button } from '@/components/ui/Button';
import { X } from '@/components/ui/Icons';
import { cn } from '@/lib/utils';

interface CreateDeviceModalProps {
  onClose: () => void;
  onCreate: (newDevice: Partial<Device>) => void;
  elderlyList: { id: string; name: string }[];
}

export function CreateDeviceModal({ onClose, onCreate, elderlyList }: CreateDeviceModalProps) {
  const [name, setName] = useState('');
  const [elderlyId, setElderlyId] = useState('');

  const isValid = name.trim() !== '' && elderlyId !== '';

  const handleCreate = () => {
    if (!isValid) return;

    const elderlyName = elderlyList.find((e) => e.id === elderlyId)?.name || 'Não encontrado';

    onCreate({
      name,
      elderlyName,
      status: 'desconectado' as const,
      lastMeasurement: 'Agora',
      bpm: 0,
      spo2: 0,
      measurements: [],
      elderlyInfo: { name: elderlyName, age: 0, medicalHistory: '' },
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Modal */}
      <div
        className="absolute inset-0 flex items-center justify-center p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Novo Dispositivo</h2>
            <button
              onClick={onClose}
              className="rounded-lg p-2 hover:bg-gray-100 transition-colors"
            >
              <X className="h-6 w-6 text-gray-500" />
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nome do Dispositivo
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="ex: VivaWatch-005"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 
                text-gray-900 font-semibold 
                focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Vincular ao Idoso
              </label>
              <select
                value={elderlyId}
                onChange={(e) => setElderlyId(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 
                text-gray-900 font-semibold 
                focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition"
              >
                <option value="">Selecione um idoso</option>
                {elderlyList.map((e) => (
                  <option key={e.id} value={e.id}>
                    {e.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex gap-4 pt-6">
              <Button variant="ghost" onClick={onClose} className="flex-1">
                Cancelar
              </Button>
              <Button
                onClick={handleCreate}
                disabled={!isValid}
                className={cn('flex-1', !isValid && 'opacity-60 cursor-not-allowed')}
              >
                Criar Dispositivo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}