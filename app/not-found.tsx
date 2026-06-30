import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-ink px-6 text-center text-white">
      <div>
        <p className="section-label">404</p>
        <h1 className="mt-3 text-4xl font-black">Page not found</h1>
        <p className="mt-4 text-white/60">
          The page you are looking for is not available.
        </p>
        <Link href="/" className="btn-primary mt-8">
          Back home
        </Link>
      </div>
    </main>
  );
}
