export function LargestTransactions({ data }: any) {
  return (
    <div className="mt-6 grid md:grid-cols-2 gap-4">
      <div>
        <h3 className="text-white font-semibold mb-2">
          Largest Incoming
        </h3>

        {data.incoming.map((tx: any) => (
          <div key={tx.hash} className="text-sm text-green-400">
            {tx.value.toFixed(2)} {tx.assetSymbol}
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-white font-semibold mb-2">
          Largest Outgoing
        </h3>

        {data.outgoing.map((tx: any) => (
          <div key={tx.hash} className="text-sm text-red-400">
            {tx.value.toFixed(2)} {tx.assetSymbol}
          </div>
        ))}
      </div>
    </div>
  );
}