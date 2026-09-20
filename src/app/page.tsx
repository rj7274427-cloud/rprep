export const dynamic = "force-dynamic";

import Link from "next/link";
import { db } from "@/lib/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

async function getAllPdfs() {
  try {
    const q = query(collection(db, "pdfs"), orderBy("date", "desc"));
    const snap = await getDocs(q);

    return snap.docs.map((d) => ({
      id: d.id,
      ...d.data(),
    })) as any[];
  } catch {
    return [];
  }
}

const subjects = [
  "Fundamentals of Nursing",
  "Medical-Surgical Nursing",
  "Community Health Nursing",
  "Child Health Nursing",
  "Obstetric & Gynecological Nursing",
  "Mental Health Nursing",
];

const features = [
  {
    number: "01",
    title: "MCQ PRACTICE",
    desc: "Practice nursing questions designed around competitive nursing examinations.",
    href: "/norcet-11",
  },
  {
    number: "02",
    title: "STUDY NOTES",
    desc: "Revise high-yield nursing concepts with concise, exam-oriented notes.",
    href: "/notes",
  },
  {
    number: "03",
    title: "NORCET 11",
    desc: "Practice Mains-level nursing MCQs section by section.",
    href: "/norcet-11",
  },
  {
    number: "04",
    title: "MCQ PDFs",
    desc: "Access downloadable nursing MCQ resources for focused revision.",
    href: "/pdfs",
  },
];

