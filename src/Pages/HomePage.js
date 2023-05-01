import { Container } from '@mui/material'
import AboutUsSection from '../components/homepage/AboutUsSection'
import Benefits from '../components/homepage/Benefits'
import HPHero from '../components/homepage/HPHero'
import OurOffer from '../components/homepage/Offer'
import OurAnswer from '../components/homepage/OurDecision'
import Services from '../components/homepage/Services'

export default function HomePage() {
  return (
    <>
      <HPHero />
      <Benefits />
      <AboutUsSection />
      <OurAnswer />
      <Services />
      <Container>
        <OurOffer />
      </Container>
    </>
  )
}
