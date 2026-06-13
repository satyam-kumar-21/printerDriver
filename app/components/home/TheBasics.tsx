"use client";

import { useState } from "react";
import {
  Languages,
  Heart,
  Settings,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";

type Tab = {
  id: "translator" | "care" | "works";
  label: string;
  icon: LucideIcon;
  title: string;
  content: string[];
  highlights: string[];
};

const tabs: Tab[] = [
  {
    id: "translator",
    label: "The Translator",
    icon: Languages,
    title: "Drivers Are The Translators Of Your Computer",
    content: [
      "Your operating system and your hardware don't naturally speak the same language. A driver acts as the translator between them, ensuring every command is understood correctly.",
      "When you click Print, connect a webcam, adjust your speakers, or launch a game, the driver converts those requests into instructions that the hardware can understand and execute.",
      "Without drivers, your computer might detect hardware, but it wouldn't know how to use it effectively. Drivers make communication possible between software and physical devices.",
    ],
    highlights: [
      "Translates operating system commands.",
      "Allows hardware and software to communicate.",
      "Essential for every major device.",
    ],
  },
  {
    id: "care",
    label: "Why You Care",
    icon: Heart,
    title: "Why Drivers Matter More Than Most People Realize",
    content: [
      "Most users never think about drivers until something goes wrong. A damaged, missing, or outdated driver can cause crashes, lag, connectivity issues, or devices that suddenly stop working.",
      "Manufacturers regularly update drivers to improve performance, stability, security, and compatibility with newer operating system versions.",
      "Keeping drivers healthy often solves common hardware issues and helps your computer run smoothly over the long term.",
    ],
    highlights: [
      "Updates can improve performance.",
      "Bad drivers can cause crashes.",
      "Healthy drivers mean fewer issues.",
    ],
  },
  {
    id: "works",
    label: "How It Works",
    icon: Settings,
    title: "What Happens Behind The Scenes",
    content: [
      "When an application needs hardware access, it sends a request to the operating system. The operating system then forwards that request to the appropriate driver.",
      "The driver converts the request into hardware-specific instructions and sends them to the device. Once completed, the device returns information through the driver back to the operating system.",
      "This communication loop happens thousands of times every second, allowing modern computers to manage countless devices seamlessly.",
    ],
    highlights: [
      "Applications talk to the OS.",
      "Drivers talk to hardware.",
      "Information flows both directions.",
    ],
  },
];

export default function TheBasics() {
  const [activeTab, setActiveTab] =
    useState<Tab["id"]>("translator");

  const currentTab =
    tabs.find((tab) => tab.id === activeTab) ?? tabs[0];

  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-white" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Badge */}
        <div className="mb-5 flex justify-center">
          <span className="rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-700">
            The Basics
          </span>
        </div>

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-blue-950 md:text-6xl">
            So... What Exactly Is a Driver?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Understanding drivers doesn't require a computer science degree.
            Start with these three simple ideas and you'll understand how
            hardware and software work together.
          </p>
        </div>

        {/* Tabs */}
        <div className="mx-auto mt-14 max-w-5xl rounded-3xl border border-blue-100 bg-white p-2">
          <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
            {tabs.map((tab) => {
              const Icon = tab.icon;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center justify-center gap-3 rounded-2xl px-6 py-5 font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-blue-600 to-sky-500 text-white"
                      : "text-slate-600 hover:bg-blue-50 hover:text-blue-700"
                  }`}
                >
                  <Icon size={18} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Area */}
        <div className="mt-12 rounded-[32px] border border-blue-100 bg-white p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.7fr_0.8fr]">
            {/* Main Content */}
            <div>
              <h3 className="mb-8 text-3xl font-bold text-blue-950 md:text-4xl">
                {currentTab.title}
              </h3>

              <div className="space-y-6 text-lg leading-9 text-slate-600">
                {currentTab.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="sticky top-24 overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-blue-600 to-sky-500 p-8 text-white">
                <div className="mb-6">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-100">
                    Quick Summary
                  </p>
                </div>

                <ul className="space-y-5">
                  {currentTab.highlights.map((item, index) => (
                    <li key={index} className="flex gap-3">
                      <ChevronRight
                        size={18}
                        className="mt-1 shrink-0"
                      />
                      <span className="leading-7">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                  <p className="text-sm leading-6 text-blue-50">
                    Drivers work quietly behind the scenes, but they are one
                    of the most important pieces of software on your computer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}