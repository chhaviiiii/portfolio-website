import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chhavi Nayyar",
  description: "Portfolio",
  icons: {
    icon: '/daisy.png',
    shortcut: '/daisy.png',
    apple: '/daisy.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <title>Chhavi Nayyar | Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/daisy.png" />
        <link rel="apple-touch-icon" href="/daisy.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
