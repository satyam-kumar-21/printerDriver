"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogArticles } from "@/app/data/blog";

export default function LatestArticle() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-20">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-200/30 blur-[140px]" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-sky-200/30 blur-[140px]" />

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

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
            Latest Articles
          </span>

          <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Fresh Reads From The Driver Blog
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600 sm:text-base">
            Bite-sized, friendly, and always written by humans who enjoy this
            stuff.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogArticles.map((article) => (
            <article
              key={article.slug}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:border-blue-200"
            >
              <Link href={`/blog/${article.slug}`} className="block">
                <div className="relative aspect-video overflow-hidden bg-slate-100">
                  <img
                    src={article.image}
                    alt={article.imageAlt}
                    className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

                  <div className="absolute right-4 top-4 rounded-full bg-slate-900/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-white">
                    {article.category}
                  </div>
                </div>
              </Link>

              <div className="p-6">
                <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.24em] text-slate-500">
                  <span>{article.published}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>

                <Link href={`/blog/${article.slug}`} className="mt-4 block text-lg font-semibold leading-snug text-slate-900 transition hover:text-blue-600 sm:text-xl">
                  {article.title}
                </Link>

                <p className="mt-4 text-sm leading-7 text-slate-600 line-clamp-4">
                  {article.excerpt}
                </p>

                <div className="mt-6 flex items-center justify-between gap-4">
                  <p className="text-sm text-slate-500">{article.author}</p>

                  <Link
                    href={`/blog/${article.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-blue-600"
                  >
                    Read article
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}