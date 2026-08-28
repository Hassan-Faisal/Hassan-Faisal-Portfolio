import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowUpRight,
  FileText,
  Microscope,
  ScrollText,
} from "lucide-react";

import SiteNav from "../components/SiteNav";
import Reveal from "../components/Reveal";
import AwardCard from "../components/AwardCard";
import ContactSection from "../components/ContactSection";
import {
  currentRole,
  documents,
  education,
  ORCID_URL,
  profile,
  projects,
  publications,
  researchExperience,
  researchInterests,
} from "../lib/profile";

export const metadata: Metadata = {
  title: "Hassan Faisal — AI & Machine Learning Researcher",
  description:
    "Research profile of Hassan Faisal: two peer-reviewed ICNGC 2025 conference publications in Machine Learning, faculty-led research experience, and interests spanning LLMs, Information Retrieval, RAG, and Agentic AI.",
  keywords: [
    "Hassan Faisal research",
    "Machine Learning researcher",
    "ICNGC 2025",
    "conference publications",
    "Retrieval-Augmented Generation",
    "Information Retrieval",
    "Agentic AI research",
    "graduate applicant",
    "Deep Learning",
  ],
  openGraph: {
    title: "Hassan Faisal — AI & Machine Learning Researcher",
    description:
      "Two peer-reviewed ICNGC 2025 publications, faculty-led ML research, and interests in LLMs, IR, RAG, and Agentic AI.",
    type: "profile",
  },
};

const heroStats = [
  ["Publications", "2 peer-reviewed"],
  ["Research", "1 year faculty-led"],
  ["BS Computer Science", "CGPA 3.50 / 4.0"],
];

