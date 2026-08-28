import { ArrowUpRight, Github, Linkedin, Mail, ScrollText } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { SiOrcid } from "react-icons/si";

import Reveal from "./Reveal";
import { documents, GITHUB_URL, ORCID_URL, profile } from "../lib/profile";

type Props = {
  /** Research view leads with ORCID; engineering view leads with GitHub. */
  variant: "engineering" | "research";
};

export default function ContactSection({ variant }: Props) {
  const isResearch = variant === "research";

  const github = {
    href: GITHUB_URL,
    icon: <Github size={22} />,
    label: "GitHub",
    value: "Code & projects",
    external: true,
  };
  const orcid = {
    href: ORCID_URL,
    icon: <SiOrcid size={22} />,
    label: "ORCID",
    value: "Research record",
    external: true,
  };

  const channels = [
    {
      href: `mailto:${profile.email}`,
      icon: <Mail size={22} />,
      label: "Email",
      value: profile.email,
      external: false,
    },
    ...(isResearch ? [orcid, github] : [github, orcid]),
    {
      href: profile.linkedin,
      icon: <Linkedin size={22} />,
      label: "LinkedIn",
      value: "Let's connect",
      external: true,
    },
    {
      href: profile.phoneHref,
      icon: <FaWhatsapp size={22} />,
      label: "WhatsApp",
      value: profile.phone,
      external: true,
    },
    {
      href: documents[variant].href,
      icon: <ScrollText size={22} />,
      label: documents[variant].label,
      value: "Download PDF",
      external: true,
    },
  ];

  return (
    <section
      id="contact"
      className="grid-bg relative overflow-hidden bg-void px-5 py-24 sm:py-28"
    >
      <div className="aurora left-1/2 top-0 h-72 w-[36rem] -translate-x-1/2 bg-ember/15" />
      <div className="relative z-10 mx-auto max-w-7xl text-center">
        <Reveal>
          <p className="section-label justify-center">Contact</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold leading-[1.1] sm:text-6xl">
            {isResearch ? (
              <>
                Let&apos;s advance the <span className="text-gradient">research.</span>
              </>
            ) : (
              <>
                Let&apos;s build something{" "}
                <span className="text-gradient">intelligent.</span>
              </>
            )}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-white/60">
            {isResearch
              ? "Open to research collaborations, graduate programs, and academic supervision. Pick whichever channel is easiest."
              : "Open to AI engineering roles, contract work, and collaborations. Pick whichever channel is easiest."}
          </p>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {channels.map(({ href, icon, label, value, external }, i) => (
            <Reveal key={label} delay={i * 70}>
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="card card-glow group flex h-full flex-col items-start p-6 text-left text-white no-underline"
              >
                <span className="mb-5 grid h-11 w-11 place-items-center rounded-xl border border-ember/25 bg-ember/10 text-ember transition group-hover:scale-105">
                  {icon}
                </span>
                <p className="font-display font-semibold">{label}</p>
                <p className="mt-1.5 break-words text-sm text-white/55">{value}</p>
                <span className="mt-4 inline-flex items-center gap-1 font-mono text-xs text-ember opacity-0 transition group-hover:opacity-100">
                  Open <ArrowUpRight size={13} />
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <footer className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/40 sm:flex-row">
          <span className="font-mono">
            {profile.name} — {isResearch ? profile.researchTitle : profile.engineeringTitle}
          </span>
          <span className="font-mono">{profile.location} · © 2026</span>
        </footer>
      </div>
    </section>
  );
}
