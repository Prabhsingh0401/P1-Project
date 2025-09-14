import Hero from '../hero/hero'
import ServicesSection from '../servicesSection/servicesSection'
import PricingSection from '../pricingCards/pricingSection'
import CertificationSection from '../certifications/certificationSection'
import FAQSection from '../FAQSection/FAQSection'

const Home = () => {
    return(
        <>
        <Hero></Hero>
        <ServicesSection></ServicesSection>
        <PricingSection></PricingSection>
        <CertificationSection></CertificationSection>
        <FAQSection></FAQSection>
        </>
    )
}

export default Home