"use client";

import Link from "next/link";
import Reveal from "@/components/layout/Reveal";

export default function CTA() {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />

      <Reveal className="max-w-5xl mx-auto px-6 text-center relative z-10">

        <h2 className="text-4xl lg:text-6xl font-bold tracking-tight leading-tight">
          Ready To Get Started?
        </h2>

        <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
          Apply today and receive fast approval with flexible repayment options tailored to your financial goals.
        </p>

        <div className="mt-10">
          <Link
            href="/apply"
            className="inline-flex bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            Apply For Loan
          </Link>
        </div>

      </Reveal>
    </section>
  );
}