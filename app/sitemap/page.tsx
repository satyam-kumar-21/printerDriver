import { constructMetadata } from '@/app/utils/seo';

export const metadata = constructMetadata({
  title: 'Sitemap - DriverWise',
  description: 'Learn more about sitemap at DriverWise. We provide clear, plain-English advice and troubleshooting steps for device drivers.',
});

import React from 'react'
import LegalPolicyHero from '../components/legel-policy/LegalPolicyHero'
import SitemapContent from './SitemapContent'

function page() {

const sitemapHeroData = {
  title: "Site Map",
  description: "Everything on This Site, One Page",
  note:
    "A human-readable index of every page we publish. (Search engines: the XML sitemap is linked in the footer.)",
}
  return (
   <>
   <LegalPolicyHero {...sitemapHeroData} />
   <SitemapContent />
   </>
  )
}

export default page
