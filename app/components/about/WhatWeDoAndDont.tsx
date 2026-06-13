import React from "react";
import { CheckCircle2, XCircle } from "lucide-react";

function WhatWeDoAndDont() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-600 shadow-sm">
            What To Expect
          </span>
          <h2 className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
            What DriverWise Does — And What It Does Not
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* What We Do */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-sky-500"></div>
            <h3 className="text-lg font-semibold text-blue-600 mb-6">What We Do</h3>
            <ul className="space-y-4">
              {[
                "Explain how drivers work in friendly, plain language",
                "Cover the full range of hardware categories",
                "Help you understand the symptoms of common driver issues",
                "Provide curated, evergreen reference material",
                "Publish step-by-step fix overviews for every common symptom",
                "Respect your time, attention, and privacy"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What We Don't */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-500 to-slate-400"></div>
            <h3 className="text-lg font-semibold text-slate-700 mb-6">What We Do Not</h3>
            <ul className="space-y-4">
              {[
                "Host or distribute any driver downloads",
                "Provide one-on-one technical support or repair services",
                "Recommend specific brands, retailers, or paid services",
                "Run intrusive ads or sell your personal information",
                "Pretend to be the manufacturer of any device",
                "Use scare tactics to push downloads or paid tools"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-slate-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDoAndDont;
