import React from "react";
import {
  RefreshCcw,
  Cable,
  PlugZap,
  Download,
} from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Restart Properly",
    description:
      "A full restart clears stuck driver state and resets every device. Not just closing the lid.",
    icon: RefreshCcw,
  },
  {
    number: "2",
    title: "Check the Cable or Link",
    description:
      "Loose USB cables, a flicked-off Wi-Fi switch — physical layers cause more 'driver' problems than drivers do.",
    icon: Cable,
  },
  {
    number: "3",
    title: "Reseat the Device",
    description:
      "Unplug, wait ten seconds, plug back into a different port if possible. This forces a clean re-detect.",
    icon: PlugZap,
  },
  {
    number: "4",
    title: "Check for Updates",
    description:
      "An interrupted OS update can leave things half-done. Let pending updates finish, then restart again.",
    icon: Download,
  },
];

function Step01() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-20">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-200/30 blur-[140px]" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-sky-200/30 blur-[140px]" />

        
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-sky-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 shadow-sm">
            Step 1 — Universal Fixes
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Try These Four Things First,
            <span className="block bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              Every Time
            </span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            Before you blame the driver, blame the boring stuff. These four
            simple checks solve more device problems than anything else
            combined.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />
                </div>

                <div className="relative">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 shadow-lg shadow-blue-200/50">
                      <Icon className="h-6 w-6 text-white" />
                    </div>

                    <span className="text-4xl font-bold text-slate-200">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mb-3 text-xl font-semibold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="text-sm leading-7 text-slate-600">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Step01;