export default function ResearchPage() {
  return (
    <main className="grain overflow-hidden bg-void text-white">
      <SiteNav variant="research" />

      {/* ---------------- OVERVIEW ---------------- */}
      <section id="overview" className="grid-bg relative overflow-hidden px-5 pb-20 pt-36">
        <div className="aurora left-[-6rem] top-24 h-80 w-80 bg-iris/20" />
        <div className="aurora right-[-4rem] top-40 h-96 w-96 bg-ember/15" />

        <div className="relative z-10 mx-auto max-w-5xl">
          <div
            className="fade-up mb-7 inline-flex items-center gap-2 rounded-full border border-iris/30 bg-iris/10 px-3.5 py-1.5"
            style={{ animationDelay: "80ms" }}
          >
            <Microscope size={13} className="text-iris-2" />
            <span className="mono-tag font-semibold uppercase tracking-[0.16em] text-iris-2">
              Seeking research &amp; graduate opportunities
            </span>
          </div>

          <p
            className="fade-up mb-3 font-mono text-sm text-white/45"
            style={{ animationDelay: "160ms" }}
          >
            {profile.name} — {profile.researchTitle}
          </p>

          <h1
            className="fade-up max-w-3xl text-[2.6rem] font-bold leading-[1.04] tracking-tight sm:text-6xl"
            style={{ animationDelay: "240ms" }}
          >
            Research at the intersection of{" "}
            <span className="text-gradient">retrieval, reasoning,</span> and
            machine learning.
          </h1>

          <div
            className="fade-up mt-8 max-w-3xl space-y-5 text-base leading-8 text-white/70"
            style={{ animationDelay: "340ms" }}
          >
            <p>
              Computer Science graduate with research experience in Machine
              Learning, demonstrated through two peer-reviewed conference
              publications and faculty-led research collaboration. My work spans
              machine learning experimentation, predictive modelling, literature
              review, comparative evaluation, and the development of intelligent
              AI systems.
            </p>
            <p>
              I am particularly interested in the intersection of Machine
              Learning, Large Language Models, Information Retrieval,
              Retrieval-Augmented Generation, and Agentic AI. I am seeking
              research opportunities and graduate programs where I can
              contribute to the development of reliable, intelligent, and
              scalable AI systems.
            </p>
          </div>

          <div
            className="fade-up mt-9 flex flex-wrap gap-3"
            style={{ animationDelay: "440ms" }}
          >
            <a href="#publications" className="btn-primary">
              View publications <ArrowUpRight size={17} />
            </a>
            <a
              href={documents.research.href}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              <ScrollText size={16} /> {documents.research.label}
            </a>
            <a href={ORCID_URL} target="_blank" rel="noreferrer" className="btn-secondary">
              ORCID <ArrowUpRight size={15} />
            </a>
          </div>

          <div
            className="fade-up mt-11 grid max-w-2xl grid-cols-1 gap-4 border-t border-white/10 pt-7 sm:grid-cols-3"
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

          {/* Research interests */}
          <div className="fade-up mt-12" style={{ animationDelay: "620ms" }}>
            <p className="mono-tag uppercase tracking-[0.14em] text-white/40">
              Research interests
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {researchInterests.map((interest) => (
                <span key={interest} className="chip">
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- PUBLICATIONS ---------------- */}
      <section id="publications" className="relative bg-ink px-5 py-24 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal className="text-center">
            <p className="section-label justify-center">Publications</p>
            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold sm:text-5xl">
              Peer-reviewed research
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/55">
              Two conference papers co-authored at ICNGC 2025, from literature
              review and experimentation through to publication.
            </p>
          </Reveal>

          <div className="mt-14 space-y-4">
            {publications.map(({ icon: Icon, title, venue, role, date, type, url }, i) => {
              const Card = (
                <article className="card card-glow group p-7">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-ember/25 bg-ember/10 text-ember">
                      <Icon size={22} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="mb-3 flex flex-wrap items-center gap-2">
                        <span className="rounded-full border border-iris/30 bg-iris/10 px-2.5 py-0.5 font-mono text-[0.68rem] font-medium text-iris-2">
                          {type}
                        </span>
                        <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 font-mono text-[0.68rem] text-white/65">
                          {venue}
                        </span>
                        <span className="font-mono text-[0.68rem] text-white/40">
                          {date}
                        </span>
                      </div>
                      <h3 className="font-display text-lg font-semibold leading-snug text-white sm:text-xl">
                        {title}
                      </h3>
                      <div className="mt-3 flex flex-wrap items-center gap-4">
                        <p className="flex items-center gap-2 font-mono text-xs text-amber">
                          <FileText size={13} /> {role}
                        </p>
                        {url && (
                          <span className="inline-flex items-center gap-1 font-mono text-xs text-ember">
                            Official publication <ArrowUpRight size={12} />
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              );

              return (
                <Reveal key={title} delay={i * 110}>
                  {url ? (
                    <a href={url} target="_blank" rel="noreferrer" className="block no-underline">
                      {Card}
                    </a>
                  ) : (
                    Card
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- RESEARCH EXPERIENCE ---------------- */}
      <section id="research" className="grid-bg relative bg-void px-5 py-24 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <Reveal className="text-center">
            <p className="section-label justify-center">Experience</p>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Research &amp; industry
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/55">
              A year of faculty-led research, alongside applied AI engineering in
              industry.
            </p>
          </Reveal>

          <Reveal delay={100} className="mt-14">
            <article className="card p-7 sm:p-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-iris/30 bg-iris/10 text-iris-2">
                  <researchExperience.icon size={22} />
                </span>
                <div>
                  <div className="mb-2 flex flex-wrap items-center gap-x-4 gap-y-2">
                    <h3 className="font-display text-lg font-semibold sm:text-xl">
                      {researchExperience.role}
                    </h3>
                    <span className="font-mono text-xs text-ember">
                      {researchExperience.date}
                    </span>
                  </div>
                  <p className="font-medium text-white/60">{researchExperience.place}</p>
                  <p className="mt-1 font-mono text-xs text-white/45">
                    Supervisor: {researchExperience.supervisor}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {researchExperience.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2.5 text-sm leading-6 text-white/60"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ember" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </Reveal>

          {/* Industry experience — relevant to graduate committees as applied AI work */}
          <Reveal delay={160} className="mt-4">
            <article className="card p-7 sm:p-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-ember/25 bg-ember/10 text-ember">
                  <currentRole.icon size={22} />
                </span>
                <div>
                  <div className="mb-2 flex flex-wrap items-center gap-x-4 gap-y-2">
                    <h3 className="font-display text-lg font-semibold sm:text-xl">
                      {currentRole.title}
                    </h3>
                    <span className="font-mono text-xs text-ember">
                      {currentRole.date}
                    </span>
                  </div>
                  <p className="font-medium text-white/60">{currentRole.place}</p>
                  <p className="mt-1 font-mono text-xs text-amber/80">
                    {currentRole.previousTitle}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {currentRole.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2.5 text-sm leading-6 text-white/60"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ember" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* ---------------- PROJECTS ---------------- */}
      <section id="projects" className="relative bg-ink px-5 py-24 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="section-label">Technical Projects</p>
              <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
                Applied research systems
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-white/55">
              Systems built and evaluated across multi-agent AI, photogrammetry,
              and healthcare information systems.
            </p>
          </Reveal>

          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map(
              ({ icon: Icon, title, domain, researchSummary, researchPoints, stack }, i) => (
                <Reveal key={title} delay={i * 110}>
                  <article className="card card-glow group flex h-full flex-col p-7">
                    <div className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-ember transition group-hover:border-ember/40">
                      <Icon size={22} />
                    </div>

                    <p className="mt-7 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-amber/80">
                      {domain}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-semibold leading-snug">
                      {title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-white/60">
                      {researchSummary}
                    </p>

                    <ul className="mt-5 space-y-2.5">
                      {researchPoints.map((point) => (
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

      {/* ---------------- EDUCATION + AWARD ---------------- */}
      <section id="education" className="grid-bg relative bg-void px-5 py-24 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <Reveal className="text-center">
            <p className="section-label justify-center">Education &amp; Recognition</p>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Academic background</h2>
          </Reveal>

          <Reveal delay={100} className="mt-14">
            <article className="card p-7 sm:p-8">
              <div className="grid gap-5 md:grid-cols-[190px_1fr]">
                <div>
                  <div className="font-mono text-sm font-medium text-ember">
                    {education.date}
                  </div>
                  <div className="mt-1.5 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-white/35">
                    {education.kind}
                  </div>
                </div>
                <div>
                  <div className="mb-3 flex items-start gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-ember/25 bg-ember/10 text-ember">
                      <education.icon size={17} />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold sm:text-xl">
                        {education.title}
                      </h3>
                      <p className="mt-1 font-mono text-[0.7rem] text-amber/80">
                        {education.detail}
                      </p>
                    </div>
                  </div>
                  <p className="font-medium text-white/60">{education.place}</p>
                  <ul className="mt-4 space-y-2.5">
                    {education.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2.5 text-sm leading-6 text-white/55"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ember" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2 border-t border-white/10 pt-5">
                    {education.credentials.map(({ label, url }) => (
                      <a
                        key={label}
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/[0.03] px-3 py-1 font-mono text-[0.7rem] text-white/70 no-underline transition hover:border-ember/40 hover:text-ember"
                      >
                        {label} <ArrowUpRight size={11} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </Reveal>

          <div className="mt-4">
            <AwardCard />
          </div>

          {/* Back to the engineering view */}
          <Reveal delay={120} className="mt-4">
            <a
              href="/"
              className="card card-glow group flex flex-col gap-4 p-7 text-white no-underline sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="font-display text-lg font-semibold">
                  Looking for the engineering side?
                </p>
                <p className="mt-1.5 text-sm leading-6 text-white/55">
                  Currently an Associate AI Engineer — see the production systems,
                  architecture, and stack.
                </p>
              </div>
              <span className="inline-flex shrink-0 items-center gap-2 font-mono text-xs text-ember">
                <ArrowLeft size={14} /> Engineering portfolio
              </span>
            </a>
          </Reveal>
        </div>
      </section>

      <ContactSection variant="research" />
    </main>
  );
}
