"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export function FlowChart({ data }: any) {
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />

          <XAxis dataKey="date" stroke="#a1a1aa" />
          <YAxis stroke="#a1a1aa" />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="inflow"
            stroke="#22c55e"
            fill="#22c55e33"
          />

          <Area
            type="monotone"
            dataKey="outflow"
            stroke="#ef4444"
            fill="#ef444433"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}