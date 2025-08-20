import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Droplets, Leaf, Heart, Award, CheckCircle } from "lucide-react";

const OilsSection = () => {
  const products = [
    {
      name: "Groundnut Oil",
      description: "Rich in vitamin E and healthy monounsaturated fats",
      benefits: "Heart-healthy, high smoke point",
    },
    {
      name: "Coconut Oil",
      description: "Pure virgin coconut oil with natural antioxidants",
      benefits: "Antimicrobial, metabolism boost",
    },
    {
      name: "Sesame Oil",
      description: "Traditional extraction preserving natural nutrients",
      benefits: "Rich in minerals, anti-inflammatory",
    },
    {
      name: "Mustard Oil",
      description: "Authentic Bengali-style cold-pressed oil",
      benefits: "Antibacterial, improves circulation",
    },
  ];

  const features = [
    "100% chemical-free wooden cold press extraction",
    "Direct farm-to-bottle traceability system",
    "No preservatives, additives, or artificial processing",
    "Traditional methods preserving maximum nutrients",
    "Eco-friendly packaging and sustainable practices",
    "Regular quality testing and purity certification",
  ];

  return (
    <section id="oils" className="py-24 px-4 bg-gradient-to-br from-accent-oils/5 to-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-oils rounded-xl mb-6">
            <Droplets className="w-8 h-8 text-background" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Hablen Wood Pressed Oils
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Producers of high-quality wood and cold-pressed oils using traditional, chemical-free methods. 
            Our focus is on health, sustainability, and authentic taste, supporting both wellness and the environment.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Process & Features */}
          <div className="animate-slide-up">
            <h3 className="font-heading text-3xl font-bold text-foreground mb-8">
              Our Natural Process
            </h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-accent-oils/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-5 h-5 text-accent-oils" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Wooden Cold Press</h4>
                  <p className="text-muted-foreground">Traditional wooden extractors preserve natural flavors and nutrients without heat damage.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-accent-oils/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 text-accent-oils" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Health First</h4>
                  <p className="text-muted-foreground">No chemicals, preservatives, or artificial processing - just pure, natural goodness.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-accent-oils/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-accent-oils" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Premium Quality</h4>
                  <p className="text-muted-foreground">Rigorous quality control ensures every bottle meets our highest standards.</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent-oils mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">{feature}</p>
                </div>
              ))}
            </div>

            <Button variant="oils" size="lg" className="mt-8">
              Shop Premium Oils
            </Button>
          </div>

          {/* Products */}
          <div className="animate-scale-in">
            <h3 className="font-heading text-3xl font-bold text-foreground mb-8">
              Our Oil Varieties
            </h3>
            <div className="space-y-4">
              {products.map((product, index) => (
                <Card key={index} className="gradient-card border-0 hover-lift division-oils">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-foreground mb-2">
                      {product.name}
                    </h4>
                    <p className="text-muted-foreground mb-3">
                      {product.description}
                    </p>
                    <div className="text-sm font-medium text-accent-oils">
                      {product.benefits}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Natural & Pure",
              description: "100% natural extraction with no chemical processing",
              icon: Leaf,
            },
            {
              title: "Nutrient Rich",
              description: "Cold-press method preserves vitamins and minerals",
              icon: Heart,
            },
            {
              title: "Sustainable",
              description: "Eco-friendly production supporting local farmers",
              icon: Award,
            },
          ].map((benefit, index) => (
            <Card key={index} className="gradient-card border-0 text-center hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-accent-oils/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-accent-oils" />
                </div>
                <h4 className="font-heading text-xl font-bold text-foreground mb-3">
                  {benefit.title}
                </h4>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OilsSection;