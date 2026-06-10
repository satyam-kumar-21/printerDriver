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

        <div className="">
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
            <article className="overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-xl shadow-slate-200/30">

              {/* Featured Image */}
              <div className="relative h-80 overflow-hidden bg-slate-100 sm:h-105">
                <Image
                  src={article.image}
                  alt={article.imageAlt}
                  fill
                  priority
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-linear-to-t from-slate-950/20 via-transparent to-transparent" />
              </div>

              <div className="p-8 sm:p-12 lg:p-16">

                {/* Meta */}
                <div className="mb-12 flex flex-wrap items-center gap-3 border-b border-slate-200 pb-8">
                  <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                    {article.category}
                  </span>

                  <span className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-600">
                    📅 {article.published}
                  </span>

                  <span className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-600">
                    ⏱️ {article.readTime}
                  </span>

                  <span className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-600">
                    ✍️ {article.author}
                  </span>
                </div>

                {/* Excerpt */}
                <div className="mb-20 rounded-[32px] border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-sky-50 p-10">
                  <p className="text-2xl leading-relaxed text-slate-700">
                    {article.excerpt}
                  </p>
                </div>

                {/* Accent */}
                <div className="mb-16 h-1 w-24 rounded-full bg-blue-600" />

                {/* Content */}
                <div className="space-y-24">
                  {article.content.map((section) => (
                    <section
                      key={section.heading}
                      id={getId(section.heading)}
                      className="scroll-mt-28"
                    >
                      <h2 className="mb-8 text-4xl font-bold tracking-tight text-slate-950">
                        {section.heading}
                      </h2>

                      <p className="text-xl leading-10 text-slate-600">
                        {section.body}
                      </p>
                    </section>
                  ))}
                </div>

                {/* End Line */}
                <div className="mt-24 border-t border-slate-200 pt-10">
                  <div className="flex items-center gap-3 text-sm text-slate-500">
                    <span className="h-2 w-2 rounded-full bg-blue-600" />
                    End of article
                  </div>
                </div>
              </div>
            </article>

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
                  {related.slice(0, 2).map((item) => (
                    <Link
                      key={item.slug}
                      href={`/blog/${item.slug}`}
                      className="group overflow-hidden rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/40"
                    >
                      <div className="flex items-center justify-between">
                        <span className="rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-700">
                          {item.category}
                        </span>

                        <span className="text-sm text-slate-500">
                          {item.readTime}
                        </span>
                      </div>

                      <h4 className="mt-6 text-2xl font-bold leading-tight text-slate-900 group-hover:text-blue-700">
                        {item.title}
                      </h4>

                      <p className="mt-4 line-clamp-3 text-base leading-7 text-slate-600">
                        {item.excerpt}
                      </p>

                      <div className="mt-8 flex items-center gap-2 font-medium text-blue-600">
                        Read Article
                        <span className="transition-transform group-hover:translate-x-1">
                          →
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>

          

        </div><br />
      </section>
    </>
  );
}