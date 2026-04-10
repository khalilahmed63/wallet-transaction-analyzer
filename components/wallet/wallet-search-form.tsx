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
      <input
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Enter wallet address (0x...)"
        className="flex-1 px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
      />

      <button
        onClick={() => onSearch(address)}
        className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-medium"
      >
        Analyze
      </button>
    </div>
  );
}