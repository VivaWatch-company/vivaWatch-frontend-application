'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface VitalSignsChartProps {
  data: { time: string; bpm: number; spo2: number }[];
}

export function VitalSignsChart({ data }: VitalSignsChartProps) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900">Sinais Vitais - Últimas 24h</h3>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis domain={[50, 100]} />
          <Tooltip />
          <Line type="monotone" dataKey="bpm" stroke="#3b82f6" name="BPM" />
          <Line type="monotone" dataKey="spo2" stroke="#22c55e" name="SpO2" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}