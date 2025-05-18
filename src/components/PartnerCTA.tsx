
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PartnerCTA = () => {
  return (
    <section className="py-16 bg-mo-amber/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-lg p-8 shadow-lg">
          <div className="md:w-2/3">
            <h2 className="text-2xl md:text-3xl font-bold text-mo-dark mb-4">
              Want to Become a Mo-Blind Partner?
            </h2>
            <p className="text-mo-gray mb-4">
              Join our network of retailers, guides, and distributors. Get exclusive wholesale pricing and early access to new products.
            </p>
            <p className="text-mo-gray">
              We're looking for partners who share our passion for improving the waterfowl hunting experience.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <Button 
              className="bg-mo-teal hover:bg-mo-teal/90 text-mo-dark font-semibold px-8 py-6 text-lg"
              asChild
            >
              <Link to="/partner">Become a Partner</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerCTA;
