import { StatCard } from "@/components/common/stat-card";

export function AnalyticsCards({
  inflow,
  outflow,
  net,
  gas,
}: {
  inflow: number;
  outflow: number;
  net: number;
  gas: number;
}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
      <StatCard
        title="Total Inflow"
        value={`${inflow.toFixed(2)} ETH`}
        color="green"
      />

      <StatCard
        title="Total Outflow"
        value={`${outflow.toFixed(2)} ETH`}
        color="red"
      />

      <StatCard
        title="Net Flow"
        value={`${net.toFixed(2)} ETH`}
        color={net >= 0 ? "green" : "red"}
      />

      <StatCard
        title="Gas Spent"
        value={`${gas.toFixed(4)} ETH`}
        color="blue"
      />
    </div>
  );
}