export function BehaviorTags({ tags }: { tags: string[] }) {
  return (
    <div className="mt-6">
      <h3 className="text-white font-semibold mb-2">
        Wallet Behavior
      </h3>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs bg-blue-900 text-blue-400 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}