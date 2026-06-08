"use client";

import Link from "next/link";
import {
  ArrowRight,
  Printer,
  ScanLine,
  Monitor,
  Volume2,
  Wifi,
  Bluetooth,
  Usb,
  Wrench,
} from "lucide-react";

const categories = [
  {
    title: "Printer Drivers",
    slug: "printer-drivers",
    icon: Printer,
    description: "Installation, updates, compatibility and troubleshooting guides."
  },
  {
    title: "Scanner Drivers",
    slug: "scanner-drivers",
    icon: ScanLine,
    description: "Learn how scanners communicate with your operating system."
  },
  {
    title: "Graphics Drivers",
    slug: "graphics-drivers",
    icon: Monitor,
    description: "GPU updates, gaming performance and display optimization."
  },
  {
    title: "Audio Drivers",
    slug: "audio-drivers",
    icon: Volume2,
    description: "Fix sound issues and understand audio device communication."
  },
  {
    title: "Network Drivers",
    slug: "network-drivers",
    icon: Wifi,
    description: "Wi-Fi, Ethernet and connectivity troubleshooting resources."
  },
  {
    title: "Bluetooth Drivers",
    slug: "bluetooth-drivers",
    icon: Bluetooth,
    description: "Pairing, connectivity and Bluetooth device support."
  },
  {
    title: "USB Drivers",
    slug: "usb-drivers",
    icon: Usb,
    description: "Device recognition, installation and USB troubleshooting."
  },
  {
    title: "Troubleshooting Hub",
    slug: "troubleshooting",
    icon: Wrench,
    description: "Step-by-step fixes for common driver and device problems."
  },
];

export default function WhatWeCover() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-12 sm:py-16 lg:py-24">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-125 w-125 rounded-full bg-blue-200/40 blur-[140px]" />
        <div className="absolute right-0 bottom-0 h-125 w-125 rounded-full bg-sky-200/40 blur-[140px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <div className="mx-auto mb-8 sm:mb-12 lg:mb-16 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-sky-200 bg-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 shadow-sm shadow-slate-200/50">
            What We Cover
          </span>

          <h2 className="mt-4 sm:mt-6 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-slate-900">
            Explore Driver Categories
          </h2>

          <p className="mt-3 sm:mt-5 text-sm sm:text-base lg:text-lg text-slate-600">
            Learn, troubleshoot and understand every major driver category
            through simple, practical explanations.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-4 sm:gap-5 lg:gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {categories.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.slug}
                href={`/drivers/${item.slug}`}
                className="group relative overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />
                </div>

                <div className="relative">
                  <div className="mb-4 sm:mb-6 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-linear-to-br from-blue-600 to-sky-500 shadow-lg shadow-blue-200/40 shrink-0">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>

                  <h3 className="mb-2 sm:mb-3 text-base sm:text-lg lg:text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mb-4 sm:mb-6 text-xs sm:text-sm leading-6 sm:leading-7 text-slate-600">
                    {item.description}
                  </p>

                  <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-blue-600">
                    Explore Guide

                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}