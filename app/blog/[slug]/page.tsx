import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import ArticleHero from "@/app/components/blog/ArticleHero";
import { blogArticles, BlogArticle } from "../../data/blog";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

const getId = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");

export function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = blogArticles.find(
    (item) => item.slug === slug
  );

  if (!article) {
    notFound();
  }

  const related = article.relatedArticles
    .map((slug) =>
      blogArticles.find((item) => item.slug === slug)
    )
    .filter((item): item is BlogArticle => Boolean(item));

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
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute left-[-10%] top-0 h-96 w-96 rounded-full bg-blue-200/30 blur-[140px]" />
          <div className="absolute right-[-10%] bottom-0 h-96 w-96 rounded-full bg-sky-200/30 blur-[140px]" />

          
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            {/* Article */}
            <div>
              <article className="overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-xl shadow-slate-200/40">
                <div className="relative h-80 overflow-hidden bg-slate-100 sm:h-96">
                  <Image
                    src={article.image}
                    alt={article.imageAlt}
                    fill
                    className="object-cover"
                    priority
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/30 via-transparent to-transparent" />
                </div>

                <div className="p-8 sm:p-12 lg:p-16">
                  <div className="mb-12 rounded-3xl border border-blue-100 bg-blue-50/70 p-6">
                    <p className="text-lg leading-8 text-slate-700">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="space-y-14">
                    {article.content.map((section) => (
                      <section
                        key={section.heading}
                        id={getId(section.heading)}
                        className="scroll-mt-28"
                      >
                        <h2 className="mb-5 text-2xl font-bold text-slate-900 sm:text-3xl">
                          {section.heading}
                        </h2>

                        <p className="text-lg leading-9 text-slate-600">
                          {section.body}
                        </p>
                      </section>
                    ))}
                  </div>
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6 lg:sticky lg:top-24">
              {/* Covers */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900">
                  What this article covers
                </h3>

                <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
                  {article.content.map((section) => (
                    <li
                      key={section.heading}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-2 inline-flex h-2.5 w-2.5 rounded-full bg-blue-600" />
                      <span>{section.heading}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Facts */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900">
                  Quick facts
                </h3>

                <div className="mt-6 space-y-4 text-sm text-slate-600">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-50">
                      📌
                    </span>

                    <span>
                      {article.category} · {article.readTime}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-50">
                      🗓️
                    </span>

                    <span>{article.published}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-50">
                      ✍️
                    </span>

                    <span>{article.author}</span>
                  </div>
                </div>
              </div>

              {/* Jump To */}
              {/* <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900">
                  Jump to
                </h3>

                <ol className="mt-6 space-y-4 text-sm leading-7">
                  {article.content.map((section) => (
                    <li key={section.heading}>
                      <Link
                        href={`#${getId(section.heading)}`}
                        className="text-slate-700 transition hover:text-blue-600"
                      >
                        {section.heading}
                      </Link>
                    </li>
                  ))}
                </ol>
              </div> */}
            </aside>
          </div>

          {/* Related Articles */}
          {related.length > 0 && (
            <section className="mt-28">
              <div className="mb-14 text-center">
                <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-700">
                  Continue Reading
                </span>

                <h3 className="mt-6 text-4xl font-bold tracking-tight text-slate-900">
                  Related Articles
                </h3>

                <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
                  Explore more practical guides and explanations from DriverWise.
                </p> <br />
              </div>

              <div className="grid gap-8 lg:grid-cols-2">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/blog/${item.slug}`}
                    className="group relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100/50"
                  >
                    {/* Glow */}
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-100 blur-3xl" />
                    </div>

                    <div className="relative">
                      <div className="flex items-center justify-between">
                        <span className="rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-700">
                          {item.category}
                        </span>

                        <span className="text-sm text-slate-500">
                          {item.readTime}
                        </span>
                      </div>

                      <h4 className="mt-6 text-2xl font-bold leading-tight text-slate-900 transition-colors group-hover:text-blue-700">
                        {item.title}
                      </h4>

                      <p className="mt-4 line-clamp-3 text-base leading-7 text-slate-600">
                        {item.excerpt}
                      </p>

                      <div className="mt-8 flex items-center gap-3 font-semibold text-blue-600">
                        <span>Read Article</span>

                        <svg
                          className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </section>
    </>
  );
}