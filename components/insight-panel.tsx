import { CategoryBadge } from "./category-badge";
import type { Insights } from "../lib/insights";

interface InsightPanelProps {
  insights: Insights;
}

export function InsightPanel({ insights }: InsightPanelProps) {
  return (
    <section className="accent-border relative overflow-hidden rounded-3xl bg-white/90 p-8 shadow-subtle backdrop-blur">
      <div className="mb-6 flex flex-col gap-2">
        <span className="text-xs font-semibold uppercase tracking-widest text-accent-dark">
          Market Intelligence
        </span>
        <h2 className="text-3xl font-semibold text-charcoal sm:text-4xl">
          {insights.headline}
        </h2>
        <p className="text-sm text-slate-500">
          Updated {new Date(insights.generatedAt).toLocaleString(undefined, { hour: "numeric", minute: "2-digit" })}
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.3fr,1fr]">
        <div className="space-y-4">
          {insights.commentary.map((line) => (
            <p key={line} className="text-base leading-relaxed text-slate-600">
              {line}
            </p>
          ))}
        </div>

        <div className="space-y-6 rounded-2xl bg-slate-50 p-6">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500">
              Category Leaders
            </h3>
            <ul className="mt-3 space-y-2">
              {insights.categoryLeaders.map((entry) => (
                <li
                  key={entry.category}
                  className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-2"
                >
                  <CategoryBadge label={entry.category} />
                  <span className="text-sm text-slate-500">
                    {entry.count} &middot; {entry.percentage}%
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500">
              Launch Momentum (7d)
            </h3>
            <ul className="mt-3 flex flex-col gap-2">
              {insights.recentMomentum.map((entry) => (
                <li
                  key={entry.date}
                  className="flex items-center justify-between rounded-xl bg-white px-3 py-2 text-sm text-slate-600"
                >
                  <span>{entry.date}</span>
                  <span>{entry.count} launches</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
