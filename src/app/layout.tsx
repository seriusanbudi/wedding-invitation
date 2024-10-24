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
    "Dengan penuh sukacita, kami mengumumkan pernikahan kami dan dengan hormat mengundang Anda untuk bergabung bersama kami dalam merayakan cinta ini serta memberikan doa restu untuk kebahagiaan dan kelanggengan ikatan kami.",
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
