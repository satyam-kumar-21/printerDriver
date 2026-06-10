import { constructMetadata } from '@/app/utils/seo';

export const metadata = constructMetadata({
  title: 'Accessibility - DriverWise',
  description: 'Learn more about accessibility at DriverWise. We provide clear, plain-English advice and troubleshooting steps for device drivers.',
});

import React from 'react'
import LegalPolicyHero from '../components/legel-policy/LegalPolicyHero'
import AccessibilityStatementContent from './AccessibilityStatementContent'

function page() {

const accessibilityStatementHeroData = {
  title: "Accessibility Statement",
  description: "Built to Work for Everyone",
  note:
    "Our commitment to making this site usable by the widest possible audience — and how to tell us when it falls short.",
}
  return (
   <>
   <LegalPolicyHero {...accessibilityStatementHeroData} />
   <AccessibilityStatementContent />
   </>
  )
}

export default page
