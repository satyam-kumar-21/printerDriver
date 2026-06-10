import React from 'react'

function DisclaimerContent() {
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
          Please read this disclaimer carefully. It explains important limitations of the information published on DriverWise,
          our relationship with third-party providers, and the extent of our liability.
        </p>

        {/* 1 */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            1. General Disclaimer
          </h2>
          <p className="leading-7 text-slate-600">
            DriverWise (“we”, “us”, “our”) is an independent educational website operated by DriverWise Media LLC.
            We are not affiliated with any hardware, software, or OS vendor unless explicitly stated.
            All content is for informational purposes only and provided without warranties of any kind.
          </p>
        </div>

        {/* 2 */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            2. Information Accuracy
          </h2>
          <p className="leading-7 text-slate-600">
            Information may be based on publicly available sources and may not always reflect the latest updates.
            Always verify details with official providers before acting.
          </p>
        </div>

        {/* 3 */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            3. No Endorsement
          </h2>
          <p className="leading-7 text-slate-600">
            Mentioning third-party software does not mean we endorse or guarantee it.
            We are not responsible for performance issues, bugs, or security risks.
          </p>
        </div>

        {/* 4 */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            4. Third-Party Links
          </h2>
          <p className="leading-7 text-slate-600">
            External links lead to third-party sites governed by their own policies.
            We have no control over their content or availability.
          </p>
        </div>

        {/* 5 */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            5. Affiliate Relationships
          </h2>
          <p className="leading-7 text-slate-600">
            Some links may be affiliate links, meaning we may earn a commission at no extra cost to you.
            This does not influence our editorial content.
          </p>
        </div>

        {/* 6 */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            6. No Professional Advice
          </h2>
          <p className="leading-7 text-slate-600">
            Content is for general educational purposes only and does not constitute professional advice.
            For critical issues, consult a qualified technician or official documentation.
          </p>
        </div>

        {/* 7 */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            7. Limitation of Liability
          </h2>
          <p className="leading-7 text-slate-600">
            We are not liable for any damages arising from use of the site or reliance on its content.
            Use of the Service is at your own risk.
          </p>
        </div>

        {/* 8 */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            8. Changes to This Disclaimer
          </h2>
          <p className="leading-7 text-slate-600">
            We may update this disclaimer at any time. Continued use of the site means acceptance of changes.
          </p>
        </div>

        {/* 9 */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            9. Contact
          </h2>

          <div className="leading-7 text-slate-600 space-y-1">
            <p className="font-semibold text-slate-900">DriverWise Media LLC</p>
            <p>100 Example Ave, Suite 200, Wilmington, DE 19801, United States</p>
            <p>Email: hello@driverwise.com</p>
            <p>Phone: +1 (888) 555-0100</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default DisclaimerContent