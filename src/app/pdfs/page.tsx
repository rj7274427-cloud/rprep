export const dynamic = "force-dynamic";
import Link from "next/link";
import { db } from "@/lib/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All PDFs",
  description:
    "Download all free MCQ PDFs for SSC, UPSC, Railway, Bank, and other competitive exams.",
};

async function getAllPdfs() {
  try {
    const q = query(collection(db, "pdfs"), orderBy("date", "desc"));
    const snap = await getDocs(q);
    return snap.docs.map((d) => ({ id: d.id, ...d.data() })) as any[];
  } catch {
    return [];
  }
}

export default async function PdfsPage() {
  const pdfs = await getAllPdfs();

  return (
    <>
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-2">📚 All PDFs</h1>
        <p className="text-gray-600 mb-8">
          Total {pdfs.length} PDF{pdfs.length !== 1 ? "s" : ""} available
        </p>

        {pdfs.length === 0 ? (
          <div className="text-center py-16 text-gray-500 border-2 border-dashed rounded-xl">
            <p className="text-lg">Abhi koi PDF upload nahi hua.</p>
            <Link
              href="/admin"
              className="text-blue-600 hover:underline mt-2 inline-block"
            >
              Admin panel →
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-5">
            {pdfs.map((p) => (
              <Link
                key={p.id}
                href={`/pdfs/${p.slug}`}
                className="border rounded-xl p-5 hover:shadow-lg transition bg-white dark:bg-gray-900"
              >
                <div className="text-xs text-blue-600 font-semibold mb-2">
                  {p.category}
                </div>
                <h2 className="font-semibold mb-2 line-clamp-2">{p.title}</h2>
                <p className="text-sm text-gray-500 line-clamp-2">
                  {p.description || "Free MCQ PDF download"}
                </p>
                <div className="flex items-center justify-between mt-3 text-xs text-gray-400">
                  <span>📅 {new Date(p.date).toLocaleDateString("en-IN")}</span>
                  <span>👁 {p.views || 0}</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
