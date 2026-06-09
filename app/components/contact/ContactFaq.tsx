"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

function ContactFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Can you fix my computer remotely?",
      answer:
        "No — we're an educational publisher, not a repair service. We can point you to the right overview and official sources, but we can't access or change your machine.",
    },
    {
      question: "Will you cover a topic I suggest?",
      answer:
        "Quite possibly. Reader questions are where many of our articles come from. Send it over and tell us what's confusing you.",
    },
    {
      question: "Do you sell or share my contact details?",
      answer:
        "Never. We use what you send only to reply to you. See our Privacy Policy for the full picture.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50 py-12 sm:py-16 lg:py-24 xl:py-32">
      {/* Background (same as StartHere) */}
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

        {/* HEADER (same system) */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-sky-200 bg-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 shadow-sm shadow-slate-200/50">
            Before you write
          </span>

          <h2 className="mt-4 sm:mt-6 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-slate-900">
            A few quick answers
          </h2>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-600">
            The questions readers send us most.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="mx-auto mt-8 sm:mt-12 lg:mt-16 max-w-4xl space-y-3 sm:space-y-4 lg:space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl border border-slate-200 bg-white shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between px-4 sm:px-6 py-4 sm:py-5 text-left"
                >
                  <h3 className="pr-4 text-sm sm:text-base lg:text-lg font-semibold text-slate-900">
                    {faq.question}
                  </h3>

                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
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

export default ContactFaq;