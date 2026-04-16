import { NormalizedTransaction } from "@/features/wallet-analyzer/types/transaction.types";

export function TransactionTable({
    data,
}: {
    data: NormalizedTransaction[];
}) {
    return (
        <div className="mt-6 border border-zinc-800 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
                <thead className="bg-zinc-900 text-zinc-400">
                    <tr>
                        <th className="p-3 text-left">Type</th>
                        <th className="p-3 text-left">Value</th>
                        <th className="p-3 text-left">Token</th>
                        <th className="p-3 text-left">Counterparty</th>
                        <th className="p-3 text-left">Time</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((tx) => (
                        <tr
                            key={tx.hash}
                            className="border-t border-zinc-800 hover:bg-zinc-900/50 transition"
                        >
                            <td className="p-3">
                                <span
                                    className={`px-2 py-1 rounded text-xs ${tx.direction === "in"
                                        ? "bg-green-900 text-green-400"
                                        : "bg-red-900 text-red-400"
                                        }`}
                                >
                                    {tx.direction}
                                </span>
                            </td>

                            <td className="p-3">{tx.value.toFixed(4)}</td>
                            <td className="p-3">{tx.assetSymbol}</td>
                            <td className="p-3">
                                {tx?.counterparty && tx?.counterparty?.slice(0, 6)}...
                            </td>
                            <td className="p-3">
                                {tx.timestamp && new Date(tx.timestamp).toLocaleDateString()}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}