import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

import ArticleHero from "@/app/components/blog/ArticleHero";
import { blogArticles, BlogArticle } from "../../data/blog";
import { constructMetadata } from "@/app/utils/seo";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = blogArticles.find((item) => item.slug === slug);
  
  if (!article) {
    return constructMetadata({ title: 'Article Not Found' });
  }

  return constructMetadata({
    title: `${article.title} - DriverWise`,
    description: article.excerpt,
    image: article.image,
  });
}

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

import JsonLd from "@/app/components/seo/JsonLd";

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

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    image: [
      `https://driverwise.com${article.image}`
    ],
    datePublished: new Date(article.published).toISOString(),
    author: [{
      '@type': 'Person',
      name: article.author,
    }],
    description: article.excerpt,
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <ArticleHero
        category={article.category}
        title={article.title}
        excerpt={article.excerpt}
        published={article.published}
        readTime={article.readTime}
      />

      {/* Main Article Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50/50 via-white to-white pb-24 pt-12">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-15%] top-0 h-[500px] w-[500px] rounded-full bg-blue-200/20 blur-[160px]" />
          <div className="absolute right-[-15%] bottom-0 h-[500px] w-[500px] rounded-full bg-sky-200/20 blur-[160px]" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
          <div className="flex flex-col gap-10">

            {/* ─── Main Article Body ─── */}
            <div className="min-w-0 flex-1">
              <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white">

                {/* Featured Image */}
                <div className="relative h-64 overflow-hidden bg-slate-100 sm:h-80 lg:h-[420px]">
                  <Image
                    src={article.image}
                    alt={article.imageAlt}
                    fill
                    priority
                    className="object-cover"
                  />

                  {/* Floating meta pill on image */}
                  <div className="absolute bottom-5 left-5 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-slate-900/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-sm">
                      {article.category}
                    </span>
                    <span className="rounded-full bg-white/90 px-4 py-1.5 text-xs font-semibold text-slate-700 backdrop-blur-sm">
                      {article.readTime}
                    </span>
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-6 sm:p-10 lg:p-14">

                  {/* Meta Bar */}
                  <div className="mb-8 flex flex-wrap items-center gap-2 border-b border-slate-100 pb-8">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1.5 text-sm font-semibold text-blue-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                      {article.category}
                    </span>
                    <span className="rounded-full bg-slate-100 px-3 py-1.5 text-sm text-slate-600">
                      📅 {article.published}
                    </span>
                    <span className="rounded-full bg-slate-100 px-3 py-1.5 text-sm text-slate-600">
                      ⏱️ {article.readTime}
                    </span>
                    <span className="rounded-full bg-slate-100 px-3 py-1.5 text-sm text-slate-600">
                      ✍️ {article.author}
                    </span>
                  </div>

                  {/* Excerpt Callout */}
                  <div className="mb-12 rounded-2xl border-l-4 border-blue-500 bg-gradient-to-br from-blue-50 via-white to-sky-50 p-6 sm:p-8">
                    <p className="text-base font-medium leading-8 text-slate-700 sm:text-lg sm:leading-9">
                      {article.excerpt}
                    </p>
                  </div>

                  {/* Blue accent rule */}
                  <div className="mb-10 flex items-center gap-3">
                    <div className="h-0.5 w-12 rounded-full bg-blue-600" />
                    <div className="h-0.5 w-4 rounded-full bg-blue-300" />
                    <div className="h-0.5 w-2 rounded-full bg-blue-200" />
                  </div>

                  {/* Content Sections */}
                  <div className="space-y-14">
                    {article.content.map((section, idx) => (
                      <section
                        key={section.heading}
                        id={getId(section.heading)}
                        className="scroll-mt-28"
                      >
                        {/* Section number + heading */}
                        <div className="mb-5 flex items-start gap-4">
                          <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                            {idx + 1}
                          </span>
                          <h2 className="article-h2">
                            {section.heading}
                          </h2>
                        </div>

                        <div className="pl-11">
                          <p className="article-prose" style={{ fontSize: "1.0625rem", lineHeight: "1.85", color: "#334155" }}>
                            {section.body}
                          </p>
                        </div>

                        {/* Subtle divider between sections (except last) */}
                        {idx < article.content.length - 1 && (
                          <div className="mt-14 border-b border-slate-100" />
                        )}
                      </section>
                    ))}
                  </div>

                  {/* End of Article */}
                  <div className="mt-14 rounded-2xl bg-gradient-to-r from-slate-50 to-blue-50 p-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600">
                        <span className="text-sm text-white">✓</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-800">
                          End of Article
                        </p>
                        <p className="text-xs text-slate-500">
                          Written and maintained by the DriverWise editorial team
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </article>

              {/* ─── Related Articles ─── */}
              {related.length > 0 && (
                <section className="mt-20">
                  {/* Section heading */}
                  <div className="mb-10 flex items-center gap-4">
                    <div className="h-px flex-1 bg-slate-200" />
                    <div className="text-center">
                      <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
                        Continue Reading
                      </span>
                    </div>
                    <div className="h-px flex-1 bg-slate-200" />
                  </div>

                  <h2 className="mb-2 text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                    Related Articles
                  </h2>
                  <p className="mb-10 text-center text-base text-slate-500">
                    Explore more practical guides and explanations from DriverWise.
                  </p>

                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {related.slice(0, 6).map((item) => (
                      <Link
                        key={item.slug}
                        href={`/blog/${item.slug}`}
                        className="group overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200"
                      >
                        <div className="flex items-center justify-between">
                          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700">
                            {item.category}
                          </span>
                          <span className="text-xs text-slate-400">
                            {item.readTime}
                          </span>
                        </div>

                        <h3 className="mt-4 text-lg font-bold leading-snug text-slate-900 transition-colors group-hover:text-blue-700 sm:text-xl">
                          {item.title}
                        </h3>

                        <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-500">
                          {item.excerpt}
                        </p>

                        <div className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-blue-600">
                          Read Article
                          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              )}

            </div>
            {/* end main */}
          </div>
        </div>
      </section>
    </>
  );
}