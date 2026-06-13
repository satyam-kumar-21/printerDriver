import React from "react";

function OurJourney() {
  const milestones = [
    {
      year: "2021",
      title: "The Beginning",
      description: "Created the first printer driver guides for friends and family"
    },
    {
      year: "2022",
      title: "Expanding Coverage",
      description: "Added graphics, audio, and network driver overviews"
    },
    {
      year: "2023",
      title: "Knowledge Hub Launch",
      description: "Launched the troubleshooting knowledge hub with symptom-based fixes"
    },
    {
      year: "2024",
      title: "Blog Goes Live",
      description: "Started publishing explainers about how computers really work"
    },
    {
      year: "2025",
      title: "Today",
      description: "Helping thousands of readers every month with plain-English driver advice"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-white via-slate-50 to-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute right-[-10%] top-[-10%] h-96 w-96 rounded-full bg-blue-200/20 blur-[120px]" />
        <div className="absolute left-[-10%] bottom-0 h-96 w-96 rounded-full bg-sky-200/20 blur-[120px]" />
      </div>

      <div className="relative mx-auto w-full max-w-5xl px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-600 shadow-sm">
            Our Journey
          </span>
          <h2 className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
            Our path so far
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-sky-500 to-slate-200 md:left-1/2 md:-translate-x-1/2"></div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white border-4 border-blue-600 shadow-md md:left-1/2 md:-translate-x-1/2">
                  <div className="h-3 w-3 rounded-full bg-gradient-to-br from-blue-600 to-sky-500"></div>
                </div>

                {/* Content */}
                <div className={`ml-12 w-full md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                }`}>
                  <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-all duration-300">
                    <span className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-sky-500 px-3 py-1 text-xs font-semibold text-white">
                      {milestone.year}
                    </span>
                    <h3 className="mt-3 text-lg font-semibold text-slate-900">{milestone.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurJourney;
