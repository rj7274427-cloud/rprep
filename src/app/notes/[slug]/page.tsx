import Link from "next/link";
import { notFound } from "next/navigation";
import { db } from "@/lib/firebase";
import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

async function getNote(slug: string) {
  try {
    const q = query(
      collection(db, "notes"),
      where("slug", "==", slug)
    );

    const snap = await getDocs(q);

    if (snap.empty) return null;

    const d = snap.docs[0];

    return {
      id: d.id,
      ...d.data(),
    } as any;
  } catch {
    return null;
  }
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const note = await getNote(slug);

  if (!note) {
    return {
      title: "Note Not Found | RPrep Nursing",
    };
  }

  return {
    title: `${note.title} | RPrep Nursing`,
    description:
      note.description ||
      "Nursing notes and guideline updates from RPrep Nursing.",
    keywords: note.tags || [],
    alternates: {
      canonical: `/notes/${note.slug}`,
    },
  };
}

export default async function NoteDetailPage({ params }: Props) {
  const { slug } = await params;
  const note = await getNote(slug);

  if (!note) {
    notFound();
  }

  const publishedDate = note.date
    ? new Date(note.date).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "Study Note";

  return (
    <main
      className="min-h-screen overflow-x-hidden"
      style={{
        background: "var(--bg)",
        color: "var(--fg)",
      }}
    >

      {/* =====================================================
          ARTICLE HEADER
      ===================================================== */}
      <section className="border-b">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-8 pb-14 md:pt-12 md:pb-20">

          {/* BREADCRUMB */}
          <div
            className="flex flex-wrap items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-10"
            style={{ color: "var(--fg-muted)" }}
          >
            <Link
              href="/"
              className="transition-opacity hover:opacity-60"
            >
              Home
            </Link>

            <span>/</span>

            <Link
              href="/notes"
              className="transition-opacity hover:opacity-60"
            >
              Notes
            </Link>

            {note.category && (
              <>
                <span>/</span>

                <span
                  className="truncate max-w-[220px]"
                  style={{ color: "var(--accent)" }}
                >
                  {note.category}
                </span>
              </>
            )}
          </div>


          <div className="grid lg:grid-cols-[1fr_280px] gap-10 lg:gap-16 items-end">

            {/* TITLE */}
            <div>

              {note.category && (
                <div
                  className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] mb-7"
                  style={{
                    borderColor: "var(--fg)",
                    color: "var(--fg)",
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ background: "var(--accent)" }}
                  />

                  {note.category}
                </div>
              )}

              <h1
                className="font-black uppercase tracking-[-0.055em] leading-[0.88] break-words max-w-full"
                style={{
                  fontSize: "clamp(3rem, 8vw, 7rem)",
                  color: "var(--fg)",
                  overflowWrap: "anywhere",
                }}
              >
                {note.title}
              </h1>

              {note.description && (
                <p
                  className="max-w-3xl mt-7 text-base md:text-lg leading-relaxed break-words"
                  style={{ color: "var(--fg-soft)" }}
                >
                  {note.description}
                </p>
              )}

            </div>


            {/* ARTICLE META */}
            <div
              className="border-2 p-5"
              style={{
                borderColor: "var(--fg)",
                background: "var(--accent)",
                color: "#fff",
                boxShadow: "6px 6px 0 var(--fg)",
              }}
            >

              <div className="text-[9px] font-black uppercase tracking-[0.18em] opacity-80 mb-2">
                Study Note
              </div>

              <div className="text-4xl font-black leading-none mb-6">
                NOTE
              </div>

              <div className="space-y-4 text-xs font-bold">

                <div>
                  <div className="opacity-65 uppercase tracking-wider text-[9px] mb-1">
                    Updated
                  </div>

                  <div>
                    {publishedDate}
                  </div>
                </div>

                {note.source && (
                  <div>
                    <div className="opacity-65 uppercase tracking-wider text-[9px] mb-1">
                      Source
                    </div>

                    <div className="break-words">
                      {note.source}
                    </div>
                  </div>
                )}

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          ARTICLE CONTENT
      ===================================================== */}
      <section
        className="border-b"
        style={{
          borderColor: "var(--fg)",
          background: "var(--bg-soft)",
        }}
      >
        <article className="max-w-4xl mx-auto px-5 sm:px-8 py-12 md:py-20">

          <div className="mb-10">

            <p
              className="text-xs font-black uppercase tracking-[0.18em] mb-3"
              style={{ color: "var(--accent)" }}
            >
              Detailed Revision
            </p>

            <div
              className="w-16 h-1"
              style={{ background: "var(--accent)" }}
            />

          </div>


          {/* ACTUAL NOTE HTML */}
          <div
            className="note-content"
            style={{
              color: "var(--fg)",
              overflowWrap: "anywhere",
            }}
            dangerouslySetInnerHTML={{
              __html:
                note.content ||
                "<p>No content available for this note.</p>",
            }}
          />


          {/* TAGS */}
          {Array.isArray(note.tags) && note.tags.length > 0 && (
            <div
              className="mt-14 pt-8 border-t"
              style={{ borderColor: "var(--border)" }}
            >

              <p
                className="text-xs font-black uppercase tracking-[0.18em] mb-5"
                style={{ color: "var(--accent)" }}
              >
                Related Topics
              </p>

              <div className="flex flex-wrap gap-2">

                {note.tags.map((tag: string, index: number) => (
                  <span
                    key={`${tag}-${index}`}
                    className="px-4 py-2 rounded-full border text-[10px] font-black uppercase tracking-wider"
                    style={{
                      borderColor: "var(--border)",
                      color: "var(--fg-soft)",
                      background: "var(--bg)",
                    }}
                  >
                    #{tag}
                  </span>
                ))}

              </div>

            </div>
          )}

        </article>
      </section>


      {/* =====================================================
          CONTINUE PREPARATION
      ===================================================== */}
      <section>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14 md:py-20">

          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-end">

            <div>

              <p
                className="text-xs font-black uppercase tracking-[0.18em] mb-4"
                style={{ color: "var(--accent)" }}
              >
                Continue Preparing
              </p>

              <h2
                className="font-black uppercase tracking-[-0.05em] leading-[0.88]"
                style={{
                  fontSize: "clamp(2.8rem, 7vw, 6rem)",
                  color: "var(--fg)",
                }}
              >
                LEARN.
                <br />
                PRACTICE.
                <br />
                REPEAT.
              </h2>

            </div>


            <div className="flex flex-col gap-4">

              <Link
                href="/notes"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 border-2 font-black text-xs uppercase tracking-wide transition-transform hover:-translate-y-1"
                style={{
                  background: "var(--accent)",
                  color: "#fff",
                  borderColor: "var(--fg)",
                  boxShadow: "6px 6px 0 var(--fg)",
                }}
              >
                All Nursing Notes
                <span className="text-lg">→</span>
              </Link>

              <Link
                href="/norcet-11"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 border-2 font-black text-xs uppercase tracking-wide"
                style={{
                  borderColor: "var(--fg)",
                  color: "var(--fg)",
                  background: "var(--bg-soft)",
                }}
              >
                Practice MCQs
                <span>→</span>
              </Link>

              <Link
                href="/pdfs"
                className="font-black text-xs uppercase text-center underline underline-offset-4 decoration-2"
                style={{ color: "var(--fg)" }}
              >
                Explore MCQ PDFs →
              </Link>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          FINAL DARK CTA
      ===================================================== */}
      <section
        className="border-t"
        style={{
          borderColor: "var(--fg)",
          background: "var(--fg)",
        }}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14 md:py-20">

          <p
            className="text-xs font-black uppercase tracking-[0.18em] mb-4"
            style={{ color: "var(--accent)" }}
          >
            RPrep Nursing
          </p>

          <h2
            className="font-black uppercase tracking-[-0.05em] leading-[0.86]"
            style={{
              fontSize: "clamp(2.8rem, 7vw, 6rem)",
              color: "var(--bg)",
            }}
          >
            ONE CONCEPT.
            <br />
            ONE QUESTION.
            <br />
            KEEP GOING.
          </h2>

        </div>
      </section>

    </main>
  );
}
