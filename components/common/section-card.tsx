export function SectionCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border border-zinc-800 bg-zinc-900/50 rounded-2xl p-5 backdrop-blur">
      <h2 className="text-lg font-medium mb-4 text-white">
        {title}
      </h2>
      {children}
    </div>
  );
}