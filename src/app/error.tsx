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
      className="min-h-screen flex items-center justify-center px-5 py-16"
      style={{ background: "var(--bg)" }}
    >
      <div className="w-full max-w-5xl">
        <div
          className="border"
          style={{
            borderColor: "var(--fg)",
            background: "var(--bg-soft)",
          }}
        >
          <div className="grid md:grid-cols-[0.8fr_1.2fr] min-h-[480px]">
            {/* LEFT */}
            <div
              className="border-b md:border-b-0 md:border-r p-8 md:p-12 flex flex-col justify-between"
              style={{ borderColor: "var(--fg)" }}
            >
              <div>
                <Link
                  href="/"
                  className="inline-block font-black tracking-[-0.05em] text-2xl"
                  style={{ color: "var(--fg)" }}
                >
                  RPREP<span style={{ color: "var(--accent)" }}>.</span>
                </Link>

                <p
                  className="text-[9px] font-black uppercase tracking-[0.2em] mt-1"
                  style={{ color: "var(--fg-muted)" }}
                >
                  Nursing
                </p>
              </div>

              <div className="mt-16 md:mt-0">
                <p
                  className="text-[10px] font-black uppercase tracking-[0.2em] mb-4"
                  style={{ color: "var(--accent)" }}
                >
                  Error / 500
                </p>

                <p
                  className="font-black tracking-[-0.07em] leading-none"
                  style={{
                    color: "var(--fg)",
                    fontSize: "clamp(5rem, 12vw, 9rem)",
                  }}
                >
                  500
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <p
                className="text-[10px] font-black uppercase tracking-[0.2em] mb-5"
                style={{ color: "var(--accent)" }}
              >
                Something went wrong
              </p>

              <h1
                className="text-3xl md:text-5xl font-black tracking-[-0.05em] leading-tight mb-5"
                style={{ color: "var(--fg)" }}
              >
                We could not load this page.
              </h1>

              <p
                className="text-sm md:text-base leading-7 max-w-xl"
                style={{ color: "var(--fg-soft)" }}
              >
                An unexpected error occurred while loading this page. Please
                try again. If the problem continues, return to the homepage
                and try again later.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <button
                  type="button"
                  onClick={() => reset()}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 text-xs font-black uppercase tracking-wide transition-transform hover:-translate-y-0.5"
                  style={{
                    borderColor: "var(--fg)",
                    background: "var(--accent)",
                    color: "#fff",
                    boxShadow: "3px 3px 0 var(--fg)",
                  }}
                >
                  Try Again
                  <span>↻</span>
                </button>

                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 text-xs font-black uppercase tracking-wide transition-opacity hover:opacity-70"
                  style={{
                    borderColor: "var(--fg)",
                    background: "var(--bg)",
                    color: "var(--fg)",
                  }}
                >
                  Back to Home
                </Link>
              </div>

              <div
                className="border-t mt-10 pt-5"
                style={{ borderColor: "var(--border)" }}
              >
                <p
                  className="text-[10px] font-bold uppercase tracking-wider"
                  style={{ color: "var(--fg-muted)" }}
                >
                  RPrep Nursing · Study. Practice. Repeat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
