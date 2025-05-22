
import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import ProductSelection from "@/components/ProductSelection";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CallToAction from "@/components/CallToAction";
import PartnerCTA from "@/components/PartnerCTA";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Statistics />
        <HowItWorks />
        <Features />
        <ProductSelection />
        <Testimonials />
        <FAQ />
        <PartnerCTA />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
