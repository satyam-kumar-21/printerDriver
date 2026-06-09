import React from "react";
import Link from "next/link";

function AboutContent() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">

        {/* WHY WE EXIST */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Why we exist
          </h2>

          <p className="text-sm sm:text-base leading-7 text-slate-600">
            Most driver advice online falls into two camps: dense documentation written for engineers,
            or pushy "speed up your PC" pages trying to sell you something. We wanted a calm third option.
          </p>

          <p className="text-sm sm:text-base leading-7 text-slate-600">
            DriverWise explains what each kind of driver actually does, in plain English, and walks through
            the most common problems with patience instead of jargon. We don't host downloads, we don't run a
            help desk, and we don't take sponsorships from the companies we write about. That independence is
            the whole point — it's what lets us stay neutral and honest.
          </p>
        </div>

        {/* WHAT YOU'LL FIND */}
        <div className="mt-10 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            What you'll find here
          </h2>

          <ul className="space-y-3 text-sm sm:text-base text-slate-600 leading-7">
            <li>
              • Driver overviews for every major hardware family — graphics, audio, network, USB, system, and output devices.
            </li>
            <li>
              • A knowledge hub with calm, ordered fixes for the symptoms readers ask about most.
            </li>
            <li>
              • A friendly blog with short explainers about how your computer really works underneath.
            </li>
          </ul>
        </div>

        {/* WHAT WE ARE NOT */}
        <div className="mt-10 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            What we are not
          </h2>

          <p className="text-sm sm:text-base leading-7 text-slate-600">
            We are not affiliated with any hardware maker, software publisher, or operating-system vendor.
            We don't sell software, offer paid repairs, or provide one-to-one technical support. When you need
            to change something on your own machine, the safest source is always the official documentation
            from your device maker — and we'll always point you there.
          </p>
        </div>

        {/* TONE NOTE */}
        <div className="mt-10 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            A note on our tone
          </h2>

          <p className="text-sm sm:text-base leading-7 text-slate-600">
            Plain English, always. Friendly, never condescending. If a sentence here ever reads like it was
            written to impress rather than to help, we got it wrong — and we'd genuinely like to know.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 text-sm font-medium text-white transition hover:scale-[1.02]"
          >
            Get in touch
          </Link>

          <Link
            href="/drivers"
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            Browse drivers
          </Link>
        </div>

      </div>
    </section>
  );
}

export default AboutContent;