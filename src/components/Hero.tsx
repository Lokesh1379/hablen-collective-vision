import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 glass rounded-full mb-8">
            <span className="text-sm font-medium text-foreground">
              Leading Conglomerate Since 2010
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Together, We Build.
            <br />
            <span className="gradient-primary bg-clip-text text-transparent">
              Together, We Grow.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Hablen Group is a dynamic conglomerate delivering excellence across infrastructure development, 
            premium wood-pressed oils, and comprehensive pump solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" className="group">
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="glass" size="xl" className="group">
              <Play className="mr-2 h-5 w-5" />
              Watch Story
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-white/10">
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "15+", label: "Years Experience" },
              { number: "50+", label: "Expert Team" },
              { number: "4", label: "Business Divisions" },
            ].map((stat, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent-sales/10 rounded-full blur-xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-accent-infra/10 rounded-full blur-xl animate-float" style={{ animationDelay: "4s" }} />
    </section>
  );
};

export default Hero;