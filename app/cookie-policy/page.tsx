import { constructMetadata } from '@/app/utils/seo';

export const metadata = constructMetadata({
  title: 'Cookie Policy - DriverWise',
  description: 'Learn more about cookie-policy at DriverWise. We provide clear, plain-English advice and troubleshooting steps for device drivers.',
});

import React from 'react'
import LegalPolicyHero from '../components/legel-policy/LegalPolicyHero'
import CookiePolicyContent from './CookiePolicyContent'

function page() {

const cookiePolicyHeroData = {
  title: "Cookie Policy",
  description: "Cookies, Tracking, and Your Choices",
  note:
    "A complete breakdown of every cookie this site sets and how you can opt out.",
}
  return (
    <>
    <LegalPolicyHero {...cookiePolicyHeroData} />
    <CookiePolicyContent />
    </>
  )
}

export default page
