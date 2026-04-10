import { initMoralis } from "@/lib/api/moralis";
import Moralis from "moralis";
import { mapMoralisTx } from "./mappers/map-moralis-tx";

export async function getWalletTransactions({
  address,
  cursor,
  chain,
}: {
  address: string;
  cursor?: string;
  chain: string;
}) {
  await initMoralis();

  const response = await Moralis.EvmApi.wallets.getWalletHistory({
    address,
    chain, // ✅ dynamic now
    cursor,
    limit: 20,
  });

  const result = response.toJSON();

  return {
    items: result.result.map((tx: any) =>
      mapMoralisTx(tx, address)
    ),
    nextCursor: result.cursor,
  };
}