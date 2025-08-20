import { Button } from "@/components/ui/button";
import { Building2, Droplets, Zap, Wrench, ArrowRight } from "lucide-react";

const ServicesOverview = () => {
  const services = [
    {
      id: "infra",
      title: "Hablen Infra",
      description: "Specializing in infrastructure development, civil construction, structural engineering, and road construction with a focus on safety and sustainability.",
      icon: Building2,
      features: ["Civil & Mechanical Works", "Project Management", "Road Construction", "Steel Fabrication"],
      gradient: "bg-gradient-to-br from-accent-infra to-accent-infra/80",
      borderColor: "division-infra",
      buttonVariant: "infra" as const,
    },
    {
      id: "oils",
      title: "Hablen Wood Pressed Oils",
      description: "Premium cold-pressed oils using traditional methods. Chemical-free, nutrient-rich oils supporting health and environmental sustainability.",
      icon: Droplets,
      features: ["Wood Press Extraction", "No Chemicals", "Farm-to-Bottle", "Premium Quality"],
      gradient: "bg-gradient-to-br from-accent-oils to-accent-oils/80",
      borderColor: "division-oils",
      buttonVariant: "oils" as const,
    },
    {
      id: "sales",
      title: "Hablen Pumps & Motors Sales",
      description: "Authorized distributors of top-brand pumps and motors for agricultural, industrial, and domestic applications with expert consultation.",
      icon: Zap,
      features: ["Diverse Range", "Energy Efficient", "Expert Consultation", "Genuine Parts"],
      gradient: "bg-gradient-to-br from-accent-sales to-accent-sales/80",
      borderColor: "division-sales",
      buttonVariant: "sales" as const,
    },
    {
      id: "service",
      title: "Hablen Pumps & Motors Service",
      description: "Comprehensive maintenance, repair, and overhaul services ensuring peak performance and longevity of your equipment.",
      icon: Wrench,
      features: ["On-site Repair", "Preventive Maintenance", "Emergency Service", "Spare Parts"],
      gradient: "bg-gradient-to-br from-accent-service to-accent-service/80",
      borderColor: "division-service",
      buttonVariant: "service" as const,
    },
  ];

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Business Divisions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Four specialized divisions working together to deliver comprehensive solutions 
            across infrastructure, natural products, and industrial equipment.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`group relative overflow-hidden rounded-2xl gradient-card p-8 hover-lift ${service.borderColor} animate-slide-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${service.gradient} mb-6`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-2 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                    {feature}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button variant={service.buttonVariant} className="group">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;