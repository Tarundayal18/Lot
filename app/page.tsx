import AnimatedIconsSection from "../components/animated-icons-section";
import FaqSection from "../components/faq-section";
import FeaturesSection from "../components/features-section";
import HeroSection from "../components/hero-section";
import Navbar from "../components/navbar";
import StepsSection from "../components/steps-section";
import WhyBestSection from "../components/why-best-section";
import RentPage from "../components/rentpage";

export default function Home() {
  return (
    <main className="w-full">
       <Navbar />
      <HeroSection />
      <FeaturesSection />
      <AnimatedIconsSection />
      <WhyBestSection />
      <RentPage />
      <StepsSection/>
      <FaqSection />
    </main>
  )
}
