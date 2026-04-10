export type NormalizedTransaction = {
  hash: `0x${string}`;
  timestamp: string;

  from: string;
  to: string;

  direction: "in" | "out";

  assetSymbol: string;
  assetType: "native" | "erc20";

  value: number;

  gasFee?: number;

  status: "success" | "failed";

  counterparty: string;
};