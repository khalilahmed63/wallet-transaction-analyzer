"use client";

import Image from "next/image";
import { CHAINS } from "@/features/wallet-analyzer/constants/chains";

export function ChainSelector({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex gap-2 flex-wrap">
      {CHAINS.map((chain) => (
        <button
          key={chain.id}
          onClick={() => onChange(chain.id)}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition ${
            value === chain.id
              ? "bg-blue-600 text-white"
              : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
          }`}
        >
          <Image
            src={chain.icon}
            alt={chain.name}
            width={24}
            height={24}
          />
          {chain.name}
        </button>
      ))}
    </div>
  );
}