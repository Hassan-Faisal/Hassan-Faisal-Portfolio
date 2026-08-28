"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";

export type NavVariant = "engineering" | "research";

const navSets: Record<NavVariant, { label: string; id: string }[]> = {
  engineering: [
    { label: "Home", id: "home" },
    { label: "Work", id: "work" },
    { label: "Capabilities", id: "capabilities" },
    { label: "Stack", id: "stack" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" },
  ],
  research: [
    { label: "Overview", id: "overview" },
    { label: "Publications", id: "publications" },
    { label: "Experience", id: "research" },
    { label: "Projects", id: "projects" },
    { label: "Education", id: "education" },
    { label: "Contact", id: "contact" },
  ],
};

function AudienceSwitch({ variant }: { variant: NavVariant }) {
  const pathname = usePathname();
  const active: NavVariant = pathname?.startsWith("/research")
    ? "research"
    : variant;

  return (
    <div className="flex items-center rounded-full border border-white/12 bg-white/[0.03] p-0.5">
      {(
        [
          { key: "engineering", label: "Engineering", href: "/" },
          { key: "research", label: "Research", href: "/research" },
        ] as const
      ).map(({ key, label, href }) => (
        <Link
          key={key}
          href={href}
          aria-current={active === key ? "page" : undefined}
          className={`rounded-full px-3 py-1.5 font-mono text-[0.7rem] font-medium transition ${
            active === key
              ? "bg-flame-grad text-void"
              : "text-white/55 hover:text-white"
          }`}
        >
          {label}
        </Link>
      ))}
    </div>
  );
}

export default function SiteNav({ variant }: { variant: NavVariant }) {
  const items = navSets[variant];
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(items[0].id);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = items
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [items]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-void/80 py-3 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent py-4"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5 font-display text-base font-bold tracking-tight"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-flame-grad text-sm font-bold text-void shadow-glow">
            HF
          </span>
          <span className="hidden lg:inline">Hassan Faisal</span>
        </Link>

        <div className="hidden items-center gap-0.5 lg:flex">
          {items.map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              data-active={active === id}
              className="nav-link"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <AudienceSwitch variant={variant} />
          </div>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/12 bg-white/[0.03] text-white lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-void/95 backdrop-blur-xl transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-[32rem]" : "max-h-0 border-t-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-5 py-4">
          <div className="mb-3 sm:hidden">
            <AudienceSwitch variant={variant} />
          </div>
          {items.map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 font-mono text-sm text-white/70 transition hover:bg-white/5 hover:text-white"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-primary mt-2 w-full"
          >
            Let&apos;s talk <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </header>
  );
}
