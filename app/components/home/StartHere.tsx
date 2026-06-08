"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const stats = [
  {
    value: "7",
    label: "Driver Families Explained",
  },
  {
    value: "40+",
    label: "Plain-English Guides",
  },
  {
    value: "0",
    label: "Downloads Hosted",
  },
];

const faqs = [
  {
    question: "Do you provide driver downloads?",
    answer:
      "No. We are an educational site only. The safest source for any driver is always your hardware manufacturer's official support page or your operating system's built-in update tool. We explain what to look for, never host files.",
  },
  {
    question: "Is this site affiliated with any hardware or OS company?",
    answer:
      "No. DriverWise is fully independent, with no sponsorship or endorsement from any vendor, which is exactly why we can stay neutral and plain-spoken.",
  },
  {
    question: "Where should I start?",
    answer:
      "If something is broken, head to the Knowledge hub and try the universal fixes first. If you're just curious, pick the driver family that matches your hardware and read the overview.",
  },
];

export default function StartHere() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative overflow-hidden bg-slate-50 py-12 sm:py-16 lg:py-24 xl:py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-125 w-125 rounded-full bg-blue-200/40 blur-[140px]" />
        <div className="absolute right-0 bottom-0 h-125 w-125 rounded-full bg-sky-200/40 blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
        {/* Stats */}
        <div className="grid gap-4 sm:gap-5 lg:gap-6 md:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.label}
              className="group rounded-xl sm:rounded-2xl lg:rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 lg:p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200"
            >
              <h3 className="bg-linear-to-r from-white to-slate-300 bg-clip-text text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent">
                {item.value}
              </h3>

              <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-slate-600">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Heading */}
        <div className="mx-auto mt-12 sm:mt-16 lg:mt-24 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-sky-200 bg-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 shadow-sm shadow-slate-200/50">
            Start Here
          </span>

          <h2 className="mt-4 sm:mt-6 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-slate-900">
            Common First Questions
          </h2>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-600">
            The questions readers ask most before exploring our guides.
          </p>
        </div>

        {/* FAQ */}
        <div className="mx-auto mt-8 sm:mt-12 lg:mt-16 max-w-4xl space-y-3 sm:space-y-4 lg:space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl border border-slate-200 bg-white shadow-sm"
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? -1 : index)
                  }
                  className="flex w-full items-center justify-between px-4 sm:px-6 py-4 sm:py-5 text-left"
                >
                  <h3 className="pr-4 text-sm sm:text-base lg:text-lg font-semibold text-slate-900">
                    {faq.question}
                  </h3>

                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-cyan-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-slate-200 px-4 sm:px-6 py-4 sm:py-5">
                      <p className="text-sm sm:text-base leading-7 sm:leading-8 text-slate-600">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}