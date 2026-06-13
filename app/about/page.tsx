import { constructMetadata } from '@/app/utils/seo';

export const metadata = constructMetadata({
  title: 'About - DriverWise',
  description: 'Learn more about about at DriverWise. We provide clear, plain-English advice and troubleshooting steps for device drivers.',
});

import React from 'react'
import AboutHero from '../components/about/AboutHero'
import WantUs from '../components/home/WantUs'
import AboutContent from '../components/about/AboutContent'
import OurMission from '../components/about/OurMission'
import OurStory from '../components/about/OurStory'
import OurJourney from '../components/about/OurJourney'
import WhatWeDoAndDont from '../components/about/WhatWeDoAndDont'
import EditorialStandards from '../components/about/EditorialStandards'
import JsonLd from '../components/seo/JsonLd'
import AboutDriverWiseHome from '../components/home/AboutDriverWiseHome';

function page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About DriverWise',
    description: 'Learn more about the DriverWise mission to provide clear, plain-English advice and troubleshooting steps for device drivers.',
    url: 'https://driverwise.com/about/',
  };

  return (
    <>
    <JsonLd data={jsonLd} />
    <AboutHero />
    <AboutDriverWiseHome />
    <OurMission />
    <OurStory />
    <OurJourney />
    <WhatWeDoAndDont />
    <EditorialStandards />
    <AboutContent />
    <WantUs />
    </>
  )
}

export default page
