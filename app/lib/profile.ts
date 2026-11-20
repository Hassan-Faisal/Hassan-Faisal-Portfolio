import {
  Award,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Crown,
  FileText,
  FlaskConical,
  GraduationCap,
  Microscope,
  Network,
  Plane,
  Stethoscope,
  Workflow,
  Zap,
} from "lucide-react";

export const GITHUB_URL = "https://github.com/Hassan-Faisal";
export const ORCID_ID = "0009-0006-1434-894X";
export const ORCID_URL = `https://orcid.org/${ORCID_ID}`;
export const SCHOLAR_URL =
  "https://scholar.google.com/citations?user=VGsS-DwAAAAJ&hl=en";

export const documents = {
  resume: { label: "Resume", href: "/Hassan-Faisal-Resume.pdf" },
} as const;

export const profile = {
  name: "Hassan Faisal",
  title: "Award-Winning AI Engineer",
  role: "Associate AI Engineer",
  company: "Deep Cognitive Solutions",
  location: "Lahore, Pakistan",
  email: "iamhassanfaisal@gmail.com",
  phone: "(+92) 315 424 8614",
  phoneHref: "https://wa.me/+923154248614",
  linkedin: "https://www.linkedin.com/in/hassan-faisal",
  bio: "I build AI systems that actually work — multi-agent architectures, RAG pipelines, and automation that runs on real infrastructure, not demos.",
};

export const stats = [
  { label: "Award", value: "Best Product & 2nd Place" },
  { label: "Publications", value: "2 Conference Papers" },
  { label: "Promoted in", value: "< 6 Months" },
];

export const publications = [
  {
    icon: Stethoscope,
    title:
      "Enhancing Asthma Diagnosis: Leveraging Machine Learning Algorithms for Improved Predictive Accuracy",
    venue: "ICNGC 2025",
    role: "Second Author",
    date: "2025",
    authors: "S Abbas, H Faisal, A Amir, M Liaqat, S Khurram, U Ullah",
    pages: "pp. 168-171",
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=VGsS-DwAAAAJ&citation_for_view=VGsS-DwAAAAJ:u5HHmVD_uO8C",
  },
  {
    icon: Plane,
    title: "Tour and Travel Customer Churn Predictions",
    venue: "ICNGC 2025",
    role: "Third Author",
    date: "2025",
    authors: "MF Khan, SZ Haider, H Faisal, M Liaqat, T Nawaz, SY Siddiqui",
    pages: "pp. 201-204",
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=VGsS-DwAAAAJ&citation_for_view=VGsS-DwAAAAJ:u-x6o8ySG0sC",
  },
];

export const projects = [
  {
    icon: Bot,
    title: "Nimbus Help",
    subtitle: "Multi-Agent Customer Support System",
    description:
      "An AI support team that resolves routine customer issues instantly — refunds, order tracking, troubleshooting — while routing risky or unusual cases to human staff.",
    highlights: [
      "LangGraph state machine orchestrating specialized billing, technical, and orders agents with handoff and fallback caps",
      "Hybrid RAG with pgvector HNSW + full-text search, fused with Reciprocal Rank Fusion — 91% recall@3",
      "Policy enforcement in pure functions: refund limits, return windows, row-locked transactions",
      "PII redaction (Luhn-validated cards, SSNs, IBANs) before any model or log sees the data",
      "86 backend tests, 92% coverage, 22 behavioral agent scenarios, CI evaluation pipeline",
    ],
    stack: [
      "LangGraph",
      "FastAPI",
      "OpenAI",
      "PostgreSQL",
      "pgvector",
      "React",
      "Docker",
    ],
    github: "https://github.com/Hassan-Faisal/multi-agent-support-system",
    featured: true,
  },
  {
    icon: Zap,
    featured: true,
    title: "AI WhatsApp Assistant",
    subtitle: "Small Business Automation",
    description:
      "AI-powered WhatsApp assistant for meal ordering, subscriptions, and customer support — automating end-to-end business workflows for a small business.",
    highlights: [
      "Natural language ordering via WhatsApp with LangGraph agent orchestration",
      "RAG-powered FAQ and support with business knowledge base",
      "Subscription management and automated follow-ups",
      "PostgreSQL-backed order and customer management",
    ],
    stack: ["LangGraph", "FastAPI", "RAG", "PostgreSQL", "WhatsApp API"],
    github:
      "https://github.com/Hassan-Faisal/Small-Business-Automation-Project",
  },
  {
    icon: Network,
    title: "Multi-Chat Support Platform",
    subtitle: "Multi-Tenant AI Chatbot",
    description:
      "A multi-tenant AI chatbot platform supporting concurrent customer sessions with intelligent routing and context-aware responses.",
    highlights: [
      "Multi-tenant architecture serving multiple businesses from a single deployment",
      "Context-aware conversation management across concurrent sessions",
      "Retrieval-Augmented Generation for grounded, accurate responses",
    ],
    stack: ["Python", "FastAPI", "LLMs", "RAG", "Vector Search"],
    featured: true,
  },
];

