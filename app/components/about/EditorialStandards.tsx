import React from "react";
import { CheckSquare, User, RefreshCw } from "lucide-react";

function EditorialStandards() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-sky-50 via-white to-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-[-10%] top-[-10%] h-96 w-96 rounded-full bg-blue-200/30 blur-[120px]" />
        <div className="absolute right-[-10%] bottom-0 h-96 w-96 rounded-full bg-sky-200/30 blur-[120px]" />
      </div>

      <div className="relative mx-auto w-full max-w-5xl px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-600 shadow-sm">
            Editorial Standards
          </span>
          <h2 className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
            How DriverWise Is Written and Reviewed
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-slate-600">
            Every article on this site is written, fact-checked, and reviewed against a clear
            set of editorial standards designed to keep things accurate, useful, and free
            of marketing fluff.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Researched and Reviewed */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-sky-100 mb-5">
              <CheckSquare className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-3">Researched and Reviewed</h3>
            <p className="text-sm text-slate-600 leading-7">
              Every factual claim about how drivers function is grounded in documented
              operating system specifications, driver development frameworks, or first-hand
              testing. No copy-pasted forum posts, no AI hallucinations passed off as fact.
            </p>
          </div>

          {/* Written by Humans */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-sky-100 mb-5">
              <User className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-3">Written by Humans</h3>
            <p className="text-sm text-slate-600 leading-7">
              Articles are drafted, edited, and signed off by people. We use research tools to gather
              and verify information, but the writing voice — friendly, calm, occasionally enthusiastic
              about a particularly elegant piece of engineering — is entirely human.
            </p>
          </div>

          {/* Updated as Things Change */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-sky-100 mb-5">
              <RefreshCw className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-3">Updated as Things Change</h3>
            <p className="text-sm text-slate-600 leading-7">
              When operating systems release significant updates that change how a driver behaves,
              the affected articles are revisited and updated. Driver concepts are evergreen, but
              specific behaviour evolves — we treat keeping things current as part of the job.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EditorialStandards;
