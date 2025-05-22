
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-16 bg-mo-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Revolutionize Your Hunts?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join the hundreds of hunters who are spending less time setting up and more time bringing birds in close.
          </p>
          <Button 
            size="lg" 
            className="bg-mo-teal hover:bg-mo-teal/90 text-mo-dark font-semibold text-lg px-8"
            asChild
          >
            <a href="#product-selection">Shop Mo-Blind Today</a>
          </Button>
          <p className="mt-4 text-white/60">
            Limited pre-launch inventory available
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
