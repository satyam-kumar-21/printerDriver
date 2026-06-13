import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

export default function WantUs() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-12 sm:py-16 lg:py-20 xl:py-24">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-0 h-80 w-80 rounded-full bg-blue-200/40 blur-[120px]" />
        <div className="absolute right-1/4 bottom-0 h-80 w-80 rounded-full bg-sky-200/40 blur-[120px]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl sm:rounded-3xl lg:rounded-4xl border border-slate-200 bg-white p-6 sm:p-8 lg:p-10">
          
          {/* Badge */}
          <div className="mb-4 sm:mb-5 flex justify-center">
            <span className="inline-flex rounded-full border border-sky-200 bg-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
              Community Driven
            </span>
          </div>

          {/* Content */}
          <div className="text-center">
            <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl lg:text-3xl xl:text-4xl">
              Want us to explain
              <span className="block bg-linear-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                another driver topic?
              </span>
            </h2>

            <p className="mx-auto mt-3 sm:mt-5 max-w-3xl text-sm sm:text-base lg:text-lg leading-7 sm:leading-8 text-slate-600">
              Our friendly overview covers every major hardware category —
              from the device on your desk to the chips inside your laptop.
              Tell us what to write next.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row">
            <Link
              href="/drivers"
              className="group w-full sm:w-auto flex justify-center items-center gap-2 rounded-lg sm:rounded-2xl bg-linear-to-r from-blue-600 to-sky-500 px-5 sm:px-7 py-2.5 sm:py-3.5 font-semibold text-white text-sm sm:text-base transition-all duration-300 hover:scale-105"
            >
              Browse All Topics
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/knowledge"
              className="w-full sm:w-auto flex justify-center items-center gap-2 rounded-lg sm:rounded-2xl border border-slate-200 bg-slate-50 px-5 sm:px-7 py-2.5 sm:py-3.5 font-semibold text-slate-900 text-sm sm:text-base transition-all duration-300 hover:bg-white"
            >
              <BookOpen className="h-4 w-4" />
              Need Help? Visit Knowledge
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}