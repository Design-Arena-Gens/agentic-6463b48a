import Image from "next/image";
import { CategoryBadge } from "./category-badge";
import type { TrendingProduct } from "../lib/producthunt";

interface ProductCardProps {
  product: TrendingProduct & { inferredCategory?: string };
  index: number;
}

const formatLaunchTime = (iso: string) => {
  try {
    const date = new Date(iso);
    const dtf = new Intl.DateTimeFormat("en", {
      month: "short",
      day: "numeric"
    });
    return dtf.format(date);
  } catch {
    return "Recent";
  }
};

export function ProductCard({ product, index }: ProductCardProps) {
  return (
    <article className="group relative flex flex-col gap-4 overflow-hidden rounded-3xl bg-white p-6 shadow-subtle transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-center justify-between text-sm text-slate-500">
        <span className="font-semibold text-slate-700">
          #{index + 1} Launch
        </span>
        <time dateTime={product.publishedAt}>
          {formatLaunchTime(product.publishedAt)}
        </time>
      </div>

      {product.image && (
        <div className="relative h-40 overflow-hidden rounded-2xl bg-slate-100">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition duration-700 group-hover:scale-105"
            priority={index < 3}
          />
        </div>
      )}

      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-semibold text-charcoal">
          <a
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-white"
          >
            {product.title}
          </a>
        </h3>
        <p className="line-clamp-3 text-sm leading-relaxed text-slate-600">
          {product.summary}
        </p>
      </div>

      <div className="mt-auto flex flex-wrap gap-2">
        {product.inferredCategory && (
          <CategoryBadge label={product.inferredCategory} />
        )}
        {product.categories
          .filter((category) => category !== product.inferredCategory)
          .slice(0, 2)
          .map((category) => (
            <CategoryBadge key={category} label={category} />
          ))}
      </div>
    </article>
  );
}
