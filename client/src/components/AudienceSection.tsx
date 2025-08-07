import { Users, Target, Lightbulb } from "lucide-react";

const AudienceSection = () => {
  const audiences = [
    {
      icon: Users,
      title: "HR Managers",
      description: "Build stronger teams through sustainable activities that foster collaboration and engagement while supporting your company's ESG goals."
    },
    {
      icon: Target,
      title: "Team Leaders",
      description: "Lead by example with meaningful team-building experiences that create lasting bonds while making a measurable environmental impact."
    },
    {
      icon: Lightbulb,
      title: "Entrepreneurs",
      description: "Integrate sustainability into your company culture from day one, attracting top talent who value purpose-driven organizations."
    }
  ];

  return (
    <section id="audience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Create a Positive Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Looking to foster team connection, drive sustainability, or just make a positive impact? We are here!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {audiences.map((audience, index) => (
            <div 
              key={audience.title}
              className="bg-card p-8 rounded-2xl shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-2 group animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-16 h-16 bg-primary-soft rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <audience.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {audience.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;