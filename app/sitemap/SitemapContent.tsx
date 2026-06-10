import React from 'react'
import Link from 'next/link'

function SitemapContent() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-14 sm:py-18 lg:py-24">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-[-10%] top-[-10%] h-96 w-96 rounded-full bg-blue-200/30 blur-[120px]" />
        <div className="absolute right-[-10%] bottom-0 h-96 w-96 rounded-full bg-sky-200/30 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 text-slate-700">

        {/* Title */}
        <div className="mb-14 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Sitemap
          </h1>
          <p className="mt-3 text-slate-600">
            Everything on this site, organized for quick access.
          </p> <br />
        </div>

        {/* SECTION 1 */}
        <Section title="Main Pages">
          <SitemapGrid>
            <SitemapCard title="Home" href="/" desc="Homepage" />
            <SitemapCard title="Start Here" href="/start-here" desc="Begin your journey" />
            <SitemapCard title="Device Drivers" href="/drivers" desc="Full category map" />
            <SitemapCard title="Knowledge Hub" href="/knowledge" desc="Troubleshooting guides" />
            <SitemapCard title="Blog" href="/blog" desc="Articles & explainers" />
            <SitemapCard title="About Us" href="/about" desc="Who we are" />
            <SitemapCard title="Contact" href="/contact" desc="Get in touch" />
          </SitemapGrid>
        </Section> 
<br />
        {/* SECTION 2 */}
        <Section title="Driver Overviews">
          <SitemapGrid>
            <SitemapCard title="Printer Drivers" href="/drivers/printer" desc="Documents to paper" />
            <SitemapCard title="Scanner Drivers" href="/drivers/scanner" desc="Paper to pixels" />
            <SitemapCard title="Graphics Drivers" href="/drivers/graphics" desc="GPU and display" />
            <SitemapCard title="Audio Drivers" href="/drivers/audio" desc="Sound and microphones" />
            <SitemapCard title="Wi-Fi & Network Drivers" href="/drivers/network" desc="Wireless & Ethernet" />
            <SitemapCard title="Bluetooth Drivers" href="/drivers/bluetooth" desc="Pairing & profiles" />
            <SitemapCard title="USB Drivers" href="/drivers/usb" desc="Plug-and-play" />
          </SitemapGrid>
        </Section>
<br />
        {/* SECTION 3 */}
        <Section title="Articles">
          <SitemapGrid>
            <SitemapCard title="What Is a Driver, Really?" href="/blog/what-is-a-driver" desc="Beginner · 5 min" />
            <SitemapCard title="Inside a Graphics Driver Update" href="/blog/graphics-driver-update" desc="Graphics · 9 min" />
            <SitemapCard title="The Hidden World of Audio Drivers" href="/blog/audio-drivers" desc="Audio · 7 min" />
            <SitemapCard title="Why Your Wi-Fi Is Slower" href="/blog/slow-wifi" desc="Networking · 6 min" />
            <SitemapCard title="Plug-and-Play, Demystified" href="/blog/plug-and-play" desc="USB · 7 min" />
            <SitemapCard title="The Quiet Chipset Driver" href="/blog/chipset-driver" desc="System · 8 min" />
            <SitemapCard title="Kernel-Mode vs User-Mode" href="/blog/kernel-vs-user-mode" desc="Architecture · 8 min" />
          </SitemapGrid>
        </Section>
<br />
        {/* SECTION 4 */}
        <Section title="Legal & Policies">
          <SitemapGrid>
            <SitemapCard title="Privacy Policy" href="/legal/privacy-policy" desc="How we handle data" />
            <SitemapCard title="Cookie Policy" href="/legal/cookie-policy" desc="Cookies and choices" />
            <SitemapCard title="Advertising Disclosure" href="/legal/advertising-disclosure" desc="How the site is funded" />
            <SitemapCard title="Disclaimer" href="/legal/disclaimer" desc="Educational use only" />
            <SitemapCard title="Terms of Use" href="/legal/terms" desc="Rules of the site" />
            <SitemapCard title="Accessibility Statement" href="/legal/accessibility" desc="Built for everyone" />
          </SitemapGrid>
        </Section>

      </div>
    </section>
  )
}

/* SECTION WRAPPER (this is the key improvement) */
function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="mb-14 rounded-3xl border border-slate-200 bg-white/60 backdrop-blur-sm p-6 sm:p-8 shadow-sm">
      <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-6">
        {title}
      </h2>
      {children}
    </div>
  )
}

/* GRID */
function SitemapGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  )
}

/* CARD */
function SitemapCard({
  title,
  href,
  desc,
}: {
  title: string
  href: string
  desc: string
}) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
    >
      <h3 className="font-semibold text-blue-700 group-hover:text-blue-600 transition">
        {title}
      </h3>
      <p className="mt-1 text-sm text-slate-500">{desc}</p>
    </Link>
  )
}

export default SitemapContent