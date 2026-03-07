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

const Index = () => (
  <div className="min-h-screen bg-background">
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

export default Index;
