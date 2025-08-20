import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Hammer, Route, Cog, CheckCircle } from "lucide-react";

const InfraSection = () => {
  const services = [
    {
      icon: Building2,
      title: "Civil & Mechanical Works",
      description: "Complete construction solutions from foundation to finishing",
    },
    {
      icon: Hammer,
      title: "Project Management", 
      description: "End-to-end project coordination and delivery excellence",
    },
    {
      icon: Route,
      title: "Road & Highway Construction",
      description: "Infrastructure development for transportation networks",
    },
    {
      icon: Cog,
      title: "Steel Fabrication",
      description: "Custom steel structures and industrial components",
    },
  ];

  const features = [
    "Safety-first approach with zero-incident track record",
    "Sustainable construction practices and green building solutions",
    "On-time, on-budget project delivery guarantee", 
    "Advanced project management and quality assurance",
    "Experienced team of engineers and construction professionals",
    "Compliance with all industry standards and regulations",
  ];

  return (
    <section id="infra" className="py-24 px-4 bg-gradient-to-br from-accent-infra/5 to-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-infra rounded-xl mb-6">
            <Building2 className="w-8 h-8 text-white" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Hablen Infra
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specializing in infrastructure development, civil construction, structural engineering, 
            ground improvement, and road construction. We deliver high-quality, on-time, and on-budget 
            projects for commercial, industrial, and government clients.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Services */}
          <div className="animate-slide-up">
            <h3 className="font-heading text-3xl font-bold text-foreground mb-8">
              Core Services
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="gradient-card border-0 hover-lift division-infra">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-accent-infra/20 rounded-lg flex items-center justify-center mr-3">
                        <service.icon className="w-5 h-5 text-accent-infra" />
                      </div>
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">
                      {service.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="animate-scale-in">
            <h3 className="font-heading text-3xl font-bold text-foreground mb-8">
              Why Choose Hablen Infra
            </h3>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent-infra mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">{feature}</p>
                </div>
              ))}
            </div>
            <Button variant="infra" size="lg" className="mt-8">
              Request Infrastructure Quote
            </Button>
          </div>
        </div>

        {/* Project Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Commercial Projects",
              description: "Office buildings, retail spaces, and mixed-use developments",
              projects: "150+ Completed",
            },
            {
              title: "Industrial Construction", 
              description: "Manufacturing facilities, warehouses, and industrial complexes",
              projects: "200+ Completed",
            },
            {
              title: "Government Contracts",
              description: "Public infrastructure, roads, and civic construction projects",
              projects: "100+ Completed",
            },
          ].map((type, index) => (
            <Card key={index} className="gradient-card border-0 text-center hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-8">
                <h4 className="font-heading text-xl font-bold text-foreground mb-3">
                  {type.title}
                </h4>
                <p className="text-muted-foreground mb-4">
                  {type.description}
                </p>
                <div className="text-2xl font-bold text-accent-infra">
                  {type.projects}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfraSection;