import {
  ArrowUpRight,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Network,
  Sparkles,
  Workflow,
} from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";

const navItems = ["Home", "About", "Services", "Projects", "Experience", "Contact"];

const skills = [
  "Python",
  "FastAPI",
  "LangGraph",
  "CrewAI",
  "LangChain",
  "RAG",
  "OpenAI",
  "Claude",
  "Grok",
  "n8n",
  "Microservices",
  "Autonomous Agents",
];

const services = [
  {
    icon: BrainCircuit,
    title: "Agentic AI Workflows",
    text: "Designing multi-step systems that can reason, plan, call tools, and complete business tasks with less manual handoff.",
  },
  {
    icon: Network,
    title: "RAG Applications",
    text: "Building retrieval-augmented assistants that ground answers in your documents, knowledge base, or internal data.",
  },
  {
    icon: Workflow,
    title: "AI Automation",
    text: "Connecting LLMs with APIs, workflows, and services through n8n, FastAPI, and practical integration patterns.",
  },
  {
    icon: Bot,
    title: "Custom Chatbots",
    text: "Creating focused chat experiences for support, operations, research, and SaaS products with production-ready behavior.",
  },
];

const projectCards = [
  {
    label: "01",
    title: "Autonomous Agent Systems",
    summary:
      "Agent flows that break down tasks, choose tools, and execute useful actions across product or operations workflows.",
    stack: ["LangGraph", "CrewAI", "Python"],
  },
  {
    label: "02",
    title: "Knowledge-Backed AI Assistants",
    summary:
      "RAG chatbots for documents, FAQs, and internal knowledge where traceability and useful answers matter.",
    stack: ["RAG", "LangChain", "OpenAI"],
  },
  {
    label: "03",
    title: "AI SaaS Tooling",
    summary:
      "Backend-first AI tools and prototypes with clean APIs, automation hooks, and room to grow into real products.",
    stack: ["FastAPI", "Microservices", "n8n"],
  },
];

