"use client";

export function TimeFilter({
  value,
  onChange,
}: {
  value: "7d" | "30d" | "90d";
  onChange: (v: "7d" | "30d" | "90d") => void;
}) {
  const options: ("7d" | "30d" | "90d")[] = ["7d", "30d", "90d"];

  return (
    <div className="flex gap-2">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onChange(opt)}
          className={`px-3 py-1.5 rounded-lg text-sm transition ${
            value === opt
              ? "bg-blue-600 text-white"
              : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
          }`}
        >
          {opt.toUpperCase()}
        </button>
      ))}
    </div>
  );
}