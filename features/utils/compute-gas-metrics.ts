import { NormalizedTransaction } from "../wallet-analyzer/types/transaction.types";

export function computeGasMetrics(
  txs: NormalizedTransaction[]
) {
  const gasValues = txs
    .map((tx) => tx.gasFee || 0)
    .filter((v) => v > 0);

  const total = gasValues.reduce((a, b) => a + b, 0);

  return {
    total,
    average: gasValues.length ? total / gasValues.length : 0,
    highest: gasValues.length ? Math.max(...gasValues) : 0,
  };
}