import { motion, useScroll } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import LogoBar from "@/components/landing/LogoBar";
import EcosystemSection from "@/components/landing/EcosystemSection";
import ProductCards from "@/components/landing/ProductCards";
import HowItWorks from "@/components/landing/HowItWorks";
import FeatureDeepDive from "@/components/landing/FeatureDeepDive";
import ComparisonTable from "@/components/landing/ComparisonTable";
import UseCases from "@/components/landing/UseCases";
import PricingSection from "@/components/landing/PricingSection";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="min-h-screen bg-background scroll-smooth">
      {/* Scroll progress bar - green */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] z-[60] origin-left"
        style={{
          scaleX: scrollYProgress,
          background: "linear-gradient(90deg, hsl(104 58% 41%), hsl(115 56% 28%))",
        }}
      />
      <Navbar />
      <HeroSection />
      <LogoBar />
      <EcosystemSection />
      <ProductCards />
      <HowItWorks />
      <FeatureDeepDive />
      <ComparisonTable />
      <UseCases />
      <PricingSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
