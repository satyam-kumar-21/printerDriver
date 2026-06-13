import { CheckCircle2, ArrowRightLeft, Cpu, Laptop } from "lucide-react";

export default function WhyADriverMatter() {
  const points = [
    "Understand what drivers actually do",
    "Fix common device and connectivity issues",
    "Clear explanations without technical jargon",
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50 py-12 sm:py-16 lg:py-24">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-125 w-125 rounded-full bg-blue-200/40 blur-[140px]" />
        <div className="absolute right-0 bottom-0 h-125 w-125 rounded-full bg-sky-200/40 blur-[140px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-8 sm:gap-12 lg:gap-16 lg:grid-cols-2">

          {/* Left Content */}
          <div>
            <span className="inline-flex rounded-full border border-sky-200 bg-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
              Why Drivers Matter
            </span>

            <h2 className="mt-4 sm:mt-6 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-slate-900">
              The bridge between
              <span className="block bg-linear-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                software and hardware.
              </span>
            </h2>

            <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg leading-7 sm:leading-8 text-slate-600">
              Every click, print command, and device action needs a driver
              working behind the scenes. Drivers translate instructions
              between your operating system and physical hardware.
            </p>

            <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
              {points.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm sm:text-base text-slate-700"
                >
                  <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden lg:block">
            <div className="rounded-2xl sm:rounded-3xl lg:rounded-4xl border border-slate-200 bg-white p-5 sm:p-6 lg:p-8">

              <div className="grid grid-cols-3 items-center gap-3 sm:gap-4">

                {/* Software */}
                <div className="rounded-xl sm:rounded-2xl lg:rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-5 lg:p-6 text-center">
                  <Laptop className="mx-auto mb-3 sm:mb-4 h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-blue-600" />
                  <h3 className="text-xs sm:text-sm font-semibold text-slate-900">
                    Software
                  </h3>
                  <p className="mt-1.5 sm:mt-2 text-xs text-slate-500">
                    Apps & Operating System
                  </p>
                </div>

                {/* Driver */}
                <div className="flex flex-col items-center">
                  <div className="mb-3 sm:mb-4 flex h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 items-center justify-center rounded-lg sm:rounded-xl lg:rounded-2xl bg-linear-to-br from-blue-600 to-sky-500 shrink-0">
                    <ArrowRightLeft className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-white" />
                  </div>

                  <h3 className="text-xs sm:text-sm font-semibold text-slate-900">
                    Driver
                  </h3>

                  <p className="mt-1.5 sm:mt-2 text-center text-xs text-slate-500">
                    Real-time Translator
                  </p>
                </div>

                {/* Hardware */}
                <div className="rounded-xl sm:rounded-2xl lg:rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-5 lg:p-6 text-center">
                  <Cpu className="mx-auto mb-3 sm:mb-4 h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-blue-600" />
                  <h3 className="text-xs sm:text-sm font-semibold text-slate-900">
                    Hardware
                  </h3>
                  <p className="mt-1.5 sm:mt-2 text-xs text-slate-500">
                    Printers & Devices
                  </p>
                </div>
              </div>

              {/* Bottom Stats */}
              <div className="mt-6 sm:mt-8 lg:mt-10 grid grid-cols-3 gap-3 sm:gap-4">
                <div className="rounded-lg sm:rounded-xl lg:rounded-2xl border border-slate-200 bg-slate-50 p-3 sm:p-4 text-center">
                  <div className="text-base sm:text-lg lg:text-xl font-bold text-slate-900">
                    100+
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    Guides
                  </div>
                </div>

                <div className="rounded-lg sm:rounded-xl lg:rounded-2xl border border-slate-200 bg-slate-50 p-3 sm:p-4 text-center">
                  <div className="text-base sm:text-lg lg:text-xl font-bold text-slate-900">
                    24/7
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    Resources
                  </div>
                </div>

                <div className="rounded-lg sm:rounded-xl lg:rounded-2xl border border-slate-200 bg-slate-50 p-3 sm:p-4 text-center">
                  <div className="text-base sm:text-lg lg:text-xl font-bold text-slate-900">
                    Simple
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    Explanations
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}