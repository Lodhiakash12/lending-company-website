"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Link from "next/link";

const faqs = [
  {
    question: "How long does loan approval take?",
    answer:
      "Most applications are reviewed within 24 hours depending on verification requirements and eligibility checks.",
  },
  {
    question: "What documents are required?",
    answer:
      "Applicants typically need a government-issued ID, proof of income, and basic financial information.",
  },
  {
    question: "Can I repay my loan early?",
    answer:
      "Yes, early repayments are allowed without hidden penalties on most loan products.",
  },
  {
    question: "What credit score is required?",
    answer:
      "Eligibility depends on multiple factors including income, repayment history, and credit profile.",
  },
  {
    question: "How secure is my information?",
    answer:
      "We use advanced encryption and secure verification systems to protect all customer information.",
  },
  {
    question: "What loan amounts are available?",
    answer:
      "Loan amounts vary depending on eligibility, loan type, and financial profile.",
  },
  {
    question: "Do you offer business loans?",
    answer:
      "Yes, we provide flexible business financing options for startups, expansion, and working capital.",
  },
  {
    question: "Can I track my application status?",
    answer:
      "Our support team provides updates throughout the review and approval process.",
  },
];

export default function FAQPage() {
  return (
    <main className="bg-white min-h-screen">

      {/* HERO */}
      <section className="relative overflow-hidden py-28">

        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">

          <span className="inline-flex px-4 py-2 rounded-full border border-gray-200 bg-white text-sm font-medium shadow-sm">
            Frequently Asked Questions
          </span>

          <h1 className="mt-8 text-5xl lg:text-7xl font-bold tracking-tight">
            Answers To Common Questions
          </h1>

          <p className="mt-8 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find answers about loan eligibility, approvals, repayment options, and the application process.
          </p>

        </div>

      </section>

      {/* FAQ SECTION */}
      <section className="py-24">

        <div className="max-w-4xl mx-auto px-6">

          <Accordion
            type="single"
            collapsible
            className="space-y-6"
          >

            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-3xl px-8 bg-white shadow-sm"
              >

                <AccordionTrigger className="text-left text-xl font-semibold py-8 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent className="pb-8 text-gray-600 text-lg leading-relaxed">
                  {faq.answer}
                </AccordionContent>

              </AccordionItem>
            ))}

          </Accordion>

        </div>

      </section>

      {/* SUPPORT SECTION */}
      <section className="py-28 bg-gray-50">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold leading-tight">
            Still Have Questions?
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Our support specialists are available to assist you with applications, approvals, and loan inquiries.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">

            <Link
              href="/contact"
              className="inline-flex bg-black text-white px-10 py-4 rounded-full font-medium hover:scale-105 transition-all"
            >
              Contact Support
            </Link>

            <Link
              href="/apply"
              className="inline-flex border border-gray-300 px-10 py-4 rounded-full font-medium hover:bg-gray-100 transition-all"
            >
              Apply For Loan
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}