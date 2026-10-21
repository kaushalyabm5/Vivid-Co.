import React from 'react'
import HomeHero from './HomeHero'
import WhyChooseUs from './WhyChooseUs'
import BrandIntro from './BrandIntro'
import Gallery from './Gallery'
import FeaturedServices from './FeaturedServices'
import OurCraftsmanship from './OurCraftsmanship'
import BotanicalPhilosophy from './BotanicalPhilosophy'
import SpecialOffers from './SpecialOffers'
import OwnerSection from './OwnerSection'
import TeamSection from './TeamSection'
import ReviewsSection from './ReviewsSection'
import LocationContactSection from './LocationContactSection'

const HomePage = () => {
  return (
    <div>
        <HomeHero />
        <BrandIntro />
        <WhyChooseUs />
        <OurCraftsmanship />
        <BotanicalPhilosophy />
        <FeaturedServices />
        <OwnerSection />
        <Gallery />
        <SpecialOffers />
        <TeamSection />
        <ReviewsSection />
        <LocationContactSection />
    </div>
  )
}

export default HomePage