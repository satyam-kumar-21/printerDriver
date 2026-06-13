"use client"

import Link from "next/link"
import React from "react"
import { ChevronRight, Wrench, ShieldCheck, Search, ArrowRight } from "lucide-react"

type Feature = {
  icon: React.ReactNode
  title: string
  description: string
}

type Props = {
  title: string
  breadcrumbs?: string[]
  intro?: React.ReactNode
  image?: string
  features?: Feature[]
  topics?: string[]
}

export default function DriverDetailHero({ title, breadcrumbs = [], intro, image, features, topics }: Props) {
  const defaultFeatures: Feature[] = [
    {
      icon: <Wrench className="mt-0.5 h-5 w-5 text-blue-600" />,
      title: "Universal Fixes",
      description: "Start with the solutions that solve the majority of driver issues before diving deeper.",
    },
    {
      icon: <Search className="mt-0.5 h-5 w-5 text-blue-600" />,
      title: "Symptom-Based Guides",
      description: "Find the exact issue you're seeing and follow a focused troubleshooting path.",
    },
    {
      icon: <ShieldCheck className="mt-0.5 h-5 w-5 text-blue-600" />,
      title: "Safe Troubleshooting",
      description: "Learn proven troubleshooting habits without risking your system or settings.",
    },
  ]

  const defaultTopics = ["Driver Errors", "Missing Devices", "Update Problems", "Connectivity Issues"]

  const displayFeatures = features || defaultFeatures
  const displayTopics = topics || defaultTopics
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-white py-16 lg:py-24">
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
        <div className="grid items-center gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="mb-6 flex items-center gap-2 text-sm text-slate-500">
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>

              <ChevronRight className="h-4 w-4" />

              <Link href="/drivers" className="hover:text-blue-600">
                Device Drivers
              </Link>

              {breadcrumbs.length > 0 && (
                <>
                  <ChevronRight className="h-4 w-4" />
                  <span className="font-medium text-slate-700">{breadcrumbs[0]}</span>
                </>
              )}
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-blue-500" />

              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Device Drivers
              </span>
            </div>

            <h1 className="mt-6 max-w-4xl text-3xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl xl:text-6xl">
              {title}
            </h1>

            {intro && <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">{intro}</p>}

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#overview" className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-sky-500 px-6 py-4 font-semibold text-white shadow-lg shadow-blue-200/50 transition-all duration-300 hover:-translate-y-1">
                Read Overview
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a href="#troubleshoot" className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-4 font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-600">
                Troubleshoot Now
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-sm">
                <p className="text-sm font-medium text-slate-700">What It Does</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-sm">
                <p className="text-sm font-medium text-slate-700">Common Symptoms</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-sm">
                <p className="text-sm font-medium text-slate-700">Quick Fixes</p>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/40">
              <div className="space-y-4">
                {displayFeatures.map((feature, i) => (
                  <div key={i} className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4">
                    {feature.icon}

                    <div>
                      <h3 className="font-semibold text-slate-900">{feature.title}</h3>
                      <p className="mt-1 text-sm text-slate-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5">
                <p className="text-sm text-slate-600">Most Common Topics</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {displayTopics.map((topic, i) => (
                    <span key={i} className="rounded-full bg-white px-3 py-1 text-sm text-slate-700">{topic}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
