import { useQuery } from "@tanstack/react-query";

export function useWalletTransactions(
  address?: string,
  chain?: string
) {
  return useQuery({
    queryKey: ["wallet-transactions", address, chain],
    queryFn: async () => {
      const res = await fetch(
        `/api/wallet/transactions?address=${address}&chain=${chain}`
      );
      return res.json();
    },
    enabled: !!address && !!chain,
  });
}