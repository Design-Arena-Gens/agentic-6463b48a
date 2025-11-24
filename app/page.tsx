import Link from "next/link";
import { fetchTrendingProducts } from "../lib/producthunt";
import { generateInsights, withInferredCategories } from "../lib/insights";
import { ProductCard } from "../components/product-card";
import { CategoryBadge } from "../components/category-badge";
import { InsightPanel } from "../components/insight-panel";

function Hero() {
  return (
    <header className="mx-auto max-w-6xl space-y-6 px-6 pb-12 pt-16 text-center sm:pt-24">
      <CategoryBadge label="Live Intelligence" />
      <h1 className="mx-auto font-semibold text-charcoal sm:text-5xl md:text-6xl lg:text-7xl">
        Trending Digital Products Radar
      </h1>
      <p className="mx-auto max-w-3xl text-lg text-slate-600 sm:text-xl">
        Daily feed of digital products gaining momentum across Product Hunt.
        Track the builders, categories, and narratives surfacing right now with
        synthesized market intelligence.
      </p>
      <div className="flex flex-wrap justify-center gap-3 text-sm text-slate-500">
        <span>Source: Product Hunt Trending Feed</span>
        <span>&middot;</span>
        <span>Refresh cadence: hourly</span>
        <span>&middot;</span>
        <span>Curated by: Autonomous Research Agent</span>
      </div>
    </header>
  );
}

export default async function Page() {
  const products = await fetchTrendingProducts();
  const categorized = withInferredCategories(products);
  const insights = generateInsights(products);

  return (
    <main className="bg-mist pb-24">
      <Hero />

      <section className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <div className="grid gap-6 lg:grid-cols-[1.6fr,1fr] lg:gap-10">
          <div className="grid gap-6">
            {categorized.slice(0, 12).map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <aside className="space-y-6">
            <InsightPanel insights={insights} />

            <section className="rounded-3xl bg-white p-6 shadow-subtle">
              <h2 className="text-lg font-semibold text-charcoal">
                How to leverage this report
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                <li>
                  <strong>Investors:</strong> Track categories that are heating
                  up and scout founders before they accelerate.
                </li>
                <li>
                  <strong>Founders:</strong> Identify whitespace by spotting
                  overlooked segments and positioning gaps.
                </li>
                <li>
                  <strong>Product teams:</strong> Benchmark emerging features,
                  pricing strategies, and GTM narratives.
                </li>
              </ul>
              <div className="mt-6 rounded-2xl bg-slate-900 px-5 py-4 text-slate-100">
                <p className="text-sm">
                  Need deeper diligence on a specific category?{" "}
                  <Link
                    href="mailto:research@digitalintel.ai"
                    className="font-semibold text-indigo-300 underline underline-offset-4"
                  >
                    Request a focused brief.
                  </Link>
                </p>
              </div>
            </section>
          </aside>
        </div>

        <section className="rounded-3xl border border-slate-200 bg-white p-10 shadow-subtle">
          <div className="grid gap-8 md:grid-cols-[1.1fr,1fr] md:gap-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-charcoal sm:text-3xl">
                Emerging narratives to monitor
              </h2>
              <p className="text-base text-slate-600">
                These opportunity spaces appear repeatedly across the latest
                launches. Consider how they connect to your roadmap, brand
                positioning, or deal pipeline.
              </p>
              <ol className="list-decimal space-y-3 pl-5 text-slate-600">
                <li>
                  Compound AI agents assisting professionals in niche verticals
                  (finance ops, sales engineering, content marketing).
                </li>
                <li>
                  Creator economy infrastructure shifting toward bundled
                  toolkits and monetization guardrails.
                </li>
                <li>
                  Cross-channel analytics suites consolidating marketing signal
                  across paid, organic, and community sources.
                </li>
                <li>
                  Responsible data and compliance controls embedded at launch,
                  especially for privacy-sensitive industries.
                </li>
              </ol>
            </div>

            <div className="rounded-2xl bg-slate-900 p-8 text-slate-50">
              <h3 className="text-lg font-semibold">
                Signal calibration methodology
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-200">
                We parse the Product Hunt trending feed, normalize metadata, and
                infer thematic categories using keyword clustering. Launch
                momentum aggregates daily counts while qualitative commentary
                highlights standout signals.
              </p>
              <p className="mt-5 text-xs uppercase tracking-widest text-indigo-300">
                Coverage snapshot
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>• Average launches tracked per day: {insights.recentMomentum.reduce((sum, entry) => sum + entry.count, 0)}</li>
                <li>• Dominant category: {insights.categoryLeaders[0]?.category ?? "Mixed"}</li>
                <li>• Data freshness: &lt; 1 hour</li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
