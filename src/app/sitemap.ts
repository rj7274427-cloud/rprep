import type { MetadataRoute } from "next";
import { db } from "@/lib/firebase";
import {
  collection,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";

const BASE_URL = "https://rprep.online";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/pdfs`,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/notes`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/norcet-11`,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/about`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/contact`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/disclaimer`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms-and-conditions`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  try {
    const pdfQuery = query(
      collection(db, "pdfs"),
      orderBy("date", "desc")
    );

    const notesQuery = query(
      collection(db, "notes"),
      orderBy("date", "desc")
    );

    const [pdfSnap, notesSnap] = await Promise.all([
      getDocs(pdfQuery),
      getDocs(notesQuery),
    ]);

    const pdfPages: MetadataRoute.Sitemap = pdfSnap.docs
      .map((item) => {
        const data = item.data();

        if (!data.slug) return null;

        return {
          url: `${BASE_URL}/pdfs/${data.slug}`,
          lastModified: data.date
            ? new Date(data.date)
            : new Date(),
          changeFrequency: "monthly" as const,
          priority: 0.8,
        };
      })
      .filter(Boolean) as MetadataRoute.Sitemap;

    const notePages: MetadataRoute.Sitemap = notesSnap.docs
      .map((item) => {
        const data = item.data();

        if (!data.slug) return null;

        return {
          url: `${BASE_URL}/notes/${data.slug}`,
          lastModified: data.date
            ? new Date(data.date)
            : new Date(),
          changeFrequency: "monthly" as const,
          priority: 0.8,
        };
      })
      .filter(Boolean) as MetadataRoute.Sitemap;

    return [
      ...staticPages,
      ...pdfPages,
      ...notePages,
    ];
  } catch {
    return staticPages;
  }
}
