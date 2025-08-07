import environmentalImage from "@/assets/environmental-impact.jpg";

const StorytellingSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Building a Better Tomorrow
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every action counts. See how teams around the world are making a measurable difference.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="animate-scale-in">
              <img 
                src="/images/b6f54bd4-c747-4a81-98ec-b30ca8d8c977.png" 
                alt="Beautiful mountain lake landscape representing environmental stewardship"
                className="w-full h-96 object-cover rounded-2xl shadow-card"
              />
            </div>

            {/* Content */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="space-y-6">
                <div className="bg-primary-soft p-6 rounded-xl">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Real Impact, Real Results
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our platform has helped over 500 teams plant 50,000 trees, reduce carbon footprints by 30%, 
                    and build stronger workplace relationships through meaningful shared experiences.
                  </p>
                </div>

                <div className="bg-accent-soft p-6 rounded-xl">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    How It Works
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Choose from curated sustainable activities, track your team's participation, 
                    measure environmental impact, and celebrate achievements together. It's team building 
                    that makes a difference.
                  </p>
                </div>

                <div className="bg-secondary/20 p-6 rounded-xl">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    What Makes Us Special
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We combine behavioral science with environmental action to create experiences that 
                    strengthen teams while protecting our planet. Every activity is designed to build 
                    trust, communication, and shared purpose.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorytellingSection;