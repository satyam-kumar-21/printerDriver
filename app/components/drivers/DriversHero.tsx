import Link from "next/link";
import { ChevronRight, Cpu, ShieldCheck, BookOpen } from "lucide-react";

export default function DriversHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-white py-16 lg:py-24">
      {/* Background Effects */}
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

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] items-center">
          {/* Left */}
          <div>
            {/* Breadcrumb */}
            <div className="mb-6 flex items-center gap-2 text-sm text-slate-500">
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>

              <ChevronRight className="h-4 w-4" />

              <span className="font-medium text-slate-700">
                Device Drivers
              </span>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-blue-500" />

              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Driver Overviews
              </span>
            </div>

            {/* Heading */}
            <h1 className="mt-6 max-w-4xl text-3xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl xl:text-6xl">
              Every Driver Family,
              <span className="block bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                Explained in Plain English
              </span>
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Drivers are simply translators between your software and
              your hardware. Explore each driver category to understand
              what it does, why it matters, and how to keep it working
              smoothly without getting lost in technical jargon.
            </p>

            {/* Quick Highlights */}
            <div className="mt-10 flex flex-wrap gap-4">
              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-sm">
                <p className="text-sm font-medium text-slate-700">
                  Beginner Friendly
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-sm">
                <p className="text-sm font-medium text-slate-700">
                  Plain-English Guides
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-sm">
                <p className="text-sm font-medium text-slate-700">
                  Hardware Categories
                </p>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/40">
              <div className="space-y-4">
                <div className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4">
                  <Cpu className="mt-0.5 h-5 w-5 text-blue-600" />

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Hardware Categories
                    </h3>

                    <p className="mt-1 text-sm text-slate-600">
                      Learn about printer, graphics, audio, network,
                      chipset, and storage drivers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4">
                  <BookOpen className="mt-0.5 h-5 w-5 text-blue-600" />

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Clear Explanations
                    </h3>

                    <p className="mt-1 text-sm text-slate-600">
                      No complex terminology — just practical,
                      understandable guidance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4">
                  <ShieldCheck className="mt-0.5 h-5 w-5 text-blue-600" />

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Maintenance Tips
                    </h3>

                    <p className="mt-1 text-sm text-slate-600">
                      Understand updates, compatibility, and common
                      troubleshooting practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Right */}
        </div>
      </div>
    </section>
  );
}