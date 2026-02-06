import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatIsSection from "@/components/WhatIsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import HodlCultureSection from "@/components/HodlCultureSection";
import SocialProofSection from "@/components/SocialProofSection";
import BeliefSection from "@/components/BeliefSection";
import VideoSection from "@/components/VideoSection";
import NewsSection from "@/components/NewsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <WhatIsSection />
      <HowItWorksSection />
      <HodlCultureSection />
      <SocialProofSection />
      <BeliefSection />
      <VideoSection />
      <NewsSection />
      <CTASection />
      <Footer />
      <MobileStickyCTA />
    </div>
  );
};

export default Index;
