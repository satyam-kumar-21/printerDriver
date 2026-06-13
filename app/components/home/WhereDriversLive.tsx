import React from "react";

function WhereDriversLive() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-600 shadow-sm">
            Driver Locations
          </span>
          <h2 className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
            Where Do Drivers Actually Live on Your PC?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-slate-600">
            Spoiler: they're not hiding in some secret folder. Your computer keeps them in
            a few well-known places — and once you know where to look, you can check,
            manage, and tidy them up like a pro.
          </p>
        </div>

        <div className="mb-8 rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1600&h=800"
            alt="Laptop on desk showing file explorer"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Inside the Device Manager
            </h3>
            <p className="text-sm text-slate-600 leading-7">
              This is the friendliest place to start on a Windows PC. Right-click the
              Start button and pick "Device Manager," and a tidy list of every piece of
              hardware on your machine appears — neatly grouped by category. Click any
              item and you can see its driver, check its version, update it, roll it back
              if a recent update caused trouble, or remove it entirely. It's like a
              backstage pass to the people running the show.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Through Settings & Updates
            </h3>
            <p className="text-sm text-slate-600 leading-7">
              On modern Windows systems, head to Settings, then Windows Update, then
              "Advanced options" and look for "Optional updates." Many driver updates
              quietly arrive here — already tested for your machine. On macOS, drivers
              are bundled into regular system updates, so just keep your OS current. On
              Linux, your distribution's package manager (or a built-in "Additional
              Drivers" tool) does the same job.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              The Hardware Maker's Website
            </h3>
            <p className="text-sm text-slate-600 leading-7">
              Every reputable hardware maker keeps a "Support" or "Drivers" section on
              its official website where you can download the very latest driver for
              your exact model. This is the go-to spot when you need a brand-new
              feature, a performance boost, or a fix for a specific bug. Always download
              directly from the official site — never from a random pop-up — and
              double-check the driver matches your operating system version.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhereDriversLive;
