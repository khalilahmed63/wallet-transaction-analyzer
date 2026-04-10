import { useMemo } from "react";
import { NormalizedTransaction } from "../types/transaction.types";
import { filterTransactionsByTime } from "@/features/utils/filter-transactions-by-time";
import { groupTransactionsByDate } from "@/features/utils/group-transactions-by-date";

export function useWalletChartData(
  txs: NormalizedTransaction[] | undefined,
  range: "7d" | "30d" | "90d"
) {
  return useMemo(() => {
    if (!txs) return [];

    const filtered = filterTransactionsByTime(txs, range);

    return groupTransactionsByDate(filtered);
  }, [txs, range]);
}