import React from 'react'

function PrivacyPolicyContent() {
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
          <span className="font-semibold text-slate-900">DriverWise</span>, owned and operated by DriverWise Media LLC,
          respects your privacy. This policy explains what we collect, why we collect it, and the choices you have.
        </p>

        {/* 1 */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            1. Information We Collect
          </h2>

          <p className="font-semibold text-slate-800">Non-personal data</p>
          <p className="leading-7 text-slate-600 mb-4">
            We collect browser type, operating system, IP address, pages visited,
            time spent, and referring source to understand usage.
          </p>

          <p className="font-semibold text-slate-800">Cookies and tracking technologies</p>
          <p className="leading-7 text-slate-600">
            We use cookies to keep the site working, measure traffic, and remember preferences.
            You can control cookies through your browser settings.
          </p>
        </div>

        {/* 2 */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            2. How We Use Your Information
          </h2>
          <p className="leading-7 text-slate-600">
            We use data to operate the site, improve content, analyse usage trends,
            optimise layout, and protect against misuse. We do not sell personal data.
          </p>
        </div>

        {/* 3 */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            3. Legal Basis for Processing
          </h2>
          <p className="leading-7 text-slate-600">
            Legitimate interest, user consent for optional cookies/ads, and legal obligations where required.
          </p>
        </div>

        {/* 4 */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            4. Advertising and Third-Party Services
          </h2>
          <p className="leading-7 text-slate-600">
            Third-party ads may use cookies for measurement and personalisation.
            Ads are always separate from editorial content.
          </p>
        </div>

        {/* 5 */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            5. Third-Party Links
          </h2>
          <p className="leading-7 text-slate-600">
            External websites have their own privacy policies. We are not responsible for their content or practices.
          </p>
        </div>

        {/* 6 */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            6. Data Sharing
          </h2>
          <p className="leading-7 text-slate-600">
            We may share anonymised analytics data or comply with legal requests.
            We do not sell or rent personal data.
          </p>
        </div>

        {/* 7 */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            7. Data Security
          </h2>
          <p className="leading-7 text-slate-600">
            We use HTTPS and standard security measures, but no system is fully secure.
          </p>
        </div>

        {/* 8 */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            8. Data Retention
          </h2>
          <p className="leading-7 text-slate-600">
            We keep data only as long as necessary, then delete or anonymise it.
          </p>
        </div>

        {/* 9 */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            9. Children's Privacy
          </h2>
          <p className="leading-7 text-slate-600">
            We do not knowingly collect data from children under 13. If detected, we remove it.
          </p>
        </div>

        {/* 10 */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            10. Global Privacy Control
          </h2>
          <p className="leading-7 text-slate-600">
            We respect browser GPC signals as opt-out requests where applicable.
          </p>
        </div>

        {/* 11 */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            11. Your Rights
          </h2>
          <p className="leading-7 text-slate-600">
            You may access, delete, or restrict your data depending on your region.
            Contact: hello@driverwise.com
          </p>
        </div>

        {/* 12 */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            12. Changes to This Policy
          </h2>
          <p className="leading-7 text-slate-600">
            We may update this policy. The last updated date reflects changes.
          </p>
        </div>

        {/* 13 */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            13. Contact
          </h2>

          <div className="leading-7 text-slate-600 space-y-1">
            <p className="font-semibold text-slate-900">DriverWise Media LLC</p>
            <p>100 Example Ave, Suite 200, Wilmington, DE 19801, USA</p>
            <p>Email: hello@driverwise.com</p>
            <p>Phone: +1 (888) 555-0100</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default PrivacyPolicyContent