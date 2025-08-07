import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AudienceSection from "@/components/AudienceSection";
import ProductSection from "@/components/ProductSection";
import StorytellingSection from "@/components/StorytellingSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AudienceSection />
        <ProductSection />
        <StorytellingSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
