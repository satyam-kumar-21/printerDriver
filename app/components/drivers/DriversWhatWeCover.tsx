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

  Cpu,
  HardDrive,
  Keyboard,
  Boxes,
  Layers,
  Shield,

} from "lucide-react";

const categories = [

  {
  title: "Kernel-Mode Drivers",
  slug: "kernel-mode-drivers",
  icon: Shield,
  description: "Low-level drivers with direct hardware and memory access."
},
{
  title: "User-Mode Drivers",
  slug: "user-mode-drivers",
  icon: Layers,
  description: "Safer drivers that run separately from the operating system kernel."
},

  {
    title: "Printer Drivers",
    slug: "printer-drivers",
    icon: Printer,
    description:
      "Installation, updates, compatibility and troubleshooting guides.",
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
    title: "Chipset Drivers",
    slug: "chipset-drivers",
    icon: Cpu,
    description:
      "The foundation that connects all your hardware together.",
  },
  {
    title: "Storage Drivers",
    slug: "storage-drivers",
    icon: HardDrive,
    description:
      "SSD, HDD, and external storage performance and reliability.",
  },
  {
    title: "Input Devices",
    slug: "input-devices",
    icon: Keyboard,
    description:
      "Keyboards, mice, touchpads, and game controller support.",
  },

  {
  title: "Virtual Device Drivers",
  slug: "virtual-device-drivers",
  icon: Boxes,
  description: "Software-created devices used by virtualization and emulation tools."
},
  
];

export default function DriversWhatWeCover() {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-200/30 blur-[140px]" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-sky-200/30 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            Driver Categories
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Explore Every Driver Family
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-base leading-7 text-slate-600">
            From printers to chipsets, every hardware category has a guide written in simple,
            straightforward language.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {categories.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.slug}
                href={`/drivers/${item.slug}`}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-3 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100/60"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-blue-400/10 blur-3xl" />
                </div>

                <div className="relative">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 shadow-lg shadow-blue-200/60">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                      Guide
                    </span>
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mb-6 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>

                  <div className="flex items-center gap-2 text-sm font-semibold text-blue-600">
                    Read more
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