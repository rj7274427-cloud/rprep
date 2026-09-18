import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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

const features = [
  {
    title: "Exam-Focused MCQs",
    desc: "Practice nursing MCQs designed around the RRB Nursing Superintendent examination.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
  },
  {
    title: "Subject-Wise Practice",
    desc: "Revise important nursing subjects with organized MCQ PDFs and study resources.",
    icon: (
      <>
        <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H6.5A2.5 2.5 0 0 0 4 22V5.5Z" />
        <path d="M4 5.5V18a2 2 0 0 0 2 2" />
      </>
    ),
  },
  {
    title: "Quick Revision",
    desc: "Use concise practice material to revise important concepts before your examination.",
    icon: (
      <>
        <path d="M12 3v18" />
        <path d="M17 8c0-2.2-2.2-4-5-4S7 5.8 7 8s2.2 4 5 4 5 1.8 5 4-2.2 4-5 4-5-1.8-5-4" />
      </>
    ),
  },
];

const subjects = [
  "Fundamentals of Nursing",
  "Medical-Surgical Nursing",
  "Community Health Nursing",
  "Child Health Nursing",
  "Obstetric & Gynecological Nursing",
  "Mental Health Nursing",
];

export default async function Home() {
  const pdfs = await getAllPdfs();

  const categories = Array.from(
    new Set(pdfs.map((p) => p.category).filter(Boolean))
  ) as string[];

  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{ background: "var(--bg)" }}
    >
      <Navbar />

      <main>
        {/* HERO */}
        <section className="max-w-5xl mx-auto px-5 pt-14 pb-16 md:pt-24 md:pb-24">
          <div className="max-w-3xl fade-in">
            <div className="badge mb-6">
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "var(--accent)" }}
              />
              RRB Nursing Superintendent Preparation
            </div>

            <h1
              className="text-[2.35rem] sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] mb-6"
              style={{ color: "var(--fg)" }}
            >
              Prepare for RRB Nursing Superintendent
              <span style={{ color: "var(--accent)" }}> with confidence.</span>
            </h1>

            <p
              className="text-[15px] sm:text-base md:text-lg leading-relaxed max-w-2xl mb-8"
              style={{ color: "var(--fg-soft)" }}
            >
              Practice exam-focused nursing MCQs, revise important concepts,
              and access free PDF resources designed for RRB Nursing
              Superintendent aspirants.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#pdfs" className="btn-primary">
                Explore MCQ PDFs
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>

              <a href="#subjects" className="btn-secondary">
                Explore Subjects
              </a>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section
          className="border-y"
          style={{
            borderColor: "var(--border)",
            background: "var(--bg-soft)",
          }}
        >
          <div className="max-w-5xl mx-auto px-5">
            <div className="grid grid-cols-3">
              {[
                { n: pdfs.length, l: "MCQ PDFs" },
                { n: categories.length, l: "Categories" },
                { n: "100%", l: "Free" },
              ].map((stat, index) => (
                <div
                  key={stat.l}
                  className="py-6 md:py-8 text-center px-1"
                  style={{
                    borderLeft:
                      index > 0 ? "1px solid var(--border)" : "none",
                  }}
                >
                  <div
                    className="text-xl sm:text-3xl md:text-4xl font-black mb-1 tabular-nums"
                    style={{ color: "var(--accent)" }}
                  >
                    {stat.n}
                  </div>

                  <div
                    className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.12em] sm:tracking-[0.15em] font-semibold"
                    style={{ color: "var(--fg-muted)" }}
                  >
                    {stat.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PDF LIBRARY */}
        <section
          id="pdfs"
          className="max-w-5xl mx-auto px-5 py-16 md:py-24"
        >
          <div className="mb-8">
            <p
              className="text-xs font-bold uppercase tracking-[0.15em] mb-2"
              style={{ color: "var(--accent)" }}
            >
              Study Resources
            </p>

            <h2
              className="text-2xl md:text-3xl font-black mb-2 tracking-tight"
              style={{ color: "var(--fg)" }}
            >
              Nursing MCQ Library
            </h2>

            <p
              className="text-sm md:text-base"
              style={{ color: "var(--fg-soft)" }}
            >
              Practice topic-wise and subject-wise MCQs for your RRB Nursing
              Superintendent preparation.
            </p>
          </div>

          {categories.length > 0 && (
            <div className="flex gap-2 overflow-x-auto pb-3 mb-6 -mx-5 px-5 scrollbar-hide">
              <span className="chip chip-active">All</span>

              {categories.map((category) => (
                <span key={category} className="chip">
                  {category}
                </span>
              ))}
            </div>
          )}

          {pdfs.length === 0 ? (
            <div
              className="rounded-2xl border-2 border-dashed p-8 md:p-16 text-center"
              style={{ borderColor: "var(--border)" }}
            >
              <div
                className="w-16 h-16 mx-auto mb-5 rounded-2xl flex items-center justify-center"
                style={{ background: "var(--accent-bg)" }}
              >
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ color: "var(--accent)" }}
                >
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
              </div>

              <h3
                className="font-bold text-lg mb-2"
                style={{ color: "var(--fg)" }}
              >
                No MCQ PDFs available yet
              </h3>

              <p
                className="text-sm max-w-md mx-auto"
                style={{ color: "var(--fg-soft)" }}
              >
                New RRB Nursing Superintendent study resources will appear
                here as they are added.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {pdfs.map((pdf) => (
                <Link
                  key={pdf.id}
                  href={`/pdfs/${pdf.slug}`}
                  className="card group block p-5"
                >
                  <span
                    className="inline-block px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider mb-3"
                    style={{
                      background: "var(--accent-bg)",
                      color: "var(--accent)",
                    }}
                  >
                    {pdf.category || "Nursing"}
                  </span>

                  <h3
                    className="font-bold mb-2 line-clamp-2 leading-snug"
                    style={{
                      color: "var(--fg)",
                      fontSize: "15px",
                    }}
                  >
                    {pdf.title}
                  </h3>

                  <p
                    className="text-xs line-clamp-2 mb-5"
                    style={{ color: "var(--fg-soft)" }}
                  >
                    {pdf.description || "RRB Nursing Superintendent MCQ PDF"}
                  </p>

                  <div
                    className="flex items-center justify-between text-[11px] pt-4 border-t"
                    style={{
                      color: "var(--fg-muted)",
                      borderColor: "var(--border)",
                    }}
                  >
                    <span>
                      {pdf.date
                        ? new Date(pdf.date).toLocaleDateString("en-IN", {
                            day: "2-digit",
                            month: "short",
                          })
                        : "Study Resource"}
                    </span>

                    <span className="font-semibold flex items-center gap-1">
                      Open PDF
                      <svg
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* SUBJECTS */}
        <section
          id="subjects"
          className="border-y"
          style={{
            borderColor: "var(--border)",
            background: "var(--bg-soft)",
          }}
        >
          <div className="max-w-5xl mx-auto px-5 py-16 md:py-24">
            <div className="mb-10 text-center">
              <p
                className="text-xs font-bold uppercase tracking-[0.15em] mb-2"
                style={{ color: "var(--accent)" }}
              >
                Core Preparation
              </p>

              <h2
                className="text-2xl md:text-3xl font-black mb-2 tracking-tight"
                style={{ color: "var(--fg)" }}
              >
                Important Nursing Subjects
              </h2>

              <p
                className="text-sm md:text-base max-w-2xl mx-auto"
                style={{ color: "var(--fg-soft)" }}
              >
                Build a strong foundation across the major nursing subjects
                relevant to competitive nursing examinations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {subjects.map((subject, index) => (
                <div
                  key={subject}
                  className="card p-4 flex items-center gap-3"
                >
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold shrink-0"
                    style={{
                      background: "var(--accent-bg)",
                      color: "var(--accent)",
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span
                    className="text-sm font-semibold"
                    style={{ color: "var(--fg)" }}
                  >
                    {subject}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY RPREP */}
        <section
          id="features"
          className="border-b"
          style={{
            borderColor: "var(--border)",
            background: "var(--bg)",
          }}
        >
          <div className="max-w-5xl mx-auto px-5 py-16 md:py-24">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <p
                className="text-xs font-bold uppercase tracking-[0.18em] mb-3"
                style={{ color: "var(--accent)" }}
              >
                Why RPrep Nursing?
              </p>

              <h2
                className="text-2xl md:text-4xl font-black tracking-tight mb-4"
                style={{ color: "var(--fg)" }}
              >
                Practice. Revise. Prepare.
              </h2>

              <p
                className="text-sm md:text-base leading-relaxed max-w-2xl mx-auto"
                style={{ color: "var(--fg-soft)" }}
              >
                Simple study resources focused on helping nursing aspirants
                practice consistently.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 text-center">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex flex-col items-center"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                    style={{ background: "var(--accent-bg)" }}
                  >
                    <svg
                      className="w-7 h-7"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ color: "var(--accent)" }}
                    >
                      {feature.icon}
                    </svg>
                  </div>

                  <h3
                    className="font-bold mb-2.5"
                    style={{
                      color: "var(--fg)",
                      fontSize: "17px",
                    }}
                  >
                    {feature.title}
                  </h3>

                  <p
                    className="text-sm leading-relaxed max-w-sm"
                    style={{ color: "var(--fg-soft)" }}
                  >
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-5xl mx-auto px-5 py-20 md:py-28 text-center">
          <div className="max-w-2xl mx-auto">
            <p
              className="text-xs font-bold uppercase tracking-[0.15em] mb-3"
              style={{ color: "var(--accent)" }}
            >
              Start Your Preparation
            </p>

            <h2
              className="text-[1.8rem] sm:text-3xl md:text-5xl font-black tracking-tight mb-4 leading-[1.1]"
              style={{ color: "var(--fg)" }}
            >
              Strengthen your nursing preparation
              <span style={{ color: "var(--accent)" }}> today.</span>
            </h2>

            <p
              className="text-sm md:text-base mb-8 max-w-xl mx-auto leading-relaxed"
              style={{ color: "var(--fg-soft)" }}
            >
              Access free MCQ PDFs, revise important nursing concepts, and
              keep your preparation consistent.
            </p>

            <a href="#pdfs" className="btn-primary">
              Browse MCQ PDFs
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
