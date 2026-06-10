import { constructMetadata } from '@/app/utils/seo';

export const metadata = constructMetadata({
  title: 'Drivers - DriverWise',
  description: 'Learn more about drivers at DriverWise. We provide clear, plain-English advice and troubleshooting steps for device drivers.',
});

import React from 'react'
import DriversHero from '../components/drivers/DriversHero'
import DriversWhatWeCover from '../components/drivers/DriversWhatWeCover'
import WantUs from '../components/home/WantUs'
import JsonLd from '../components/seo/JsonLd'

function page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'All Device Drivers',
    description: 'Browse our comprehensive guides and troubleshooting steps for all major hardware device drivers including printer, scanner, audio, graphics, network, and USB.',
    url: 'https://driverwise.com/drivers/',
  };

  return (
    <>
    <JsonLd data={jsonLd} />
    <DriversHero />
    <DriversWhatWeCover />
    <WantUs />
    </>
  )
}

export default page