export default async function Home() {
  const pdfs = await getAllPdfs();

  const categories = Array.from(
    new Set(pdfs.map((p) => p.category).filter(Boolean))
  ) as string[];

  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{ background: "var(--bg)", color: "var(--fg)" }}
    >
      <main>

        {/* =========================================================
            HERO
        ========================================================= */}
        <section className="relative border-b overflow-hidden">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-10 pb-16 md:pt-16 md:pb-24">

            {/* Top label */}
            <div className="mb-10 md:mb-14 flex items-center justify-between gap-4">
              <div
                className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[10px] sm:text-xs font-black uppercase tracking-[0.16em]"
                style={{
                  borderColor: "var(--fg)",
                  color: "var(--fg)",
                  background: "var(--bg)",
                }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: "var(--accent)" }}
                />
                RPrep Nursing
              </div>

              <div
                className="hidden sm:block text-[10px] font-bold uppercase tracking-[0.18em]"
                style={{ color: "var(--fg-muted)" }}
              >
                Nursing Exam Preparation
              </div>
            </div>

            {/* Main editorial hero */}
            <div className="max-w-6xl">

              <p
                className="text-xs sm:text-sm font-black uppercase tracking-[0.18em] mb-5"
                style={{ color: "var(--accent)" }}
              >
                Nursing Officer Preparation
              </p>

              <h1
                className="font-black uppercase tracking-[-0.055em] leading-[0.82]"
                style={{
                  fontSize: "clamp(4.2rem, 15vw, 11rem)",
                  color: "var(--fg)",
                }}
              >
                CRACK
                <br />
                <span style={{ color: "var(--accent)" }}>NORCET.</span>
              </h1>

              <div className="mt-8 md:mt-10 grid md:grid-cols-[1fr_auto] gap-8 items-end">

                <div className="max-w-xl">
                  <p
                    className="text-base sm:text-lg md:text-xl leading-relaxed font-medium"
                    style={{ color: "var(--fg-soft)" }}
                  >
                    Focused preparation for nursing competitive examinations
                    with MCQs, high-yield notes, practice sets and revision
                    resources.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row md:flex-col gap-4 md:items-end">

                  <Link
                    href="/norcet-11"
                    className="group inline-flex items-center justify-center gap-3 px-6 py-4 font-black text-sm uppercase tracking-wide border-2 transition-transform hover:-translate-y-1"
                    style={{
                      background: "var(--accent)",
                      color: "#ffffff",
                      borderColor: "var(--fg)",
                      boxShadow: "6px 6px 0 var(--fg)",
                    }}
                  >
                    Start Practice
                    <span className="text-lg transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </Link>

                  <Link
                    href="/notes"
                    className="font-black text-sm uppercase tracking-wide underline underline-offset-4 decoration-2"
                    style={{ color: "var(--fg)" }}
                  >
                    Explore Notes →
                  </Link>

                </div>
              </div>
            </div>

            {/* Decorative editorial mark */}
            <div
              className="hidden lg:block absolute right-[-55px] top-[220px] w-44 h-44 rounded-full border-[3px] rotate-12"
              style={{ borderColor: "var(--accent)" }}
            >
              <div
                className="absolute inset-5 rounded-full border"
                style={{ borderColor: "var(--fg)" }}
              />
            </div>

          </div>
        </section>


        {/* =========================================================
            STATS
        ========================================================= */}
        <section
          className="border-b"
          style={{
            borderColor: "var(--fg)",
            background: "var(--accent)",
            color: "#fff",
          }}
        >
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4">

            {[
              { value: "1000+", label: "Practice MCQs" },
              { value: pdfs.length, label: "MCQ PDFs" },
              { value: subjects.length, label: "Core Subjects" },
              { value: "24/7", label: "Practice Access" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="px-5 py-8 md:py-10"
                style={{
                  borderRight:
                    index < 3 ? "1px solid rgba(255,255,255,0.45)" : "none",
                  borderBottom:
                    index < 2 ? "1px solid rgba(255,255,255,0.45)" : "none",
                }}
              >
                <div
                  className="font-black tracking-tight leading-none mb-2"
                  style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
                >
                  {stat.value}
                </div>

                <div className="text-[10px] sm:text-xs font-black uppercase tracking-[0.15em] opacity-90">
                  {stat.label}
                </div>
              </div>
            ))}

          </div>
        </section>


        {/* =========================================================
            INTRO / MANIFESTO STYLE
        ========================================================= */}
        <section className="border-b">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-28">

            <div className="grid md:grid-cols-[0.7fr_1.3fr] gap-10 md:gap-20">

              <div>
                <div
                  className="text-xs font-black uppercase tracking-[0.18em]"
                  style={{ color: "var(--accent)" }}
                >
                  THE RPREP APPROACH
                </div>

                <div
                  className="mt-5 text-5xl md:text-7xl font-black tracking-tight"
                  style={{ color: "var(--fg)" }}
                >
                  STUDY
                  <br />
                  SMART.
                </div>
              </div>

              <div className="max-w-2xl">
                <p
                  className="text-2xl md:text-4xl font-black leading-tight tracking-tight"
                  style={{ color: "var(--fg)" }}
                >
                  Preparation is not about studying everything at once.
                  It is about practicing the right things consistently.
                </p>

                <p
                  className="mt-7 text-sm md:text-base leading-relaxed max-w-xl"
                  style={{ color: "var(--fg-soft)" }}
                >
                  RPrep Nursing brings together exam-focused MCQs, nursing
                  notes, practice resources and downloadable PDFs in one
                  simple preparation platform.
                </p>
              </div>

            </div>
          </div>
        </section>


        {/* =========================================================
            WHAT YOU CAN PRACTICE
        ========================================================= */}
        <section className="border-b">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-28">

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">

              <div>
                <p
                  className="text-xs font-black uppercase tracking-[0.18em] mb-3"
                  style={{ color: "var(--accent)" }}
                >
                  What You Can Practice
                </p>

                <h2
                  className="font-black uppercase tracking-[-0.04em] leading-none"
                  style={{
                    fontSize: "clamp(3rem, 8vw, 6.5rem)",
                    color: "var(--fg)",
                  }}
                >
                  PREPARE.
                </h2>
              </div>

              <p
                className="max-w-sm text-sm leading-relaxed"
                style={{ color: "var(--fg-soft)" }}
              >
                Everything you need for focused nursing exam preparation,
                organized in one place.
              </p>

            </div>


            <div className="grid md:grid-cols-2 gap-4">

              {features.map((feature, index) => (
                <Link
                  key={feature.number}
                  href={feature.href}
                  className="group block border-2 p-6 md:p-8 transition-all duration-200 hover:-translate-y-1"
                  style={{
                    borderColor: "var(--fg)",
                    background:
                      index === 0
                        ? "var(--accent)"
                        : "var(--bg-soft)",
                    color: index === 0 ? "#fff" : "var(--fg)",
                    boxShadow:
                      index === 0 ? "7px 7px 0 var(--fg)" : "none",
                  }}
                >

                  <div className="flex justify-between items-start gap-5">

                    <span
                      className="font-black text-sm tracking-wider"
                      style={{
                        color:
                          index === 0 ? "#fff" : "var(--accent)",
                      }}
                    >
                      {feature.number}
                    </span>

                    <span
                      className="text-2xl transition-transform group-hover:translate-x-1"
                      style={{
                        color:
                          index === 0 ? "#fff" : "var(--fg)",
                      }}
                    >
                      ↗
                    </span>

                  </div>

                  <div className="mt-14 md:mt-20">

                    <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-3">
                      {feature.title}
                    </h3>

                    <p
                      className="text-sm md:text-base leading-relaxed max-w-md"
                      style={{
                        color:
                          index === 0
                            ? "rgba(255,255,255,0.88)"
                            : "var(--fg-soft)",
                      }}
                    >
                      {feature.desc}
                    </p>

                  </div>

                </Link>
              ))}

            </div>
          </div>
        </section>


        {/* =========================================================
            PDF LIBRARY
        ========================================================= */}
        <section
          id="pdfs"
          className="border-b"
          style={{ background: "var(--bg-soft)" }}
        >
          <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-28">

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">

              <div>
                <p
                  className="text-xs font-black uppercase tracking-[0.18em] mb-3"
                  style={{ color: "var(--accent)" }}
                >
                  Latest Resources
                </p>

                <h2
                  className="font-black uppercase tracking-[-0.04em] leading-none"
                  style={{
                    fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
                    color: "var(--fg)",
                  }}
                >
                  MCQ PDFs.
                </h2>
              </div>

              <Link
                href="/pdfs"
                className="font-black text-sm uppercase underline underline-offset-4 decoration-2 shrink-0"
                style={{ color: "var(--fg)" }}
              >
                View All PDFs →
              </Link>

            </div>


            {categories.length > 0 && (
              <div className="flex gap-2 overflow-x-auto pb-4 mb-7 scrollbar-hide">
                <span
                  className="shrink-0 px-4 py-2 rounded-full border text-[10px] font-black uppercase tracking-wider"
                  style={{
                    borderColor: "var(--fg)",
                    background: "var(--fg)",
                    color: "var(--bg)",
                  }}
                >
                  All Resources
                </span>

                {categories.map((category) => (
                  <span
                    key={category}
                    className="shrink-0 px-4 py-2 rounded-full border text-[10px] font-black uppercase tracking-wider"
                    style={{
                      borderColor: "var(--border)",
                      color: "var(--fg-soft)",
                    }}
                  >
                    {category}
                  </span>
                ))}
              </div>
            )}


            {pdfs.length === 0 ? (

              <div
                className="border-2 border-dashed p-10 md:p-20 text-center"
                style={{ borderColor: "var(--border)" }}
              >
                <div
                  className="text-5xl font-black mb-4"
                  style={{ color: "var(--accent)" }}
                >
                  +
                </div>

                <h3 className="font-black text-xl mb-2">
                  New resources coming soon.
                </h3>

                <p
                  className="text-sm max-w-md mx-auto"
                  style={{ color: "var(--fg-soft)" }}
                >
                  MCQ PDFs and nursing preparation resources will appear here
                  as they are added.
                </p>
              </div>

            ) : (

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                {pdfs.slice(0, 6).map((pdf) => (
                  <Link
                    key={pdf.id}
                    href={`/pdfs/${pdf.slug}`}
                    className="group border-2 p-5 md:p-6 transition-all duration-200 hover:-translate-y-1"
                    style={{
                      borderColor: "var(--border)",
                      background: "var(--bg)",
                    }}
                  >

                    <div className="flex items-start justify-between gap-4 mb-10">

                      <span
                        className="px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-wider"
                        style={{
                          background: "var(--accent-bg)",
                          color: "var(--accent)",
                        }}
                      >
                        {pdf.category || "Nursing"}
                      </span>

                      <span
                        className="text-xl transition-transform group-hover:translate-x-1"
                        style={{ color: "var(--fg)" }}
                      >
                        ↗
                      </span>

                    </div>

                    <h3
                      className="font-black text-lg leading-tight mb-3 line-clamp-2"
                      style={{ color: "var(--fg)" }}
                    >
                      {pdf.title}
                    </h3>

                    <p
                      className="text-sm leading-relaxed line-clamp-2 mb-6"
                      style={{ color: "var(--fg-soft)" }}
                    >
                      {pdf.description || "Nursing MCQ practice resource"}
                    </p>

                    <div
                      className="pt-4 border-t flex justify-between items-center text-[10px] font-black uppercase tracking-wider"
                      style={{
                        borderColor: "var(--border)",
                        color: "var(--fg-muted)",
                      }}
                    >
                      <span>
                        {pdf.date
                          ? new Date(pdf.date).toLocaleDateString("en-IN", {
                              day: "2-digit",
                              month: "short",
                            })
                          : "Resource"}
                      </span>

                      <span>Open PDF</span>
                    </div>

                  </Link>
                ))}

              </div>

            )}

          </div>
        </section>


        {/* =========================================================
            SUBJECTS
        ========================================================= */}
        <section className="border-b">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-28">

            <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-12 md:gap-20">

              <div>
                <p
                  className="text-xs font-black uppercase tracking-[0.18em] mb-4"
                  style={{ color: "var(--accent)" }}
                >
                  Core Preparation
                </p>

                <h2
                  className="font-black uppercase tracking-[-0.04em] leading-[0.9]"
                  style={{
                    fontSize: "clamp(3rem, 8vw, 6rem)",
                    color: "var(--fg)",
                  }}
                >
                  KNOW
                  <br />
                  YOUR
                  <br />
                  SUBJECTS.
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 self-start">

                {subjects.map((subject, index) => (
                  <div
                    key={subject}
                    className="border p-4 md:p-5"
                    style={{
                      borderColor: "var(--border)",
                      background: "var(--bg-soft)",
                    }}
                  >

                    <div
                      className="text-[10px] font-black mb-7"
                      style={{ color: "var(--accent)" }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div
                      className="font-black text-sm leading-snug"
                      style={{ color: "var(--fg)" }}
                    >
                      {subject}
                    </div>

                  </div>
                ))}

              </div>

            </div>

          </div>
        </section>


        {/* =========================================================
            NORCET FEATURE CTA
        ========================================================= */}
        <section
          className="border-b"
          style={{
            background: "var(--fg)",
            color: "var(--bg)",
          }}
        >
          <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-24">

            <div className="grid md:grid-cols-[1fr_auto] gap-10 items-end">

              <div>
                <p
                  className="text-xs font-black uppercase tracking-[0.18em] mb-5"
                  style={{ color: "var(--accent)" }}
                >
                  NORCET 11 · MAINS
                </p>

                <h2
                  className="font-black uppercase tracking-[-0.05em] leading-[0.88]"
                  style={{
                    fontSize: "clamp(3.5rem, 10vw, 8rem)",
                    color: "var(--bg)",
                  }}
                >
                  READY
                  <br />
                  TO
                  <br />
                  PRACTICE?
                </h2>

                <p
                  className="max-w-xl mt-7 text-sm md:text-base leading-relaxed"
                  style={{ color: "var(--fg-muted)" }}
                >
                  Practice NORCET 11 Mains nursing questions section by
                  section. No timer. No pressure. Just focused practice.
                </p>
              </div>

              <Link
                href="/norcet-11"
                className="inline-flex items-center justify-center gap-3 px-7 py-5 border-2 font-black text-sm uppercase tracking-wide transition-transform hover:-translate-y-1"
                style={{
                  background: "var(--accent)",
                  color: "#fff",
                  borderColor: "var(--bg)",
                  boxShadow: "7px 7px 0 var(--accent)",
                }}
              >
                Open NORCET Practice
                <span className="text-lg">→</span>
              </Link>

            </div>

          </div>
        </section>


        {/* =========================================================
            FINAL CTA
        ========================================================= */}
        <section>
          <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20 md:py-32">

            <div className="max-w-4xl">

              <p
                className="text-xs font-black uppercase tracking-[0.18em] mb-5"
                style={{ color: "var(--accent)" }}
              >
                Start Today
              </p>

              <h2
                className="font-black uppercase tracking-[-0.055em] leading-[0.85]"
                style={{
                  fontSize: "clamp(3.5rem, 10vw, 8rem)",
                  color: "var(--fg)",
                }}
              >
                YOUR
                <br />
                PREPARATION
                <br />
                STARTS
                <span style={{ color: "var(--accent)" }}> HERE.</span>
              </h2>

              <div className="mt-10 flex flex-col sm:flex-row gap-5 sm:items-center">

                <Link
                  href="/norcet-11"
                  className="inline-flex items-center justify-center gap-3 px-7 py-5 border-2 font-black text-sm uppercase tracking-wide transition-transform hover:-translate-y-1"
                  style={{
                    background: "var(--accent)",
                    color: "#fff",
                    borderColor: "var(--fg)",
                    boxShadow: "7px 7px 0 var(--fg)",
                  }}
                >
                  Start Practicing
                  <span className="text-lg">→</span>
                </Link>

                <Link
                  href="/notes"
                  className="font-black text-sm uppercase underline underline-offset-4 decoration-2"
                  style={{ color: "var(--fg)" }}
                >
                  Explore Nursing Notes →
                </Link>

              </div>

            </div>

          </div>
        </section>

      </main>
    </div>
  );
}
