type CategoryBadgeProps = {
  label: string;
};

const palette = [
  "bg-indigo-50 text-indigo-700",
  "bg-sky-50 text-sky-700",
  "bg-emerald-50 text-emerald-700",
  "bg-rose-50 text-rose-700",
  "bg-amber-50 text-amber-700",
  "bg-purple-50 text-purple-700"
];

const randomSeed = (input: string) => {
  let hash = 0;
  for (let i = 0; i < input.length; i += 1) {
    hash = (hash << 5) - hash + input.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
};

export function CategoryBadge({ label }: CategoryBadgeProps) {
  const idx = randomSeed(label) % palette.length;
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wide ${palette[idx]}`}
    >
      {label}
    </span>
  );
}
