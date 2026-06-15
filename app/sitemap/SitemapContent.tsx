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
           
            <SitemapCard title="Drivers" href="/drivers" desc="Full category map" />
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
            <SitemapCard
              title="Kernel-Mode Drivers"
              href="/drivers/kernel-mode-drivers"
              desc="Core system and hardware access"
            />

            <SitemapCard
              title="User-Mode Drivers"
              href="/drivers/usb-mode-drivers"
              desc="Safer isolated driver environment"
            />

            <SitemapCard
              title="Printer & Output Drivers"
              href="/drivers/printer-drivers"
              desc="Printing and output devices"
            />

            <SitemapCard
              title="Graphics & Display Drivers"
              href="/drivers/graphics-drivers"
              desc="GPU and display management"
            />

            <SitemapCard
              title="Audio Drivers"
              href="/drivers/audio-drivers"
              desc="Sound and microphone support"
            />

            <SitemapCard
              title="Network Drivers"
              href="/drivers/network-drivers"
              desc="Wi-Fi and Ethernet connectivity"
            />

            <SitemapCard
              title="USB & Peripheral Drivers"
              href="/drivers/usb-drivers"
              desc="USB devices and peripherals"
            />

            <SitemapCard
              title="Storage Drivers"
              href="/drivers/storage-drivers"
              desc="SSD, HDD and storage controllers"
            />

            <SitemapCard
              title="Input Device Drivers"
              href="/drivers/input-devices"
              desc="Keyboard, mouse and touch input"
            />

            <SitemapCard
              title="Chipset Drivers"
              href="/drivers/chipset-drivers"
              desc="Motherboard and chipset communication"
            />

            <SitemapCard
              title="Bluetooth Drivers"
              href="/drivers/bluetooth-drivers"
              desc="Wireless device connectivity"
            />

            <SitemapCard
              title="Virtual Device Drivers"
              href="/drivers/virtual-device-drivers"
              desc="Virtual machines and software devices"
            />
          </SitemapGrid>
        </Section>
        <br />
        {/* SECTION 3 */}
        <Section title="Articles">
          <SitemapGrid>
            <SitemapCard
              title="Inside a Graphics Driver Update"
              href="/blog/inside-a-graphics-driver-update"
              desc="Graphics · 9 min"
            />

            <SitemapCard
              title="The Hidden World of Audio Drivers"
              href="/blog/the-hidden-world-of-audio-drivers"
              desc="Audio · 7 min"
            />

            <SitemapCard
              title="Why Your Wi-Fi Is Slower"
              href="/blog/why-your-wifi-is-slower"
              desc="Networking · 6 min"
            />

            <SitemapCard
              title="Plug-and-Play, Demystified"
              href="/blog/plug-and-play-demystified"
              desc="USB · 7 min"
            />

            <SitemapCard
              title="The Quiet Importance of the Chipset Driver"
              href="/blog/the-quiet-chipset-driver"
              desc="System · 8 min"
            />

            <SitemapCard
              title="Kernel-Mode vs User-Mode"
              href="/blog/kernel-mode-vs-user-mode"
              desc="Architecture · 8 min"
            />

            <SitemapCard
              title="How to Update Drivers Safely"
              href="/blog/how-to-update-drivers-safely"
              desc="How-To · 7 min"
            />

            <SitemapCard
              title="Why Do Drivers Crash?"
              href="/blog/why-do-drivers-crash"
              desc="Troubleshooting · 6 min"
            />

            <SitemapCard
              title="SSD Drivers: Do You Need to Update Them?"
              href="/blog/ssd-drivers-what-you-need-to-know"
              desc="Storage · 5 min"
            />

            <SitemapCard
              title="Why Your Device Stopped Working After the Last Update"
              href="/blog/why-your-device-stopped-after-update"
              desc="Troubleshooting · 6 min"
            />

            <SitemapCard
              title="Driver Signing Explained"
              href="/blog/driver-signing-explained"
              desc="Security · 7 min"
            />

            <SitemapCard
              title="Virtual Drivers: What They Do"
              href="/blog/virtual-drivers-what-they-do"
              desc="Architecture · 7 min"
            />
          </SitemapGrid>
        </Section>
        <br />
        {/* SECTION 4 */}
        <Section title="Legal & Policies">
          <SitemapGrid>
            <SitemapCard
              title="Privacy Policy"
              href="/privacy-policy"
              desc="How we handle data"
            />

            <SitemapCard
              title="Terms of Use"
              href="/terms-of-use"
              desc="Rules of the site"
            />

            <SitemapCard
              title="Disclaimer"
              href="/disclaimer"
              desc="Educational use only"
            />

            <SitemapCard
              title="Cookie Policy"
              href="/cookie-policy"
              desc="Cookies and choices"
            />

            <SitemapCard
              title="Advertising Disclosure"
              href="/advertising-disclosure"
              desc="How the site is funded"
            />

            <SitemapCard
              title="Accessibility Statement"
              href="/accessibility"
              desc="Built for everyone"
            />
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