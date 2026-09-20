"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");

    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const nextDark = !dark;

    setDark(nextDark);

    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        borderColor: "var(--fg)",
        background: "var(--bg)",
      }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-[72px] flex items-center justify-between gap-6">

        {/* LOGO */}
        <Link
          href="/"
          className="shrink-0 leading-none"
          aria-label="RPrep Nursing Home"
        >
          <div
            className="font-black tracking-[-0.04em] text-xl sm:text-2xl"
            style={{ color: "var(--fg)" }}
          >
            RPREP<span style={{ color: "var(--accent)" }}>.</span>
          </div>

          <div
            className="text-[8px] sm:text-[9px] font-black uppercase tracking-[0.18em] mt-1"
            style={{ color: "var(--fg-muted)" }}
          >
            Nursing
          </div>
        </Link>


        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-7">

          <Link
            href="/"
            className="text-xs font-black uppercase tracking-wide transition-opacity hover:opacity-60"
            style={{ color: "var(--fg)" }}
          >
            Home
          </Link>

          <Link
            href="/pdfs"
            className="text-xs font-black uppercase tracking-wide transition-opacity hover:opacity-60"
            style={{ color: "var(--fg)" }}
          >
            MCQ PDFs
          </Link>

          <Link
            href="/notes"
            className="text-xs font-black uppercase tracking-wide transition-opacity hover:opacity-60"
            style={{ color: "var(--fg)" }}
          >
            Notes
          </Link>

          <Link
            href="/norcet-11"
            className="text-xs font-black uppercase tracking-wide transition-opacity hover:opacity-60"
            style={{ color: "var(--fg)" }}
          >
            NORCET 11
          </Link>

        </nav>


        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          <Link
            href="/norcet-11"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 border-2 text-[10px] font-black uppercase tracking-wide transition-transform hover:-translate-y-0.5"
            style={{
              borderColor: "var(--fg)",
              background: "var(--accent)",
              color: "#fff",
              boxShadow: "3px 3px 0 var(--fg)",
            }}
          >
            Practice
            <span>→</span>
          </Link>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle light and dark theme"
            className="w-10 h-10 border flex items-center justify-center text-base transition-transform hover:-translate-y-0.5"
            style={{
              borderColor: "var(--fg)",
              color: "var(--fg)",
              background: "var(--bg-soft)",
            }}
          >
            {dark ? "☀" : "☾"}
          </button>

        </div>

      </div>


      {/* MOBILE NAV */}
      <div
        className="md:hidden border-t overflow-x-auto"
        style={{ borderColor: "var(--border)" }}
      >
        <nav className="max-w-6xl mx-auto px-5 py-3 flex items-center gap-5 min-w-max">

          <Link
            href="/"
            className="text-[10px] font-black uppercase tracking-wide"
            style={{ color: "var(--fg)" }}
          >
            Home
          </Link>

          <Link
            href="/pdfs"
            className="text-[10px] font-black uppercase tracking-wide"
            style={{ color: "var(--fg)" }}
          >
            MCQ PDFs
          </Link>

          <Link
            href="/notes"
            className="text-[10px] font-black uppercase tracking-wide"
            style={{ color: "var(--fg)" }}
          >
            Notes
          </Link>

          <Link
            href="/norcet-11"
            className="text-[10px] font-black uppercase tracking-wide"
            style={{ color: "var(--accent)" }}
          >
            NORCET 11 →
          </Link>

        </nav>
      </div>

    </header>
  );
}
