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
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm transition backdrop-blur border ${
            value === chain.id
              ? "bg-linear-to-br from-blue-500/20 to-green-500/20 text-white border-blue-500/30 shadow-lg shadow-blue-500/20"
              : "bg-zinc-900/40 text-zinc-400 border-zinc-800 hover:bg-zinc-800/60 hover:text-white"
          }`}
        >
          <Image
            src={chain.icon}
            alt={chain.name}
            width={20}
            height={20}
            className="rounded-full"
          />
          {chain.name}
        </button>
      ))}
    </div>
  );
}