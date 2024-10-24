import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const alexBrush = localFont({
  src: "./fonts/alex-brush.ttf",
  variable: "--font-alex-brush",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Budi & Saras",
  description:
    "We are overjoyed to announce our marriage and cordially invite you to join us in celebrating our love and blessing our union.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${alexBrush.variable} antialiased`}>{children}</body>
    </html>
  );
}
