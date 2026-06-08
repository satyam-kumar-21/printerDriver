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
    description:
      "Installation, updates, compatibility and troubleshooting guides.",
  },
  {
    title: "Scanner Drivers",
    slug: "scanner-drivers",
    icon: ScanLine,
    description:
      "Learn how scanners communicate with your operating system.",
  },
  {
    title: "Graphics Drivers",
    slug: "graphics-drivers",
    icon: Monitor,
    description:
      "GPU updates, gaming performance and display optimization.",
  },
  {
    title: "Audio Drivers",
    slug: "audio-drivers",
    icon: Volume2,
    description:
      "Fix sound issues and understand audio device communication.",
  },
  {
    title: "Network Drivers",
    slug: "network-drivers",
    icon: Wifi,
    description:
      "Wi-Fi, Ethernet and connectivity troubleshooting resources.",
  },
  {
    title: "Bluetooth Drivers",
    slug: "bluetooth-drivers",
    icon: Bluetooth,
    description:
      "Pairing, connectivity and Bluetooth device support.",
  },
  {
    title: "USB Drivers",
    slug: "usb-drivers",
    icon: Usb,
    description:
      "Device recognition, installation and USB troubleshooting.",
  },
  {
    title: "Troubleshooting Hub",
    slug: "troubleshooting",
    icon: Wrench,
    description:
      "Step-by-step fixes for common driver and device problems.",
  },
];

export default function DriversWhatWeCover() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-8 sm:py-10 lg:py-12">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-200/30 blur-[140px]" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-sky-200/30 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.slug}
                href={`/drivers/${item.slug}`}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />
                </div>

                <div className="relative">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 shadow-lg shadow-blue-200/50">
                    <Icon className="h-6 w-6 text-white" />
                  </div>

                  <h3 className="mb-3 text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mb-6 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>

                  <div className="flex items-center gap-2 text-sm font-medium text-blue-600">
                    Explore Guide

                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
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