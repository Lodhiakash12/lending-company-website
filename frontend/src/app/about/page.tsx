"use client";

import {
  ShieldCheck,
  BadgeDollarSign,
  Clock3,
  Users,
} from "lucide-react";

import Link from "next/link";

const stats = [
  {
    value: "$250M+",
    label: "Loans Funded",
  },
  {
    value: "50K+",
    label: "Customers Served",
  },
  {
    value: "98%",
    label: "Approval Satisfaction",
  },
  {
    value: "24hrs",
    label: "Average Approval",
  },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Secure Lending",
    description:
      "We use industry-leading encryption and verification systems to protect customer data.",
  },
  {
    icon: Clock3,
    title: "Fast Approval",
    description:
      "Our streamlined process helps customers receive decisions quickly and efficiently.",
  },
  {
    icon: BadgeDollarSign,
    title: "Flexible Financing",
    description:
      "Loan options designed to fit different financial situations and goals.",
  },
  {
    icon: Users,
    title: "Customer First",
    description:
      "We focus on transparency, support, and long-term customer relationships.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen">

      {/* HERO */}
      <section className="relative overflow-hidden py-28">

        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">

          <span className="inline-flex px-4 py-2 rounded-full border border-gray-200 bg-white text-sm font-medium shadow-sm">
            About Our Company
          </span>

          <h1 className="mt-8 text-5xl lg:text-7xl font-bold tracking-tight">
            Building Smarter Financial Solutions
          </h1>

          <p className="mt-8 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We help individuals and businesses access reliable financing with modern technology, transparent processes, and customer-first lending solutions.
          </p>

        </div>
      </section>

      {/* STATS */}
      <section className="py-20 border-y border-gray-100 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">

          {stats.map((item) => (
            <div
              key={item.label}
              className="text-center"
            >
              <h2 className="text-5xl font-bold">
                {item.value}
              </h2>

              <p className="mt-4 text-gray-500">
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* STORY */}
      <section className="py-28">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <div>

            <span className="text-sm uppercase tracking-widest text-gray-500 font-semibold">
              Our Mission
            </span>

            <h2 className="mt-6 text-4xl lg:text-5xl font-bold leading-tight">
              Making Lending Faster, Simpler, and More Accessible
            </h2>

            <p className="mt-8 text-lg text-gray-600 leading-relaxed">
              Our mission is to simplify the borrowing experience through innovative financial technology and transparent lending practices.
            </p>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Whether you need personal financing, business capital, or flexible repayment solutions, we provide trusted financial services designed around your needs.
            </p>

            <Link
              href="/apply"
              className="inline-flex mt-10 bg-black text-white px-8 py-4 rounded-full font-medium hover:scale-105 transition-all"
            >
              Apply For Loan
            </Link>

          </div>

          {/* RIGHT */}
          <div className="relative">

            <div className="aspect-[4/3] rounded-[32px] bg-gradient-to-br from-black to-gray-800 shadow-2xl p-10 text-white flex flex-col justify-between">

              <div>
                <p className="text-gray-300">
                  Trusted Financial Platform
                </p>

                <h3 className="mt-4 text-4xl font-bold leading-tight">
                  Empowering Financial Growth Through Modern Lending
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-6">

                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur">
                  <h4 className="text-3xl font-bold">
                    15+
                  </h4>

                  <p className="mt-2 text-gray-300 text-sm">
                    Years Experience
                  </p>
                </div>

                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur">
                  <h4 className="text-3xl font-bold">
                    24/7
                  </h4>

                  <p className="mt-2 text-gray-300 text-sm">
                    Customer Support
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* VALUES */}
      <section className="py-28 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto">

            <span className="text-sm uppercase tracking-widest text-gray-500 font-semibold">
              Why Choose Us
            </span>

            <h2 className="mt-6 text-4xl lg:text-5xl font-bold">
              Trusted By Thousands Of Customers
            </h2>

          </div>

          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {values.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >

                <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center">
                  <item.icon size={28} />
                </div>

                <h3 className="mt-8 text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  {item.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-28">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold leading-tight">
            Ready To Move Forward Financially?
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Start your secure application process today and receive personalized loan solutions tailored to your goals.
          </p>

          <Link
            href="/apply"
            className="inline-flex mt-10 bg-black text-white px-10 py-4 rounded-full font-medium hover:scale-105 transition-all"
          >
            Start Application
          </Link>

        </div>

      </section>

    </main>
  );
}