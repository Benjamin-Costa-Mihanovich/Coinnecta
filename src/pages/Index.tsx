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
      <SpotsCard
  total={50}
  taken={27}
  deadline={new Date("2025-08-25T12:00:00-03:00")} // opcional
  backgroundUrl="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1600&q=80" // opcional
  title="50 personas por semana"
  note="No es táctica de ventas. Es logística real."
  ctaLabel="Reservar mi lugar"
  onCta={() => {/* abre modal o scroll-to-form */}}
/>

      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;