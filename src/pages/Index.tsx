import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ServicesOverview from "@/components/ServicesOverview";
import InfraSection from "@/components/services/InfraSection";
import OilsSection from "@/components/services/OilsSection";
import SalesSection from "@/components/services/SalesSection";
import ServiceSection from "@/components/services/ServiceSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ServicesOverview />
        <About />
        <InfraSection />
        <OilsSection />
        <SalesSection />
        <ServiceSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
