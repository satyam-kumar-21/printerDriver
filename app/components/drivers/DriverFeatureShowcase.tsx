'use client'

import Image from 'next/image'

interface DriverFeatureShowcaseProps {
  heading?: string
  description1?: string
  description2?: string
  image?: string
  imageAlt?: string
}

export default function DriverFeatureShowcase({
  heading = 'Common Connectivity Frustrations',
  description1 = 'Wi-Fi that drops every few minutes, slow speeds compared to other devices on the same network, or a connection that refuses to come back after sleep — these are the most common driver-related complaints, and among the most easily fixed.',
  description2 = 'A fresh driver, paired with a power-management setting that stops the OS from aggressively powering down the network chip, solves most of them. For laptops, your manufacturer\'s site is almost always the right source, since they tune it for your specific Wi-Fi module.',
  image = '/network-fix.svg',
  imageAlt = 'Driver fix illustration',
}: DriverFeatureShowcaseProps) {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-200/20 blur-[140px]" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-sky-200/20 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left Side - Heading and Two Descriptions */}
          <div className="flex flex-col justify-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl mb-6">
                {heading}
              </h2>

              <div className="space-y-4">
                <p className="text-base leading-8 text-slate-600 sm:text-lg">
                  {description1}
                </p>
                <p className="text-base leading-8 text-slate-600 sm:text-lg">
                  {description2}
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Image Only */}
          <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-blue-100 to-sky-100">
            {image && (
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-full object-fill"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
