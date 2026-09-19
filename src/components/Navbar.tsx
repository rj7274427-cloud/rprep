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
      className="sticky top-0 z-50 border-b backdrop-blur-md"
      style={{
        borderColor: "var(--border)",
        background: "color-mix(in srgb, var(--bg) 90%, transparent)",
      }}
    >
      <div className="max-w-5xl mx-auto px-5 h-16 flex items-center justify-between">

        {/* BRAND */}
        <Link
          href="/"
          className="font-black text-lg tracking-tight shrink-0"
          style={{ color: "var(--fg)" }}
        >
          RPrep <span style={{ color: "var(--accent)" }}>Nursing</span>
        </Link>

        {/* NAVIGATION */}
        <div className="flex items-center gap-4 sm:gap-6">

          <Link
            href="/"
            className="text-sm font-semibold transition-opacity hover:opacity-70"
            style={{ color: "var(--fg-soft)" }}
          >
            Home
          </Link>

          <Link
            href="/pdfs"
            className="text-sm font-semibold transition-opacity hover:opacity-70"
            style={{ color: "var(--fg-soft)" }}
          >
            MCQ PDFs
          </Link>

          <Link
            href="/notes"
            className="text-sm font-semibold transition-opacity hover:opacity-70"
            style={{ color: "var(--fg-soft)" }}
          >
            Notes
          </Link>

          {/* THEME TOGGLE */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle light and dark theme"
            className="w-9 h-9 rounded-xl border flex items-center justify-center text-base transition-opacity hover:opacity-70"
            style={{
              borderColor: "var(--border)",
              color: "var(--fg)",
              background: "var(--bg-soft)",
            }}
          >
            {dark ? "☀" : "☾"}
          </button>

        </div>
      </div>
    </header>
  );
}
