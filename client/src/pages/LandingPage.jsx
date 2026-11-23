import Hero from '../components/landing/Hero.jsx'
import Features from '../components/landing/Features.jsx'
import HowItWorks from '../components/landing/HowItWorks.jsx'
import Roles from '../components/landing/Roles.jsx'
import CallToAction from '../components/landing/CallToAction.jsx'

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Roles />
      <CallToAction />
    </>
  )
}