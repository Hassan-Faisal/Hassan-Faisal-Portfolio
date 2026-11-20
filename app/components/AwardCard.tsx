import { Trophy } from "lucide-react";

import Reveal from "./Reveal";
import { award } from "../lib/profile";

export default function AwardCard() {
  return (
    <Reveal>
      <article className="relative overflow-hidden rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-50 via-white to-white p-7 dark:border-orange-900 dark:from-orange-950/30 dark:via-stone-950 dark:to-stone-950 sm:p-8">
        <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-orange-100/50 blur-2xl dark:bg-orange-900/20" />

        <div className="relative">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-3 py-1 font-mono text-[0.68rem] font-semibold uppercase tracking-widest text-white">
              <Trophy size={12} /> Award
            </span>
            <span className="font-mono text-xs text-stone-400">
              {award.date}
            </span>
          </div>

          <h3 className="mt-4 font-display text-xl font-bold leading-tight sm:text-2xl">
            Best Product Award &{" "}
            <span className="text-gradient">2nd Place Overall</span>
          </h3>
          <p className="mt-1.5 font-medium text-stone-500 dark:text-stone-400">
            {award.program}
          </p>

          <div className="mt-6 grid gap-4 border-t border-orange-100 pt-5 dark:border-orange-900/50 sm:grid-cols-3">
            {award.highlights.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-3">
                <Icon className="mt-0.5 shrink-0 text-orange-500 dark:text-orange-400" size={16} />
                <div>
                  <p className="font-mono text-[0.65rem] uppercase tracking-widest text-stone-400">
                    {label}
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-stone-700 dark:text-stone-200">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-5 text-sm leading-relaxed text-stone-500 dark:text-stone-400">
            {award.body}
          </p>
        </div>
      </article>
    </Reveal>
  );
}
