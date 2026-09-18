import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
      title: "PDF Not Found",
    };
  }

  return {
    title: pdf.title,
    description:
      pdf.description ||
      `Download ${pdf.title} free PDF`,
    keywords: pdf.tags || [],
    alternates: {
      canonical: `/pdfs/${pdf.slug}`,
    },
    openGraph: {
      title: pdf.title,
      description:
        pdf.description ||
        `Download ${pdf.title} free PDF`,
      images: [
        `https://drive.google.com/thumbnail?id=${pdf.driveId}&sz=w1200`,
      ],
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

  return (
    <div
      className="min-h-screen"
      style={{ background: "var(--bg)" }}
    >
      <Navbar />

      <main>

        {/* HEADER */}
        <section className="max-w-5xl mx-auto px-5 pt-12 pb-10 md:pt-20 md:pb-14">

          {/* BREADCRUMB */}
          <div
            className="flex flex-wrap items-center gap-2 text-xs md:text-sm mb-8"
            style={{ color: "var(--fg-soft)" }}
          >
            <Link
              href="/"
              className="hover:opacity-70"
            >
              Home
            </Link>

            <span>/</span>

            <Link
              href="/pdfs"
              className="hover:opacity-70"
            >
              MCQ PDFs
            </Link>

            <span>/</span>

            <span className="truncate max-w-[220px]">
              {pdf.category}
            </span>
          </div>

          <div className="max-w-4xl">

            {/* CATEGORY */}
            <p
              className="text-xs font-bold uppercase tracking-[0.18em] mb-4"
              style={{ color: "var(--accent)" }}
            >
              {pdf.category}
            </p>

            {/* TITLE */}
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-5"
              style={{ color: "var(--fg)" }}
            >
              {pdf.title}
            </h1>

            {/* DESCRIPTION */}
            <p
              className="text-base md:text-lg leading-relaxed max-w-3xl"
              style={{ color: "var(--fg-soft)" }}
            >
              {pdf.description ||
                "Free nursing MCQ PDF for competitive examination preparation."}
            </p>

            {/* ACTIONS */}
            <div className="flex flex-col sm:flex-row gap-3 mt-8">

              <a
                href={downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold text-sm transition-opacity hover:opacity-90"
                style={{
                  background: "var(--accent)",
                  color: "white",
                }}
              >
                ↓ Download PDF
              </a>

              <a
                href={viewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border px-6 py-3 font-semibold text-sm transition-opacity hover:opacity-70"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--fg)",
                  background: "var(--bg-soft)",
                }}
              >
                ↗ Open in Google Drive
              </a>

            </div>

          </div>
        </section>

        {/* PDF VIEWER */}
        <section
          className="border-y"
          style={{
            borderColor: "var(--border)",
            background: "var(--bg-soft)",
          }}
        >
          <div className="max-w-5xl mx-auto px-5 py-8 md:py-12">

            <div className="flex items-center justify-between gap-4 mb-5">
              <div>
                <p
                  className="text-xs font-bold uppercase tracking-[0.18em] mb-2"
                  style={{ color: "var(--accent)" }}
                >
                  PDF Viewer
                </p>

                <h2
                  className="text-xl md:text-2xl font-black"
                  style={{ color: "var(--fg)" }}
                >
                  Read the PDF online
                </h2>
              </div>

              <a
                href={viewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex text-sm font-semibold"
                style={{ color: "var(--accent)" }}
              >
                Open separately ↗
              </a>
            </div>

            <div
              className="overflow-hidden rounded-2xl border shadow-sm"
              style={{
                borderColor: "var(--border)",
                background: "var(--bg)",
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

            <p
              className="text-xs mt-4 text-center"
              style={{ color: "var(--fg-soft)" }}
            >
              If the PDF does not load correctly, use “Open in Google Drive”
              above.
            </p>

          </div>
        </section>

        {/* PDF INFORMATION */}
        <section className="max-w-5xl mx-auto px-5 py-16 md:py-24">

          <div className="text-center max-w-2xl mx-auto mb-12">

            <p
              className="text-xs font-bold uppercase tracking-[0.18em] mb-3"
              style={{ color: "var(--accent)" }}
            >
              Resource Information
            </p>

            <h2
              className="text-2xl md:text-3xl font-black tracking-tight mb-4"
              style={{ color: "var(--fg)" }}
            >
              About this study resource
            </h2>

            <p
              className="text-sm md:text-base leading-relaxed"
              style={{ color: "var(--fg-soft)" }}
            >
              Use this resource for nursing examination practice and
              revision.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* CATEGORY */}
            <div className="card p-6">

              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "var(--accent-bg)" }}
              >
                <span
                  className="font-black text-sm"
                  style={{ color: "var(--accent)" }}
                >
                  CAT
                </span>
              </div>

              <h3
                className="font-bold text-lg mb-2"
                style={{ color: "var(--fg)" }}
              >
                Category
              </h3>

              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--fg-soft)" }}
              >
                {pdf.category}
              </p>

            </div>

            {/* PUBLISHED */}
            <div className="card p-6">

              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "var(--accent-bg)" }}
              >
                <span
                  className="font-black text-sm"
                  style={{ color: "var(--accent)" }}
                >
                  DATE
                </span>
              </div>

              <h3
                className="font-bold text-lg mb-2"
                style={{ color: "var(--fg)" }}
              >
                Published
              </h3>

              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--fg-soft)" }}
              >
                {new Date(pdf.date).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>

            </div>

          </div>

          {/* TAGS */}
          {pdf.tags?.length > 0 && (
            <div className="mt-10">

              <div className="text-center mb-6">
                <p
                  className="text-xs font-bold uppercase tracking-[0.18em]"
                  style={{ color: "var(--accent)" }}
                >
                  Topics
                </p>

                <h3
                  className="text-xl font-black mt-2"
                  style={{ color: "var(--fg)" }}
                >
                  Related tags
                </h3>
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                {pdf.tags.map((t: string, i: number) => (
                  <span
                    key={i}
                    className="text-xs font-semibold px-3 py-2 rounded-full border"
                    style={{
                      borderColor: "var(--border)",
                      color: "var(--fg-soft)",
                      background: "var(--bg-soft)",
                    }}
                  >
                    #{t}
                  </span>
                ))}
              </div>

            </div>
          )}

        </section>

        {/* FINAL CTA */}
        <section
          className="border-y"
          style={{
            borderColor: "var(--border)",
            background: "var(--bg-soft)",
          }}
        >
          <div className="max-w-5xl mx-auto px-5 py-16 md:py-20">

            <div className="max-w-3xl mx-auto text-center">

              <p
                className="text-xs font-bold uppercase tracking-[0.18em] mb-3"
                style={{ color: "var(--accent)" }}
              >
                Keep Preparing
              </p>

              <h2
                className="text-2xl md:text-3xl font-black tracking-tight mb-4"
                style={{ color: "var(--fg)" }}
              >
                Continue your nursing preparation.
              </h2>

              <p
                className="text-sm md:text-base leading-relaxed"
                style={{ color: "var(--fg-soft)" }}
              >
                Explore more nursing MCQ resources and continue practicing
                for your competitive examination preparation.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-3 mt-7">

                <Link
                  href="/pdfs"
                  className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold text-sm"
                  style={{
                    background: "var(--accent)",
                    color: "white",
                  }}
                >
                  Explore More PDFs
                </Link>

                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-xl border px-6 py-3 font-semibold text-sm"
                  style={{
                    borderColor: "var(--border)",
                    color: "var(--fg)",
                    background: "var(--bg)",
                  }}
                >
                  Back to Home
                </Link>

              </div>

            </div>

          </div>
        </section>

        {/* JSON-LD */}
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

      <Footer />
    </div>
  );
}
