// Single source of truth for every fact on the site.
// Both the engineering page (/) and the research page (/research) read from here,
// so the two views can never drift out of sync.

import {
  Award,
  Bot,
  BrainCircuit,
  Boxes,
  BriefcaseBusiness,
  Crown,
  FlaskConical,
  GraduationCap,
  Microscope,
  Network,
  Plane,
  Stethoscope,
  Workflow,
} from "lucide-react";

// Taken from the hyperlinks embedded in the CV PDF.
export const GITHUB_URL = "https://github.com/Hassan-Faisal";
export const ORCID_ID = "0009-0006-1434-894X";
export const ORCID_URL = `https://orcid.org/${ORCID_ID}`;

// Hassan maintains two separate documents: an academic CV (research-first,
// publications and supervisor) and an industry resume (engineering-first).
// Each page serves the one its audience expects.
const ACADEMIC_CV = "/Hassan-Faisal-Resume.pdf";
// TODO(hassan): drop the industry resume into /public and point this at it,
// e.g. "/Hassan-Faisal-Industry-Resume.pdf". Until then / serves the academic CV.
const INDUSTRY_RESUME = ACADEMIC_CV;

export const documents = {
  engineering: { label: "Resume", href: INDUSTRY_RESUME },
  research: { label: "Curriculum Vitae", href: ACADEMIC_CV },
} as const;

export const profile = {
  name: "Hassan Faisal",
  engineeringTitle: "Associate AI Engineer",
  researchTitle: "AI & Machine Learning Researcher",
  company: "Deep Cognitive Solutions",
  location: "Lahore, Pakistan",
  email: "iamhassanfaisal@gmail.com",
  phone: "(+92) 315 424 8614",
  phoneHref: "https://wa.me/+923154248614",
  linkedin: "https://www.linkedin.com/in/hassan-faisal",
};

export const tickerSkills = [
  "Agentic AI",
  "LangGraph",
  "RAG",
  "FastAPI",
  "Python",
  "LLMs",
  "Vector Search",
  "PyTorch",
  "Docker",
  "PostgreSQL",
  "Machine Learning",
  "Photogrammetry",
];

export const researchInterests = [
  "Machine Learning",
  "Large Language Models",
  "Information Retrieval",
  "Retrieval-Augmented Generation",
  "Agentic AI Systems",
  "Deep Learning",
  "AI Systems Engineering",
];

export const publications = [
  {
    icon: Stethoscope,
    title:
      "Enhancing Asthma Diagnosis: Leveraging Machine Learning Algorithms for Improved Predictive Accuracy",
    venue: "ICNGC 2025",
    role: "Second Author",
    date: "Dec 2025",
    type: "Conference Paper",
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=VGsS-DwAAAAJ&citation_for_view=VGsS-DwAAAAJ:u5HHmVD_uO8C" as string | null,
  },
  {
    icon: Plane,
    title: "Tour and Travel Customer Churn Predictions",
    venue: "ICNGC 2025",
    role: "Third Author",
    date: "Dec 2025",
    type: "Conference Paper",
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=VGsS-DwAAAAJ&citation_for_view=VGsS-DwAAAAJ:u-x6o8ySG0sC" as string | null,
  },
];

export const researchExperience = {
  icon: Microscope,
  role: "Research Contributor — AI & Machine Learning",
  place: "National College of Business Administration & Economics",
  supervisor: "Dr. Fahad Ahmed",
  date: "Dec 2024 — Dec 2025",
  points: [
    "Contributed to faculty-led Machine Learning research through literature review, experimentation, and comparative evaluation of predictive models.",
    "Preprocessed research datasets — cleaning data, handling missing values, and preparing them for machine learning experiments.",
    "Supported evaluation of experimental outcomes and refined findings through iterative experimentation.",
    "Collaborated closely with the supervising faculty member from experimentation through to publication.",
  ],
};

// Shared across both pages; each page frames them differently.
export const projects = [
  {
    icon: Bot,
    title: "Multi-Agent Customer Support System",
    domain: "Multi-Agent AI Systems",
    engineeringSummary:
      "A LangGraph and FastAPI architecture coordinating specialized agents for query classification, knowledge retrieval, response generation, and fallback handling.",
    researchSummary:
      "A multi-agent architecture studying how specialized agents and retrieval strategies affect answer faithfulness and context precision.",
    engineeringPoints: [
      "Retrieval-Augmented Generation pipeline over vector search for source-grounded responses",
      "Fallback handling so the system degrades gracefully instead of hallucinating",
      "Iteratively tuned retrieval strategies, prompts, and agent workflows",
    ],
    researchPoints: [
      "Evaluated with the RAGAS framework across faithfulness, answer relevancy, and context precision",
      "Comparative iteration over retrieval strategies and prompt designs",
    ],
    stack: ["LangGraph", "FastAPI", "RAG", "OpenAI API", "Vector Search", "RAGAS"],
  },
  {
    icon: Boxes,
    title: "Automated Photogrammetric Processing Framework",
    domain: "Computer Vision & Photogrammetry",
    engineeringSummary:
      "An automated OpenDroneMap framework that turns aerial imagery into Orthomosaics, Digital Surface Models, and Digital Terrain Models without manual babysitting.",
    researchSummary:
      "A photogrammetric processing framework used to compare reconstruction quality against runtime and hardware cost across ODM profiles.",
    engineeringPoints: [
      "Python automation for dataset preprocessing, pipeline execution, and output management",
      "Containerised with Docker for reproducible runs",
      "Reduced manual processing overhead and improved reproducibility",
    ],
    researchPoints: [
      "Comparative experimentation across multiple ODM processing profiles",
      "Evaluated reconstruction quality, execution time, and hardware utilization",
    ],
    stack: ["Python", "OpenDroneMap", "WebODM", "Docker"],
  },
  {
    icon: Stethoscope,
    title: "Healthcare Appointment Coordination System",
    domain: "Healthcare Information Systems",
    engineeringSummary:
      "A full-stack platform where patients schedule appointments and providers manage availability, with authentication and role-based administrative workflows.",
    researchSummary:
      "A full-stack healthcare information system coordinating patient scheduling and provider availability.",
    engineeringPoints: [
      "RESTful backend services with authentication and role-based access control",
      "Admin workflows for doctor schedules, appointments, and platform operations",
      "ReactJS front end against a FastAPI and PostgreSQL backend",
    ],
    researchPoints: [
      "Role-based access control across patient, provider, and administrator flows",
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "ReactJS"],
  },
];

