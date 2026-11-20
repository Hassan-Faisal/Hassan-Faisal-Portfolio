import {
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  FileText,
  Github,
  MapPin,
} from "lucide-react";

import SiteNav from "./components/SiteNav";
import Reveal from "./components/Reveal";
import AwardCard from "./components/AwardCard";
import ContactSection from "./components/ContactSection";
import {
  capabilities,
  currentRole,
  education,
  documents,
  profile,
  projects,
  publications,
  researchExperience,
  stats,
  toolkit,
  GITHUB_URL,
  SCHOLAR_URL,
} from "./lib/profile";

export default function HomePage() {
  return (
    <main className="bg-white text-stone-900 dark:bg-stone-950 dark:text-stone-100">
      <SiteNav />

      {/* ---- HERO ---- */}
      <section
        id="home"
        className="relative overflow-hidden px-5 pb-20 pt-32 sm:pt-40"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(249,115,22,0.06),transparent)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(249,115,22,0.1),transparent)]" />

        <div className="relative mx-auto max-w-4xl text-center">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 dark:border-orange-900 dark:bg-orange-950/50">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
              </span>
              <span className="font-mono text-xs font-medium tracking-wide text-orange-700 dark:text-orange-400">
                {profile.role} at {profile.company}
              </span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              {profile.title.split("AI Engineer")[0]}
              <span className="text-gradient">AI Engineer</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-stone-500 dark:text-stone-400">
              {profile.bio}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href="#projects" className="btn-primary">
                View my work <ArrowRight size={16} />
              </a>
              <a
                href={documents.resume.href}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                <FileText size={16} /> Resume
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                <Github size={16} /> GitHub
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mx-auto mt-14 grid max-w-md grid-cols-2 gap-6 border-t border-stone-200 pt-8 dark:border-stone-800">
              {stats.map(({ label, value }) => (
                <div key={label} className="text-center">
                  <p className="font-mono text-[0.65rem] uppercase tracking-widest text-stone-400">
                    {label}
                  </p>
                  <p className="mt-1.5 text-sm font-semibold text-stone-800 dark:text-stone-200">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---- FEATURED PROJECTS ---- */}
      <section id="projects" className="bg-stone-50 px-5 py-20 dark:bg-stone-900/50 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="section-label">Selected Work</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Systems I&apos;ve built
            </h2>
            <p className="mt-3 max-w-xl text-stone-500 dark:text-stone-400">
              Real projects with real architecture — not tutorials or clones.
            </p>
          </Reveal>

          <div className="mt-12 space-y-6">
            {projects.map((project, i) => {
                const Icon = project.icon;
                return (
                  <Reveal key={project.title} delay={i * 100}>
                    <article className="card group overflow-hidden">
                      <div className="p-7 sm:p-9">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <span className="grid h-10 w-10 place-items-center rounded-xl bg-orange-50 text-orange-600 dark:bg-orange-950/50 dark:text-orange-400">
                              <Icon size={20} />
                            </span>
                            <div>
                              <h3 className="font-display text-xl font-bold sm:text-2xl">
                                {project.title}
                              </h3>
                              <p className="font-mono text-xs text-stone-400">
                                {project.subtitle}
                              </p>
                            </div>
                          </div>
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noreferrer"
                              className="hidden items-center gap-1.5 rounded-full border border-stone-200 px-3 py-1.5 font-mono text-xs text-stone-500 transition hover:border-orange-300 hover:text-orange-600 dark:border-stone-700 dark:text-stone-400 dark:hover:border-orange-700 dark:hover:text-orange-400 sm:inline-flex"
                            >
                              <Github size={13} /> Source
                              <ExternalLink size={11} />
                            </a>
                          )}
                        </div>

                        <p className="mt-5 leading-relaxed text-stone-600 dark:text-stone-400">
                          {project.description}
                        </p>

                        <ul className="mt-6 space-y-2">
                          {project.highlights.map((h) => (
                            <li
                              key={h}
                              className="flex gap-3 text-sm leading-relaxed text-stone-600 dark:text-stone-400"
                            >
                              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-orange-400" />
                              {h}
                            </li>
                          ))}
                        </ul>

                        <div className="mt-6 flex flex-wrap gap-1.5">
                          {project.stack.map((s) => (
                            <span key={s} className="chip">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
          </div>

        </div>
      </section>

      {/* ---- CAPABILITIES ---- */}
      <section id="capabilities" className="px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="section-label">What I Do</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Capabilities
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 80}>
                <article className="card h-full p-6">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-orange-50 text-orange-600 dark:bg-orange-950/50 dark:text-orange-400">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-5 font-display text-base font-semibold">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-500 dark:text-stone-400">
                    {text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---- STACK ---- */}
      <section id="stack" className="bg-stone-50 px-5 py-20 dark:bg-stone-900/50 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="section-label">Stack</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Technologies I work with
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {toolkit.map(({ label, items }) => (
                <div key={label}>
                  <p className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-stone-400">
                    {label}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
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

      {/* ---- PUBLICATIONS ---- */}
      <section id="publications" className="px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <p className="section-label">Research</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Publications
            </h2>
            <p className="mt-3 text-stone-500 dark:text-stone-400">
              Peer-reviewed conference papers at the International Conference on
              Next-Generation Computing (ICNGC 2025).
            </p>
          </Reveal>

          <div className="mt-10 space-y-4">
            {publications.map((pub, i) => {
              const Icon = pub.icon;
              return (
                <Reveal key={pub.title} delay={i * 100}>
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noreferrer"
                    className="card group flex gap-5 p-6 no-underline transition"
                  >
                    <span className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-orange-50 text-orange-600 dark:bg-orange-950/50 dark:text-orange-400">
                      <Icon size={18} />
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-display text-base font-semibold leading-snug text-stone-800 group-hover:text-orange-600 dark:text-stone-200 dark:group-hover:text-orange-400">
                        {pub.title}
                      </h3>
                      <p className="mt-1.5 text-sm text-stone-500 dark:text-stone-400">
                        {pub.authors}
                      </p>
                      <div className="mt-2 flex flex-wrap items-center gap-3">
                        <span className="chip">{pub.venue}</span>
                        <span className="chip">{pub.role}</span>
                        <span className="chip">{pub.pages}</span>
                      </div>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="mt-1 shrink-0 text-stone-300 transition group-hover:text-orange-500 dark:text-stone-600"
                    />
                  </a>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={200}>
            <div className="mt-6 text-center">
              <a
                href={SCHOLAR_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-mono text-sm text-stone-500 transition hover:text-orange-600 dark:text-stone-400 dark:hover:text-orange-400"
              >
                View on Google Scholar <ExternalLink size={14} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---- EXPERIENCE ---- */}
      <section id="experience" className="bg-stone-50 px-5 py-20 dark:bg-stone-900/50 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <p className="section-label">Background</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Experience & Education
            </h2>
          </Reveal>

          <div className="mt-10">
            <AwardCard />
          </div>

          {/* Current Role */}
          <Reveal delay={100} className="mt-4">
            <article className="card p-7">
              <div className="flex items-start gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-orange-50 text-orange-600 dark:bg-orange-950/50 dark:text-orange-400">
                  <currentRole.icon size={20} />
                </span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="font-display text-lg font-bold">
                      {currentRole.title}
                    </h3>
                    <span className="font-mono text-xs text-orange-600 dark:text-orange-400">
                      {currentRole.previousTitle}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
                    {currentRole.place} · {currentRole.location}
                  </p>
                  <p className="font-mono text-xs text-stone-400">
                    {currentRole.date}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {currentRole.points.map((p) => (
                      <li
                        key={p}
                        className="flex gap-2.5 text-sm leading-relaxed text-stone-600 dark:text-stone-400"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-orange-400" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </Reveal>

          {/* Research */}
          <Reveal delay={150} className="mt-4">
            <article className="card p-7">
              <div className="flex items-start gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-orange-50 text-orange-600 dark:bg-orange-950/50 dark:text-orange-400">
                  <researchExperience.icon size={20} />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-bold">
                    {researchExperience.role}
                  </h3>
                  <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
                    {researchExperience.place} · Supervisor:{" "}
                    {researchExperience.supervisor}
                  </p>
                  <p className="font-mono text-xs text-stone-400">
                    {researchExperience.date}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {researchExperience.points.map((p) => (
                      <li
                        key={p}
                        className="flex gap-2.5 text-sm leading-relaxed text-stone-600 dark:text-stone-400"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-orange-400" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </Reveal>

          {/* Education */}
          <Reveal delay={200} className="mt-4">
            <article className="card p-7">
              <div className="flex items-start gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-orange-50 text-orange-600 dark:bg-orange-950/50 dark:text-orange-400">
                  <education.icon size={20} />
                </span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="font-display text-lg font-bold">
                      {education.title}
                    </h3>
                    <span className="font-mono text-xs text-stone-500 dark:text-stone-400">
                      {education.detail}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
                    {education.place}
                  </p>
                  <p className="font-mono text-xs text-stone-400">
                    {education.date}
                  </p>
                  <div className="mt-3 flex gap-3">
                    {education.credentials.map((c) => (
                      <a
                        key={c.label}
                        href={c.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-xs text-orange-600 transition hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300"
                      >
                        <FileText size={12} /> Verify {c.label}
                        <ExternalLink size={10} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
