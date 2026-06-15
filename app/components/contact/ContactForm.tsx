import React from "react";
import { Send } from "lucide-react";

function ContactForm() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          
          {/* FORM */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
              Send us a message
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Share your question, topic idea, or feedback below.
            </p>

            <form className="mt-6 space-y-5">
              {/* Name + Email */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Your name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>

              {/* Topic */}
              <div>
                <label className="text-sm font-medium text-slate-700">
                  What's this about?
                </label>
                <select className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100">
                  <option>A question about a driver topic</option>
                  <option>Suggestion for a new article</option>
                  <option>Something is unclear</option>
                  <option>General feedback</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="text-sm font-medium text-slate-700">
                  Your message
                </label>
                <textarea
                  rows={6}
                  placeholder="Write your message here..."
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 text-sm font-medium text-white shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              >
                Send message
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <p className="text-xs leading-relaxed text-slate-500">
                We aim to reply within 2–3 working days. No live
                troubleshooting, but we read every message carefully.
              </p>
            </form>
          </div>

          {/* INFO PANEL */}
          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-sky-50 via-white to-white p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-slate-900">
              Reach us directly
            </h3>

            <div className="mt-6 space-y-5 text-sm">
              <div>
                <p className="font-medium text-slate-900">Email</p>
                <p className="text-slate-600">hello@driverwise.com</p>
              </div>

              <div>
                <p className="font-medium text-slate-900">Phone</p>
                <p className="text-slate-600">+1 (888) 555-0100</p>
              </div>

              <div>
                <p className="font-medium text-slate-900">Address</p>
                <p className="leading-6 text-slate-600">
                  100 Example Ave, Suite 200
                  <br />
                  Wilmington, DE 19801
                  <br />
                  United States
                </p>
              </div>

              <div className="border-t border-slate-200 pt-4">
                <p className="font-medium text-slate-900">Response time</p>
                <p className="text-slate-600">Within 2–3 working days</p>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-blue-100 bg-white p-4 shadow-sm">
              <p className="text-xs leading-relaxed text-slate-500">
                Tip: Include your device model, operating system version,
                driver name, and any error messages for more accurate
                guidance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;