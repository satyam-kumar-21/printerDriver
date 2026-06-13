import { constructMetadata } from '@/app/utils/seo';

export const metadata = constructMetadata({
  title: 'DriverWise - Clear, Plain-English Driver Guides',
  description: 'Your trusted resource for understanding device drivers, troubleshooting issues, and finding clear answers without technical complexity.',
});

import React from 'react'
import Hero from './components/home/Hero'
import WhatWeCover from './components/home/WhatWeCover'
import WhyADriverMatter from './components/home/WhyADriverMatter'
import StartHere from './components/home/StartHere'
import WantUs from './components/home/WantUs'
import JsonLd from './components/seo/JsonLd'
import ScrollSectionHome from './components/home/ScrollSectionHome'
import TheBasics from './components/home/TheBasics';
import DriverOverviewSections from './components/home/DriverOverviewSections';
import WhereDriversLive from './components/home/WhereDriversLive';
import HowToKnowWhichDriver from './components/home/HowToKnowWhichDriver';
import CommonDriverProblems from './components/home/CommonDriverProblems';
import HardwareCategories from './components/home/HardwareCategories';
import AboutDriverWiseHome from './components/home/AboutDriverWiseHome';

function page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        name: 'DriverWise',
        url: 'https://driverwise.com',
        logo: 'https://driverwise.com/logo.png',
        description: 'Your trusted resource for understanding device drivers and troubleshooting issues.',
      },
      {
        '@type': 'WebSite',
        name: 'DriverWise',
        url: 'https://driverwise.com',
        description: 'Clear, plain-English driver guides and troubleshooting.',
      }
    ]
  };

  return (
    <>
     <JsonLd data={jsonLd} />
     <Hero />
     <ScrollSectionHome/>

     <TheBasics />
     <WhatWeCover />
     <WhyADriverMatter />
  
     <WhereDriversLive />
     <HowToKnowWhichDriver />
     <CommonDriverProblems />
     <HardwareCategories />
     <AboutDriverWiseHome />
     <DriverOverviewSections />
        <StartHere />
     <WantUs />
    </>
  )
}

export default page
