import React from 'react'

function AdvertisingDisclosureContent() {
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
          DriverWise is a free educational resource. To keep it free, the site may display advertising
          and participate in affiliate programmes. This page explains how that works and the standards we follow.
        </p>

        {/* 1 */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            1. How This Site Is Funded
          </h2>
          <p className="leading-7 text-slate-600">
            DriverWise may be supported by third-party advertising networks and affiliate links.
            We do not sell software, subscriptions, or services, and we never charge readers.
          </p>
        </div>

        {/* 2 */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            2. Ads Are Always Separate From Content
          </h2>
          <p className="leading-7 text-slate-600">
            All advertisements are served by third-party networks and are clearly distinct from editorial content.
            Sponsored placements, if used, will always be labelled. Ads never influence our writing or recommendations.
          </p>
        </div>

        {/* 3 */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            3. No Deceptive Elements — Ever
          </h2>
          <p className="leading-7 text-slate-600">
            We strictly prohibit misleading design patterns such as fake download buttons,
            system warnings, or deceptive UI elements. We do not host downloads or impersonate system alerts.
          </p>
        </div>

        {/* 4 */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            4. Affiliate Links
          </h2>
          <p className="leading-7 text-slate-600">
            Some links may be affiliate links, meaning we may earn a commission at no extra cost to you.
            These relationships never influence editorial content or recommendations.
          </p>
        </div>

        {/* 5 */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            5. Interest-Based Advertising and Your Choices
          </h2>
          <p className="leading-7 text-slate-600">
            Advertising partners may use cookies to show relevant ads. You can opt out via cookie settings,
            browser controls, or network opt-out tools. We also respect Global Privacy Control signals.
          </p>
        </div>

        {/* 6 */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            6. Advertiser Responsibility
          </h2>
          <p className="leading-7 text-slate-600">
            Third-party ads are the responsibility of the advertisers themselves.
            We do not endorse advertised products and are not responsible for external transactions.
          </p>
        </div>

        {/* 7 */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            7. Contact
          </h2>

          <div className="leading-7 text-slate-600 space-y-1">
            <p className="font-semibold text-slate-900">DriverWise Media LLC</p>
            <p>Email: hello@driverwise.com (Subject: Advertising Inquiry)</p>
            <p>100 Example Ave, Suite 200, Wilmington, DE 19801, United States</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default AdvertisingDisclosureContent