import Link from "next/link";
import { notFound } from "next/navigation";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import type { Metadata } from "next";

type Params = { slug: string };

async function getPdfBySlug(slug: string) {
  try {
    const q = query(
      collection(db, "pdfs"),
      where("slug", "==", slug)
    );

    const snap = await getDocs(q);

    if (snap.empty) return null;

    return {
      id: snap.docs[0].id,
      ...snap.docs[0].data(),
    } as any;
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pdf = await getPdfBySlug(slug);

  if (!pdf) {
    return {
      title: "PDF Not Found | RPrep Nursing",
    };
  }

  return {
    title: `${pdf.title} | RPrep Nursing`,
    description:
      pdf.description ||
      `Download ${pdf.title} free PDF for nursing exam preparation.`,
    keywords: pdf.tags || [],
    alternates: {
      canonical: `/pdfs/${pdf.slug}`,
    },
    openGraph: {
      title: pdf.title,
      description:
        pdf.description ||
        `Download ${pdf.title} free PDF for nursing exam preparation.`,
      images: pdf.driveId
        ? [
            `https://drive.google.com/thumbnail?id=${pdf.driveId}&sz=w1200`,
          ]
        : [],
      type: "article",
    },
  };
}

export default async function PdfDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;

  const pdf = await getPdfBySlug(slug);

  if (!pdf) notFound();

  const embedUrl =
    `https://drive.google.com/file/d/${pdf.driveId}/preview`;

  const downloadUrl =
    `https://drive.google.com/uc?export=download&id=${pdf.driveId}`;

  const viewUrl =
    `https://drive.google.com/file/d/${pdf.driveId}/view`;

  const publishedDate = pdf.date
    ? new Date(pdf.date).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "Study Resource";

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
              href="/pdfs"
              className="transition-opacity hover:opacity-60"
            >
              MCQ PDFs
            </Link>

            <span>/</span>

            <span
              className="truncate max-w-[220px]"
              style={{ color: "var(--accent)" }}
            >
              {pdf.category || "Nursing"}
            </span>
          </div>


          <div className="grid lg:grid-cols-[1fr_300px] gap-10 lg:gap-16 items-end">

            {/* TITLE */}
            <div>

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
                {pdf.category || "Nursing Resource"}
              </div>

              <h1
                className="font-black uppercase tracking-[-0.055em] leading-[0.88] break-words max-w-full"
                style={{
                  fontSize: "clamp(2.7rem, 8vw, 7rem)",
                  overflowWrap: "anywhere",
                  color: "var(--fg)",
                }}
              >
                {pdf.title}
              </h1>

              <p
                className="max-w-3xl mt-7 text-base md:text-lg leading-relaxed"
                style={{ color: "var(--fg-soft)" }}
              >
                {pdf.description ||
                  "Free nursing MCQ PDF for competitive examination preparation."}
              </p>

            </div>


            {/* RESOURCE META */}
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
                Resource
              </div>

              <div className="text-4xl font-black leading-none mb-5">
                PDF
              </div>

              <div className="space-y-3 text-xs font-bold">

                <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
                  <span className="opacity-70">
                    Published
                  </span>
                  <span>
                    {publishedDate}
                  </span>
                </div>

              </div>

            </div>

          </div>


          {/* ACTIONS */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">

            <a
              href={downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-7 py-4 border-2 font-black text-xs uppercase tracking-wide transition-transform hover:-translate-y-1"
              style={{
                background: "var(--accent)",
                color: "#fff",
                borderColor: "var(--fg)",
                boxShadow: "5px 5px 0 var(--fg)",
              }}
            >
              Download PDF
              <span className="text-lg">↓</span>
            </a>

            <a
              href={viewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-7 py-4 border-2 font-black text-xs uppercase tracking-wide transition-transform hover:-translate-y-1"
              style={{
                borderColor: "var(--fg)",
                color: "var(--fg)",
                background: "var(--bg-soft)",
              }}
            >
              Open in Google Drive
              <span className="text-lg">↗</span>
            </a>

          </div>

        </div>
      </section>


      {/* =====================================================
          PDF VIEWER
      ===================================================== */}
      <section
        className="border-b"
        style={{
          borderColor: "var(--fg)",
          background: "var(--bg-soft)",
        }}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12 md:py-20">

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-7">

            <div>

              <p
                className="text-xs font-black uppercase tracking-[0.18em] mb-3"
                style={{ color: "var(--accent)" }}
              >
                Read Online
              </p>

              <h2
                className="font-black uppercase tracking-[-0.04em] leading-none"
                style={{
                  fontSize: "clamp(2.2rem, 5vw, 4.5rem)",
                  color: "var(--fg)",
                }}
              >
                PDF
                <br />
                VIEWER.
              </h2>

            </div>

            <a
              href={viewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-black text-xs uppercase underline underline-offset-4 decoration-2"
              style={{ color: "var(--fg)" }}
            >
              Open Separately →
            </a>

          </div>


          {/* VIEWER */}
          <div
            className="border-2 overflow-hidden"
            style={{
              borderColor: "var(--fg)",
              background: "var(--bg)",
              boxShadow: "7px 7px 0 var(--fg)",
            }}
          >
            <iframe
              src={embedUrl}
              title={pdf.title}
              className="w-full h-[65vh] min-h-[520px] md:h-[80vh]"
              allow="autoplay"
              loading="lazy"
            />
          </div>


          <div
            className="mt-5 border-l-4 pl-4 text-xs leading-relaxed"
            style={{
              borderColor: "var(--accent)",
              color: "var(--fg-soft)",
            }}
          >
            If the PDF does not load correctly inside the viewer, use
            <strong> Open in Google Drive </strong>
            or download the PDF above.
          </div>

        </div>
      </section>


      {/* =====================================================
          RESOURCE INFORMATION
      ===================================================== */}
      <section>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-24">

          <div className="mb-12">

            <p
              className="text-xs font-black uppercase tracking-[0.18em] mb-3"
              style={{ color: "var(--accent)" }}
            >
              Resource Information
            </p>

            <h2
              className="font-black uppercase tracking-[-0.04em] leading-none"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                color: "var(--fg)",
              }}
            >
              ABOUT THIS
              <br />
              RESOURCE.
            </h2>

          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

            {/* CATEGORY */}
            <div
              className="border-2 p-6"
              style={{
                borderColor: "var(--border)",
                background: "var(--bg-soft)",
              }}
            >
              <div
                className="text-[10px] font-black uppercase tracking-[0.18em] mb-10"
                style={{ color: "var(--accent)" }}
              >
                01 · Category
              </div>

              <h3
                className="text-xl font-black"
                style={{ color: "var(--fg)" }}
              >
                {pdf.category || "Nursing"}
              </h3>
            </div>


            {/* DATE */}
            <div
              className="border-2 p-6"
              style={{
                borderColor: "var(--border)",
                background: "var(--bg-soft)",
              }}
            >
              <div
                className="text-[10px] font-black uppercase tracking-[0.18em] mb-10"
                style={{ color: "var(--accent)" }}
              >
                02 · Published
              </div>

              <h3
                className="text-xl font-black"
                style={{ color: "var(--fg)" }}
              >
                {publishedDate}
              </h3>
            </div>


          </div>


          {/* TAGS */}
          {pdf.tags?.length > 0 && (
            <div className="mt-12">

              <p
                className="text-xs font-black uppercase tracking-[0.18em] mb-5"
                style={{ color: "var(--accent)" }}
              >
                Related Topics
              </p>

              <div className="flex flex-wrap gap-2">

                {pdf.tags.map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full border text-[10px] font-black uppercase tracking-wider"
                    style={{
                      borderColor: "var(--border)",
                      color: "var(--fg-soft)",
                      background: "var(--bg-soft)",
                    }}
                  >
                    #{tag}
                  </span>
                ))}

              </div>

            </div>
          )}

        </div>
      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section
        className="border-t"
        style={{
          borderColor: "var(--fg)",
          background: "var(--fg)",
        }}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-24">

          <p
            className="text-xs font-black uppercase tracking-[0.18em] mb-5"
            style={{ color: "var(--accent)" }}
          >
            Continue Preparing
          </p>

          <h2
            className="font-black uppercase tracking-[-0.05em] leading-[0.86]"
            style={{
              fontSize: "clamp(3rem, 8vw, 7rem)",
              color: "var(--bg)",
            }}
          >
            MORE
            <br />
            PRACTICE.
            <br />
            MORE
            <br />
            PROGRESS.
          </h2>

          <div className="flex flex-col sm:flex-row gap-5 mt-10">

            <Link
              href="/pdfs"
              className="inline-flex items-center justify-center gap-3 px-7 py-4 border-2 font-black text-xs uppercase tracking-wide transition-transform hover:-translate-y-1"
              style={{
                background: "var(--accent)",
                color: "#fff",
                borderColor: "var(--bg)",
                boxShadow: "6px 6px 0 var(--accent)",
              }}
            >
              Explore More PDFs
              <span className="text-lg">→</span>
            </Link>

            <Link
              href="/norcet-11"
              className="inline-flex items-center justify-center gap-3 px-7 py-4 border-2 font-black text-xs uppercase tracking-wide transition-opacity hover:opacity-70"
              style={{
                borderColor: "var(--bg)",
                color: "var(--bg)",
              }}
            >
              NORCET Practice
              <span>→</span>
            </Link>

          </div>

        </div>
      </section>


      {/* =====================================================
          STRUCTURED DATA
      ===================================================== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DigitalDocument",
            name: pdf.title,
            description: pdf.description,
            datePublished: pdf.date,
            encodingFormat: "application/pdf",
            keywords: (pdf.tags || []).join(", "),
          }),
        }}
      />

    </main>
  );
}
