import React from 'react'
import KnowledgeHero from '../components/knowledge/KnowledgeHero'
import Step01 from '../components/knowledge/Step01'
import Step02 from '../components/knowledge/Step02'
import QuickHelp from '../components/knowledge/QuickHelp'
import QuickNote from '../components/knowledge/QuickNote'
import WantUs from '../components/home/WantUs'
import KnowledgeFAQ from '../components/knowledge/KnowledgeFAQ'

function page() {
  return (
    <>
      <KnowledgeHero />
      <Step01 />
      <Step02 />
      <QuickHelp />

      <QuickNote />

      <KnowledgeFAQ />

      <WantUs />
    </>
  )
}

export default page
