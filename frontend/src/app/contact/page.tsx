"use client";

import {
  Mail,
  Phone,
  MapPin,
  Clock3,
} from "lucide-react";

import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen">

      {/* HERO */}
      <section className="relative overflow-hidden py-28">

        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">

          <span className="inline-flex px-4 py-2 rounded-full border border-gray-200 bg-white text-sm font-medium shadow-sm">
            Contact Us
          </span>

          <h1 className="mt-8 text-5xl lg:text-7xl font-bold tracking-tight">
            We’re Here To Help
          </h1>

          <p className="mt-8 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Contact our support team for assistance with applications, approvals, repayment options, or general inquiries.
          </p>

        </div>

      </section>

      {/* CONTACT CARDS */}
      <section className="py-10">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {[
            {
              icon: Phone,
              title: "Call Us",
              value: "+1 (800) 123-4567",
            },
            {
              icon: Mail,
              title: "Email Support",
              value: "support@lendingcompany.com",
            },
            {
              icon: MapPin,
              title: "Office Location",
              value: "New York, USA",
            },
            {
              icon: Clock3,
              title: "Working Hours",
              value: "Mon - Fri / 9AM - 6PM",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >

              <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center">
                <item.icon size={26} />
              </div>

              <h3 className="mt-6 text-2xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                {item.value}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* CONTACT FORM */}
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT */}
          <div>

            <span className="text-sm uppercase tracking-widest text-gray-500 font-semibold">
              Get In Touch
            </span>

            <h2 className="mt-6 text-4xl lg:text-5xl font-bold leading-tight">
              Speak With Our Lending Specialists
            </h2>

            <p className="mt-8 text-lg text-gray-600 leading-relaxed">
              Our dedicated support team is available to answer your questions and guide you through the loan process.
            </p>

            <div className="mt-10 space-y-6">

              <div className="flex items-start gap-4">

                <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center">
                  <Phone size={22} />
                </div>

                <div>
                  <h4 className="font-semibold">
                    Customer Support
                  </h4>

                  <p className="text-gray-600 mt-1">
                    +1 (800) 123-4567
                  </p>
                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center">
                  <Mail size={22} />
                </div>

                <div>
                  <h4 className="font-semibold">
                    Email Support
                  </h4>

                  <p className="text-gray-600 mt-1">
                    support@lendingcompany.com
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* FORM */}
          <div className="bg-white border border-gray-100 rounded-[32px] p-10 shadow-xl">

            <form className="space-y-6">

              <div>
                <label className="text-sm font-medium">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="John Doe"
                  className="mt-2 w-full h-14 rounded-2xl border border-gray-200 px-4 outline-none focus:border-black transition"
                />
              </div>

              <div>
                <label className="text-sm font-medium">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="john@example.com"
                  className="mt-2 w-full h-14 rounded-2xl border border-gray-200 px-4 outline-none focus:border-black transition"
                />
              </div>

              <div>
                <label className="text-sm font-medium">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="How can we help?"
                  className="mt-2 w-full h-14 rounded-2xl border border-gray-200 px-4 outline-none focus:border-black transition"
                />
              </div>

              <div>
                <label className="text-sm font-medium">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Write your message..."
                  className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-4 outline-none focus:border-black transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full h-14 rounded-full bg-black text-white font-medium hover:scale-[1.02] transition-all"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-28 bg-gray-50">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold leading-tight">
            Ready To Apply?
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Start your secure application today and receive personalized loan options tailored to your needs.
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