"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { articles, type Article } from "../../../data/articles";

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

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Fresh Reads From The Driver Blog
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
            Bite-sized, friendly, and always written by humans who enjoy this
            stuff.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {articles.map((article: Article) => (
            <article
              key={article.slug}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50"
            >
              {/* Card Header */}
              <div className="relative h-56 overflow-hidden bg-linear-to-br from-blue-100 via-sky-100 to-white">
                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600 backdrop-blur">
                  {article.category}
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-3xl border border-white/60 bg-white/70 px-8 py-5 shadow-lg backdrop-blur">
                    <p className="text-lg font-bold text-blue-600">
                      DriverWise
                    </p>

                    <p className="text-sm text-slate-500">
                      Knowledge Article
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-sm text-slate-500">
                  {article.category} · {article.readTime}
                </p>

                <h3 className="mt-3 text-2xl font-bold leading-tight text-slate-900">
                  {article.title}
                </h3>

                <p className="mt-4 line-clamp-4 text-slate-600">
                  {article.excerpt}
                </p>

                <Link
                  href={`/blog/${article.slug}`}
                  className="mt-6 inline-flex items-center gap-2 font-medium text-blue-600"
                >
                  Read the article

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}