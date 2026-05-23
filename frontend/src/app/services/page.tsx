"use client";

import {
  Wallet,
  Briefcase,
  Home,
  Car,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import Link from "next/link";

const services = [
  {
    icon: Wallet,
    title: "Personal Loans",
    description:
      "Flexible personal financing for unexpected expenses, debt consolidation, and lifestyle needs.",
    features: [
      "Fast approval",
      "Flexible repayment",
      "Low interest rates",
    ],
  },
  {
    icon: Briefcase,
    title: "Business Loans",
    description:
      "Funding solutions designed to support business growth, expansion, and operations.",
    features: [
      "Working capital",
      "Startup financing",
      "Business expansion",
    ],
  },
  {
    icon: Home,
    title: "Home Loans",
    description:
      "Affordable mortgage and refinancing options with competitive rates and easy processing.",
    features: [
      "Home purchase",
      "Mortgage refinance",
      "Property financing",
    ],
  },
  {
    icon: Car,
    title: "Auto Loans",
    description:
      "Drive your dream vehicle with fast approvals and convenient repayment plans.",
    features: [
      "New vehicles",
      "Used vehicles",
      "Flexible EMI options",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white min-h-screen">

      {/* HERO */}
      <section className="relative overflow-hidden py-28">

        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">

          <span className="inline-flex px-4 py-2 rounded-full border border-gray-200 bg-white text-sm font-medium shadow-sm">
            Loan Services
          </span>

          <h1 className="mt-8 text-5xl lg:text-7xl font-bold tracking-tight">
            Financing Solutions Designed For Every Need
          </h1>

          <p className="mt-8 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore flexible loan options tailored for individuals, families, and businesses with transparent terms and fast approvals.
          </p>

        </div>

      </section>

      {/* SERVICES */}
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10">

          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white border border-gray-100 rounded-[32px] p-10 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >

              {/* ICON */}
              <div className="w-16 h-16 rounded-3xl bg-black text-white flex items-center justify-center">
                <service.icon size={30} />
              </div>

              {/* TITLE */}
              <h2 className="mt-8 text-3xl font-bold">
                {service.title}
              </h2>

              {/* DESCRIPTION */}
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                {service.description}
              </p>

              {/* FEATURES */}
              <div className="mt-8 space-y-4">

                {service.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3"
                  >

                    <CheckCircle2
                      size={20}
                      className="text-green-600"
                    />

                    <span className="text-gray-700">
                      {feature}
                    </span>

                  </div>
                ))}

              </div>

              {/* BUTTON */}
              <Link
                href="/apply"
                className="inline-flex items-center gap-2 mt-10 text-black font-semibold group-hover:gap-4 transition-all"
              >
                Apply Now

                <ArrowRight size={18} />
              </Link>

            </div>
          ))}

        </div>

      </section>

      {/* PROCESS */}
      <section className="py-28 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto">

            <span className="text-sm uppercase tracking-widest text-gray-500 font-semibold">
              Simple Process
            </span>

            <h2 className="mt-6 text-4xl lg:text-5xl font-bold">
              Apply In Just A Few Steps
            </h2>

          </div>

          <div className="mt-20 grid md:grid-cols-3 gap-8">

            {[
              {
                step: "01",
                title: "Complete Application",
                description:
                  "Fill out our secure online loan application form in minutes.",
              },
              {
                step: "02",
                title: "Verification & Review",
                description:
                  "Our team reviews your information and verifies eligibility.",
              },
              {
                step: "03",
                title: "Receive Funding",
                description:
                  "Approved applicants receive funds quickly and securely.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm"
              >

                <span className="text-6xl font-bold text-gray-200">
                  {item.step}
                </span>

                <h3 className="mt-8 text-2xl font-bold">
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
            Start Your Financial Journey Today
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Apply now to receive personalized loan solutions with fast approvals and flexible repayment plans.
          </p>

          <Link
            href="/apply"
            className="inline-flex mt-10 bg-black text-white px-10 py-4 rounded-full font-medium hover:scale-105 transition-all"
          >
            Apply For Loan
          </Link>

        </div>

      </section>

    </main>
  );
}