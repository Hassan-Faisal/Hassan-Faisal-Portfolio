import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hassan Faisal - AI Engineer",
  description:
    "Portfolio of Hassan Faisal, an AI Engineer building agentic AI workflows, RAG applications, custom chatbots, and production-ready LLM systems.",
  keywords: [
    "Hassan Faisal",
    "AI Engineer",
    "Agentic AI",
    "RAG Developer",
    "LLM Applications",
    "FastAPI",
    "LangGraph",
    "CrewAI",
  ],
  authors: [{ name: "Hassan Faisal" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-ink text-white antialiased">{children}</body>
    </html>
  );
}
