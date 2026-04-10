export function TopCounterparties({ data }: any) {
  return (
    <div className="mt-6">
      <h3 className="text-white font-semibold mb-2">
        Top Counterparties
      </h3>

      {data.map((cp: any) => (
        <div key={cp.address} className="text-sm text-zinc-400">
          {cp.address.slice(0, 6)}... ({cp.count})
        </div>
      ))}
    </div>
  );
}