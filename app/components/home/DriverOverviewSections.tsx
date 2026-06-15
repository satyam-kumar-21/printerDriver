import React from "react";
import Link from "next/link";

function DriverOverviewSections() {
  const sections = [
    {
      title: "Kernel-Mode Drivers",
      description: "Kernel-mode drivers work at the operating system's most trusted level, with direct access to hardware, memory, and system resources. This makes them essential for tasks that demand maximum performance and low latency, like file systems and network protocols, but also means issues here can affect system stability.",
      image: "/driver/kernalmodedriver.webp",
      slug: "kernel-mode-drivers"
    },
    {
      title: "User-Mode Drivers",
      description: "User-mode drivers operate in a safer, isolated part of the system, separated from the core OS. If something goes wrong, the driver can crash without taking the whole system down. Devices like webcams, scanners, and many USB peripherals often use user-mode drivers.",
      image: "/driver/usermodedriverstack.webp",
      slug: "usb-mode-drivers"
    },
    {
      title: "Printer & Output Drivers",
      description: "Printer and output drivers translate digital documents into instructions that physical hardware can understand—whether that's a printer, plotter, or label maker. They handle everything from color calibration and paper size to duplex printing and document collation.",
      image: "/driver/printerdrivers.webp",
      slug: "printer-drivers"
    },
    {
      title: "Graphics & Display Drivers",
      description: "Graphics drivers are the workhorses behind everything you see on screen. They manage GPU memory, coordinate rendering across thousands of cores, handle refresh rates and display settings, and expose APIs for games and creative software.",
      image: "/driver/graphicsdriver.webp",
      slug: "graphics-drivers"
    },
    {
      title: "Audio Drivers",
      description: "Audio drivers handle the flow of sound between your OS and audio hardware. They mix multiple streams, apply effects like EQ or spatial audio, convert between digital and analog signals, and manage power for speakers and microphones.",
      image: "/driver/audiodriver.webp",
      slug: "audio-drivers"
    },
    {
      title: "Network Drivers",
      description: "Network drivers connect your computer to the world, managing wired and wireless connections. They handle high-speed data transmission, offload work to your network card, and manage Wi-Fi security and signal quality.",
      image: "/driver/networkdriver.webp",
      slug: "network-drivers"
    },
    {
      title: "USB & Peripheral Drivers",
      description: "USB drivers form a layered stack that manages everything you plug into a USB port—from keyboards and mice to external drives. They handle device detection, power management, and hot-plugging so you can connect devices on the fly.",
      image: "/driver/usabdriver.webp",
      slug: "usb-drivers"
    },
    {
      title: "Storage Drivers",
      description: "Storage drivers manage your hard drives, SSDs, and external storage. They translate file requests into hardware commands, optimize performance for flash storage, and handle reliability features like error correction and health monitoring.",
      image: "/driver/storagedriver.webp",
      slug: "storage-drivers"
    },
    {
      title: "Input Device Drivers",
      description: "Input device drivers translate your physical interactions—typing, clicking, touching—into events the OS understands. They handle keyboards, mice, touchpads, game controllers, and more, including advanced features like gestures and pressure sensitivity.",
      image: "/driver/inputdriver.webp",
      slug: "input-devices"
    },
    {
      title: "Chipset Drivers",
      description: "Chipset drivers are the foundation of your system, managing how your CPU talks to RAM, storage, and other components. They're critical for performance, stability, and enabling features like power management and virtualization.",
      image: "/driver/chipestDriver.webp",
      slug: "chipset-drivers"
    },
    {
      title: "Bluetooth Drivers",
      description: "Bluetooth drivers manage short-range wireless connections to headphones, speakers, keyboards, and smart devices. They handle the complex Bluetooth stack, including pairing, audio streaming, and low-energy devices like fitness trackers.",
      image: "/driver/blutoothdriver.webp",
      slug: "bluetooth-drivers"
    },
    {
      title: "Virtual Device Drivers",
      description: "Virtual drivers create software-only devices that act like real hardware. They're used in virtual machines, VPNs, and emulators, translating guest OS requests into host actions and providing isolated, secure environments.",
      image: "/driver/virtualdriver.webp",
      slug: "virtual-device-drivers"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-white via-slate-50 to-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-[-10%] top-[-10%] h-96 w-96 rounded-full bg-blue-200/30 blur-[120px]" />
        <div className="absolute right-[-10%] bottom-0 h-96 w-96 rounded-full bg-sky-200/30 blur-[120px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-600">
            Driver Deep Dive
          </span>
          <h2 className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
            Understand Every Type of Driver
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-slate-600">
            Explore the different kinds of drivers that make your hardware work—from kernel-mode foundations to virtual devices.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section, index) => (
            <Link
              key={index}
              href={`/drivers/${section.slug}`}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:border-blue-200"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={section.image}
                  alt={section.title}
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-3">{section.title}</h3>
                <p className="text-sm leading-7 text-slate-600">{section.description}</p>
                <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-blue-600">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
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

export default DriverOverviewSections;
