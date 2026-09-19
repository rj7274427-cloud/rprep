import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { db } from "@/lib/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Nursing Notes & Guidelines",
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
    <div
      className="min-h-screen"
      style={{ background: "var(--bg)" }}
    >
      <Navbar />

      <main>
        {/* HEADER */}
        <section className="max-w-5xl mx-auto px-5 pt-16 pb-12 md:pt-24 md:pb-16">
          <div className="max-w-3xl">
            <p
              className="text-xs font-bold uppercase tracking-[0.18em] mb-3"
              style={{ color: "var(--accent)" }}
            >
              Nursing Notes
            </p>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6"
              style={{ color: "var(--fg)" }}
            >
              Nursing notes and
              <span style={{ color: "var(--accent)" }}>
                {" "}guideline updates.
              </span>
            </h1>

            <p
              className="text-base md:text-lg leading-relaxed max-w-2xl"
              style={{ color: "var(--fg-soft)" }}
            >
              Stay updated with important nursing concepts, clinical
              guidelines, revision notes, and useful preparation resources.
            </p>
          </div>
        </section>

        {/* NOTES */}
        <section
          className="border-y"
          style={{
            borderColor: "var(--border)",
            background: "var(--bg-soft)",
          }}
        >
          <div className="max-w-5xl mx-auto px-5 py-16 md:py-20">

            <div className="flex items-end justify-between gap-4 mb-8">
              <div>
                <p
                  className="text-xs font-bold uppercase tracking-[0.18em] mb-2"
                  style={{ color: "var(--accent)" }}
                >
                  Latest Updates
                </p>

                <h2
                  className="text-2xl md:text-3xl font-black tracking-tight"
                  style={{ color: "var(--fg)" }}
                >
                  Latest nursing resources
                </h2>
              </div>

              <span
                className="text-sm font-semibold"
                style={{ color: "var(--fg-soft)" }}
              >
                {notes.length} {notes.length === 1 ? "note" : "notes"}
              </span>
            </div>

            {notes.length === 0 ? (
              <div
                className="rounded-2xl border p-10 text-center"
                style={{ borderColor: "var(--border)" }}
              >
                <p
                  className="font-semibold"
                  style={{ color: "var(--fg)" }}
                >
                  No notes available yet.
                </p>

                <p
                  className="text-sm mt-2"
                  style={{ color: "var(--fg-soft)" }}
                >
                  New nursing notes and guideline updates will appear here.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {notes.map((note) => (
                  <Link
                    key={note.id}
                    href={`/notes/${note.slug}`}
                    className="card p-6 block transition-transform hover:-translate-y-0.5"
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      {note.category && (
                        <span
                          className="chip"
                          style={{
                            background: "var(--accent-bg)",
                            color: "var(--accent)",
                          }}
                        >
                          {note.category}
                        </span>
                      )}

                      {note.date && (
                        <span
                          className="text-xs"
                          style={{ color: "var(--fg-muted)" }}
                        >
                          {new Date(note.date).toLocaleDateString("en-IN")}
                        </span>
                      )}
                    </div>

                    <h3
                      className="text-lg md:text-xl font-black mb-3"
                      style={{ color: "var(--fg)" }}
                    >
                      {note.title}
                    </h3>

                    {note.description && (
                      <p
                        className="text-sm leading-6 line-clamp-3"
                        style={{ color: "var(--fg-soft)" }}
                      >
                        {note.description}
                      </p>
                    )}

                    <div
                      className="mt-5 text-sm font-semibold"
                      style={{ color: "var(--accent)" }}
                    >
                      Read note →
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* INFO */}
        <section className="max-w-5xl mx-auto px-5 py-16 md:py-20">
          <div
            className="rounded-2xl border p-7 md:p-10 text-center"
            style={{ borderColor: "var(--border)" }}
          >
            <h2
              className="text-xl md:text-2xl font-black mb-3"
              style={{ color: "var(--fg)" }}
            >
              Keep your nursing preparation updated.
            </h2>

            <p
              className="text-sm md:text-base leading-relaxed max-w-2xl mx-auto"
              style={{ color: "var(--fg-soft)" }}
            >
              New notes and important nursing guideline updates can be added
              regularly to help you revise concepts and stay informed.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
