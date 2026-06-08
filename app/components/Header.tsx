"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Drivers", href: "/drivers" },
  { label: "Blog", href: "/blog" },
  { label: "Knowledge", href: "/knowledge" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-slate-200 bg-white/95 backdrop-blur-xl z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center gap-2 sm:gap-3">
            <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-linear-to-br from-blue-600 to-sky-500 shadow-lg shadow-blue-200">
              <span className="text-base sm:text-lg font-bold text-white">
                D
              </span>
            </div>

            <div className="hidden sm:block">
              <h2 className="text-base sm:text-lg font-bold tracking-tight text-slate-900">
                DriverWise
              </h2>

              <p className="text-xs text-slate-500">
                Printer Drivers Hub
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 p-1.5">
            {navLinks.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium transition-all duration-300 ${
                    active
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-slate-600 hover:bg-white hover:text-blue-600"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden sm:block rounded-full bg-linear-to-r from-blue-600 to-sky-500 px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-blue-200 transition-all duration-300 hover:scale-105"
          >
            Contact Us
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden rounded-lg p-2 text-slate-600 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden border-t border-slate-200 bg-white py-4 px-2">
            <div className="space-y-2">
              {navLinks.map((item) => {
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                      active
                        ? "bg-blue-600 text-white"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block mt-3 rounded-lg bg-linear-to-r from-blue-600 to-sky-500 px-4 py-2.5 text-center text-sm font-semibold text-white transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}