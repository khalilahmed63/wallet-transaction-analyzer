import { NormalizedTransaction } from "../wallet-analyzer/types/transaction.types";

export function groupTransactionsByDate(
  txs: NormalizedTransaction[]
) {
  const map = new Map<
    string,
    { date: string; inflow: number; outflow: number; count: number }
  >();

  for (const tx of txs) {
    const date = new Date(tx.timestamp).toISOString().split("T")[0];

    if (!map.has(date)) {
      map.set(date, {
        date,
        inflow: 0,
        outflow: 0,
        count: 0,
      });
    }

    const entry = map.get(date)!;

    entry.count += 1;

    if (tx.direction === "in") {
      entry.inflow += tx.value;
    } else {
      entry.outflow += tx.value;
    }
  }

  return Array.from(map.values()).sort((a, b) =>
    a.date.localeCompare(b.date)
  );
}