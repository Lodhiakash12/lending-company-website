"use client";

import {
  ShieldCheck,
  Clock3,
  BadgeDollarSign,
} from "lucide-react";

import Reveal from "@/components/layout/Reveal";

const features = [
  {
    icon: ShieldCheck,
    title: "Secure Process",
    description:
      "Your personal and financial information is protected with advanced encryption.",
  },
  {
    icon: Clock3,
    title: "Fast Approval",
    description:
      "Get loan decisions quickly with our streamlined verification process.",
  },
  {
    icon: BadgeDollarSign,
    title: "Flexible Loans",
    description:
      "Choose repayment plans and loan amounts that fit your financial goals.",
  },
];

export default function Features() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <Reveal className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold tracking-tight text-black">
            Smarter Lending For Modern Borrowers
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            We make borrowing simple, transparent, and accessible with flexible loan solutions tailored to your needs.
          </p>
        </Reveal>

        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Reveal
              key={index}
              delay={index * 0.15}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center">
                <feature.icon size={28} />
              </div>

              <h3 className="mt-6 text-2xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}