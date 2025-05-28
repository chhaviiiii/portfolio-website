import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chhavi Nayyar",
  description: "Portfolio",
  icons: {
    icon: [
      {
        url: '/daisy.png',
        type: 'image/png',
      }
    ],
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
    <html lang="en">
    <head>
      <title>Chhavi Nayyar | Portfolio</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
    <body>{children}</body>
  </html>
);
}
