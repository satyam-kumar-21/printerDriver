import React from 'react'
import LegalPolicyHero from '../components/legel-policy/LegalPolicyHero'
import DisclaimerContent from './DisclaimerContent'

function page() {

 const disclaimerHeroData = {
  title: "Disclaimer",
  description: "Educational Content, Used at Your Own Discretion",
  note:
    "What you can — and cannot — expect from the information published on this site.",
}
  return (
    <>
    <LegalPolicyHero {...disclaimerHeroData} />
    <DisclaimerContent />
    </>
  )
}

export default page
