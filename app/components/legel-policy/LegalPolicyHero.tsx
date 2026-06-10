import Link from "next/link"
import { ShieldCheck } from "lucide-react"

interface LegalPolicyHeroProps {
  title: string
  description: string
  note?: string
  typeLabel?: string
}

export default function LegalPolicyHero({
  title,
  description,
  note,
  typeLabel = "Legal",
}: LegalPolicyHeroProps) {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-sky-50 via-white to-white py-14 sm:py-18 lg:py-24">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-[-10%] top-[-10%] h-96 w-96 rounded-full bg-blue-200/40 blur-[120px]" />
        <div className="absolute right-[-10%] bottom-0 h-96 w-96 rounded-full bg-sky-200/30 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #0f172a 1px, transparent 1px),
              linear-gradient(to bottom, #0f172a 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
        
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs sm:text-sm text-slate-500">
          <Link href="/" className="hover:text-slate-700 transition">
            Home
          </Link>
          <span>/</span>
          <Link href="/legal" className="hover:text-slate-700 transition">
            Legal
          </Link>
          <span>/</span>
          <span className="text-slate-700 font-medium">{title}</span>
        </div>

        {/* Content */}
        <div className="max-w-3xl">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-3 sm:px-4 py-1.5 sm:py-2 shadow-sm">
            <ShieldCheck className="h-4 w-4 text-blue-600" />
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              {typeLabel}
            </span>
          </div>

          {/* Title */}
          <h1 className="mt-5 text-2xl font-bold tracking-tight text-blue-600 sm:text-3xl lg:text-4xl xl:text-5xl">
            {title}
          </h1>

          {/* Description */}
          <p className="mt-4 text-sm sm:text-base lg:text-lg leading-7 sm:leading-8 text-slate-600">
            {description}
          </p>

          {/* Optional Note */}
          {note && (
            <p className="mt-3 text-sm sm:text-base text-slate-500">
              {note}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}