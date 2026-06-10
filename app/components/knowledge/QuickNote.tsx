import React from 'react'

function QuickNote() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 bg-slate-50">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-blue-200/20 blur-[120px]" />
        <div className="absolute right-10 bottom-10 h-72 w-72 rounded-full bg-sky-200/20 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-xl shadow-xl p-10 sm:p-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
            A quick note on safety
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-8 mb-5">
            Always download drivers from your hardware manufacturer’s official website.
            Avoid third-party "driver updater" tools that promise instant fixes — they
            often install bundles you do not need, and occasionally cause the very
            problems they claim to solve.
          </p>

          <p className="text-slate-600 text-base sm:text-lg leading-8">
            If you're not comfortable making changes, a trusted technician is a
            perfectly sensible call.
          </p>
        </div>
      </div>
    </section>
  )
}

export default QuickNote