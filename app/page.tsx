import { ArrowUpRight, ArrowRight, FileText, ScrollText, Sparkles } from "lucide-react";

import SiteNav from "./components/SiteNav";
import Reveal from "./components/Reveal";
import AgentGraph from "./components/AgentGraph";
import AwardCard from "./components/AwardCard";
import ContactSection from "./components/ContactSection";
import {
  capabilities,
  currentRole,
  documents,
  education,
  profile,
  projects,
  publications,
  tickerSkills,
  toolkit,
} from "./lib/profile";

const heroStats = [
  ["Now", "Associate AI Engineer"],
  ["Comeback Pakistan", "Best Product · 2nd"],
  ["Core stack", "Python · FastAPI"],
];

export default function EngineeringPage() {
  return (
    <main className="grain overflow-hidden bg-void text-white">
      <SiteNav variant="engineering" />

      {/* ---------------- HERO ---------------- */}
      <section id="home" className="grid-bg relative min-h-screen overflow-hidden px-5 pt-32">
        <div className="aurora left-[-6rem] top-24 h-80 w-80 bg-ember/20" />
        <div className="aurora right-[-4rem] top-40 h-96 w-96 bg-iris/20" />

        <div className="mx-auto grid min-h-[calc(100vh-9rem)] max-w-7xl items-center gap-14 py-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative z-10 max-w-2xl">
            <div
              className="fade-up mb-7 inline-flex items-center gap-2 rounded-full border border-mint/30 bg-mint/10 px-3.5 py-1.5"
              style={{ animationDelay: "80ms" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
              </span>
              <span className="mono-tag font-semibold uppercase tracking-[0.16em] text-mint">
                Associate AI Engineer · {profile.company}
              </span>
            </div>

            <p
              className="fade-up mb-3 font-mono text-sm text-white/45"
              style={{ animationDelay: "160ms" }}
            >
              {profile.name} — AI Engineer
            </p>

            <h1
              className="fade-up text-[2.7rem] font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-[4rem]"
              style={{ animationDelay: "240ms" }}
            >
              I ship AI systems that{" "}
              <span className="text-gradient">reason, retrieve,</span> and hold
              up in production.
            </h1>

            <p
              className="fade-up mt-6 max-w-xl text-lg leading-8 text-white/65"
              style={{ animationDelay: "340ms" }}
            >
              I build multi-agent architectures, RAG pipelines, and automation
              that runs on real infrastructure — LangGraph and FastAPI on the
              inside, measured with evaluation frameworks rather than vibes.
            </p>

            <div
              className="fade-up mt-8 flex flex-wrap gap-3"
              style={{ animationDelay: "440ms" }}
            >
              <a href="#work" className="btn-primary">
                See the systems <ArrowUpRight size={17} />
              </a>
              <a
                href={documents.engineering.href}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                <ScrollText size={16} /> {documents.engineering.label}
              </a>
            </div>

            <div
              className="fade-up mt-11 grid max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-7"
              style={{ animationDelay: "540ms" }}
            >
              {heroStats.map(([label, value]) => (
                <div key={label}>
                  <p className="mono-tag uppercase tracking-[0.12em] text-white/40">
                    {label}
                  </p>
                  <p className="mt-1.5 text-sm font-semibold text-white/90">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Signature: the multi-agent support system, visualised */}
          <div className="fade-up relative z-10" style={{ animationDelay: "360ms" }}>
            <div className="float-slow relative rounded-3xl border border-white/10 bg-panel/70 p-4 shadow-card backdrop-blur-sm sm:p-6">
              <div className="mb-4 flex items-center justify-between border-b border-white/8 pb-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-flame" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber" />
                  <span className="h-2.5 w-2.5 rounded-full bg-mint" />
                </div>
                <span className="mono-tag text-white/40">multi-agent support · live</span>
              </div>

              <AgentGraph />

              <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-white/8 pt-4">
                {[
                  ["bg-ember", "reasoning"],
                  ["bg-iris-2", "tool call"],
                  ["bg-mint", "retrieval"],
                ].map(([dot, label]) => (
                  <span key={label} className="flex items-center gap-2 mono-tag text-white/55">
                    <span className={`h-2 w-2 rounded-full ${dot}`} />
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="ticker-mask relative z-10 -mx-5 border-y border-white/10 bg-panel/60 py-4 backdrop-blur-sm">
          <div className="ticker-track">
            {[...tickerSkills, ...tickerSkills].map((skill, index) => (
              <span
                key={`${skill}-${index}`}
                className="flex items-center gap-8 px-8 font-mono text-sm font-medium uppercase tracking-[0.12em] text-white/80"
              >
                {skill}
                <span className="h-1.5 w-1.5 rounded-full bg-ember" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- WORK ---------------- */}
      <section id="work" className="relative bg-ink px-5 py-24 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="section-label">Selected Work</p>
              <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
                Systems I&apos;ve built
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-white/55">
              Multi-agent AI, computer-vision automation, and full-stack
              product — each with the architecture and stack that shipped it.
            </p>
          </Reveal>

          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map(
              ({ icon: Icon, title, domain, engineeringSummary, engineeringPoints, stack }, i) => (
                <Reveal key={title} delay={i * 110}>
                  <article className="card card-glow group flex h-full flex-col p-7">
                    <div className="flex items-center justify-between">
                      <div className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-ember transition group-hover:border-ember/40">
                        <Icon size={22} />
                      </div>
                      <ArrowUpRight
                        className="text-white/20 transition group-hover:text-ember"
                        size={22}
                      />
                    </div>

                    <p className="mt-7 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-amber/80">
                      {domain}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-semibold leading-snug">
                      {title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-white/60">
                      {engineeringSummary}
                    </p>

                    <ul className="mt-5 space-y-2.5">
                      {engineeringPoints.map((point) => (
                        <li
                          key={point}
                          className="flex gap-2.5 text-sm leading-6 text-white/55"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ember" />
                          {point}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto flex flex-wrap gap-1.5 pt-6">
                      {stack.map((item) => (
                        <span key={item} className="chip">
                          {item}
                        </span>
                      ))}
                    </div>
                  </article>
                </Reveal>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ---------------- CAPABILITIES ---------------- */}
      <section id="capabilities" className="grid-bg relative bg-void px-5 py-24 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal className="text-center">
            <p className="section-label justify-center">Capabilities</p>
            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold sm:text-5xl">
              What I bring to an engineering team.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {capabilities.map(({ icon: Icon, title, text, tags }, i) => (
              <Reveal key={title} delay={i * 90}>
                <article className="card card-glow h-full p-6">
                  <div className="mb-6 grid h-12 w-12 place-items-center rounded-xl border border-ember/25 bg-ember/10 text-ember">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display text-lg font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/60">{text}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {tags.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- STACK ---------------- */}
      <section id="stack" className="relative bg-ink px-5 py-24 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-12">
            <p className="section-label">Toolkit</p>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Technical stack</h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              {toolkit.map(({ label, items }) => (
                <div key={label} className="border-t border-white/12 pt-5">
                  <p className="mono-tag uppercase tracking-[0.12em] text-amber">{label}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {items.map((item) => (
                      <span key={item} className="chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- EXPERIENCE ---------------- */}
      <section id="experience" className="grid-bg relative bg-void px-5 py-24 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <Reveal className="text-center">
            <p className="section-label justify-center">Background</p>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Experience &amp; recognition
            </h2>
          </Reveal>

          <div className="mt-14">
            <AwardCard />
          </div>

          <div className="mt-4 space-y-4">
            {[currentRole, education].map((item, i) => {
              const Icon = item.icon;
              const detail =
                "previousTitle" in item ? item.previousTitle : item.detail;
              return (
                <Reveal key={item.title} delay={i * 100}>
                  <article className="card grid gap-5 p-7 md:grid-cols-[190px_1fr]">
                    <div>
                      <div className="font-mono text-sm font-medium text-ember">
                        {item.date}
                      </div>
                      <div className="mt-1.5 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-white/35">
                        {item.kind}
                      </div>
                    </div>
                    <div>
                      <div className="mb-3 flex items-start gap-3">
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-ember/25 bg-ember/10 text-ember">
                          <Icon size={17} />
                        </span>
                        <div>
                          <h3 className="font-display text-lg font-semibold leading-snug sm:text-xl">
                            {item.title}
                          </h3>
                          {detail && (
                            <p className="mt-1 font-mono text-[0.7rem] text-amber/80">
                              {detail}
                            </p>
                          )}
                        </div>
                      </div>
                      <p className="font-medium text-white/60">{item.place}</p>
                      <ul className="mt-4 space-y-2.5">
                        {item.points.map((point) => (
                          <li
                            key={point}
                            className="flex gap-2.5 text-sm leading-6 text-white/55"
                          >
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ember" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>

          {/* Research credibility strip → routes to the research view */}
          <Reveal delay={120} className="mt-4">
            <a
              href="/research"
              className="card card-glow group flex flex-col gap-5 p-7 text-white no-underline sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-iris/30 bg-iris/10 text-iris-2">
                  <Sparkles size={20} />
                </span>
                <div>
                  <p className="font-display text-lg font-semibold">
                    I also publish research
                  </p>
                  <p className="mt-1.5 text-sm leading-6 text-white/55">
                    Two peer-reviewed conference papers at ICNGC 2025, plus a year
                    of faculty-led ML research.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {publications.map((p) => (
                      <span key={p.title} className="chip">
                        <FileText size={11} className="mr-1 inline" />
                        {p.venue} · {p.role}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <span className="inline-flex shrink-0 items-center gap-2 font-mono text-xs text-ember">
                View research <ArrowRight size={14} />
              </span>
            </a>
          </Reveal>
        </div>
      </section>

      <ContactSection variant="engineering" />
    </main>
  );
}
