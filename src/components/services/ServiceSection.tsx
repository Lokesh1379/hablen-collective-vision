import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Clock, MapPin, Phone, CheckCircle } from "lucide-react";

const ServiceSection = () => {
  const services = [
    {
      icon: Wrench,
      title: "Repair & Overhaul",
      description: "Complete pump and motor restoration services",
      details: ["Motor rewinding", "Pump rebuilding", "Component replacement", "Performance testing"],
    },
    {
      icon: Clock,
      title: "Preventive Maintenance",
      description: "Scheduled maintenance to prevent breakdowns",
      details: ["Regular inspections", "Lubrication services", "Performance monitoring", "Wear analysis"],
    },
    {
      icon: MapPin,
      title: "On-Site Service",
      description: "Expert technicians at your location",
      details: ["Field repairs", "Installation support", "Emergency response", "Technical consultation"],
    },
    {
      icon: Phone,
      title: "Emergency Support",
      description: "24/7 rapid response for critical situations",
      details: ["Emergency repairs", "Breakdown assistance", "Rapid diagnostics", "Priority service"],
    },
  ];

  const features = [
    "Certified technicians with extensive experience",
    "Genuine spare parts inventory for immediate repairs",
    "Diagnostic equipment for accurate problem identification",
    "Preventive maintenance programs to extend equipment life",
    "Emergency service available 24/7 for critical operations",
    "Detailed service reports and performance recommendations",
  ];

  return (
    <section id="service" className="py-24 px-4 bg-gradient-to-br from-accent-service/5 to-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-service rounded-xl mb-6">
            <Wrench className="w-8 h-8 text-white" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Hablen Pumps & Motors Service
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive maintenance, repair, and overhaul services for pumps and motors. 
            Our experts handle installation, emergency repair, routine servicing, and spare parts replacement, 
            ensuring performance and long life for your equipment.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="gradient-card border-0 hover-lift division-service animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-accent-service/20 rounded-xl flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-accent-service" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Services Include:</h4>
                  <ul className="space-y-2">
                    {service.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-accent-service rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Service Process */}
          <div className="animate-slide-up">
            <h3 className="font-heading text-3xl font-bold text-foreground mb-8">
              Our Service Process
            </h3>
            
            <div className="space-y-6">
              {[
                {
                  step: "01",
                  title: "Diagnosis",
                  description: "Comprehensive equipment assessment and problem identification",
                },
                {
                  step: "02", 
                  title: "Solution Design",
                  description: "Custom repair plan with cost estimation and timeline",
                },
                {
                  step: "03",
                  title: "Expert Repair",
                  description: "Professional service using genuine parts and proven techniques",
                },
                {
                  step: "04",
                  title: "Quality Testing",
                  description: "Thorough performance testing and quality assurance",
                },
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-service rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">{step.step}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{step.title}</h4>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="service" size="lg" className="mt-8">
              Schedule Service
            </Button>
          </div>

          {/* Features & Benefits */}
          <div className="animate-scale-in">
            <h3 className="font-heading text-3xl font-bold text-foreground mb-8">
              Service Excellence
            </h3>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent-service mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">{feature}</p>
                </div>
              ))}
            </div>

            <Card className="gradient-card border-0">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-4">
                  Emergency Service Coverage
                </h4>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Response Time:</span>
                    <span className="text-accent-service font-medium">Within 2 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Service Areas:</span>
                    <span className="text-accent-service font-medium">50km radius</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Availability:</span>
                    <span className="text-accent-service font-medium">24/7 Support</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Emergency Hotline:</span>
                    <span className="text-accent-service font-medium">1800-HABLEN</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;