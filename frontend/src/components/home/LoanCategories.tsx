"use client";

import {
  Briefcase,
  Car,
  Home,
  Wallet,
} from "lucide-react";

import Reveal from "@/components/layout/Reveal";

const loans = [
  {
    title: "Personal Loans",
    description: "Flexible personal financing for everyday needs.",
    icon: Wallet,
  },
  {
    title: "Business Loans",
    description: "Support and grow your business with smart funding.",
    icon: Briefcase,
  },
  {
    title: "Home Loans",
    description: "Affordable mortgage and home financing solutions.",
    icon: Home,
  },
  {
    title: "Auto Loans",
    description: "Drive your dream vehicle with easy repayment plans.",
    icon: Car,
  },
];

export default function LoanCategories() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <Reveal className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
              Loan Solutions
            </span>

            <h2 className="mt-4 text-4xl lg:text-5xl font-bold tracking-tight">
              Loans Designed Around Your Needs
            </h2>
          </div>

          <p className="text-lg text-gray-600 max-w-xl">
            Explore financing options tailored for personal, business, and lifestyle goals.
          </p>
        </Reveal>

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {loans.map((loan, index) => (
            <Reveal
              key={index}
              delay={index * 0.15}
              className="group border border-gray-200 rounded-3xl p-8 hover:bg-black hover:text-white hover:-translate-y-2 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-gray-100 group-hover:bg-white/10 flex items-center justify-center transition">
                <loan.icon size={28} />
              </div>

              <h3 className="mt-8 text-2xl font-semibold">
                {loan.title}
              </h3>

              <p className="mt-4 text-gray-600 group-hover:text-gray-300 transition">
                {loan.description}
              </p>

              <button className="mt-8 text-sm font-semibold">
                Learn More →
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}