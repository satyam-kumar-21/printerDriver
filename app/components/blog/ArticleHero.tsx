import Link from "next/link";
import {
  ChevronRight,
  BookOpen,
  Calendar,
  Clock,
  FileText,
  ShieldCheck,
} from "lucide-react";

type ArticleHeroProps = {
  category: string;
  title: string;
  excerpt: string;
  published: string;
  readTime: string;
};

export default function ArticleHero({
  category,
  title,
  excerpt,
  published,
  readTime,
}: ArticleHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-white py-16 sm:py-20 lg:py-28">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-[-10%] top-[-10%] h-96 w-96 rounded-full bg-blue-200/40 blur-[120px]" />
        <div className="absolute right-[-10%] top-[10%] h-96 w-96 rounded-full bg-sky-200/30 blur-[120px]" />

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

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-[1.2fr_0.8fr]">
          {/* Left */}
          <div>
            {/* Breadcrumb */}
            <div className="mb-6 flex items-center gap-2 text-sm text-slate-500">
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>

              <ChevronRight className="h-4 w-4" />

              <Link href="/blog" className="hover:text-blue-600">
                Blog
              </Link>

              <ChevronRight className="h-4 w-4" />

              <span className="font-medium text-slate-700">
                {category}
              </span>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-blue-500" />

              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                {category} Article
              </span>
            </div>

            {/* Title */}
            <h1 className="mt-6 max-w-4xl text-3xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl xl:text-6xl">
              {title}
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              {excerpt}
            </p>

            {/* Meta */}
            <div className="mt-10 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3">
                <Calendar className="h-4 w-4 text-blue-600" />

                <span className="text-sm font-medium text-slate-700">
                  {published}
                </span>
              </div>

              <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3">
                <Clock className="h-4 w-4 text-blue-600" />

                <span className="text-sm font-medium text-slate-700">
                  {readTime}
                </span>
              </div>

              <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3">
                <FileText className="h-4 w-4 text-blue-600" />

                <span className="text-sm font-medium text-slate-700">
                  Editorial Article
                </span>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4">
                  <BookOpen className="mt-0.5 h-5 w-5 text-blue-600" />

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Plain-English Reading
                    </h3>

                    <p className="mt-1 text-sm text-slate-600">
                      Technical concepts explained clearly without
                      unnecessary jargon.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4">
                  <ShieldCheck className="mt-0.5 h-5 w-5 text-blue-600" />

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Practical Knowledge
                    </h3>

                    <p className="mt-1 text-sm text-slate-600">
                      Understand how drivers work in the real world and
                      what actually matters.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4">
                  <FileText className="mt-0.5 h-5 w-5 text-blue-600" />

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      DriverWise Editorial
                    </h3>

                    <p className="mt-1 text-sm text-slate-600">
                      Researched and written to help everyday users build
                      a better understanding of their devices.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-gradient-to-r from-blue-600 to-sky-500 p-5 text-white">
                <p className="text-sm text-blue-100">
                  Reading Time
                </p>

                <p className="mt-1 text-2xl font-bold">
                  {readTime}
                </p>
              </div>
            </div>
          </div>
          {/* End Right */}
        </div>
      </div>
    </section>
  );
}