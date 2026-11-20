import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import ThemeProvider from "./components/ThemeProvider";
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
  metadataBase: new URL("https://hassan-faisal-portfolio.vercel.app"),
  title: {
    default: "Hassan Faisal — Award-Winning AI Engineer",
    template: "%s | Hassan Faisal",
  },
  description:
    "Award-winning AI Engineer building multi-agent systems, RAG pipelines, and automation. 2 published papers. Best Product Award at Comeback Pakistan.",
  keywords: [
    "Hassan Faisal",
    "AI Engineer",
    "Award-Winning",
    "Multi-Agent Systems",
    "RAG",
    "LangGraph",
    "FastAPI",
    "Machine Learning",
    "Python",
  ],
  authors: [{ name: "Hassan Faisal" }],
  creator: "Hassan Faisal",
  openGraph: {
    title: "Hassan Faisal — Award-Winning AI Engineer",
    description:
      "Multi-agent AI systems, RAG pipelines, and automation — built to reason, retrieve, and hold up in production.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hassan Faisal — Award-Winning AI Engineer",
    description:
      "Multi-agent AI systems, RAG pipelines, and automation — built to reason, retrieve, and hold up in production.",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} scroll-smooth`}
    >
      <body className="bg-white font-sans text-stone-900 antialiased dark:bg-stone-950 dark:text-stone-100">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
