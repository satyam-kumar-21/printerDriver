import React from 'react'

function AccessibilityStatementContent() {
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
          DriverWise is committed to digital accessibility for people of all abilities.
          This statement explains our standards, practices, and how you can report issues.
        </p>

        {/* 1 */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            1. Our Commitment
          </h2>
          <p className="leading-7 text-slate-600">
            DriverWise, operated by DriverWise Media LLC, ensures accessibility is a core requirement
            across all pages, not an optional feature.
          </p>
        </div>

        {/* 2 */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            2. Conformance Standard
          </h2>
          <p className="leading-7 text-slate-600">
            We aim to meet WCAG 2.1 Level AA standards, including readable structure, keyboard support,
            and sufficient colour contrast. Some Level AAA principles are also naturally achieved.
          </p>
        </div>

        {/* 3 */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            3. Measures We Take
          </h2>
          <p className="leading-7 text-slate-600">
            We use semantic HTML, keyboard navigation support, visible focus indicators, descriptive alt text,
            high contrast colours, scalable text, reduced-motion support, and plain-language writing.
          </p>
        </div>

        {/* 4 */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            4. Accessibility Features
          </h2>
          <p className="leading-7 text-slate-600">
            The site includes skip-to-content navigation, consistent layout across pages,
            and fully responsive design for all screen sizes without horizontal scrolling.
          </p>
        </div>

        {/* 5 */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            5. Known Limitations
          </h2>
          <p className="leading-7 text-slate-600">
            Some older content may not fully meet current accessibility standards.
            We continuously improve and update pages. Third-party embeds may also have limitations.
          </p>
        </div>

        {/* 6 */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            6. Third-Party Content
          </h2>
          <p className="leading-7 text-slate-600">
            This statement applies only to DriverWise content. External websites and third-party services
            are not under our control and may not meet the same accessibility standards.
          </p>
        </div>

        {/* 7 */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            7. How to Report an Issue
          </h2>
          <p className="leading-7 text-slate-600">
            If you experience an accessibility issue, include the page URL, description of the problem,
            your device/browser, and assistive technology used. We prioritise critical issues.
          </p>
        </div>

        {/* 8 */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            8. Contact
          </h2>

          <div className="leading-7 text-slate-600 space-y-1">
            <p className="font-semibold text-slate-900">DriverWise Media LLC</p>
            <p>Email: hello@driverwise.com (Subject: Accessibility Inquiry)</p>
            <p>Phone: +1 (888) 555-0100</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default AccessibilityStatementContent