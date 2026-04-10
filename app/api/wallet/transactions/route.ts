import { NextRequest, NextResponse } from "next/server";
import { getWalletTransactions } from "@/server/wallet/get-wallet-transactions";

export async function GET(req: NextRequest) {
  const address = req.nextUrl.searchParams.get("address");
  const cursor = req.nextUrl.searchParams.get("cursor");
  const chain = req.nextUrl.searchParams.get("chain") || "0x2105";

  if (!address) {
    return NextResponse.json(
      { error: "Address is required" },
      { status: 400 }
    );
  }

const data = await getWalletTransactions({
  address,
  cursor: cursor || undefined,
  chain,
});

  return NextResponse.json(data);
}