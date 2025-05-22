
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat bg-hunters-pattern">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="container mx-auto px-4 py-24 pt-40 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Revolutionize Your Hunt: <span className="text-mo-teal">Mo-Blind</span> The Automatic Popup Duck Blind
          </h1>
          <p className="text-xl text-white/90 mb-8">
            From setup to takedown in seconds. The world's first fully automatic, weatherproof blind will transform your duck hunting experience. Bring birds in closer than ever before.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-mo-teal hover:bg-mo-teal/90 text-mo-dark font-semibold text-lg px-8"
              asChild
            >
              <a href="#product-selection">Shop Now</a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 text-lg px-8"
              asChild
            >
              <a href="#how-it-works">Watch Demo</a>
            </Button>
          </div>
          <div className="mt-12 p-4 bg-black/50 inline-block rounded-lg">
            <p className="text-white/80 text-lg italic">
              Official Launch Coming Fall 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
