import React from 'react'
import BlogHero from '../components/blog/BlogHero'
import EditorsPick from '../components/blog/EditorsPick'
import LatestArticle from '../components/blog/LatestArticle'
import WantTopic from '../components/blog/WantTopic'

function page() {
  return (
    <>
    <BlogHero />
    <EditorsPick />
    <LatestArticle />
    <WantTopic />
    </>
  )
}

export default page