const timeline = [
  {
    date: "Mar 2026 - Present",
    title: "Artificial Intelligence Apprenticeship",
    place: "Deep Cognitive Solutions Pakistan, Lahore",
    body: "Working on agentic AI and generative AI projects, exploring autonomous agents, LLM-based systems, and workflow design.",
  },
  {
    date: "Mar 2022 - Jan 2026",
    title: "Bachelor's Degree, Computer Science",
    place: "National College Of Business Administration & Economics",
    body: "Built a computer science foundation for modern AI development, backend systems, and applied software engineering.",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-ink text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/70 px-4 py-3 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="#home" className="text-lg font-black tracking-normal">
            Hassan Faisal<span className="text-ember"></span>
          </a>
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item, index) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">
                <span className="mr-1 text-ember/80">0{index + 1}</span>
                {item}
              </a>
            ))}
          </div>
          <a href="#contact" className="btn-primary px-4 py-2 text-xs">
            Connect <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <section id="home" className="grid-bg relative min-h-screen border-b border-white/10 px-5 pt-28">
        <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-ember/10 blur-3xl" />
        <div className="mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl items-center py-12">
          <div className="fade-up relative z-10 max-w-4xl">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-mint/30 bg-mint/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-mint" />
              <span className="text-xs font-black uppercase tracking-[0.16em] text-mint">
                OPEN TO NEW OPPORTUNITIES
              </span>
            </div>
            <p className="mb-2 text-5xl font-black uppercase leading-none text-white/20 sm:text-7xl lg:text-8xl">
              Hi, I am
            </p>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.96] tracking-normal sm:text-7xl lg:text-8xl">
              Hassan <span className="text-ember">Faisal</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
              AI Engineer building Agentic AI, LLM applications, RAG systems,
              custom chatbots, and automation workflows that turn modern AI into
              practical business value.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="btn-primary">
                View Work <ArrowUpRight size={17} />
              </a>
              <a href="/Hassan Faisal Resume.pdf" target="_blank" rel="noreferrer" className="btn-secondary">
                Resume <ArrowUpRight size={17} />
              </a>
            </div>
            <div className="mt-12 grid max-w-3xl gap-4 border-t border-white/10 pt-8 sm:grid-cols-3">
              {[
                ["Agentic AI", "Autonomous AI Systems"],
                ["RAG Systems", "Knowledge-Based Assistants"],
                ["Automation", "AI-Powered Workflows"],
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-ember">
                    {label}
                  </p>
                  <p className="mt-2 text-sm font-bold text-white/55">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="-mx-5 overflow-hidden border-y border-white/10 bg-panel py-4">
          <div className="ticker-track">
            {[...skills, ...skills].map((skill, index) => (
              <span key={`${skill}-${index}`} className="flex items-center gap-8 px-8 text-sm font-black uppercase tracking-[0.14em] text-white">
                {skill}
                <span className="h-1.5 w-1.5 rounded-full bg-ember" />
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-panel px-5 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="section-label">About</p>
            <h2 className="mt-3 text-4xl font-black leading-tight sm:text-6xl">
              Practical AI systems, not just impressive demos.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-8 text-white/68">
            <p>
              I focus on intelligent AI agents and custom chatbots that can
              reason, handle tasks autonomously, and fit into real workflows. My
              toolkit includes LangGraph, CrewAI, OpenCLaw, RAG systems, n8n,
              LangChain, FastAPI, and leading models from OpenAI, Claude, and Grok.
            </p>
            <p>
              I enjoy working with startups and established teams that want to
              optimize operations, ship AI-enabled products, or turn a rough
              automation idea into something production-ready.
            </p>
            <div className="grid gap-4 pt-4 sm:grid-cols-3">
              {[
                ["Location", "Lahore, PK"],
                ["Focus", "Agentic AI"],
                ["Status", "Available"],
              ].map(([label, value]) => (
                <div key={label} className="border-t border-white/12 pt-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-white/35">
                    {label}
                  </p>
                  <p className="mt-1 text-lg font-black text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="grid-bg px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="section-label text-center">Services</p>
          <h2 className="mx-auto mt-3 max-w-3xl text-center text-4xl font-black sm:text-6xl">
            AI engineering for teams that need useful systems.
          </h2>
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-2xl border border-white/10 bg-panel p-6 transition hover:border-ember/45">
                <div className="mb-6 grid h-12 w-12 place-items-center rounded-xl border border-ember/25 bg-ember/10 text-ember">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-black">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/62">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="bg-panel px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="section-label">Featured Direction</p>
              <h2 className="mt-3 text-4xl font-black sm:text-6xl">What I build</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-white/58">
              These cards summarize the strongest portfolio lanes from the profile:
              agentic workflows, RAG products, automation, and backend AI tools.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {projectCards.map((project) => (
              <article key={project.title} className="group min-h-[360px] rounded-2xl border border-white/10 bg-black p-6 transition hover:-translate-y-1 hover:border-ember/50">
                <div className="flex items-center justify-between">
                  <span className="text-5xl font-black text-white/12">{project.label}</span>
                  <Code2 className="text-ember" size={28} />
                </div>
                <h3 className="mt-16 text-2xl font-black">{project.title}</h3>
                <p className="mt-5 text-sm leading-7 text-white/62">{project.summary}</p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 px-3 py-1 text-xs font-bold text-white/62">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="grid-bg px-5 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="section-label text-center">Experience & Education</p>
          <h2 className="mt-3 text-center text-4xl font-black sm:text-6xl">Background</h2>
          <div className="mt-14 space-y-5">
            {timeline.map((item, index) => (
              <article key={item.title} className="grid gap-4 rounded-2xl border border-white/10 bg-panel p-6 md:grid-cols-[190px_1fr]">
                <div className="text-sm font-black text-ember">{item.date}</div>
                <div>
                  <div className="mb-3 flex items-center gap-3">
                    {index === 0 ? <BriefcaseBusiness className="text-ember" size={22} /> : <GraduationCap className="text-ember" size={22} />}
                    <h3 className="text-xl font-black">{item.title}</h3>
                  </div>
                  <p className="font-bold text-white/58">{item.place}</p>
                  <p className="mt-4 text-sm leading-7 text-white/62">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {["Google Soft Skills Program", "Claude Code in Action"].map((cert) => (
              <div key={cert} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black p-5">
                <Sparkles className="text-ember" size={22} />
                <span className="font-black">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-ink px-5 py-24">
        <div className="mx-auto max-w-7xl text-center">
          <p className="section-label">Contact</p>
          <h2 className="mx-auto mt-3 max-w-4xl text-4xl font-black uppercase leading-tight sm:text-6xl">
            Interested in building something <span className="text-ember">intelligent?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-white/62">
            I am available for remote work, collaborations, and AI engineering
            opportunities worldwide.
          </p>
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 md:grid-cols-3">
            <a href="mailto:iamhassanfaisal@gmail.com" className="rounded-2xl border border-white/10 bg-panel p-6 text-left text-white no-underline transition hover:border-ember/50">
              <Mail className="mb-5 text-ember" size={28} />
              <p className="font-black">Email</p>
              <p className="mt-2 break-words text-sm text-white/58">iamhassanfaisal@gmail.com</p>
            </a>
            <a href="https://www.linkedin.com/in/hassan-faisal" target="_blank" rel="noreferrer" className="rounded-2xl border border-white/10 bg-panel p-6 text-left text-white no-underline transition hover:border-ember/50">
              <Linkedin className="mb-5 text-ember" size={28} />
              <p className="font-black">LinkedIn</p>
              <p className="mt-2 text-sm text-white/58">Let's Connect</p>
            </a>
            <a href="https://api.whatsapp.com/send/?phone=%2B923154248614" target="_blank" rel="noreferrer" className="rounded-2xl border border-white/10 bg-panel p-6 text-left text-white no-underline transition hover:border-ember/50">
              <FaWhatsapp className="mb-5 text-ember text-[28px]" />
              <p className="font-black">Whatsapp</p>
              <p className="mt-2 text-sm text-white/58">Contact me</p>
            </a>
            {/* <div className="rounded-2xl border border-white/10 bg-panel p-6 text-left">
              <MapPin className="mb-5 text-ember" size={28} />
              <p className="font-black">Location</p>
              <p className="mt-2 text-sm text-white/58">Lahore, Punjab, Pakistan</p>
            </div> */}
          </div>
          <footer className="mt-20 border-t border-white/10 pt-8 text-sm text-white/40">
            Hassan Faisal - AI Engineer - 2026
          </footer>
        </div>
      </section>
    </main>
  );
}
