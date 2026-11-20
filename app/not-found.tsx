import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-5 text-center dark:bg-stone-950">
      <p className="font-mono text-xs uppercase tracking-widest text-stone-400">
        Error 404
      </p>
      <h1 className="mt-4 font-display text-4xl font-bold text-stone-900 sm:text-5xl">
        Page <span className="text-gradient">not found</span>
      </h1>
      <p className="mt-4 max-w-md text-stone-500">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Back home <ArrowRight size={16} />
      </Link>
    </main>
  );
}
