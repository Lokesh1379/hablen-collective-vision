import { Button } from "@/components/ui/button";
import { Target, Eye, Award, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To deliver innovative, sustainable solutions across diverse industries while fostering growth and excellence in every project we undertake.",
    },
    {
      icon: Eye,
      title: "Our Vision", 
      description: "To be the leading conglomerate recognized for quality, reliability, and transformative impact across infrastructure and essential services.",
    },
    {
      icon: Award,
      title: "Our Values",
      description: "Integrity, innovation, sustainability, and customer-centricity drive everything we do, ensuring lasting partnerships and exceptional outcomes.",
    },
    {
      icon: Users,
      title: "Our Team",
      description: "A diverse group of industry experts, engineers, and professionals united by passion for excellence and commitment to client success.",
    },
  ];

  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Hablen Group
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Since our inception, Hablen Group has grown from a vision of excellence 
            into a diversified conglomerate that shapes industries and communities.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Story */}
          <div className="animate-slide-up">
            <h3 className="font-heading text-3xl font-bold text-foreground mb-6">
              Building Excellence Since 2010
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hablen Group began with a simple yet powerful belief: that collaboration and 
                innovation can transform industries and improve lives. What started as a focused 
                infrastructure company has evolved into a dynamic conglomerate spanning multiple sectors.
              </p>
              <p>
                Today, we operate four specialized divisions that work synergistically to deliver 
                comprehensive solutions. From constructing critical infrastructure to producing 
                premium natural oils and providing essential pump solutions, our diverse portfolio 
                reflects our commitment to meeting varied market needs.
              </p>
              <p>
                Our approach is rooted in sustainability, quality, and long-term partnerships. 
                We don't just build projects or deliver products—we create lasting value for 
                our clients, communities, and stakeholders.
              </p>
            </div>
            
            <div className="mt-8">
              <Button variant="hero" size="lg">
                Discover Our Journey
              </Button>
            </div>
          </div>

          {/* Stats & Achievements */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-scale-in">
            {[
              { number: "500+", label: "Successful Projects", color: "text-accent-infra" },
              { number: "15+", label: "Years of Excellence", color: "text-accent-oils" },
              { number: "50+", label: "Team Members", color: "text-accent-sales" },
              { number: "100%", label: "Client Satisfaction", color: "text-accent-service" },
            ].map((achievement, index) => (
              <div 
                key={index}
                className="gradient-card p-6 rounded-xl text-center hover-lift"
              >
                <div className={`text-4xl font-bold mb-2 ${achievement.color}`}>
                  {achievement.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div 
              key={index}
              className="gradient-card p-6 rounded-xl text-center hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 gradient-primary rounded-xl mb-4">
                <value.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-heading text-lg font-semibold text-foreground mb-3">
                {value.title}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;