import Link from "next/link";
import { ArrowRight, ShieldCheck, Printer } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-white py-16 sm:py-20 lg:py-28">
      {/* Background Effects (MATCHED SYSTEM UI) */}
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

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 sm:gap-12 md:grid-cols-[1.1fr_0.9fr] items-start">
          {/* Left Content */}
          <div>
            <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-3 sm:px-4 py-1.5 sm:py-2 shadow-sm shadow-slate-200/50">
              <span className="h-2 w-2 rounded-full bg-blue-500 shrink-0" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Trusted Driver Knowledge Base
              </span>
            </div>

            <h1 className="max-w-3xl text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight sm:leading-[1.1] tracking-tight text-slate-900">
              Printer Drivers,
              <span className="block bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                Explained Clearly.
              </span>
            </h1>

            <p className="mt-4 sm:mt-6 max-w-xl text-sm sm:text-base lg:text-lg leading-7 sm:leading-8 text-slate-600">
              Learn how printer drivers work, troubleshoot issues,
              and find practical solutions explained in simple language.
            </p>

            <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Link
                href="/drivers"
                className="group flex justify-center sm:justify-start items-center gap-2 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 sm:px-6 py-3 sm:py-3.5 font-medium text-white text-sm sm:text-base transition-all duration-300 hover:scale-105"
              >
                Explore Drivers
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/knowledge"
                className="flex justify-center sm:justify-start rounded-xl sm:rounded-2xl border border-blue-100 bg-white px-4 sm:px-6 py-3 sm:py-3.5 font-medium text-blue-700 text-sm sm:text-base transition hover:bg-slate-50"
              >
                Learn More
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-8 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-8 sm:flex sm:flex-wrap">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">500+</h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">Driver Guides</p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">100+</h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">Printer Models</p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">24/7</h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">Knowledge Access</p>
              </div>
            </div>
          </div>

          {/* Right Side Card */}
          <div className="relative w-full md:block">
            <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-4 sm:p-6 shadow-xl shadow-slate-200/40">
              <div className="mb-4 sm:mb-6 flex items-center gap-3 sm:gap-4">
                <div className="flex h-10 sm:h-12 w-10 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 shrink-0">
                  <Printer className="h-5 w-5 text-white" />
                </div>

                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-slate-900">
                    Driver Knowledge Center
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Guides & Troubleshooting
                  </p>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {[
                  "Printer Setup Guides",
                  "Driver Installation Help",
                  "Error Fix Tutorials",
                  "Compatibility Resources",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 sm:gap-3 rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50 p-3 sm:p-4"
                  >
                    <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 shrink-0" />

                    <span className="text-xs sm:text-sm text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 sm:mt-8 rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50 p-3 sm:p-4">
                <p className="text-lg sm:text-2xl font-bold text-slate-900">
                  1000+
                </p>
                <p className="text-xs text-slate-500">Monthly Readers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}