import Link from "next/link";

import {
  Globe,
  Mail,
  Phone,
  Building2,
} from "lucide-react";

const quickLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "FAQ",
    href: "/faq",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const services = [
  "Personal Loans",
  "Business Loans",
  "Home Loans",
  "Auto Loans",
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">

      {/* TOP */}
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-4 gap-14">

          {/* BRAND */}
          <div>

            <h2 className="text-3xl font-bold">
              LendingCo
            </h2>

            <p className="mt-6 text-gray-400 leading-relaxed">
              Modern lending solutions designed
              to help individuals and businesses
              achieve financial flexibility with
              secure and transparent financing.
            </p>

            {/* SOCIALS */}
            <div className="flex items-center gap-4 mt-8">

              {[
                Globe,
                Mail,
                Phone,
                Building2,
              ].map(
                (Icon, index) => (
                  <div
                    key={index}
                    className="w-11 h-11 rounded-full bg-white/10 hover:bg-white hover:text-black transition-all cursor-pointer flex items-center justify-center"
                  >
                    <Icon size={18} />
                  </div>
                )
              )}

            </div>

          </div>

          {/* QUICK LINKS */}
          <div>

            <h3 className="text-xl font-semibold">
              Quick Links
            </h3>

            <div className="mt-6 flex flex-col gap-4">

              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition"
                >
                  {link.label}
                </Link>
              ))}

            </div>

          </div>

          {/* SERVICES */}
          <div>

            <h3 className="text-xl font-semibold">
              Loan Services
            </h3>

            <div className="mt-6 flex flex-col gap-4">

              {services.map((service) => (
                <p
                  key={service}
                  className="text-gray-400"
                >
                  {service}
                </p>
              ))}

            </div>

          </div>

          {/* CONTACT */}
          <div>

            <h3 className="text-xl font-semibold">
              Contact Info
            </h3>

            <div className="mt-6 space-y-5 text-gray-400">

              <p>
                support@lendingcompany.com
              </p>

              <p>
                +1 (800) 123-4567
              </p>

              <p>
                New York, USA
              </p>

              <p>
                Mon - Fri / 9AM - 6PM
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-sm">
            © 2026 LendingCo. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-500">

            <Link
              href="/privacy-policy"
              className="hover:text-white transition"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="hover:text-white transition"
            >
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}