import React from 'react'
import ServicesHero from './ServicesHero'
import ServiceCategories from './ServiceCategories'
import ConsultationPhilosophy from './ConsultationPhilosophy'
import ExclusiveAddOns from './ExclusiveAddOns'
import ServicesCTA from './ServicesCTA'

const ServicesPage = () => {
  return (
    <div>
        <ServicesHero />
        <ConsultationPhilosophy />
        <ServiceCategories />
        <ExclusiveAddOns />
        <ServicesCTA />
    </div>
  )
}

export default ServicesPage