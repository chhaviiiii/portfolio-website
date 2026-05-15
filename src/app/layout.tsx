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
