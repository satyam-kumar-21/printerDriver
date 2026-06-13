import React from "react";
import Link from "next/link";

function AboutDriverWiseHome() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div className="rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?auto=format&fit=crop&q=80&w=1200&h=1200"
              alt="Person working at a clean desk with laptop"
              className="w-full h-auto object-cover"
            />
          </div>
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-600">
              About DriverWise
            </span>
            <h2 className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
              A Friendly Voice in a Noisy Tech World
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-7">
              We are a small, independent education project built around one stubborn
              idea — technology should not feel intimidating. Every overview on this
              site is written to make sense the first time you read it, whether you
              are a complete beginner or someone who already knows their way around a
              kernel debugger.
            </p>
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-7">
              No sponsorships. No affiliate links. No "instant driver updater"
              nonsense. Just clear, honest explanations of how things actually work.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Independent and free to read, always",
                "Plain-English first, technical accuracy second to none",
                "Privacy-respecting — no aggressive trackers or sold data"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-sky-500 shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-sm text-slate-600">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-200/50 transition-all duration-300 hover:scale-105"
              >
                Read More About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Add Check import
import { Check } from "lucide-react";

export default AboutDriverWiseHome;
