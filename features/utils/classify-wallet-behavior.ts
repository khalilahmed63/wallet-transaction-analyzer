import { NormalizedTransaction } from "../wallet-analyzer/types/transaction.types";

export function classifyWalletBehavior(
  txs: NormalizedTransaction[]
) {
  const total = txs.length;

  if (total === 0) return ["inactive"];

  let incoming = 0;
  let outgoing = 0;
  let highValueTxs = 0;

  for (const tx of txs) {
    if (tx.direction === "in") incoming++;
    if (tx.direction === "out") outgoing++;

    if (tx.value > 10) highValueTxs++; // threshold (adjust later)
  }

  const tags: string[] = [];

  if (incoming > outgoing * 1.5) {
    tags.push("accumulator");
  }

  if (outgoing > incoming * 1.5) {
    tags.push("distributor");
  }

  if (highValueTxs > total * 0.3) {
    tags.push("whale activity");
  }

  if (total > 50) {
    tags.push("active wallet");
  } else {
    tags.push("low activity");
  }

  return tags;
}