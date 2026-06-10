'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
    question: string
    answer: string
}

interface DriverFAQProps {
    faqs: FAQItem[]
    title?: string
    subtitle?: string
    badge?: string
}

export default function DriverFAQ({
    faqs,
    title = 'Frequently Asked Questions',
    subtitle = 'The questions readers ask most about this topic.',
    badge = 'Quick Answers',
}: DriverFAQProps) {
    const [openIndex, setOpenIndex] = useState<number>(-1)

    return (
        <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-24">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-200/30 blur-[140px]" />
                <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-sky-200/30 blur-[140px]" />

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

            <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
                {/* Heading */}
                <div className="mx-auto max-w-3xl text-center">
                    <span className="inline-flex rounded-full border border-sky-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 shadow-sm">
                        {badge}
                    </span>

                    <h2 className="mt-6 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                        {title}
                    </h2>

                    <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
                        {subtitle}
                    </p>
                </div>

                {/* FAQ */}
                <div className="mx-auto mt-12 max-w-4xl space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index

                        return (
                            <div
                                key={faq.question}
                                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-blue-200"
                            >
                                <button
                                    onClick={() =>
                                        setOpenIndex(isOpen ? -1 : index)
                                    }
                                    className="flex w-full items-center justify-between px-5 py-5 sm:px-7 sm:py-6 text-left"
                                >
                                    <h3 className="pr-4 text-base font-semibold text-slate-900 sm:text-lg">
                                        {faq.question}
                                    </h3>

                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                                        <ChevronDown
                                            className={`h-5 w-5 text-blue-600 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                                                }`}
                                        />
                                    </div>
                                </button>

                                <div
                                    className={`grid transition-all duration-300 ease-in-out ${isOpen
                                            ? 'grid-rows-[1fr]'
                                            : 'grid-rows-[0fr]'
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="border-t border-slate-200 px-5 py-5 sm:px-7 sm:py-6">
                                            <p className="leading-8 text-slate-600">
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