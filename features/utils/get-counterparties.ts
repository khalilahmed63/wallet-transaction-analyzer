import { NormalizedTransaction } from "../wallet-analyzer/types/transaction.types";

export function getTopCounterparties(
  txs: NormalizedTransaction[],
  limit = 5
) {
  const map = new Map<string, number>();

  for (const tx of txs) {
    if (!tx.counterparty) continue;

    const count = map.get(tx.counterparty) || 0;
    map.set(tx.counterparty, count + 1);
  }

  return Array.from(map.entries())
    .map(([address, count]) => ({ address, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, limit);
}