export const capabilities = [
  {
    icon: BrainCircuit,
    title: "Agentic AI Systems",
    text: "Multi-agent architectures that classify, retrieve, reason, and hand off — coordinated with LangGraph and served over FastAPI.",
    tags: ["LangGraph", "Orchestration", "Tool use"],
  },
  {
    icon: Network,
    title: "RAG Applications",
    text: "Retrieval pipelines that ground answers in your knowledge base, measured for faithfulness and context precision.",
    tags: ["Vector search", "Embeddings", "RAGAS"],
  },
  {
    icon: FlaskConical,
    title: "ML Experimentation",
    text: "Predictive modelling with careful preprocessing, comparative evaluation, and honest performance analysis.",
    tags: ["PyTorch", "Scikit-learn", "Evaluation"],
  },
  {
    icon: Workflow,
    title: "Automation & Pipelines",
    text: "Python automation for dataset preparation, pipeline execution, and large-scale image processing — built for reproducibility.",
    tags: ["Python", "Docker", "Pipelines"],
  },
];

export const toolkit = [
  {
    label: "ML & Deep Learning",
    items: [
      "PyTorch",
      "Scikit-learn",
      "TensorFlow/Keras",
      "Hugging Face Transformers",
      "NumPy",
      "Pandas",
    ],
  },
  {
    label: "Generative AI & LLM Systems",
    items: [
      "Large Language Models",
      "LangChain",
      "LangGraph",
      "Agentic AI",
      "Prompt Engineering",
      "Agent Orchestration",
    ],
  },
  {
    label: "Information Retrieval & RAG",
    items: [
      "RAG",
      "Embeddings",
      "Vector Databases",
      "FAISS",
      "Chroma",
      "Pinecone",
      "Semantic Search",
    ],
  },
  {
    label: "Computer Vision & Photogrammetry",
    items: [
      "OpenDroneMap",
      "WebODM",
      "Image Processing",
      "Orthomosaic Generation",
      "DSM/DTM Processing",
    ],
  },
  {
    label: "Research & Experimentation",
    items: [
      "Literature Review",
      "Dataset Preprocessing",
      "Experimental Design",
      "Comparative Evaluation",
      "Model Evaluation",
      "Performance Analysis",
    ],
  },
  {
    label: "Engineering & Tools",
    items: [
      "Python",
      "TypeScript",
      "FastAPI",
      "REST APIs",
      "PostgreSQL",
      "Docker",
      "Git",
      "Jupyter",
    ],
  },
];

// Current role. Hassan was promoted from AI Apprentice to Associate AI Engineer
// within the same company, so tenure is tracked at the company level.
export const currentRole = {
  icon: BriefcaseBusiness,
  title: "Associate AI Engineer",
  previousTitle: "Promoted from Artificial Intelligence Apprentice",
  place: "Deep Cognitive Solutions · Lahore, Pakistan",
  date: "Mar 2026 — Present",
  kind: "Professional",
  points: [
    "Build AI-powered applications spanning machine learning workflows, experimentation, and AI system development.",
    "Evaluate and optimize large-scale image processing pipelines through systematic experimentation and performance analysis.",
    "Develop Python automation workflows to streamline repetitive processing tasks and improve efficiency.",
    "Implement modern AI paradigms including Large Language Models, Retrieval-Augmented Generation, and Agentic AI systems.",
    "Collaborate with AI engineers on the design, implementation, and iterative improvement of AI-driven software.",
  ],
};

export const education = {
  icon: GraduationCap,
  title: "BS, Computer Science",
  place: "National College of Business Administration & Economics",
  date: "Mar 2022 — Jan 2026",
  kind: "Education",
  detail: "CGPA 3.50 / 4.0 · 133 credit hours",
  points: [
    "Coursework and academic projects in Machine Learning, Artificial Intelligence, and Software Engineering.",
    "Co-authored two conference papers, gaining experience in literature review, experimentation, and research evaluation methodology.",
    "Explored RAG, Large Language Models, and Agentic AI through academic and independent projects.",
  ],
  // Verifiable credentials, linked from the CV.
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