export const capabilities = [
  {
    icon: BrainCircuit,
    title: "Agentic AI Systems",
    text: "Multi-agent architectures that classify, retrieve, reason, and hand off — coordinated with LangGraph and served over FastAPI.",
  },
  {
    icon: Network,
    title: "RAG Pipelines",
    text: "Hybrid retrieval systems with vector search, re-ranking, and citation — measured for faithfulness and precision, not vibes.",
  },
  {
    icon: Workflow,
    title: "Automation",
    text: "Python automation for business workflows, data pipelines, and processing — built for reliability and reproducibility.",
  },
  {
    icon: FlaskConical,
    title: "ML & Evaluation",
    text: "Predictive modelling with careful preprocessing, comparative evaluation, behavioral testing, and honest performance analysis.",
  },
];

export const toolkit = [
  {
    label: "AI & LLMs",
    items: [
      "LangGraph",
      "LangChain",
      "OpenAI API",
      "Prompt Engineering",
      "Agent Orchestration",
    ],
  },
  {
    label: "Retrieval & Search",
    items: ["RAG", "pgvector", "FAISS", "Chroma", "Embeddings", "Semantic Search"],
  },
  {
    label: "ML & Deep Learning",
    items: [
      "PyTorch",
      "Scikit-learn",
      "TensorFlow",
      "Hugging Face",
      "NumPy",
      "Pandas",
    ],
  },
  {
    label: "Engineering",
    items: [
      "Python",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "React",
      "Git",
    ],
  },
];

export const currentRole = {
  icon: BriefcaseBusiness,
  title: "Associate AI Engineer",
  previousTitle: "Promoted from AI Apprentice",
  place: "Deep Cognitive Solutions",
  location: "Lahore, Pakistan",
  date: "Mar 2026 — Present",
  points: [
    "Build AI-powered applications spanning multi-agent systems, RAG pipelines, and LLM integrations",
    "Develop Python automation workflows for business process optimization",
    "Implement and evaluate large-scale AI systems with modern paradigms",
    "Promoted from AI Apprentice within 6 months based on delivery and impact",
  ],
};

export const researchExperience = {
  icon: Microscope,
  role: "Research Contributor — AI & Machine Learning",
  place: "National College of Business Administration & Economics",
  supervisor: "Dr. Fahad Ahmed",
  date: "Dec 2024 — Dec 2025",
  points: [
    "Contributed to faculty-led ML research resulting in 2 published conference papers",
    "Designed and ran experiments for predictive modelling with comparative evaluation",
    "Collaborated from experimentation through to publication at ICNGC 2025",
  ],
};

export const education = {
  icon: GraduationCap,
  title: "BS Computer Science",
  place: "National College of Business Administration & Economics",
  date: "Mar 2022 — Jan 2026",
  detail: "CGPA 3.50 / 4.0",
  credentials: [
    {
      label: "Degree",
      url: "https://drive.google.com/file/d/1nCuOvgGHrzcMFf9bbTab_k4qDAEVboxs/view",
    },
    {
      label: "Transcript",
      url: "https://drive.google.com/file/d/1Z12YQziOfs-GojE8qjh9VAGmukG7RF_C/view",
    },
  ],
};

export const award = {
  title: "Best Product Award & 2nd Place Overall",
  program: "Comeback Pakistan",
  date: "Jul — Aug 2026",
  highlights: [
    { icon: Crown, label: "Selected", value: "65 of 1,000+ applicants" },
    { icon: Award, label: "Result", value: "2nd overall · Best Product" },
    { icon: BriefcaseBusiness, label: "Role", value: "Technical Lead" },
  ],
  body: "Selected for a competitive innovation and professional development program, where I served as Technical Lead — driving the technical direction from solution design and development through final product delivery.",
};
