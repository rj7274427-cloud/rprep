export const dynamic = "force-dynamic";

import Link from "next/link";
import { db } from "@/lib/firebase";
import {
  collection,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nursing MCQ PDFs | RPrep Nursing",
  description:
    "Download nursing MCQ PDFs and practice resources for NORCET, RRB Nursing and other competitive nursing examinations.",
};

async function getAllPdfs() {
  try {
    const q = query(
      collection(db, "pdfs"),
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

export default async function PdfsPage() {
  const pdfs = await getAllPdfs();

  const categories = Array.from(
    new Set(
      pdfs
        .map((pdf) => pdf.category)
        .filter(Boolean)
    )
  ) as string[];

  return (
    <main
      className="min-h-screen"
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
            RPrep Nursing · Study Resources
          </div>

          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-end">

            <div>
              <p
                className="text-xs font-black uppercase tracking-[0.18em] mb-4"
                style={{ color: "var(--accent)" }}
              >
                Nursing Preparation
              </p>

              <h1
                className="font-black uppercase tracking-[-0.055em] leading-[0.82]"
                style={{
                  fontSize: "clamp(4rem, 12vw, 9rem)",
                  color: "var(--fg)",
                }}
              >
                MCQ
                <br />
                <span style={{ color: "var(--accent)" }}>PDFs.</span>
              </h1>
            </div>

            <div className="max-w-sm md:pb-2">

              <p
                className="text-base md:text-lg leading-relaxed"
                style={{ color: "var(--fg-soft)" }}
              >
                Download nursing MCQ resources and use them for focused
                revision and exam practice.
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
                  {pdfs.length}
                </span>

                <span className="text-[10px] font-black uppercase tracking-[0.15em]">
                  Available Resources
                </span>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CATEGORY STRIP
      ===================================================== */}
      {categories.length > 0 && (
        <section
          className="border-b"
          style={{ background: "var(--bg-soft)" }}
        >
          <div className="max-w-6xl mx-auto px-5 sm:px-8 py-5">

            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">

              <span
                className="shrink-0 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-wider"
                style={{
                  background: "var(--fg)",
                  color: "var(--bg)",
                }}
              >
                All PDFs
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

          </div>
        </section>
      )}


      {/* =====================================================
          PDF LIBRARY
      ===================================================== */}
      <section>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14 md:py-24">

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10">

            <div>
              <p
                className="text-xs font-black uppercase tracking-[0.18em] mb-3"
                style={{ color: "var(--accent)" }}
              >
                Resource Library
              </p>

              <h2
                className="font-black uppercase tracking-[-0.04em] leading-none"
                style={{
                  fontSize: "clamp(2.5rem, 6vw, 5rem)",
                  color: "var(--fg)",
                }}
              >
                STUDY
                <br />
                MATERIAL.
              </h2>
            </div>

            <p
              className="text-sm max-w-xs leading-relaxed"
              style={{ color: "var(--fg-soft)" }}
            >
              Open any resource to view its details and access the available
              PDF material.
            </p>

          </div>


          {pdfs.length === 0 ? (

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
                Resources Coming Soon
              </h3>

              <p
                className="max-w-md mx-auto text-sm leading-relaxed"
                style={{ color: "var(--fg-soft)" }}
              >
                Nursing MCQ PDFs and preparation resources will appear here
                as they are published.
              </p>

              <Link
                href="/"
                className="inline-flex items-center gap-2 mt-7 font-black text-xs uppercase underline underline-offset-4"
                style={{ color: "var(--fg)" }}
              >
                Back to Home →
              </Link>

            </div>

          ) : (

            /* =================================================
               PDF CARDS
            ================================================= */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

              {pdfs.map((pdf, index) => (

                <Link
                  key={pdf.id}
                  href={`/pdfs/${pdf.slug}`}
                  className="group block border-2 p-5 md:p-6 transition-all duration-200 hover:-translate-y-1"
                  style={{
                    borderColor: "var(--fg)",
                    background:
                      index === 0
                        ? "var(--accent)"
                        : "var(--bg-soft)",
                    color:
                      index === 0
                        ? "#fff"
                        : "var(--fg)",
                    boxShadow:
                      index === 0
                        ? "6px 6px 0 var(--fg)"
                        : "none",
                  }}
                >

                  {/* TOP */}
                  <div className="flex items-start justify-between gap-4">

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
                      {pdf.category || "Nursing"}
                    </span>

                    <span
                      className="text-xl transition-transform group-hover:translate-x-1"
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
                    className="mt-10 text-[10px] font-black uppercase tracking-[0.18em]"
                    style={{
                      color:
                        index === 0
                          ? "rgba(255,255,255,0.7)"
                          : "var(--fg-muted)",
                    }}
                  >
                    Resource {String(index + 1).padStart(2, "0")}
                  </div>


                  {/* TITLE */}
                  <h2
                    className="font-black text-xl leading-tight mt-3 mb-3 line-clamp-2"
                    style={{
                      color:
                        index === 0
                          ? "#fff"
                          : "var(--fg)",
                    }}
                  >
                    {pdf.title}
                  </h2>


                  {/* DESCRIPTION */}
                  <p
                    className="text-sm leading-relaxed line-clamp-3 min-h-[4.5rem]"
                    style={{
                      color:
                        index === 0
                          ? "rgba(255,255,255,0.84)"
                          : "var(--fg-soft)",
                    }}
                  >
                    {pdf.description ||
                      "Nursing MCQ practice resource for competitive examination preparation."}
                  </p>


                  {/* BOTTOM */}
                  <div
                    className="mt-7 pt-4 border-t flex items-center justify-between text-[10px] font-black uppercase tracking-wider"
                    style={{
                      borderColor:
                        index === 0
                          ? "rgba(255,255,255,0.28)"
                          : "var(--border)",
                      color:
                        index === 0
                          ? "rgba(255,255,255,0.78)"
                          : "var(--fg-muted)",
                    }}
                  >

                    <span>
                      {pdf.date
                        ? new Date(pdf.date).toLocaleDateString(
                            "en-IN",
                            {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            }
                          )
                        : "Study Resource"}
                    </span>


                  </div>

                </Link>

              ))}

            </div>

          )}

        </div>
      </section>


      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}
      <section
        className="border-t"
        style={{
          borderColor: "var(--fg)",
          background: "var(--fg)",
          color: "var(--bg)",
        }}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14 md:py-20">

          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-end">

            <div>
              <p
                className="text-xs font-black uppercase tracking-[0.18em] mb-4"
                style={{ color: "var(--accent)" }}
              >
                Keep Preparing
              </p>

              <h2
                className="font-black uppercase tracking-[-0.05em] leading-[0.88]"
                style={{
                  fontSize: "clamp(2.8rem, 7vw, 6rem)",
                  color: "var(--bg)",
                }}
              >
                PRACTICE.
                <br />
                REVISE.
                <br />
                REPEAT.
              </h2>
            </div>

            <Link
              href="/norcet-11"
              className="inline-flex items-center justify-center gap-3 px-6 py-4 border-2 font-black text-xs uppercase tracking-wide transition-transform hover:-translate-y-1"
              style={{
                background: "var(--accent)",
                color: "#fff",
                borderColor: "var(--bg)",
                boxShadow: "5px 5px 0 var(--accent)",
              }}
            >
              Start Practice
              <span className="text-lg">→</span>
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}
