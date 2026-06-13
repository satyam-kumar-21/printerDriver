import React from "react";
import Link from "next/link";
import { Printer, Monitor, Volume2, Wifi, Usb, Cpu } from "lucide-react";

function HardwareCategories() {
  const categories = [
    {
      title: "Printer Drivers",
      description: "Why your device needs special software, what goes wrong, and how to keep output painless across home, office, and shared setups.",
      icon: <Printer className="h-6 w-6 text-white" />,
      slug: "printer-drivers"
    },
    {
      title: "Graphics Drivers",
      description: "How GPUs, displays, and modern apps stay in sync — and why a tiny driver update can transform game performance.",
      icon: <Monitor className="h-6 w-6 text-white" />,
      slug: "graphics-drivers"
    },
    {
      title: "Audio Drivers",
      description: "The quiet software shaping every chime, voice call, and music track that comes out of your speakers and headphones.",
      icon: <Volume2 className="h-6 w-6 text-white" />,
      slug: "audio-drivers"
    },
    {
      title: "Network Drivers",
      description: "The bridge between your operating system and the wired or wireless chip that connects you to the wider internet.",
      icon: <Wifi className="h-6 w-6 text-white" />,
      slug: "network-drivers"
    },
    {
      title: "USB & Devices",
      description: "How keyboards, mice, drives, webcams, and controllers get recognised the instant you plug them in — and what to try when they don't.",
      icon: <Usb className="h-6 w-6 text-white" />,
      slug: "usb-drivers"
    },
    {
      title: "System Drivers",
      description: "The chipset, CPU, and storage drivers you never see — but always feel — making your machine boot fast and run smoothly.",
      icon: <Cpu className="h-6 w-6 text-white" />,
      slug: "chipset-drivers"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-sky-50 via-white to-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-[-10%] top-[-10%] h-96 w-96 rounded-full bg-blue-200/30 blur-[120px]" />
        <div className="absolute right-[-10%] bottom-0 h-96 w-96 rounded-full bg-sky-200/30 blur-[120px]" />
      </div>

      <div className="relative mx-auto w-full max-w-5xl px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-600">
            Helpful Topics We Cover
          </span>
          <h2 className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
            Pick a Hardware Category and Dive In
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-slate-600">
            Each overview is bite-sized, friendly, and written to make sense the very
            first time you read it. No jargon walls. No paywalls.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <Link
                key={index}
                href={`/drivers/${category.slug}`}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200"
              >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 mb-4">
                {category.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{category.title}</h3>
              <p className="text-sm text-slate-600 leading-7">{category.description}</p>
              <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-blue-600">
                Read More
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// Add ArrowRight import
import { ArrowRight } from "lucide-react";

export default HardwareCategories;
