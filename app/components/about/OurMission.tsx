import React from "react";

function OurMission() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-sky-50 via-white to-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-[-10%] top-[-10%] h-96 w-96 rounded-full bg-blue-200/30 blur-[120px]" />
        <div className="absolute right-[-10%] bottom-0 h-96 w-96 rounded-full bg-sky-200/30 blur-[120px]" />
        
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #0f172a 1px, transparent 1px),
              linear-gradient(to bottom, #0f172a 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-5xl px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-600 shadow-sm">
            Our Mission
          </span>
          <h2 className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
            Making drivers accessible for everyone
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-4">
            <p className="text-sm sm:text-base leading-7 text-slate-600">
              Our mission is simple: to demystify device drivers so that anyone, regardless of technical background,
              can understand, troubleshoot, and maintain their hardware with confidence.
            </p>
            <p className="text-sm sm:text-base leading-7 text-slate-600">
              We believe that technology should feel approachable, not intimidating. That's why every guide we create
              prioritizes clarity, patience, and practicality over jargon or complexity.
            </p>
            <div className="mt-6 grid gap-4">
              {[
                { title: "Education First", desc: "We focus on understanding, not just quick fixes" },
                { title: "No Sponsorships", desc: "Our advice is always unbiased and independent" },
                { title: "Beginner-Friendly", desc: "We assume nothing, explain everything" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 shrink-0">
                    <span className="text-white font-bold">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{item.title}</h3>
                    <p className="text-sm text-slate-600 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/40">
            <div className="space-y-4">
              <div className="rounded-2xl bg-gradient-to-r from-blue-50 to-sky-50 p-5">
                <h3 className="font-semibold text-slate-900 text-lg">What drives us</h3>
                <p className="text-sm text-slate-600 mt-2">
                  We've all been there: staring at a confusing error message, not knowing where to turn.
                  DriverWise exists to be the calm, helpful resource we wish we had in those moments.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h4 className="font-semibold text-slate-900">Our Promise</h4>
                <ul className="mt-2 space-y-2 text-sm text-slate-600">
                  <li>• Always plain language, no jargon</li>
                  <li>• No hidden agendas or sales pitches</li>
                  <li>• Safety first, always</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurMission;
