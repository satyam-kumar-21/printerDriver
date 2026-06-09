import React from "react";
import Link from "next/link";
import { MessageCircle, Home, Send } from "lucide-react";

function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-white py-16 sm:py-20 lg:py-28">
      {/* Background Effects (MATCHES KNOWLEDGE HERO STYLE) */}
      <div className="absolute inset-0">
        <div className="absolute left-[-10%] top-[-10%] h-96 w-96 rounded-full bg-blue-200/40 blur-[120px]" />
        <div className="absolute right-[-10%] top-[10%] h-96 w-96 rounded-full bg-sky-200/30 blur-[120px]" />

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

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          
          {/* Left Content */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 shadow-sm shadow-slate-200/50">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Contact DriverWise
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-slate-900">
              Get in Touch
              <span className="block bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                We’re Here to Listen
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-sm sm:text-base lg:text-lg leading-7 text-slate-600">
              Have a question or a topic idea? We’d love to hear from you.
              DriverWise is an educational resource, so while we don’t offer one-to-one
              technical support, we actively welcome suggestions, feedback, and ideas
              from our readers.
            </p>

            {/* Links */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/"
                className="flex items-center gap-2 rounded-xl border border-blue-100 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                <Home className="h-4 w-4" />
                Home
              </Link>

              <Link
                href="/contact"
                className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-sm font-medium text-white transition hover:scale-105"
              >
                <MessageCircle className="h-4 w-4" />
                Contact
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <p className="mt-6 text-xs text-slate-500">
              We usually respond when it helps improve content or clarify topics for everyone.
            </p>
          </div>

          {/* Right Card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/40">
            <h3 className="text-lg font-semibold text-slate-900">
              What you can reach out about
            </h3>

            <div className="mt-5 space-y-3">
              {[
                "Driver topics you'd like explained",
                "Confusing errors or behaviors",
                "Suggestions for new guides",
                "General feedback on DriverWise",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl bg-gradient-to-r from-sky-50 to-blue-50 p-4">
              <p className="text-lg font-bold text-slate-900">
                No support tickets. No queues.
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Just feedback that helps improve the content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactHero;