import React from "react";

function HowToKnowWhichDriver() {
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
            Driver Identification
          </span>
          <h2 className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
            How to Know Which Driver You're Actually Using
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-slate-600">
            Curious which driver is in charge of your sound, your screen, or your
            network? It only takes a few clicks to find out — no special tools required.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="h-48 overflow-hidden">
              <img
                src="./onWindows.webp"
                alt="Windows desktop screenshot"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-blue-600 mb-4">
                On Windows
              </h3>
              <p className="text-sm text-slate-600 leading-7">
                Open Device Manager, expand any category (say, "Display adapters"), and
                right-click your device. Choose "Properties," then click the "Driver"
                tab. You'll instantly see the driver name, the publisher, the date it
                was released, and the exact version number. Hit "Driver Details" for an
                even deeper look at every file the driver uses. This is the cleanest way
                to confirm what's running before you decide to update.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="h-48 overflow-hidden">
              <img
                src="./onMac.webp"
                alt="macOS desktop screenshot"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-blue-600 mb-4">
                On macOS
              </h3>
              <p className="text-sm text-slate-600 leading-7">
                Click the system menu, choose "About This Mac," then click "More Info"
                and "System Report." A detailed window opens with sections for graphics,
                audio, USB, network, and more. Each section lists the underlying driver
                (called a "kext" or "extension") along with its version. macOS handles
                most drivers automatically, so what you'll usually see are clean,
                system-managed entries.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="h-48 overflow-hidden">
              <img
                src="./onLinux.webp"
                alt="Linux desktop screenshot"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-blue-600 mb-4">
                On Linux
              </h3>
              <p className="text-sm text-slate-600 leading-7">
                Open a terminal and try friendly commands like `lspci -k` for connected
                hardware and `lsusb` for USB devices, or `lsmod` to see every driver
                module currently loaded into the kernel. The output is text-based but
                surprisingly easy to scan — and it tells you exactly which driver is
                doing the work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowToKnowWhichDriver;
