import { Button } from "@/components/ui/button";
import { Building2, Droplets, Zap, Wrench, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const divisions = [
    { name: "Hablen Infra", icon: Building2, href: "#infra" },
    { name: "Wood Pressed Oils", icon: Droplets, href: "#oils" },
    { name: "Pump Sales", icon: Zap, href: "#sales" },
    { name: "Pump Service", icon: Wrench, href: "#service" },
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
    { name: "Careers", href: "#careers" },
    { name: "News", href: "#news" },
  ];

  return (
    <footer className="gradient-card border-t border-white/10">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">H</span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-foreground">Hablen Group</h3>
                <p className="text-xs text-muted-foreground">Building Excellence</p>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Together, We Build. Together, We Grow. A dynamic conglomerate delivering 
              excellence across infrastructure, natural products, and industrial solutions.
            </p>

            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">info@hablengroup.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span className="text-muted-foreground">Hablen Group Headquarters<br />Business District, City</span>
              </div>
            </div>
          </div>

          {/* Business Divisions */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-6">
              Our Divisions
            </h4>
            <div className="space-y-3">
              {divisions.map((division, index) => (
                <a
                  key={index}
                  href={division.href}
                  className="flex items-center space-x-3 text-sm text-muted-foreground hover:text-primary transition-fast group"
                >
                  <division.icon className="w-4 h-4 group-hover:text-primary" />
                  <span>{division.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-6">
              Quick Links
            </h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-sm text-muted-foreground hover:text-primary transition-fast"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-6">
              Stay Updated
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to our newsletter for updates on projects, products, and industry insights.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-background/5 border border-border rounded-md text-foreground text-sm"
              />
              <Button variant="hero" size="sm" className="w-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 Hablen Group. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-muted-foreground hover:text-primary transition-fast">
                Privacy Policy
              </a>
              <a href="#terms" className="text-muted-foreground hover:text-primary transition-fast">
                Terms of Service
              </a>
              <a href="#cookies" className="text-muted-foreground hover:text-primary transition-fast">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;