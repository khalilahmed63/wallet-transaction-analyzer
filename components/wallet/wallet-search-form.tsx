"use client";

import { useState } from "react";

export function WalletSearchForm({
  onSearch,
}: {
  onSearch: (address: string) => void;
}) {
  const [address, setAddress] = useState("");

  return (
    <div className="flex gap-3">
      {/* Input */}
      <input
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Enter wallet address (0x...)"
        className="flex-1 px-4 py-3 rounded-xl 
        bg-zinc-900/40 backdrop-blur 
        border border-zinc-800 
        text-white placeholder:text-zinc-500
        focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/40
        transition"
      />

      {/* Button */}
      <button
        onClick={() => onSearch(address)}
        className="px-5 py-3 rounded-xl font-medium text-white
        bg-linear-to-br from-blue-500/30 to-green-500/30
        backdrop-blur border border-blue-500/30
        shadow-lg shadow-blue-500/20
        hover:from-blue-500/40 hover:to-green-500/40
        hover:shadow-blue-500/30
        active:scale-[0.98]
        transition"
      >
        Analyze
      </button>
    </div>
  );
}