export function StatCard({
  title,
  value,
  color,
}: {
  title: string;
  value: string;
  color?: "green" | "red" | "blue";
}) {
  const colorMap = {
    green: "text-green-400",
    red: "text-red-400",
    blue: "text-blue-400",
  };

  return (
    <div className="p-5 rounded-2xl border border-zinc-800 bg-zinc-900/50 backdrop-blur">
      <p className="text-sm text-zinc-400">{title}</p>
      <h3
        className={`text-xl font-semibold mt-1 ${
          color ? colorMap[color] : "text-white"
        }`}
      >
        {value}
      </h3>
    </div>
  );
}