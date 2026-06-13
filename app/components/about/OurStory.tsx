import React from "react";

function OurStory() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-600 shadow-sm">
            Our Story
          </span>
          <h2 className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
            How DriverWise came to be
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-sky-50 to-blue-50 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">The spark</h3>
            <p className="text-sm sm:text-base leading-7 text-slate-600 mt-2">
              DriverWise started with a simple frustration: trying to help a family member fix a printer driver issue,
              and every search result either assumed too much knowledge or tried to sell something.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Building the first guides</h3>
            <p className="text-sm sm:text-base leading-7 text-slate-600 mt-2">
              What began as a small collection of notes for friends and family quickly grew. We realized there was a real
              need for calm, clear explanations of driver basics—what they do, why they matter, and how to fix common issues.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Growing into a resource</h3>
            <p className="text-sm sm:text-base leading-7 text-slate-600 mt-2">
              Over time, we expanded our coverage to include every major driver category, added a knowledge hub for quick fixes,
              and launched a blog to explore broader computing concepts in plain English. Today, DriverWise serves thousands
              of readers every month.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurStory;
