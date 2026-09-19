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
      title: "Note Not Found",
    };
  }

  return {
    title: note.title,
    description:
      note.description ||
      "Nursing notes and guideline updates from RPrep Nursing.",
  };
}

export default async function NoteDetailPage({ params }: Props) {
  const { slug } = await params;
  const note = await getNote(slug);

  if (!note) {
    notFound();
  }

  return (
    <div
      className="min-h-screen"
      style={{ background: "var(--bg)" }}
    >
      <main>
        {/* HEADER */}
        <section className="max-w-5xl mx-auto px-5 pt-10 pb-12 md:pt-16 md:pb-16">

          <div className="flex flex-wrap items-center gap-2 text-xs mb-8">
            <Link
              href="/"
              className="font-semibold hover:opacity-70"
              style={{ color: "var(--accent)" }}
            >
              Home
            </Link>

            <span style={{ color: "var(--fg-muted)" }}>/</span>

            <Link
              href="/notes"
              className="font-semibold hover:opacity-70"
              style={{ color: "var(--accent)" }}
            >
              Notes
            </Link>

            {note.category && (
              <>
                <span style={{ color: "var(--fg-muted)" }}>/</span>
                <span style={{ color: "var(--fg-soft)" }}>
                  {note.category}
                </span>
              </>
            )}
          </div>

          {note.category && (
            <p
              className="text-xs font-bold uppercase tracking-[0.18em] mb-3"
              style={{ color: "var(--accent)" }}
            >
              {note.category}
            </p>
          )}

          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight max-w-4xl"
            style={{ color: "var(--fg)" }}
          >
            {note.title}
          </h1>

          {note.description && (
            <p
              className="mt-6 text-base md:text-lg leading-relaxed max-w-3xl"
              style={{ color: "var(--fg-soft)" }}
            >
              {note.description}
            </p>
          )}

          <div
            className="flex flex-wrap gap-4 mt-6 text-xs"
            style={{ color: "var(--fg-muted)" }}
          >
            {note.date && (
              <span>
                Updated{" "}
                {new Date(note.date).toLocaleDateString("en-IN")}
              </span>
            )}

            {note.source && (
              <span>
                Source: {note.source}
              </span>
            )}
          </div>
        </section>

        {/* CONTENT */}
        <section
          className="border-y"
          style={{
            borderColor: "var(--border)",
            background: "var(--bg-soft)",
          }}
        >
          <article className="max-w-4xl mx-auto px-5 py-10 md:py-16">

            <div
              className="note-content"
              style={{ color: "var(--fg)" }}
              dangerouslySetInnerHTML={{
                __html: note.content || "<p>No content available.</p>",
              }}
            />

            {Array.isArray(note.tags) && note.tags.length > 0 && (
              <div
                className="flex flex-wrap gap-2 mt-12 pt-8 border-t"
                style={{ borderColor: "var(--border)" }}
              >
                {note.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="chip"
                    style={{
                      background: "var(--accent-bg)",
                      color: "var(--accent)",
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

          </article>
        </section>

        {/* BACK */}
        <section className="max-w-5xl mx-auto px-5 py-12">
          <div className="flex flex-wrap gap-3">

            <Link
              href="/notes"
              className="rounded-xl px-5 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
              style={{
                background: "var(--accent)",
                color: "white",
              }}
            >
              ← All Notes
            </Link>

            <Link
              href="/"
              className="rounded-xl border px-5 py-3 text-sm font-semibold transition-opacity hover:opacity-70"
              style={{
                borderColor: "var(--border)",
                color: "var(--fg)",
                background: "var(--bg-soft)",
              }}
            >
              Home
            </Link>

          </div>
        </section>
      </main>
    </div>
  );
}
