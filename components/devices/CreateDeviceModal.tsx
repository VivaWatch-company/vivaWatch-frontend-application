'use client';

import { useState } from 'react';
import { Device } from '@/types';
import { Button } from '@/components/ui/Button';
import { X } from '@/components/ui/Icons';

interface CreateDeviceModalProps {
  onClose: () => void;
  onCreate: (newDevice: Partial<Device>) => void;
  elderlyList: { id: string; name: string }[];
}

export function CreateDeviceModal({ onClose, onCreate, elderlyList }: CreateDeviceModalProps) {
  const [name, setName] = useState('');
  const [elderlyId, setElderlyId] = useState('');

  const handleCreate = () => {
    if (!name || !elderlyId) return;

    const elderlyName = elderlyList.find(e => e.id === elderlyId)?.name || 'Não encontrado';

    onCreate({
      name,
      elderlyName,
      status: 'desconectado',
      lastMeasurement: 'Agora',
      bpm: 0,
      spo2: 0,
      measurements: [],
      elderlyInfo: { name: elderlyName, age: 0, medicalHistory: '' },
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Novo Dispositivo</h2>
            <button
              onClick={onClose}
              className="rounded-lg p-2 hover:bg-gray-100 transition"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>

          <div className="space-y-5">
            {/* Nome do Dispositivo */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Nome do Dispositivo
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="ex: VivaWatch-005"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
              />
            </div>

            {/* Selecionar Idoso */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Vincular ao Idoso
              </label>
              <select
                value={elderlyId}
                onChange={(e) => setElderlyId(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
              >
                <option value="">Selecione um idoso</option>
                {elderlyList.map((elderly) => (
                  <option key={elderly.id} value={elderly.id}>
                    {elderly.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Botões */}
            <div className="flex gap-3 pt-4">
              <Button variant="ghost" onClick={onClose} className="flex-1">
                Cancelar
              </Button>
              <Button onClick={handleCreate} className="flex-1" disabled={!name || !elderlyId}>
                Criar Dispositivo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}