import React from "react";
import Link from "next/link";
import { ArrowRight, Home, BookOpen, MessageCircle } from "lucide-react";

function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-white py-16 sm:py-20 lg:py-28">
      {/* Background Effects (MATCHED STYLE) */}
      <div className="absolute inset-0">
        <div className="absolute left-[-10%] top-[-10%] h-96 w-96 rounded-full bg-blue-200/40 blur-[120px]" />
        <div className="absolute right-[-10%] top-[10%] h-96 w-96 rounded-full bg-sky-200/30 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #0f172a 1px, transparent 1px),
              linear-gradient(to bottom, #0f172a 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          
          {/* Left Content */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 shadow-sm shadow-slate-200/50">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                About DriverWise
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-slate-900">
              We Translate the Technical,
              <span className="block bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                So You Can Get On With Your Day
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-sm sm:text-base lg:text-lg leading-7 text-slate-600">
              DriverWise is a small, independent education project with one stubborn belief:
              technology should not feel intimidating. Every guide here is written for beginners
              while still being useful for advanced users who want clarity without noise.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/drivers"
                className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-sm font-medium text-white transition hover:scale-105"
              >
                Browse Driver Topics
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-xl border border-blue-100 bg-white px-5 py-3 text-sm font-medium text-blue-700 transition hover:bg-slate-50"
              >
                Send Us a Question
                <MessageCircle className="h-4 w-4" />
              </Link>
            </div>

            {/* Quick Links */}
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-600">
              <Link href="/" className="flex items-center gap-1 hover:text-blue-600">
                <Home className="h-4 w-4" /> Home
              </Link>

              <Link href="/about" className="flex items-center gap-1 hover:text-blue-600">
                About
              </Link>

              <Link href="/drivers" className="flex items-center gap-1 hover:text-blue-600">
                <BookOpen className="h-4 w-4" /> Topics
              </Link>
            </div>
          </div>

          {/* Right Side Card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/40">
            <h3 className="text-lg font-semibold text-slate-900">
              Why DriverWise Exists
            </h3>

            <p className="mt-3 text-sm text-slate-600 leading-6">
              Most technical documentation assumes too much knowledge or buries simple answers
              under layers of complexity. DriverWise exists to fix that — by turning confusing
              driver issues into clear, actionable explanations.
            </p>

            <div className="mt-5 space-y-3">
              {[
                "Beginner-friendly explanations",
                "No unnecessary technical jargon",
                "Real-world troubleshooting focus",
                "Fast, practical solutions",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl bg-gradient-to-r from-sky-50 to-blue-50 p-4">
              <p className="text-2xl font-bold text-slate-900">Simple. Clear. Useful.</p>
              <p className="text-xs text-slate-500 mt-1">
                That’s the DriverWise promise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;