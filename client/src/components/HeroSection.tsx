import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import { useContent } from "@/hooks/useContent";

const HeroSection = () => {
  const { data: heroTitle } = useContent('hero_title');
  const { data: heroSubtitle } = useContent('hero_subtitle');
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center bg-gradient-section relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Sustainable team collaboration" 
          className="w-full h-full object-cover opacity-35"
        />
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          {/* Main Tagline */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            {heroTitle?.title || 'Impactboard'}
            <span className="block text-primary mt-2">By Givetastic</span>
          </h1>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            {heroSubtitle?.content || 'Transform your team with sustainable activities that strengthen collaboration while making a positive environmental impact.'}
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => window.open('https://eventful-pathways.vercel.app/', '_blank')}
              className="group"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              onClick={() => scrollToSection('storytelling')}
              className="group"
            >
              <Play className="w-5 h-5" />
              See How It Works
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;