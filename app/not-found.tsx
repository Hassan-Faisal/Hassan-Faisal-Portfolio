import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <main className="grid-bg grid min-h-screen place-items-center bg-void px-6 text-center text-white">
      <div>
        <p className="section-label justify-center">Error 404</p>
        <h1 className="mt-4 font-display text-6xl font-bold sm:text-7xl">
          Page <span className="text-gradient">not found</span>
        </h1>
        <p className="mx-auto mt-4 max-w-sm text-white/55">
          This route never made it into the graph. Let&apos;s get you back on a
          known path.
        </p>
        <Link href="/" className="btn-primary mt-8">
          Back home <ArrowUpRight size={16} />
        </Link>
      </div>
    </main>
  );
}
