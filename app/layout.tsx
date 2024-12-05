import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "CareerCarve - Employability Examination Platform",
  description:
    "Empower your hiring process with CareerCarve Employability Examination. A comprehensive assessment platform for precise, quick, and effortless hiring.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={openSans.variable}>
      <body
        suppressHydrationWarning={true}
        className="min-h-screen flex flex-col"
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
