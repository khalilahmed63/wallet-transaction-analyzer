import { NormalizedTransaction } from "../wallet-analyzer/types/transaction.types";

export function getLargestTransactions(
  txs: NormalizedTransaction[],
  limit = 5
) {
  const sorted = [...txs].sort((a, b) => b.value - a.value);

  return {
    incoming: sorted.filter((tx) => tx.direction === "in").slice(0, limit),
    outgoing: sorted.filter((tx) => tx.direction === "out").slice(0, limit),
  };
}