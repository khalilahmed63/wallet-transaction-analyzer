import { NormalizedTransaction } from "@/features/wallet-analyzer/types/transaction.types";

export function mapMoralisTx(
  tx: any,
  walletAddress: string
): NormalizedTransaction {
  const isIncoming =
    tx.to_address?.toLowerCase() === walletAddress.toLowerCase();

  return {
    hash: tx.hash,
    timestamp: new Date(tx.block_timestamp).toISOString(),

    from: tx.from_address,
    to: tx.to_address,

    direction: isIncoming ? "in" : "out",

    assetSymbol: tx.native_transfers?.[0]?.symbol || "ETH",
    assetType: tx.category === "erc20" ? "erc20" : "native",

    value: Number(tx.value || 0) / 1e18, // normalize

    gasFee:
      (Number(tx.gas_price || 0) * Number(tx.receipt_gas_used || 0)) /
      1e18,

    status: tx.receipt_status === "1" ? "success" : "failed",

    counterparty: isIncoming ? tx.from_address : tx.to_address,
  };
}