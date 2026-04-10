"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export function ActivityChart({ data }: any) {
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />

          <XAxis
            dataKey="date"
            stroke="#a1a1aa"
            tick={{ fontSize: 12 }}
          />

          <YAxis stroke="#a1a1aa" tick={{ fontSize: 12 }} />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="count"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}