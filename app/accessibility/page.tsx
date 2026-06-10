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
