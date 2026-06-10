import React from 'react'

function CookiePolicyContent() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-14 sm:py-18 lg:py-24">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-[-10%] top-[-10%] h-96 w-96 rounded-full bg-blue-200/30 blur-[120px]" />
        <div className="absolute right-[-10%] bottom-0 h-96 w-96 rounded-full bg-sky-200/30 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-slate-700">

        {/* Last Updated */}
        <p className="text-sm text-slate-500 mb-8">
          Last updated: May 21, 2026
        </p>

        {/* Intro */}
        <p className="text-base sm:text-lg leading-8 mb-12">
          This Cookie Policy explains how DriverWise uses cookies and similar technologies,
          what they are, why we use them, and how you can control them.
        </p>

        {/* 1 */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            1. Types of Cookies We Use
          </h2>

          <p className="font-semibold text-slate-800">Essential cookies — always active</p>
          <p className="leading-7 text-slate-600 mb-4">
            Required for security, session management, and core functionality.
            These cannot be disabled.
          </p>

          <p className="font-semibold text-slate-800">Analytics cookies — optional</p>
          <p className="leading-7 text-slate-600 mb-4">
            Help us understand usage patterns such as page views, navigation paths,
            session duration, and device type.
          </p>

          <p className="font-semibold text-slate-800">Preference cookies — optional</p>
          <p className="leading-7 text-slate-600 mb-4">
            Store settings like display preferences for a more personalised experience.
          </p>

          <p className="font-semibold text-slate-800">Advertising and tracking — optional</p>
          <p className="leading-7 text-slate-600">
            Used to show relevant ads and measure campaign performance via partners.
          </p>
        </div>

        {/* 2 */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            2. What Are Cookies?
          </h2>
          <p className="leading-7 text-slate-600">
            Cookies are small text files stored on your device. They may be session cookies
            (deleted when you close your browser) or persistent cookies (stored for a set time),
            and may be first-party or third-party.
          </p>
        </div>

        {/* 3 */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            3. Managing Cookies
          </h2>
          <p className="leading-7 text-slate-600">
            You can view, manage, or delete cookies through your browser settings.
            If your browser sends a Global Privacy Control signal, we treat it as an opt-out request
            for interest-based advertising where applicable.
          </p>
        </div>

        {/* 4 */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            4. Cookie Consent
          </h2>
          <p className="leading-7 text-slate-600">
            Essential cookies are always active. Optional cookies require consent where required by law,
            and you may withdraw consent at any time.
          </p>
        </div>

        {/* 5 */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            5. Retention Periods
          </h2>
          <p className="leading-7 text-slate-600">
            Essential cookies: session or up to 1 year. Analytics cookies: typically up to 14 months.
            Preference cookies: up to 12 months. Advertising cookies: 30–90 days depending on provider.
          </p>
        </div>

        {/* 6 */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            6. Updates to This Policy
          </h2>
          <p className="leading-7 text-slate-600">
            We may update this Cookie Policy to reflect changes in technology, law, or practices.
            The “last updated” date shows the latest revision.
          </p>
        </div>

        {/* 7 */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            7. Contact
          </h2>

          <div className="leading-7 text-slate-600 space-y-1">
            <p className="font-semibold text-slate-900">DriverWise Media LLC</p>
            <p>Email: hello@driverwise.com (Subject: Cookie Policy Inquiry)</p>
            <p>Phone: +1 (888) 555-0100</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default CookiePolicyContent