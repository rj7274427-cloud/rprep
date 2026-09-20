import Link from "next/link";
import { db } from "@/lib/firebase";
import {
  collection,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Nursing Notes & Guidelines | RPrep Nursing",
  description:
    "Nursing notes, guideline updates, clinical revision resources, and important updates for nursing aspirants.",
};

async function getNotes() {
  try {
    const q = query(
      collection(db, "notes"),
      orderBy("date", "desc")
    );

    const snap = await getDocs(q);

    return snap.docs.map((d) => ({
      id: d.id,
      ...d.data(),
    })) as any[];
  } catch {
    return [];
  }
}

export default async function NotesPage() {
  const notes = await getNotes();

  return (
    <main
      className="min-h-screen overflow-x-hidden"
      style={{
        background: "var(--bg)",
        color: "var(--fg)",
      }}
    >

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="border-b">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-12 pb-14 md:pt-20 md:pb-20">

          <div
            className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] mb-8"
            style={{
              borderColor: "var(--fg)",
              color: "var(--fg)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: "var(--accent)" }}
            />
            RPrep Nursing · Knowledge
          </div>

          <div className="grid md:grid-cols-[1fr_320px] gap-10 items-end">

            <div>

              <p
                className="text-xs font-black uppercase tracking-[0.18em] mb-4"
                style={{ color: "var(--accent)" }}
              >
                Study · Revise · Update
              </p>

              <h1
                className="font-black uppercase tracking-[-0.055em] leading-[0.82]"
                style={{
                  fontSize: "clamp(4rem, 12vw, 9rem)",
                  color: "var(--fg)",
                }}
              >
                NURSING
                <br />
                <span style={{ color: "var(--accent)" }}>NOTES.</span>
              </h1>

            </div>

            <div className="max-w-sm">

              <p
                className="text-base md:text-lg leading-relaxed"
                style={{ color: "var(--fg-soft)" }}
              >
                High-yield nursing notes, clinical concepts, guideline
                updates and useful revision material for competitive exam
                preparation.
              </p>

              <div
                className="mt-6 inline-flex items-center gap-3 border-2 px-4 py-3"
                style={{
                  borderColor: "var(--fg)",
                  background: "var(--accent)",
                  color: "#fff",
                  boxShadow: "4px 4px 0 var(--fg)",
                }}
              >
                <span className="text-2xl font-black">
                  {notes.length}
                </span>

                <span className="text-[10px] font-black uppercase tracking-[0.15em]">
                  Published Notes
                </span>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          NOTES LIBRARY
      ===================================================== */}
      <section
        className="border-b"
        style={{
          borderColor: "var(--fg)",
          background: "var(--bg-soft)",
        }}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14 md:py-24">

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">

            <div>

              <p
                className="text-xs font-black uppercase tracking-[0.18em] mb-3"
                style={{ color: "var(--accent)" }}
              >
                Latest Knowledge
              </p>

              <h2
                className="font-black uppercase tracking-[-0.04em] leading-none"
                style={{
                  fontSize: "clamp(2.7rem, 6vw, 5.2rem)",
                  color: "var(--fg)",
                }}
              >
                READ.
                <br />
                REVISE.
              </h2>

            </div>

            <p
              className="text-sm max-w-xs leading-relaxed"
              style={{ color: "var(--fg-soft)" }}
            >
              Explore the latest nursing notes and revision resources
              published on RPrep Nursing.
            </p>

          </div>


          {notes.length === 0 ? (

            /* =================================================
               EMPTY STATE
            ================================================= */
            <div
              className="border-2 border-dashed p-10 md:p-20 text-center"
              style={{ borderColor: "var(--border)" }}
            >

              <div
                className="text-6xl font-black mb-5"
                style={{ color: "var(--accent)" }}
              >
                +
              </div>

              <h3
                className="text-2xl font-black uppercase mb-3"
                style={{ color: "var(--fg)" }}
              >
                Notes Coming Soon
              </h3>

              <p
                className="max-w-md mx-auto text-sm leading-relaxed"
                style={{ color: "var(--fg-soft)" }}
              >
                New nursing notes, clinical concepts and guideline updates
                will appear here as they are published.
              </p>

              <Link
                href="/"
                className="inline-flex mt-7 font-black text-xs uppercase underline underline-offset-4"
                style={{ color: "var(--fg)" }}
              >
                Back to Home →
              </Link>

            </div>

          ) : (

            /* =================================================
               NOTE CARDS
            ================================================= */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              {notes.map((note, index) => (

                <Link
                  key={note.id}
                  href={`/notes/${note.slug}`}
                  className="group block border-2 p-6 md:p-7 transition-all duration-200 hover:-translate-y-1"
                  style={{
                    borderColor: "var(--fg)",
                    background:
                      index === 0
                        ? "var(--accent)"
                        : "var(--bg)",
                    color:
                      index === 0
                        ? "#fff"
                        : "var(--fg)",
                    boxShadow:
                      index === 0
                        ? "7px 7px 0 var(--fg)"
                        : "none",
                  }}
                >

                  {/* TOP */}
                  <div className="flex items-start justify-between gap-4">

                    <div className="flex flex-wrap items-center gap-2">

                      {note.category && (
                        <span
                          className="px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-wider"
                          style={{
                            background:
                              index === 0
                                ? "rgba(255,255,255,0.16)"
                                : "var(--accent-bg)",
                            color:
                              index === 0
                                ? "#fff"
                                : "var(--accent)",
                          }}
                        >
                          {note.category}
                        </span>
                      )}

                    </div>

                    <span
                      className="text-xl transition-transform group-hover:translate-x-1 shrink-0"
                      style={{
                        color:
                          index === 0
                            ? "#fff"
                            : "var(--fg)",
                      }}
                    >
                      ↗
                    </span>

                  </div>


                  {/* NUMBER */}
                  <div
                    className="mt-12 text-[10px] font-black uppercase tracking-[0.18em]"
                    style={{
                      color:
                        index === 0
                          ? "rgba(255,255,255,0.7)"
                          : "var(--fg-muted)",
                    }}
                  >
                    Note {String(index + 1).padStart(2, "0")}
                  </div>


                  {/* TITLE */}
                  <h3
                    className="font-black text-2xl md:text-3xl leading-tight tracking-tight mt-3 mb-4 break-words"
                    style={{
                      color:
                        index === 0
                          ? "#fff"
                          : "var(--fg)",
                    }}
                  >
                    {note.title}
                  </h3>


                  {/* DESCRIPTION */}
                  {note.description && (
                    <p
                      className="text-sm md:text-base leading-relaxed line-clamp-3"
                      style={{
                        color:
                          index === 0
                            ? "rgba(255,255,255,0.84)"
                            : "var(--fg-soft)",
                      }}
                    >
                      {note.description}
                    </p>
                  )}


                  {/* BOTTOM */}
                  <div
                    className="mt-7 pt-4 border-t flex items-center justify-between gap-4"
                    style={{
                      borderColor:
                        index === 0
                          ? "rgba(255,255,255,0.28)"
                          : "var(--border)",
                    }}
                  >

                    <span
                      className="text-[10px] font-black uppercase tracking-wider"
                      style={{
                        color:
                          index === 0
                            ? "rgba(255,255,255,0.72)"
                            : "var(--fg-muted)",
                      }}
                    >
                      {note.date
                        ? new Date(note.date).toLocaleDateString(
                            "en-IN",
                            {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            }
                          )
                        : "Study Note"}
                    </span>

                    <span
                      className="text-xs font-black uppercase tracking-wide"
                      style={{
                        color:
                          index === 0
                            ? "#fff"
                            : "var(--accent)",
                      }}
                    >
                      Read Note →
                    </span>

                  </div>

                </Link>

              ))}

            </div>

          )}

        </div>
      </section>


      {/* =====================================================
          SUBJECT REVISION STRIP
      ===================================================== */}
      <section className="border-b">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14 md:py-20">

          <div className="grid md:grid-cols-[0.7fr_1.3fr] gap-10 md:gap-16 items-start">

            <div>

              <p
                className="text-xs font-black uppercase tracking-[0.18em] mb-3"
                style={{ color: "var(--accent)" }}
              >
                Make Revision Count
              </p>

              <h2
                className="font-black uppercase tracking-[-0.045em] leading-[0.9]"
                style={{
                  fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
                  color: "var(--fg)",
                }}
              >
                KNOW
                <br />
                MORE.
              </h2>

            </div>

            <div>

              <p
                className="text-lg md:text-2xl font-black leading-tight max-w-2xl"
                style={{ color: "var(--fg)" }}
              >
                Use concise notes to strengthen concepts before moving back
                to MCQ practice.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-4">

                <Link
                  href="/norcet-11"
                  className="inline-flex items-center justify-center gap-3 px-6 py-4 border-2 font-black text-xs uppercase tracking-wide transition-transform hover:-translate-y-1"
                  style={{
                    background: "var(--accent)",
                    color: "#fff",
                    borderColor: "var(--fg)",
                    boxShadow: "5px 5px 0 var(--fg)",
                  }}
                >
                  Practice MCQs
                  <span className="text-lg">→</span>
                </Link>

                <Link
                  href="/pdfs"
                  className="inline-flex items-center justify-center gap-3 px-6 py-4 border-2 font-black text-xs uppercase tracking-wide"
                  style={{
                    borderColor: "var(--fg)",
                    color: "var(--fg)",
                    background: "var(--bg-soft)",
                  }}
                >
                  Browse PDFs
                  <span>→</span>
                </Link>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section
        style={{
          background: "var(--fg)",
        }}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-24">

          <p
            className="text-xs font-black uppercase tracking-[0.18em] mb-5"
            style={{ color: "var(--accent)" }}
          >
            Keep Learning
          </p>

          <h2
            className="font-black uppercase tracking-[-0.05em] leading-[0.86]"
            style={{
              fontSize: "clamp(3rem, 8vw, 7rem)",
              color: "var(--bg)",
            }}
          >
            STUDY.
            <br />
            PRACTICE.
            <br />
            REPEAT.
          </h2>

          <p
            className="max-w-xl mt-7 text-sm md:text-base leading-relaxed"
            style={{ color: "var(--fg-muted)" }}
          >
            Build your nursing preparation one concept and one question at a
            time.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 mt-9">

            <Link
              href="/norcet-11"
              className="inline-flex items-center justify-center gap-3 px-7 py-4 border-2 font-black text-xs uppercase tracking-wide transition-transform hover:-translate-y-1"
              style={{
                background: "var(--accent)",
                color: "#fff",
                borderColor: "var(--bg)",
                boxShadow: "6px 6px 0 var(--accent)",
              }}
            >
              Start Practice
              <span className="text-lg">→</span>
            </Link>

            <Link
              href="/pdfs"
              className="inline-flex items-center justify-center gap-3 px-7 py-4 border-2 font-black text-xs uppercase tracking-wide"
              style={{
                borderColor: "var(--bg)",
                color: "var(--bg)",
              }}
            >
              Explore PDFs
              <span>→</span>
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}
