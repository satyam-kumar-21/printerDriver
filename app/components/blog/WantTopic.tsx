"use client";

import Link from "next/link";
import { ArrowRight, MessageSquareText, HelpCircle } from "lucide-react";

export default function WantTopic() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-white py-16 sm:py-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-[-10%] top-0 h-96 w-96 rounded-full bg-blue-200/30 blur-[140px]" />
        <div className="absolute right-[-10%] bottom-0 h-96 w-96 rounded-full bg-sky-200/30 blur-[140px]" />

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
        <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Left Content */}
            <div className="p-8 sm:p-10 lg:p-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-blue-500" />

                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Reader Requests
                </span>
              </div>

              <h2 className="mt-6 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                Want a Topic
                <span className="block bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                  Covered?
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                Drop us a line with a question, a confused symptom, or a topic
                you wish someone would just explain plainly. We pick reader
                questions for new articles all the time.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-sky-500 px-6 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1"
                >
                  Suggest a Topic

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/knowledge"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-4 font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-600"
                >
                  Need Help Right Now?
                </Link>
              </div>
            </div>

            {/* Right Card */}
            <div className="p-8 sm:p-10 lg:p-12">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <div className="space-y-4">
                  <div className="flex gap-4 rounded-2xl bg-white p-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500">
                      <MessageSquareText className="h-5 w-5 text-white" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-slate-900">
                        Reader Questions
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        Many of our most popular articles started as a simple
                        reader question.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 rounded-2xl bg-white p-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500">
                      <HelpCircle className="h-5 w-5 text-white" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-slate-900">
                        Plain-English Answers
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        We focus on practical explanations without the jargon,
                        acronyms, or unnecessary complexity.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5">
                  <p className="text-sm text-slate-600">
                    Popular requests include:
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-full bg-white px-3 py-1 text-sm text-slate-700">
                      Driver Errors
                    </span>

                    <span className="rounded-full bg-white px-3 py-1 text-sm text-slate-700">
                      Wi-Fi Issues
                    </span>

                    <span className="rounded-full bg-white px-3 py-1 text-sm text-slate-700">
                      GPU Updates
                    </span>

                    <span className="rounded-full bg-white px-3 py-1 text-sm text-slate-700">
                      Printer Problems
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* End Right */}
          </div>
        </div>
      </div>
    </section>
  );
}