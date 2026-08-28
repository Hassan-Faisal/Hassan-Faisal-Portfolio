import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  // The live deployment linked from the CV. Change this if you move to a custom domain.
  metadataBase: new URL("https://hassan-faisal-portfolio.vercel.app"),
  title: {
    default: "Hassan Faisal — Associate AI Engineer",
    template: "%s",
  },
  description:
    "Hassan Faisal is an Associate AI Engineer at Deep Cognitive Solutions, building multi-agent AI systems, RAG pipelines, and Python automation with LangGraph and FastAPI.",
  keywords: [
    "Hassan Faisal",
    "Associate AI Engineer",
    "AI Engineer",
    "Agentic AI",
    "Multi-Agent Systems",
    "Retrieval-Augmented Generation",
    "RAG",
    "LangGraph",
    "FastAPI",
    "Large Language Models",
    "Python",
    "Machine Learning",
  ],
  authors: [{ name: "Hassan Faisal" }],
  creator: "Hassan Faisal",
  openGraph: {
    title: "Hassan Faisal — Associate AI Engineer",
    description:
      "Multi-agent AI systems, RAG pipelines, and automation — built to reason, retrieve, and hold up in production.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hassan Faisal — Associate AI Engineer",
    description:
      "Multi-agent AI systems, RAG pipelines, and automation — built to reason, retrieve, and hold up in production.",
  },
};

export const viewport: Viewport = {
  themeColor: "#06070B",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${display.variable} ${body.variable} ${mono.variable} scroll-smooth`}
    >
      <body className="bg-void font-sans text-white antialiased">{children}</body>
    </html>
  );
}
