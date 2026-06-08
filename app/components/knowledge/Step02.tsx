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
    title: "Restart properly",
    desc: "Clears stuck driver state",
  },
  {
    number: "2",
    title: "Check cables & links",
    desc: "Rule out the boring stuff",
  },
  {
    number: "3",
    title: "Reseat the device",
    desc: "Force a clean re-detect",
  },
  {
    number: "4",
    title: "Reinstall the driver",
    desc: "Remove old, install latest",
  },
];

function Step02() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20">
      {/* background glow */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-200/30 blur-[140px]" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-sky-200/30 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          
          {/* LEFT SIDE */}
          <div>
            <span className="inline-flex rounded-full border border-sky-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 shadow-sm">
              Step 2 — Driver-specific fixes
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Still misbehaving? Reset
              <span className="block text-slate-900">the driver.</span>
            </h2>

            <p className="mt-5 text-slate-600 leading-8">
              If the universal fixes didn’t solve it, the driver itself probably
              needs a clean reinstall. Order matters:
            </p>

            <ol className="mt-6 space-y-3 text-slate-600 text-sm leading-7 list-decimal pl-5">
              <li>Identify the exact device and chip manufacturer.</li>
              <li>Download latest driver from official support site.</li>
              <li>Uninstall old driver (remove software if option appears).</li>
              <li>Restart the system.</li>
              <li>Install the fresh driver package.</li>
              <li>Restart once more.</li>
            </ol>
          </div>

          {/* RIGHT SIDE CARD */}
          <div className="relative">
            <div className="rounded-3xl bg-gradient-to-br from-blue-100/60 to-sky-100/60 p-8 shadow-xl backdrop-blur-xl border border-white/40">
              
              <div className="mb-6">
                <p className="text-xs font-semibold tracking-[0.25em] text-blue-600 uppercase">
                  The Repair Routine
                </p>
              </div>

              <div className="space-y-4">
                {steps.map((step, index) => (
                  <div
                    key={step.number}
                    className={`flex items-center gap-4 rounded-2xl p-4 shadow-sm transition ${
                      index === 3
                        ? "bg-blue-600 text-white"
                        : "bg-white"
                    }`}
                  >
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full font-bold ${
                        index === 3
                          ? "bg-white text-blue-600"
                          : "bg-blue-600 text-white"
                      }`}
                    >
                      {step.number}
                    </div>

                    <div>
                      <h4
                        className={`font-semibold ${
                          index === 3 ? "text-white" : "text-slate-900"
                        }`}
                      >
                        {step.title}
                      </h4>
                      <p
                        className={`text-sm ${
                          index === 3 ? "text-blue-100" : "text-slate-500"
                        }`}
                      >
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-center text-xs text-slate-500">
                Work top to bottom — most problems stop early
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Step02;