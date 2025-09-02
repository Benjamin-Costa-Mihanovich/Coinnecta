import { HeroSection } from "@/components/landing/hero-section";
import { ProblemsSection } from "@/components/landing/problems-section";
import { ContentSection } from "@/components/landing/content-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { FAQSection } from "@/components/landing/faq-section";
import { Footer } from "@/components/landing/footer";
import { CreatorSection } from "@/components/landing/creator-section";
import SpotsCard from "@/components/landing/spots-card";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ProblemsSection />
      <CreatorSection />
      <ContentSection />
      <TestimonialsSection />
      <SpotsCard />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;