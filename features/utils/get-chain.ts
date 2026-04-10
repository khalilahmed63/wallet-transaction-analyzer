import { CHAINS } from "../wallet-analyzer/constants/chains";

export function getChain(chainId: string) {
  return CHAINS.find((c) => c.id === chainId);
}