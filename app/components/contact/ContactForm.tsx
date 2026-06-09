import React from "react";
import { Send } from "lucide-react";

function ContactForm() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          
          {/* FORM */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Send us a message
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Share your question, topic idea, or feedback below.
            </p>

            <form className="mt-6 space-y-5">
              
              {/* Name + Email Row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Your name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>

              {/* Topic */}
              <div>
                <label className="text-sm font-medium text-slate-700">
                  What's this about?
                </label>
                <select className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100">
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
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 text-sm font-medium text-white transition hover:scale-[1.02]"
              >
                Send message
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <p className="text-xs text-slate-500">
                We aim to reply within 2–3 working days. No live troubleshooting, but we read everything.
              </p>
            </form>
          </div>

          {/* INFO PANEL */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
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
                <p className="text-slate-600 leading-6">
                  100 Example Ave, Suite 200
                  <br />
                  Wilmington, DE 19801
                  <br />
                  United States
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <p className="font-medium text-slate-900">Response time</p>
                <p className="text-slate-600">Within 2–3 working days</p>
              </div>
            </div>

            <div className="mt-6 rounded-xl bg-white border border-slate-200 p-4">
              <p className="text-xs text-slate-500">
                Tip: Include device + error details for better answers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;