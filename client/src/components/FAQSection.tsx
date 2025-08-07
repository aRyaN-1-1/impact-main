import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is Impactboard and how does it work?",
      answer: "Impactboard is a platform that combines team-building activities with environmental sustainability. Teams participate in curated eco-friendly challenges, track their collective impact, and strengthen workplace relationships while contributing to positive environmental change."
    },
    {
      question: "How do you measure environmental impact?",
      answer: "We use verified methodologies to calculate carbon reduction, waste reduction, energy savings, and other environmental metrics. Each activity includes clear impact measurements, and teams can see their collective contributions through detailed dashboards and reports."
    },
    {
      question: "What types of activities are available?",
      answer: "Our activities range from tree planting initiatives and waste reduction challenges to renewable energy adoption and sustainable commuting programs. All activities are designed to be engaging for teams while creating measurable environmental benefits."
    },
    {
      question: "Is this suitable for remote teams?",
      answer: "Absolutely! Many of our activities are designed for distributed teams, including virtual sustainability workshops, home energy audits, and digital carbon footprint tracking. Remote teams can participate fully and see their collective impact."
    },
    {
      question: "How much does Impactboard cost?",
      answer: "We offer flexible pricing plans based on team size and features needed. Our basic plan starts at $10 per team member per month, with enterprise options available for larger organizations. Contact us for a custom quote."
    },
    {
      question: "How quickly can we get started?",
      answer: "Teams can be up and running within 24 hours. Our onboarding process includes a brief team assessment, activity selection, and platform setup. We provide full support to ensure a smooth launch for your sustainability journey."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about getting started with sustainable team building.
          </p>
        </div>

        <div className="max-w-4xl mx-auto animate-scale-in">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-xl px-6 shadow-soft hover:shadow-card transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;