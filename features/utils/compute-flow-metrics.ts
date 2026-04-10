import { NormalizedTransaction } from "../wallet-analyzer/types/transaction.types";

export function computeFlowMetrics(
  txs: NormalizedTransaction[]
) {
  let inflow = 0;
  let outflow = 0;

  for (const tx of txs) {
    if (tx.direction === "in") {
      inflow += tx.value;
    } else {
      outflow += tx.value;
    }
  }

  return {
    inflow,
    outflow,
    net: inflow - outflow,
  };
}