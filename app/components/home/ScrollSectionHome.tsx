"use client";

import React from "react";
import {
  Cpu,
  HardDrive,
  Bluetooth,
  Monitor,
  Wifi,
  Volume2,
  Usb,
  Settings,
} from "lucide-react";

const categories = [
  { icon: Volume2, label: "Audio & Sound" },
  { icon: Wifi, label: "Wi-Fi & Networking" },
  { icon: Usb, label: "USB & Devices" },
  { icon: HardDrive, label: "Storage & SSD" },
  { icon: Bluetooth, label: "Bluetooth" },
  { icon: Settings, label: "Chipset & System" },
  { icon: Cpu, label: "Device Drivers" },
  { icon: Monitor, label: "Graphics & GPU" },
];

function ScrollSectionHome() {
  const items = [...categories, ...categories];

  return (
    <section className="relative overflow-hidden border-y border-blue-100 bg-gradient-to-r from-blue-50 via-white to-blue-50 py-5">
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

      <div className="scroll-track flex w-max items-center gap-5">
        {items.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="group flex items-center gap-2 rounded-full border border-blue-100 bg-white px-6 py-3 transition-all duration-300 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
            >
              <Icon className="h-4 w-4 text-blue-600 transition-colors group-hover:text-white" />
              <span className="whitespace-nowrap text-sm font-semibold text-slate-700 transition-colors group-hover:text-white">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .scroll-track {
          animation: marquee 30s linear infinite;
        }

        .scroll-track:hover {
          animation-play-state: paused;
        }

        @keyframes marquee {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}

export default ScrollSectionHome;