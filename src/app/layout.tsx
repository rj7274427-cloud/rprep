import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import SiteShell from "@/components/SiteShell";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rprep.online"),

  title: {
    default: "RPrep Nursing — Nursing Exam Preparation",
    template: "%s | RPrep Nursing",
  },

  description:
    "RPrep Nursing provides nursing MCQs, study notes, PDF practice resources, and revision material for NORCET, RRB Nursing Superintendent, JIPMER, PGIMER, DSSSB, ESIC, State CHO, SGPGI, RML, KGMU and other nursing competitive examinations.",

  keywords: [
    "RPrep Nursing",
    "Nursing exam preparation",
    "NORCET preparation",
    "NORCET MCQ",
    "NORCET practice questions",
    "RRB Nursing Superintendent",
    "RRB Nursing MCQ",
    "JIPMER Nursing",
    "PGIMER Nursing",
    "DSSSB Nursing",
    "ESIC Nursing",
    "State CHO Nursing",
    "SGPGI Nursing",
    "RML Nursing",
    "KGMU Nursing",
    "Nursing MCQ",
    "Nursing MCQ PDF",
    "Nursing notes",
    "Nursing practice questions",
    "Nursing revision",
  ],

  authors: [
    {
      name: "RPrep Nursing",
      url: "https://rprep.online",
    },
  ],

  creator: "RPrep Nursing",
  publisher: "RPrep Nursing",
  applicationName: "RPrep Nursing",

  category: "education",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://rprep.online",
    siteName: "RPrep Nursing",
    title: "RPrep Nursing — Nursing Exam Preparation",
    description:
      "Nursing MCQs, study notes, PDF practice resources, and revision material for competitive nursing examinations.",
  },

  twitter: {
    card: "summary_large_image",
    title: "RPrep Nursing — Nursing Exam Preparation",
    description:
      "Nursing MCQs, study notes, PDF practice resources, and revision material for competitive nursing examinations.",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#faf9f7",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SiteShell>{children}</SiteShell>

        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3500,
          }}
        />
      </body>
    </html>
  );
}
