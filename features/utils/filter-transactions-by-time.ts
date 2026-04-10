import { NormalizedTransaction } from "../wallet-analyzer/types/transaction.types";

export function filterTransactionsByTime(
  txs: NormalizedTransaction[],
  range: "7d" | "30d" | "90d"
) {
  const now = new Date();

  const daysMap = {
    "7d": 7,
    "30d": 30,
    "90d": 90,
  };

  const cutoff = new Date();
  cutoff.setDate(now.getDate() - daysMap[range]);

  return txs.filter(
    (tx) => new Date(tx.timestamp) >= cutoff
  );
}