import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Droplets, Settings, Shield, CheckCircle } from "lucide-react";

const SalesSection = () => {
  const pumpTypes = [
    {
      icon: Droplets,
      title: "Submersible Pumps",
      description: "High-efficiency underwater pumps for deep well applications",
      applications: ["Borewell water extraction", "Deep well irrigation", "Industrial water supply"],
    },
    {
      icon: Zap,
      title: "Openwell Pumps",
      description: "Reliable surface pumps for open well and tank applications",
      applications: ["Open well water lifting", "Tank filling systems", "Residential water supply"],
    },
    {
      icon: Settings,
      title: "Monoblock Pumps",
      description: "Compact single-unit pumps for domestic and light commercial use",
      applications: ["Home water systems", "Garden irrigation", "Small commercial use"],
    },
    {
      icon: Shield,
      title: "Industrial Motors",
      description: "Heavy-duty motors for industrial and agricultural applications",
      applications: ["Manufacturing equipment", "Agricultural machinery", "Industrial automation"],
    },
  ];

  const features = [
    "Authorized dealer for top international brands",
    "Energy-efficient solutions reducing operational costs",
    "Expert consultation for optimal pump selection",
    "Genuine spare parts and accessories available",
    "Comprehensive after-sales support and warranty",
    "Quick delivery and installation services",
  ];

  return (
    <section id="sales" className="py-24 px-4 bg-gradient-to-br from-accent-sales/5 to-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-sales rounded-xl mb-6">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Hablen Pumps & Motors Sales
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Authorized distributors and retailers of top-brand pumps and motors for agricultural, 
            industrial, and domestic applications, including submersible pumps, openwell pumps, and monoblock pumps.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {pumpTypes.map((pump, index) => (
            <Card key={index} className="gradient-card border-0 hover-lift division-sales animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-accent-sales/20 rounded-xl flex items-center justify-center mr-4">
                    <pump.icon className="w-6 h-6 text-accent-sales" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    {pump.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  {pump.description}
                </p>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Applications:</h4>
                  <ul className="space-y-2">
                    {pump.applications.map((application, appIndex) => (
                      <li key={appIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-accent-sales rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{application}</span>
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
          {/* Features */}
          <div className="animate-scale-in">
            <h3 className="font-heading text-3xl font-bold text-foreground mb-8">
              Why Choose Our Products
            </h3>
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent-sales mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">{feature}</p>
                </div>
              ))}
            </div>
            <Button variant="sales" size="lg">
              Browse Pump Catalog
            </Button>
          </div>

          {/* Brands & Stats */}
          <div className="animate-fade-in">
            <h3 className="font-heading text-3xl font-bold text-foreground mb-8">
              Trusted Partnerships
            </h3>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              {[
                { number: "15+", label: "Brand Partners" },
                { number: "1000+", label: "Products Available" },
                { number: "5000+", label: "Satisfied Customers" },
                { number: "24/7", label: "Expert Support" },
              ].map((stat, index) => (
                <Card key={index} className="gradient-card border-0 text-center">
                  <CardContent className="p-6">
                    <div className="text-2xl font-bold text-accent-sales mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="gradient-card border-0">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-4">
                  Our Expertise Covers
                </h4>
                <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <div>• Agricultural pumps</div>
                  <div>• Industrial motors</div>
                  <div>• Domestic water systems</div>
                  <div>• Submersible solutions</div>
                  <div>• Energy-efficient options</div>
                  <div>• Custom configurations</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesSection;