import React from "react";
import { ServerCrash, Clock, AlertCircle, Unlock, Settings, ShieldAlert } from "lucide-react";

function CommonDriverProblems() {
  const problems = [
    {
      title: "Driver Conflicts",
      description: "Driver conflicts occur when two or more drivers compete for the same hardware resource, such as an interrupt request line, an input/output port address range, or memory-mapped region. This competition causes unpredictable behavior in both performance, or wider system instability. Conflicts most commonly arise when multiple drivers attempt to claim ownership of the same interrupt vector, particularly on older hardware that predates modern interrupt routing standards. Operating systems manage hardware resource allocation through their Plug and Play infrastructure, but certain driver combinations or firmware misconfigurations can still result in conflicting assignments that require manual resolution through device settings or firmware-level interrupt configuration.",
      icon: <ServerCrash className="h-6 w-6 text-blue-600" />
    },
    {
      title: "Outdated Drivers",
      description: "Outdated drivers represent one of the most preventable yet frequently encountered sources of hardware and system problems. As operating systems evolve, they introduce new kernel APIs, security requirements, and interface specifications. Drivers that haven't been updated to reflect these changes may fail silently, exhibit reduced performance, or generate compatibility warnings. Graphics drivers are particularly susceptible to becoming obsolete, as new rendering APIs and game engines regularly require driver-level support to function correctly. A GPU running a year-old driver might fail to support newer features like DirectStorage, ray tracing improvements, or AI-accelerated rendering that a current driver would enable, leaving significant performance capability untapped.",
      icon: <Clock className="h-6 w-6 text-blue-600" />
    },
    {
      title: "Corrupted Driver Files",
      description: "Driver file corruption can occur due to several causes: incomplete driver installation interrupted by a power failure, disk errors writing driver files to storage, malware that intentionally modifies driver binaries, or disk sectors that develop read errors after the driver was written to them. A corrupted driver may fail to load at all — or it may load but produce incorrect behavior due to modified code or data. Operating systems with protected system directories and driver signature enforcement can detect some forms of corruption, but hardware-level data corruption can be difficult to detect until the corrupted driver is executed. Reinstalling the driver from a known good source resolves most corruption issues.",
      icon: <AlertCircle className="h-6 w-6 text-blue-600" />
    },
    {
      title: "Missing Drivers After OS Install",
      description: "After installing a new operating system, certain hardware components may not be recognized or may function only with basic generic drivers that lack the device's full feature set. This happens most often for newer or less common hardware that wasn't included in the operating system's built-in driver library at release time. Without the correct driver, a graphics card might run at low resolution, a network adapter might not connect at full speed, or an audio device might produce distorted sound or no sound at all. In most cases, downloading and installing the appropriate driver from the hardware manufacturer immediately after OS installation resolves these issues completely.",
      icon: <Unlock className="h-6 w-6 text-blue-600" />
    },
    {
      title: "Incompatible Drivers",
      description: "Incompatible drivers occur when a driver designed for one version of an operating system or hardware model is used with a different version. Installing a 32-bit driver on a 64-bit OS, for example, will almost always fail immediately, but subtler incompatibilities — like a driver written for Windows 10 used on Windows 11 — might appear to work at first but cause instability, crashes, or broken functionality under specific workloads. Hardware vendors certify driver versions for specific OS releases, and using a certified driver is the best way to avoid these problems. Windows often blocks known incompatible drivers from loading entirely to protect system stability.",
      icon: <Settings className="h-6 w-6 text-blue-600" />
    },
    {
      title: "Signed vs Unsigned Drivers",
      description: "Driver signing is a verification mechanism that uses digital certificates to confirm that a driver package has been tested and certified by its developer, and that the driver files haven't been altered since they were signed. On modern operating systems, unsigned drivers are either blocked entirely or require special steps to install, because an unsigned driver could be modified malware or contain unstable code. While unsigned drivers from trusted sources can sometimes be used for testing or legacy hardware, they introduce significant security and stability risks. Always prefer signed drivers from the hardware manufacturer or OS vendor whenever possible.",
      icon: <ShieldAlert className="h-6 w-6 text-blue-600" />
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-600">
            Troubleshooting
          </span>
          <h2 className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
            Common Driver-Related Problems
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-slate-600">
            Understanding these common driver issues helps in diagnosing and resolving
            hardware and software problems.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-sky-100 mb-4">
                {problem.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{problem.title}</h3>
              <p className="text-sm text-slate-600 leading-7">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CommonDriverProblems;
