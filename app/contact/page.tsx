import { constructMetadata } from '@/app/utils/seo';

export const metadata = constructMetadata({
  title: 'Contact - DriverWise',
  description: 'Learn more about contact at DriverWise. We provide clear, plain-English advice and troubleshooting steps for device drivers.',
});

import React from 'react'
import ContactHero from '../components/contact/ContactHero'
import ContactForm from '../components/contact/ContactForm'
import ContactFaq from '../components/contact/ContactFaq'
import JsonLd from '../components/seo/JsonLd'

function page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact DriverWise',
    description: 'Get in touch with the DriverWise team for support, questions, or feedback.',
    url: 'https://driverwise.com/contact/',
  };

  return (
   <>
   <JsonLd data={jsonLd} />
   <ContactHero />
   <ContactForm />
   <ContactFaq />
   </>
  )
}

export default page
