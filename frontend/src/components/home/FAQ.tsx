"use client";

import Reveal from "@/components/layout/Reveal";

const faqs = [
  {
    question: "How long does approval take?",
    answer:
      "Most applications are reviewed within 24 hours depending on verification requirements.",
  },
  {
    question: "What documents are required?",
    answer:
      "Typically government ID, proof of income, and basic financial information are required.",
  },
  {
    question: "Can I repay early?",
    answer:
      "Yes, early repayments are allowed without hidden penalties.",
  },
  {
    question: "What loan amounts are available?",
    answer:
      "Loan amounts vary depending on eligibility and financial profile.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-6">

        <Reveal className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            FAQ
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
        </Reveal>

        <div className="mt-16 space-y-6">
          {faqs.map((faq, index) => (
            <Reveal
              key={index}
              delay={index * 0.1}
              className="border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-500"
            >
              <h3 className="text-xl font-semibold">
                {faq.question}
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}