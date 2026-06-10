import React from 'react'
import LegalPolicyHero from '../components/legel-policy/LegalPolicyHero'
import AdvertisingDisclosureContent from './AdvertisingDisclosureContent'

function page() {

const advertisingDisclosureHeroData = {
  title: "Advertising Disclosure",
  description: "How This Site Is Funded",
  note:
    "Our advertising and affiliate policy — and the deceptive formats we ban outright.",
}
  return (
    <>
    <LegalPolicyHero {...advertisingDisclosureHeroData} />
    <AdvertisingDisclosureContent />
    </>
  )
}

export default page
