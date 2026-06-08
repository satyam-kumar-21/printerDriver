import React from 'react'
import KnowledgeHero from '../components/knowledge/KnowledgeHero'
import Step01 from '../components/knowledge/Step01'
import Step02 from '../components/knowledge/Step02'
import QuickHelp from '../components/knowledge/QuickHelp'

function page() {
  return (
    <>
    <KnowledgeHero />
    <Step01 />
    <Step02 />
    <QuickHelp />
    </>
  )
}

export default page
