import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        borderColor: "var(--fg)",
        background: "var(--fg)",
        color: "var(--bg)",
      }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* TOP */}
        <div className="py-14 md:py-20 grid md:grid-cols-[1.4fr_1fr_1fr] gap-12 md:gap-16">

          {/* BRAND */}
          <div>

            <Link href="/" className="inline-block">
              <div
                className="font-black tracking-[-0.05em] leading-none"
                style={{
                  fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                  color: "var(--bg)",
                }}
              >
                RPREP<span style={{ color: "var(--accent)" }}>.</span>
              </div>

              <div
                className="mt-2 text-[10px] font-black uppercase tracking-[0.2em]"
                style={{ color: "var(--fg-muted)" }}
              >
                Nursing
              </div>
            </Link>

            <p
              className="max-w-sm mt-7 text-sm leading-relaxed"
              style={{ color: "var(--fg-muted)" }}
            >
              Focused nursing exam preparation with MCQs, notes, practice
              resources and revision material.
            </p>

          </div>


          {/* STUDY */}
          <div>

            <p
              className="text-[10px] font-black uppercase tracking-[0.18em] mb-5"
              style={{ color: "var(--accent)" }}
            >
              Study
            </p>

            <div className="flex flex-col gap-4">

              <Link
                href="/norcet-11"
                className="text-sm font-bold transition-opacity hover:opacity-60"
                style={{ color: "var(--bg)" }}
              >
                NORCET 11 Practice
              </Link>

              <Link
                href="/pdfs"
                className="text-sm font-bold transition-opacity hover:opacity-60"
                style={{ color: "var(--bg)" }}
              >
                MCQ PDFs
              </Link>

              <Link
                href="/notes"
                className="text-sm font-bold transition-opacity hover:opacity-60"
                style={{ color: "var(--bg)" }}
              >
                Nursing Notes
              </Link>

            </div>

          </div>


          {/* INFORMATION */}
          <div>

            <p
              className="text-[10px] font-black uppercase tracking-[0.18em] mb-5"
              style={{ color: "var(--accent)" }}
            >
              Information
            </p>

            <div className="flex flex-col gap-4">

              <Link
                href="/about"
                className="text-sm font-bold transition-opacity hover:opacity-60"
                style={{ color: "var(--bg)" }}
              >
                About RPrep
              </Link>

              <Link
                href="/contact"
                className="text-sm font-bold transition-opacity hover:opacity-60"
                style={{ color: "var(--bg)" }}
              >
                Contact
              </Link>

              <Link
                href="/privacy-policy"
                className="text-sm font-bold transition-opacity hover:opacity-60"
                style={{ color: "var(--bg)" }}
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms-and-conditions"
                className="text-sm font-bold transition-opacity hover:opacity-60"
                style={{ color: "var(--bg)" }}
              >
                Terms & Conditions
              </Link>

              <Link
                href="/disclaimer"
                className="text-sm font-bold transition-opacity hover:opacity-60"
                style={{ color: "var(--bg)" }}
              >
                Disclaimer
              </Link>

            </div>

          </div>

        </div>


        {/* BIG FOOTER STATEMENT */}
        <div
          className="border-t border-b py-8 md:py-10"
          style={{
            borderColor: "rgba(255,255,255,0.18)",
          }}
        >
          <p
            className="font-black uppercase tracking-[-0.04em] leading-none"
            style={{
              fontSize: "clamp(2rem, 6vw, 5rem)",
              color: "var(--bg)",
            }}
          >
            STUDY. PRACTICE. REPEAT.
          </p>
        </div>


        {/* BOTTOM */}
        <div className="py-6 flex flex-col sm:flex-row justify-between gap-3">

          <p
            className="text-[10px] font-bold uppercase tracking-wider"
            style={{ color: "var(--fg-muted)" }}
          >
            © {new Date().getFullYear()} RPrep Nursing
          </p>

          <p
            className="text-[10px] font-bold uppercase tracking-wider"
            style={{ color: "var(--fg-muted)" }}
          >
            Built for Nursing Aspirants
          </p>

        </div>

      </div>
    </footer>
  );
}
