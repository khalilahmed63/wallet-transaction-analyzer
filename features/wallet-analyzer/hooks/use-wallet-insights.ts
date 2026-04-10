import { useMemo } from "react";
import { NormalizedTransaction } from "../types/transaction.types";
import { classifyWalletBehavior } from "@/features/utils/classify-wallet-behavior";
import { getTopCounterparties } from "@/features/utils/get-counterparties";
import { getLargestTransactions } from "@/features/utils/get-largest-transactions";

export function useWalletInsights(
  txs?: NormalizedTransaction[]
) {
  return useMemo(() => {
    if (!txs) return null;

    return {
      largest: getLargestTransactions(txs),
      counterparties: getTopCounterparties(txs),
      behavior: classifyWalletBehavior(txs),
    };
  }, [txs]);
}