import AnimatedIconsSection from "../components/animated-icons-section";
import FaqSection from "../components/faq-section";
import FeaturesSection from "../components/features-section";
import HeroSection from "../components/hero-section";
import Navbar from "../components/navbar";
import StepsSection from "../components/steps-section";
import WhyBestSection from "../components/why-best-section";
import RentPage from "../components/rentpage";
import ServiceCardsSection from "../components/service-card-section";
import ComparisonSection from "../components/comparison-section";
import FirstTimeEntrepreneursSection from "../components/first-time-entrepreneurs-section";
import LittleOtherThingsSection from "../components/little-other-things-section";
import ContactUsSection from "../components/contact-us-section";

export default function Home() {
  return (
    <main className="w-full">
       {/* <Navbar /> */}
      <HeroSection />
      <FeaturesSection />
      <FirstTimeEntrepreneursSection />
      <AnimatedIconsSection />
      <WhyBestSection />
      <ServiceCardsSection />
      <RentPage />
      <StepsSection/>̃
      <FaqSection />
      <ComparisonSection />
      <LittleOtherThingsSection />
      <ContactUsSection />
    </main>
  )
}
