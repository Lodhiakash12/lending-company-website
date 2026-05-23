import type { Metadata } from "next";

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "LendingCo | Modern Loan Solutions",

  description:
    "Secure and modern lending platform offering personal, business, home, and auto loans with fast approvals.",

  keywords: [
    "loan company",
    "personal loans",
    "business loans",
    "home loans",
    "auto loans",
    "fintech",
    "online lending",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">

      <body className="min-h-screen bg-white text-black antialiased">

        {/* GLOBAL NAVBAR */}
        <Navbar />

        {/* PAGE CONTENT */}
        <main className="pt-28">
          {children}
        </main>

        <Footer />

      </body>

    </html>
  );
}