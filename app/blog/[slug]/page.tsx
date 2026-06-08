import { notFound } from "next/navigation";
import Link from "next/link";
import {
  articles,
  type Article,
  type ArticleSection,
} from "../../../data/articles";
import ArticleHero from "@/app/components/blog/ArticleHero";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ArticlePage({
  params,
}: Props) {
  const { slug } = await params;

  const article = articles.find(
    (item: Article) => item.slug === slug
  );

  if (!article) {
    notFound();
  }

  const related = articles
    .filter((item: Article) => item.slug !== slug)
    .slice(0, 3);

  return (
    <>
      <ArticleHero
        category={article.category}
        title={article.title}
        excerpt={article.excerpt}
        published={article.published}
        readTime={article.readTime}
      />

      <section className="relative overflow-hidden bg-linear-to-br from-sky-50 via-white to-white pb-20">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute left-[-10%] top-0 h-96 w-96 rounded-full bg-blue-200/30 blur-[140px]" />
          <div className="absolute right-[-10%] bottom-0 h-96 w-96 rounded-full bg-sky-200/30 blur-[140px]" />

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

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
          {/* Article Card */}
          <div className="overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-xl shadow-slate-200/40">
            {/* Banner */}
            <div className="relative h-72 overflow-hidden bg-linear-to-br from-blue-600 via-sky-500 to-cyan-500 sm:h-96">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.25),transparent_40%)]" />

              <div className="absolute bottom-8 left-8">
                <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                  {article.category}
                </span>

                <h2 className="mt-5 max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                  {article.title}
                </h2>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 sm:p-12 lg:p-16">
              <div className="mb-12 rounded-3xl border border-blue-100 bg-blue-50/70 p-6">
                <p className="text-lg leading-8 text-slate-700">
                  {article.excerpt}
                </p>
              </div>

              <div className="space-y-14">
                {article.content.map(
                  (section: ArticleSection) => (
                    <div key={section.heading}>
                      <h2 className="mb-5 text-2xl font-bold text-slate-900 sm:text-3xl">
                        {section.heading}
                      </h2>

                      <p className="text-lg leading-9 text-slate-600">
                        {section.body}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Keep Reading */}
          <div className="mt-20">
            <div className="mb-10 text-center">
              <span className="inline-flex rounded-full border border-sky-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 shadow-sm">
                Keep Reading
              </span>

              <h3 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl">
                More Driver Knowledge
              </h3>

              <p className="mt-3 text-slate-600">
                Continue exploring practical driver guides and
                beginner-friendly explanations.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {related.map((item: Article) => (
                <Link
                  key={item.slug}
                  href={`/blog/${item.slug}`}
                  className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50"
                >
                  <span className="text-sm font-medium text-blue-600">
                    {item.category}
                  </span>

                  <h4 className="mt-3 text-xl font-semibold leading-7 text-slate-900">
                    {item.title}
                  </h4>

                  <p className="mt-4 text-sm text-slate-500">
                    {item.readTime}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-sm font-medium text-blue-600">
                    Read Article →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}