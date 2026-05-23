"use client";

import Image from "next/image";
import Reveal from "@/components/layout/Reveal";

const testimonials = [
  {
    name: "Michael Carter",
    role: "Small Business Owner",
    image: "/images/testimonials/client1.jpg",
    review:
      "The approval process was incredibly fast and transparent. I received funding within 24 hours.",
  },
  {
    name: "Sophia Williams",
    role: "Marketing Professional",
    image: "/images/testimonials/client2.jpg",
    review:
      "Everything was smooth from application to approval. The repayment options were flexible and easy to understand.",
  },
  {
    name: "Daniel Moore",
    role: "Freelancer",
    image: "/images/testimonials/client3.jpg",
    review:
      "A reliable lending platform with excellent customer support and competitive rates.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <Reveal className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            Testimonials
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold tracking-tight">
            Trusted By Thousands Of Customers
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Hear from customers who successfully achieved their financial goals.
          </p>
        </Reveal>

        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <Reveal
              key={index}
              delay={index * 0.2}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="flex items-center gap-4">

                <Image
                  src={item.image}
                  alt={item.name}
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />

                <div>
                  <h3 className="font-semibold text-lg">
                    {item.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {item.role}
                  </p>
                </div>
              </div>

              <div className="mt-6 text-yellow-500 text-lg">
                ★★★★★
              </div>

              <p className="mt-4 text-gray-600 leading-relaxed">
                “{item.review}”
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}