"use client";

import Link from "next/link";
import {
  ChevronRight,
  Wrench,
  ShieldCheck,
  Search,
  ArrowRight,
} from "lucide-react";

export default function KnowledgeHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-white py-16 lg:py-24">
      {/* Background Effects */}
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

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-10 md:grid-cols-[1.2fr_0.8fr]">
          {/* Left Content */}
          <div>
            {/* Breadcrumb */}
            <div className="mb-6 flex items-center gap-2 text-sm text-slate-500">
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>

              <ChevronRight className="h-4 w-4" />

              <span className="font-medium text-slate-700">
                Knowledge
              </span>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-blue-500" />

              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Knowledge Hub
              </span>
            </div>

            {/* Heading */}
            <h1 className="mt-6 max-w-4xl text-3xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl xl:text-6xl">
              Take a Breath.
              <span className="block bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                Most Driver Problems Have a Simple Fix.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              A calm, ordered walkthrough for the most common driver
              problems. Start with universal fixes, then find your
              symptom and follow a clear, practical routine without
              getting buried in technical jargon.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#symptoms"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-sky-500 px-6 py-4 font-semibold text-white shadow-lg shadow-blue-200/50 transition-all duration-300 hover:-translate-y-1"
              >
                Jump to Symptoms

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="#universal-fixes"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-4 font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-600"
              >
                Try Universal Fixes First
              </Link>
            </div>

            {/* Quick Highlights */}
            <div className="mt-10 flex flex-wrap gap-4">
              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-sm">
                <p className="text-sm font-medium text-slate-700">
                  Beginner Friendly
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-sm">
                <p className="text-sm font-medium text-slate-700">
                  Step-by-Step Fixes
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-sm">
                <p className="text-sm font-medium text-slate-700">
                  Plain-English Guidance
                </p>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/40">
              <div className="space-y-4">
                <div className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4">
                  <Wrench className="mt-0.5 h-5 w-5 text-blue-600" />

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Universal Fixes
                    </h3>

                    <p className="mt-1 text-sm text-slate-600">
                      Start with the solutions that solve the majority
                      of driver issues before diving deeper.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4">
                  <Search className="mt-0.5 h-5 w-5 text-blue-600" />

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Symptom-Based Guides
                    </h3>

                    <p className="mt-1 text-sm text-slate-600">
                      Find the exact issue you're seeing and follow a
                      focused troubleshooting path.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4">
                  <ShieldCheck className="mt-0.5 h-5 w-5 text-blue-600" />

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Safe Troubleshooting
                    </h3>

                    <p className="mt-1 text-sm text-slate-600">
                      Learn proven troubleshooting habits without
                      risking your system or settings.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5">
                <p className="text-sm text-slate-600">
                  Most Common Topics
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-white px-3 py-1 text-sm text-slate-700">
                    Driver Errors
                  </span>

                  <span className="rounded-full bg-white px-3 py-1 text-sm text-slate-700">
                    Missing Devices
                  </span>

                  <span className="rounded-full bg-white px-3 py-1 text-sm text-slate-700">
                    Update Problems
                  </span>

                  <span className="rounded-full bg-white px-3 py-1 text-sm text-slate-700">
                    Connectivity Issues
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* End Right */}
        </div>
      </div>
    </section>
  );
}