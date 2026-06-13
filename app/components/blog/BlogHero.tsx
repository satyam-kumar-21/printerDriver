import Link from "next/link";
import { ChevronRight, BookOpen, ArrowRight, Lightbulb } from "lucide-react";

export default function BlogHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-white py-16 sm:py-20 lg:py-24">
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
        <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr] items-center">
          
          {/* Left Content */}
          <div>
            {/* Breadcrumb */}
            <div className="mb-6 flex items-center gap-2 text-sm text-slate-500">
              <Link
                href="/"
                className="transition hover:text-blue-600"
              >
                Home
              </Link>

              <ChevronRight className="h-4 w-4" />

              <span className="font-medium text-slate-700">
                Blog
              </span>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-blue-500" />

              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                The Driver Blog
              </span>
            </div>

            {/* Heading */}
            <h1 className="mt-6 max-w-4xl text-3xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl xl:text-6xl">
              Friendly, Useful Reads About
              <span className="block bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                How Your Computer Actually Works
              </span>
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Plain-English articles, calm knowledge, and the occasional
              <span className="font-medium text-slate-800">
                {" "}
                "wait, that's what it does?"
              </span>{" "}
              moment. Written for curious users who want practical answers
              without getting buried in technical jargon.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/blog"
                className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-sky-500 px-6 py-3.5 font-medium text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                Browse Latest Articles

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/knowledge"
                className="rounded-2xl border border-slate-200 bg-white px-6 py-3.5 font-medium text-slate-700 transition hover:bg-slate-50"
              >
                Need a Quick Fix?
              </Link>
            </div>
          </div>

          {/* Right Card */}
          <div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500">
                  <BookOpen className="h-5 w-5 text-white" />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    What You'll Find
                  </h3>

                  <p className="text-sm text-slate-500">
                    Helpful reads for everyday users
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  "Driver installation and update guides",
                  "Computer hardware explained simply",
                  "Troubleshooting tips and practical fixes",
                  "Technology concepts without the jargon",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <Lightbulb className="h-5 w-5 text-blue-600" />

                    <span className="text-sm text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-gradient-to-r from-blue-600 to-sky-500 p-5 text-white">
                <p className="text-sm font-medium uppercase tracking-wide text-blue-100">
                  New Articles Added Regularly
                </p>

                <h4 className="mt-2 text-xl font-bold">
                  Learn Something Useful Today
                </h4>

                <p className="mt-2 text-sm text-blue-100">
                  Short reads, practical explanations, and helpful
                  technology insights for everyday users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}