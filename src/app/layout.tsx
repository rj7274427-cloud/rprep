import type { Metadata } from "next";
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
    default: "RPrep Nursing — RRB Nursing Superintendent Preparation",
    template: "%s | RPrep Nursing",
  },

  description:
    "RPrep Nursing provides nursing MCQs, PDF practice sets, and revision resources for RRB Nursing Superintendent and other nursing competitive examinations.",

  keywords: [
    "RRB Nursing Superintendent",
    "RRB Nursing Superintendent MCQ",
    "RRB Nursing MCQ PDF",
    "Nursing MCQ",
    "Nursing MCQ PDF",
    "Nursing exam preparation",
    "Nursing Superintendent preparation",
    "Nursing practice questions",
    "Nursing revision",
    "RRB nursing preparation",
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

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://rprep.online",
    siteName: "RPrep Nursing",
    title: "RPrep Nursing — RRB Nursing Superintendent Preparation",
    description:
      "Nursing MCQs, PDF practice sets, and revision resources for competitive nursing examinations.",
  },

  twitter: {
    card: "summary_large_image",
    title: "RPrep Nursing — RRB Nursing Superintendent Preparation",
    description:
      "Nursing MCQs, PDF practice sets, and revision resources for competitive nursing examinations.",
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
