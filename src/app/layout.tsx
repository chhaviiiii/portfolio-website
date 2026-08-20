import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://cnayyar.com");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Chhavi Nayyar",
  description:
    "Fullstack developer, UX designer, and ML engineer. Portfolio of work and experience.",
  openGraph: {
    title: "Chhavi Nayyar",
    description:
      "Fullstack developer, UX designer, and ML engineer. Portfolio of work and experience.",
    url: siteUrl,
    siteName: "Chhavi Nayyar",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chhavi Nayyar",
    description:
      "Fullstack developer, UX designer, and ML engineer. Portfolio of work and experience.",
  },
  other: {
    citation_title:
      "Towards clinical implementation of artificial intelligence in cancer care: Concept mapping analysis of provincial workshop findings",
    citation_author: [
      "Nayyar, Chhavi",
      "Xu, Hong Hao",
      "Hilbers, Daniel",
      "Avery, Jonathan",
      "Raman, Srinivas",
      "Bates, Alan T",
      "Conati, Cristina",
      "Fayaz-Bakhsh, Ahmad",
      "Nunez, John-Jose",
    ],
    citation_publication_date: "2026/08/14",
    citation_journal_title: "Implementation Science Communications",
    citation_doi: "10.1186/s43058-026-01075-x",
    citation_pdf_url:
      "https://link.springer.com/content/pdf/10.1186/s43058-026-01075-x.pdf",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${dmSans.variable}`}
    >
      <body className="min-h-screen bg-bg font-sans text-text antialiased">
        {children}
      </body>
    </html>
  );
}
