import { ArrowUpRight, Github, Linkedin, Mail, ScrollText } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { SiOrcid } from "react-icons/si";

import Reveal from "./Reveal";
import { documents, GITHUB_URL, ORCID_URL, profile } from "../lib/profile";

export default function ContactSection() {
  const channels = [
    {
      href: `mailto:${profile.email}`,
      icon: <Mail size={20} />,
      label: "Email",
      value: profile.email,
      external: false,
    },
    {
      href: GITHUB_URL,
      icon: <Github size={20} />,
      label: "GitHub",
      value: "Code & projects",
      external: true,
    },
    {
      href: ORCID_URL,
      icon: <SiOrcid size={20} />,
      label: "ORCID",
      value: "Research record",
      external: true,
    },
    {
      href: profile.linkedin,
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      value: "Let's connect",
      external: true,
    },
    {
      href: profile.phoneHref,
      icon: <FaWhatsapp size={20} />,
      label: "WhatsApp",
      value: profile.phone,
      external: true,
    },
    {
      href: documents.resume.href,
      icon: <ScrollText size={20} />,
      label: "Resume",
      value: "Download PDF",
      external: true,
    },
  ];

  return (
    <section id="contact" className="relative px-5 py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(249,115,22,0.04),transparent)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(249,115,22,0.08),transparent)]" />

      <div className="relative mx-auto max-w-6xl text-center">
        <Reveal>
          <p className="section-label justify-center">Contact</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold sm:text-4xl">
            Let&apos;s build something{" "}
            <span className="text-gradient">together.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-stone-500 dark:text-stone-400">
            Open to AI engineering roles, contract work, research
            collaborations, and graduate opportunities.
          </p>
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {channels.map(({ href, icon, label, value, external }, i) => (
            <Reveal key={label} delay={i * 60}>
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="card group flex items-center gap-4 p-5 text-left no-underline"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-orange-50 text-orange-600 transition group-hover:bg-orange-100 dark:bg-orange-950/50 dark:text-orange-400 dark:group-hover:bg-orange-950">
                  {icon}
                </span>
                <div className="min-w-0">
                  <p className="font-display text-sm font-semibold text-stone-800 dark:text-stone-200">
                    {label}
                  </p>
                  <p className="truncate text-xs text-stone-400">{value}</p>
                </div>
                <ArrowUpRight
                  size={14}
                  className="ml-auto shrink-0 text-stone-300 transition group-hover:text-orange-500 dark:text-stone-600"
                />
              </a>
            </Reveal>
          ))}
        </div>

        <footer className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-stone-200 pt-6 text-xs text-stone-400 dark:border-stone-800 sm:flex-row">
          <span className="font-mono">
            {profile.name} — {profile.role}
          </span>
          <span className="font-mono">{profile.location} · © 2026</span>
        </footer>
      </div>
    </section>
  );
}
