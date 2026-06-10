import { constructMetadata } from '@/app/utils/seo';

export const metadata = constructMetadata({
  title: 'Terms Of Use - DriverWise',
  description: 'Learn more about terms-of-use at DriverWise. We provide clear, plain-English advice and troubleshooting steps for device drivers.',
});

import React from 'react'
import LegalPolicyHero from '../components/legel-policy/LegalPolicyHero'
import TermsOfServiceContent from './TermsOfServiceContent'

function page() {


    const termsOfUseHeroData = {
        title: "Terms of Use",
        description: "The Rules for Using This Site",
        note:
            "A clear summary of what's allowed, what's not, and how disputes are handled.",
    }
    return (
        <>
        <LegalPolicyHero {...termsOfUseHeroData} />
        <TermsOfServiceContent />
        </>
    )
}

export default page
