import { constructMetadata } from '@/app/utils/seo';

export const metadata = constructMetadata({
  title: 'Knowledge - DriverWise',
  description: 'Learn more about knowledge at DriverWise. We provide clear, plain-English advice and troubleshooting steps for device drivers.',
});

import React from 'react'
import KnowledgeHero from '../components/knowledge/KnowledgeHero'
import Step01 from '../components/knowledge/Step01'
import Step02 from '../components/knowledge/Step02'
import QuickHelp from '../components/knowledge/QuickHelp'
import QuickNote from '../components/knowledge/QuickNote'
import WantUs from '../components/home/WantUs'
import KnowledgeFAQ from '../components/knowledge/KnowledgeFAQ'
import JsonLd from '../components/seo/JsonLd'

function page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    name: 'Driver Knowledge Base & FAQ',
    description: 'Get answers to common questions and quick help for driver installation and troubleshooting.',
    url: 'https://driverwise.com/knowledge/',
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <KnowledgeHero />
      <Step01 />
      <Step02 />
      <QuickHelp />

      <QuickNote />

      <KnowledgeFAQ />

      <WantUs />
    </>
  )
}

export default page
