import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "var(--bg)" }}
    >
      <Navbar />

      <main className="max-w-5xl mx-auto px-5 py-24 md:py-32">
        <div className="max-w-2xl mx-auto text-center">

          <p
            className="text-xs font-bold uppercase tracking-[0.18em] mb-4"
            style={{ color: "var(--accent)" }}
          >
            404 — Page Not Found
          </p>

          <h1
            className="text-4xl sm:text-5xl font-black tracking-tight"
            style={{ color: "var(--fg)" }}
          >
            This page does not exist.
          </h1>

          <p
            className="mt-5 text-base leading-7"
            style={{ color: "var(--fg-soft)" }}
          >
            The page you are looking for may have been moved, removed, or
            the URL may be incorrect.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 mt-8">

            <Link
              href="/"
              className="rounded-xl px-6 py-3 font-semibold text-sm"
              style={{
                background: "var(--accent)",
                color: "white",
              }}
            >
              Back to Home
            </Link>

            <Link
              href="/pdfs"
              className="rounded-xl border px-6 py-3 font-semibold text-sm"
              style={{
                borderColor: "var(--border)",
                color: "var(--fg)",
                background: "var(--bg-soft)",
              }}
            >
              Browse MCQ PDFs
            </Link>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
