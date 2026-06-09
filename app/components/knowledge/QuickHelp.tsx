import React from "react";
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
} from "lucide-react";

const helpCards = [
  {
    title: "Printer",
    issue: "Printer stuck or 'offline'",
    desc: "Clear the print queue, power-cycle the printer, and reinstall full driver package.",
    icon: Printer,
    href: "/drivers/printer-drivers",
  },
  {
    title: "Scanner",
    issue: "Scanner not detected",
    desc: "Install full multifunction package, not print-only driver.",
    icon: ScanLine,
    href: "/drivers/scanner-drivers",
  },
  {
    title: "Display",
    issue: "Screen flickers or goes black",
    desc: "Usually a graphics driver issue. Roll back or clean install stable driver.",
    icon: Monitor,
    href: "/drivers/graphics-drivers",
  },
  {
    title: "Audio",
    issue: "No sound coming out",
    desc: "Check default output device, then reinstall audio driver from OEM.",
    icon: Volume2,
    href: "/drivers/audio-drivers",
  },
  {
    title: "Wi-Fi",
    issue: "Wi-Fi drops constantly",
    desc: "Disable power saving for adapter and update driver from laptop maker.",
    icon: Wifi,
    href: "/drivers/network-drivers",
  },
  {
    title: "Bluetooth",
    issue: "Bluetooth won't pair",
    desc: "Remove old entry, re-pair fresh, update driver, disable power saving.",
    icon: Bluetooth,
    href: "/drivers/bluetooth-drivers",
  },
  {
    title: "USB",
    issue: "USB device not recognised",
    desc: "Try different cable/port, reinstall USB + device drivers.",
    icon: Usb,
    href: "/drivers/usb-drivers",
  },
  {
    title: "System",
    issue: "Computer slow after update",
    desc: "Updates may replace tuned drivers with generic ones.",
    icon: Cpu,
    href: "/drivers/troubleshooting",
  },
];

function QuickHelp() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-28">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-200/30 blur-[140px]" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-sky-200/30 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <div className="mx-auto mb-14 sm:mb-16 lg:mb-20 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-sky-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 shadow-sm">
            Quick Help by Symptom
          </span>

          <h2 className="mt-6 sm:mt-7 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Find your problem,
            <span className="block bg-linear-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent mt-2">
              get a dedicated fix
            </span>
          </h2>

          <p className="mt-6 sm:mt-7 text-sm sm:text-base lg:text-lg text-slate-600 leading-7 sm:leading-8 max-w-2xl mx-auto">
            Each card opens the overview for that hardware family with targeted fixes designed to solve issues faster and more clearly.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {helpCards.map((item, index) => {
            const Icon = item.icon;

            return (
              <Link
                key={index}
                href={item.href}
                className="group relative overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200"
              >
                {/* glow */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />
                </div>

                <div className="relative">
                  <div className="mb-4 sm:mb-6 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-linear-to-br from-blue-600 to-sky-500 shadow-lg shadow-blue-200/40">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>

                  <h3 className="mb-2 sm:mb-3 text-base sm:text-lg lg:text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mb-3 text-sm font-medium text-slate-700">
                    {item.issue}
                  </p>

                  <p className="mb-4 sm:mb-6 text-xs sm:text-sm leading-6 sm:leading-7 text-slate-600">
                    {item.desc}
                  </p>

                  <div className="flex items-center gap-2 text-sm font-medium text-blue-600">
                    Read the overview
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

export default QuickHelp;