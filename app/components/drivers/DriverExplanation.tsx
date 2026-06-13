import React from "react";
import { CheckCircle2 } from "lucide-react";

type Point = {
  text: string;
};

type DriverExplanationProps = {
  title: string;
  paragraphs: string[];
  points: Point[];
};

export default function DriverExplanation({ title, paragraphs, points }: DriverExplanationProps) {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-sky-50 via-white to-white py-12 sm:py-16 lg:py-20" id="overview">
      <div className="absolute inset-0">
        <div className="absolute left-[-10%] top-[-10%] h-96 w-96 rounded-full bg-blue-200/40 blur-[120px]" />
        <div className="absolute right-[-10%] top-[10%] h-96 w-96 rounded-full bg-sky-200/30 blur-[120px]" />
       
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 mb-6">
          <span className="h-2 w-2 rounded-full bg-blue-500" />
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            How It Works
          </span>
        </div>
        <h2 className="mb-8 text-3xl sm:text-4xl font-bold text-slate-900">
          {title}
        </h2>

        <div className="space-y-6 mb-8">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-base sm:text-lg leading-8 text-slate-600">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="space-y-4">
          {points.map((point, index) => (
            <div key={index} className="flex items-start gap-3 rounded-2xl bg-white border border-slate-200 p-4">
              <CheckCircle2 className="mt-1 h-5 w-5 text-blue-600 shrink-0" />
              <p className="text-base text-slate-700 leading-7">
                {point.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
