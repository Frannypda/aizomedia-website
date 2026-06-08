import ClientInit from '@/components/ClientInit'
import FloatingCTA from '@/components/FloatingCTA'
import NavBar from '@/components/NavBar'
import Hero from '@/components/Hero'
import StatsBar from '@/components/StatsBar'
import ShopifyMockup from '@/components/ShopifyMockup'
import ProblemSection from '@/components/ProblemSection'
import ServicesSection from '@/components/ServicesSection'
import CreativosSection from '@/components/CreativosSection'
import WhyUsSection from '@/components/WhyUsSection'
import SprintSection from '@/components/SprintSection'
import CROSection from '@/components/CROSection'
import TestimoniosSection from '@/components/TestimoniosSection'
import TeamSection from '@/components/TeamSection'
import FAQSection from '@/components/FAQSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <ClientInit />
      <div id="sp" />
      <FloatingCTA />
      <NavBar />
      <Hero />
      <StatsBar />
      <div className="sdiv" />
      <ShopifyMockup />
      <div className="sdiv" />
      <ProblemSection />
      <div className="sdiv" />
      <ServicesSection />
      {/* <div className="sdiv" /> */}
      {/* <CreativosSection /> */}
      <div className="sdiv" />
      <WhyUsSection />
      <div className="sdiv" />
      <SprintSection />
      <div className="sdiv" />
      <CROSection />
      <div className="sdiv-l" />
      <TestimoniosSection />
      <div className="sdiv-l" />
      <TeamSection />
      <div className="sdiv-l" />
      <FAQSection />
      <div className="sdiv" />
      <CTASection />
      <Footer />
    </>
  )
}
