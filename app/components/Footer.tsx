import Link from "next/link";
import { Printer } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-sky-100 bg-slate-50">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-200/40 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-sky-200/40 blur-[120px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        {/* Top */}
        <div className="grid gap-8 sm:gap-10 lg:gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr]">
          
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4 sm:mb-5 flex items-center gap-2 sm:gap-3">
              <div className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl sm:rounded-2xl bg-linear-to-br from-blue-600 to-sky-500 shadow-lg shadow-blue-200/40 shrink-0">
                <Printer className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </div>

              <span className="text-lg sm:text-2xl font-bold text-slate-900">
                DriverWise
              </span>
            </div>

            <p className="max-w-sm text-xs sm:text-sm leading-7 sm:leading-8 text-slate-600">
              Your trusted resource for understanding printer drivers,
              troubleshooting issues, and finding clear answers without
              technical complexity.
            </p>
          </div>

          {/* Site Links */}
          <div>
            <h3 className="mb-3 sm:mb-5 text-xs font-semibold uppercase tracking-wider text-slate-900">
              Site Links
            </h3>

            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-slate-600">
              <Link href="/" className="block hover:text-slate-900 transition">
                Home
              </Link>
              <Link href="/about" className="block hover:text-slate-900 transition">
                About
              </Link>
              <Link href="/blog" className="block hover:text-slate-900 transition">
                Blog
              </Link>
              <Link href="/knowledge" className="block hover:text-slate-900 transition">
                Knowledge
              </Link>
              <Link href="/contact" className="block hover:text-slate-900 transition">
                Contact
              </Link>
              <Link href="/sitemap" className="block hover:text-slate-900 transition">
                Sitemap
              </Link>
            </div>
          </div>

          {/* Driver Categories */}
          <div>
            <h3 className="mb-3 sm:mb-5 text-xs font-semibold uppercase tracking-wider text-slate-900">
              Driver Overviews
            </h3>

            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-slate-600">
              <Link href="/drivers" className="block hover:text-slate-900 transition">
                All Device Drivers
              </Link>
              <Link href="/drivers/printer-drivers" className="block hover:text-slate-900 transition">
                Printer Drivers
              </Link>
              <Link href="/drivers/scanner-drivers" className="block hover:text-slate-900 transition">
                Scanner Drivers
              </Link>
              <Link href="/drivers/graphics-drivers" className="block hover:text-slate-900 transition">
                Graphics Drivers
              </Link>
              <Link href="/drivers/audio-drivers" className="block hover:text-slate-900 transition">
                Audio Drivers
              </Link>
              <Link href="/drivers/network-drivers" className="block hover:text-slate-900 transition">
                Wi-Fi & Network
              </Link>
              <Link href="/drivers/bluetooth-drivers" className="block hover:text-slate-900 transition">
                Bluetooth Drivers
              </Link>
              <Link href="/drivers/usb-drivers" className="block hover:text-slate-900 transition">
                USB Drivers
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-3 sm:mb-5 text-xs font-semibold uppercase tracking-wider text-slate-900">
              Legal
            </h3>

            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-slate-600">
              <Link href="/privacy-policy" className="block hover:text-slate-900 transition">
                Privacy Policy
              </Link>
              <Link href="/terms-of-use" className="block hover:text-slate-900 transition">
                Terms of Use
              </Link>
              <Link href="/disclaimer" className="block hover:text-slate-900 transition">
                Disclaimer
              </Link>
              <Link href="/cookie-policy" className="block hover:text-slate-900 transition">
                Cookie Policy
              </Link>
              <Link href="/advertising-disclosure" className="block hover:text-slate-900 transition">
                Advertising Disclosure
              </Link>
              <Link href="/accessibility" className="block hover:text-slate-900 transition">
                Accessibility
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="mb-3 sm:mb-5 text-xs font-semibold uppercase tracking-wider text-slate-900">
              Get In Touch
            </h3>

            <p className="mb-4 sm:mb-6 text-xs sm:text-sm text-slate-600">
              Have a question or topic suggestion? We would love to hear from you.
            </p>

            <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-slate-600">
              <div>
                <p className="mb-1 text-xs uppercase tracking-wider text-slate-400">
                  Email
                </p>
                <p className="font-medium text-slate-900">
                  hello@driverwise.com
                </p>
              </div>

              <div>
                <p className="mb-1 text-xs uppercase tracking-wider text-slate-400">
                  Address
                </p>
                <p className="text-slate-600">United States</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 sm:my-10 h-px bg-slate-200" />

        {/* Disclaimer */}
        <div className="rounded-xl sm:rounded-2xl lg:rounded-3xl border border-slate-200 bg-white p-4 sm:p-6 shadow-sm">
          <p className="text-xs sm:text-sm leading-6 sm:leading-7 text-slate-600">
            <span className="font-semibold text-slate-900">Disclaimer:</span>{" "}
            DriverWise is an independent educational resource designed to help
            users understand printer drivers, setup procedures, compatibility,
            and troubleshooting methods. Content is provided for informational
            purposes only and does not represent any printer manufacturer,
            hardware vendor, or software publisher.
          </p>
        </div>

        {/* Bottom */}
        <div className="mt-8 sm:mt-10 flex flex-col items-center justify-between gap-4 sm:gap-5 border-t border-slate-200 pt-6 sm:pt-8 text-xs sm:text-sm text-slate-600 lg:flex-row">
          <p>© {currentYear} DriverWise. All rights reserved.</p>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-600">
            <Link href="/privacy-policy" className="hover:text-slate-900 transition">Privacy Policy</Link>
            <Link href="/terms-of-use" className="hover:text-slate-900 transition">Terms</Link>
            <Link href="/disclaimer" className="hover:text-slate-900 transition">Disclaimer</Link>
            <Link href="/cookie-policy" className="hover:text-slate-900 transition">Cookies</Link>
            <Link href="/advertising-disclosure" className="hover:text-slate-900 transition">Advertising Disclosure</Link>
            <Link href="/accessibility" className="hover:text-slate-900 transition">Accessibility</Link>
            <Link href="/sitemap" className="hover:text-slate-900 transition">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}