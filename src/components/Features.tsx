
import { Check } from "lucide-react";

const features = [
  {
    icon: "⚙️",
    title: "Adaptive Adjustment",
    description: "Specialized patented design sets up in seconds, with customizable height and width settings.",
  },
  {
    icon: "☂️",
    title: "Weather Resistant",
    description: "Premium 600D waterproof material withstands rain, snow, and wind specifications up to 40mph.",
  },
  {
    icon: "🔍",
    title: "No Sag Design",
    description: "Rigid frame prevents sagging even after hours of use, unlike old-style popup blinds that collapse in on hunters.",
  },
  {
    icon: "🎯",
    title: "360° Shooting",
    description: "Strategic shooting ports enable complete field of view without compromising concealment.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-mo-dark text-center mb-16">
          Game-Changing Features
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-mo-dark mb-3">{feature.title}</h3>
              <p className="text-mo-gray">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <div className="bg-mo-amber/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-mo-dark mb-6">
              Every Mo-Blind includes:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Complete popup blind system with frame",
                "Premium camouflage cover",
                "Installation hardware",
                "Quick-setup instructional guide",
                "1-year warranty on all mechanical components",
                "30-day satisfaction guarantee"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="text-mo-teal min-w-[20px]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
