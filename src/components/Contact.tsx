import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 98765 43210", "+91 87654 32109"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@hablengroup.com", "contact@hablengroup.com"],
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["Hablen Group Headquarters", "Business District, City"],
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM"],
    },
  ];

  return (
    <section id="contact" className="py-24 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your next project? Contact us today for expert consultation 
            and personalized solutions across all our business divisions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-6 animate-slide-up">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
              Contact Information
            </h3>
            
            {contactInfo.map((info, index) => (
              <Card key={index} className="gradient-card border-0 hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                        <info.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        {info.title}
                      </h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Quick Links */}
            <Card className="gradient-card border-0">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-4">
                  Quick Service Access
                </h4>
                <div className="space-y-2">
                  {[
                    { name: "Infrastructure Projects", href: "#infra" },
                    { name: "Wood Pressed Oils", href: "#oils" },
                    { name: "Pump Sales", href: "#sales" },
                    { name: "Service & Maintenance", href: "#service" },
                  ].map((service, index) => (
                    <a
                      key={index}
                      href={service.href}
                      className="block text-sm text-muted-foreground hover:text-primary transition-fast"
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-scale-in">
            <Card className="gradient-card border-0">
              <CardContent className="p-8">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Send us a Message
                </h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <Input 
                        placeholder="Your first name"
                        className="bg-background/5 border-border"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <Input 
                        placeholder="Your last name"
                        className="bg-background/5 border-border"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input 
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-background/5 border-border"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone
                    </label>
                    <Input 
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="bg-background/5 border-border"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Service Interest
                    </label>
                    <select className="w-full h-10 px-3 py-2 bg-background/5 border border-border rounded-md text-foreground">
                      <option value="">Select a service</option>
                      <option value="infra">Infrastructure Development</option>
                      <option value="oils">Wood Pressed Oils</option>
                      <option value="sales">Pump & Motor Sales</option>
                      <option value="service">Service & Maintenance</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell us about your project or requirements..."
                      className="bg-background/5 border-border min-h-[120px]"
                    />
                  </div>

                  <Button variant="hero" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;