"use client";

import { useState } from "react";

import Link from "next/link";

import {
  Menu,
  X,
} from "lucide-react";

const links = [
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

export default function Navbar() {

  const [mobileOpen, setMobileOpen] =
    useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">

      <div className="max-w-7xl mx-auto px-6 pt-6">

        <div className="bg-white/80 backdrop-blur-xl border border-gray-200 rounded-full shadow-lg">

          <div className="flex items-center justify-between h-16 px-6">

            {/* LOGO */}
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight"
            >
              LendingCo
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-8">

              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-700 hover:text-black transition"
                >
                  {link.label}
                </Link>
              ))}

            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-4">

              <Link
                href="/apply"
                className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:scale-105 transition-all"
              >
                Apply Now
              </Link>

            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() =>
                setMobileOpen(!mobileOpen)
              }
              className="lg:hidden"
            >

              {mobileOpen ? (
                <X size={28} />
              ) : (
                <Menu size={28} />
              )}

            </button>

          </div>

        </div>

      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (

        <div className="lg:hidden px-6 mt-4">

          <div className="bg-white border border-gray-200 rounded-3xl shadow-2xl p-6">

            <nav className="flex flex-col gap-6">

              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() =>
                    setMobileOpen(false)
                  }
                  className="text-lg font-medium text-gray-700 hover:text-black transition"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/apply"
                onClick={() =>
                  setMobileOpen(false)
                }
                className="mt-4 bg-black text-white h-14 rounded-full flex items-center justify-center font-medium"
              >
                Apply Now
              </Link>

            </nav>

          </div>

        </div>
      )}

    </header>
  );
}