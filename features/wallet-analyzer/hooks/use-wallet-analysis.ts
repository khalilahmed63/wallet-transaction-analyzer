import { useMemo } from "react";
import { NormalizedTransaction } from "../types/transaction.types";
import { computeFlowMetrics } from "@/features/utils/compute-flow-metrics";
import { computeGasMetrics } from "@/features/utils/compute-gas-metrics";

export function useWalletAnalysis(
  txs?: NormalizedTransaction[]
) {
  return useMemo(() => {
    if (!txs) return null;

    const flow = computeFlowMetrics(txs);
    const gas = computeGasMetrics(txs);

    return {
      flow,
      gas,
    };
  }, [txs]);
}