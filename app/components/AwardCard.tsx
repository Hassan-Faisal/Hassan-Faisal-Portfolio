import { Award, BriefcaseBusiness, Trophy } from "lucide-react";

import Reveal from "./Reveal";
import { award } from "../lib/profile";

export default function AwardCard() {
  return (
    <Reveal>
      <article className="relative overflow-hidden rounded-3xl border border-amber/30 bg-gradient-to-br from-ember/[0.14] via-panel to-panel p-8 shadow-glow sm:p-9">
        <div className="aurora right-[-3rem] top-[-3rem] h-56 w-56 bg-ember/25" />
        <div className="relative z-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-flame-grad px-3 py-1 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-void">
              <Trophy size={13} /> Award
            </span>
            <span className="font-mono text-xs text-white/50">{award.date}</span>
          </div>

          <h3 className="mt-5 font-display text-2xl font-bold leading-tight sm:text-3xl">
            Best Product Award &amp;{" "}
            <span className="text-gradient">2nd Place Overall</span>
          </h3>
          <p className="mt-2 font-medium text-white/65">{award.program}</p>

          <div className="mt-7 grid gap-5 border-t border-white/12 pt-6 sm:grid-cols-3">
            {award.highlights.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-3">
                <Icon className="mt-0.5 shrink-0 text-ember" size={17} />
                <div>
                  <p className="mono-tag uppercase tracking-[0.12em] text-white/40">
                    {label}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white/90">{value}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm leading-7 text-white/60">{award.body}</p>
        </div>
      </article>
    </Reveal>
  );
}
