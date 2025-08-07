import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const About = () => {
  const impactData = [
    { name: 'Climate Action', value: 35, color: '#10B981' },
    { name: 'Education Access', value: 25, color: '#3B82F6' },
    { name: 'Healthcare Support', value: 20, color: '#8B5CF6' },
    { name: 'Community Development', value: 20, color: '#F59E0B' }
  ];

  const yearlyGrowthData = [
    { year: '2020', volunteers: 120, activities: 45 },
    { year: '2021', volunteers: 285, activities: 78 },
    { year: '2022', volunteers: 450, activities: 125 },
    { year: '2023', volunteers: 680, activities: 189 },
    { year: '2024', volunteers: 920, activities: 267 }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                About Givetastic
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We believe in the power of collective action to create meaningful change in our communities and the world.
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Founded in 2020, Givetastic emerged from a simple yet powerful idea: that everyone has something valuable to contribute to their community. What started as a small group of passionate individuals has grown into a thriving platform connecting thousands of volunteers with meaningful opportunities.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Our mission is to bridge the gap between those who want to help and those who need support, creating lasting positive impact through organized volunteer activities, community events, and social initiatives.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Today, we work with over 500 organizations worldwide, facilitating meaningful connections that transform communities and empower individuals to make a difference.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="/images/c4874a9a-aece-4ee3-8454-5fe9f232a843.png" 
                  alt="Team collaboration" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="order-2 md:order-1">
                <img 
                  src="/images/0ef48b29-7eb4-47d5-9c76-7310b482ebef.png" 
                  alt="Community impact" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  To create a world where every person has access to opportunities that help them grow, contribute, and thrive within their communities.
                </p>
                
                <h3 className="text-2xl font-semibold text-foreground mb-4">Our Values</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Inclusivity:</strong> Everyone deserves a chance to participate and contribute</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Impact:</strong> We measure success by the positive change we create</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Community:</strong> Together we can achieve more than we can alone</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Transparency:</strong> Open communication builds trust and accountability</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Impact</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  See how our community has grown and the areas where we're making the biggest difference.
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Focus Areas Chart */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-center">Focus Areas Distribution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={impactData}
                          cx="50%"
                          cy="50%"
                          outerRadius={100}
                          dataKey="value"
                          label={({ name, value }) => `${name}: ${value}%`}
                        >
                          {impactData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* Growth Chart */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-center">Community Growth</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={yearlyGrowthData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="volunteers" fill="#10B981" name="Volunteers" />
                        <Bar dataKey="activities" fill="#3B82F6" name="Activities" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Ready to make a difference? Whether you're looking to volunteer, organize events, or partner with us, there's a place for you in our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://eventful-pathways.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-background text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-background/90 transition-colors"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;