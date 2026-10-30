import React from 'react'
import AboutHero from './AboutHero'
import AboutPhilosophy from './AboutPhilosophy'
import AboutStylists from './AboutStylists'
import AboutSanctuary from './AboutSanctuary'
import AboutStory from './AboutStory'

const AboutPage = () => {
  return (
    <div>
        <AboutHero />
        <AboutStory />
        <AboutPhilosophy />
        <AboutStylists />
        <AboutSanctuary />
    </div>
  )
}

export default AboutPage