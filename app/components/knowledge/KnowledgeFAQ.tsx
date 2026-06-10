'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: "Restart, properly — what does that actually mean?",
    answer:
      "A full shutdown and power-on, not just closing the lid or choosing sleep. This clears stuck driver state and resets every device on the system.",
  },
  {
    question: "Should I use a 'driver updater' app?",
    answer:
      "We don't recommend them. They can bundle unwanted software and install the wrong versions. Your manufacturer's site and your OS's built-in update tools are the safe sources.",
  },
  {
    question: "What's a Device Manager error code?",
    answer:
      "It's a short status number shown next to a device when something's wrong — for example, a missing driver or a resource conflict. The fix is almost always a clean driver reinstall.",
  },
]

export default function KnowledgeFAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-28">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-200/40 blur-[140px]" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-sky-200/40 blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-sky-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 shadow-sm">
            Quick Answers
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-sm sm:text-base lg:text-lg text-slate-600">
            The questions readers send us most.
          </p>
        </div>

        {/* FAQ */}
        <div className="mx-auto mt-12 max-w-4xl space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between px-5 sm:px-6 py-5 text-left"
                >
                  <h3 className="pr-4 text-sm sm:text-base lg:text-lg font-semibold text-slate-900">
                    {faq.question}
                  </h3>

                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-cyan-500 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-slate-200 px-5 sm:px-6 py-5">
                      <p className="text-sm sm:text-base leading-7 text-slate-600">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}