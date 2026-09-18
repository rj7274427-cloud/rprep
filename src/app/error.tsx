"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main
      className="min-h-screen flex items-center justify-center px-5"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-xl text-center">

        <p
          className="text-xs font-bold uppercase tracking-[0.18em] mb-4"
          style={{ color: "var(--accent)" }}
        >
          Something went wrong
        </p>

        <h1
          className="text-3xl sm:text-4xl font-black tracking-tight"
          style={{ color: "var(--fg)" }}
        >
          We could not load this page.
        </h1>

        <p
          className="mt-4 text-sm md:text-base leading-7"
          style={{ color: "var(--fg-soft)" }}
        >
          Please try again. If the problem continues, return to the
          homepage and try again later.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3 mt-7">

          <button
            onClick={() => reset()}
            className="rounded-xl px-6 py-3 font-semibold text-sm"
            style={{
              background: "var(--accent)",
              color: "white",
            }}
          >
            Try Again
          </button>

          <Link
            href="/"
            className="rounded-xl border px-6 py-3 font-semibold text-sm"
            style={{
              borderColor: "var(--border)",
              color: "var(--fg)",
              background: "var(--bg-soft)",
            }}
          >
            Back to Home
          </Link>

        </div>
      </div>
    </main>
  );
}
