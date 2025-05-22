
const steps = [
  {
    title: "Unpack",
    description: "Simply secure the blind to your boat/platform. Basic installation takes 5 minutes.",
  },
  {
    title: "Deploy",
    description: "Pull the quick-release cord & watch as the frame instantly pops up."
  },
  {
    title: "Hunt",
    description: "Blind deploys completely in under 30 seconds - no tools or complicated assembly required."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-mo-beige">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-mo-dark text-center mb-16">
          How It Works
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-mo-amber text-white font-bold rounded-full w-12 h-12 flex items-center justify-center mb-6 text-xl">
                {index + 1}
              </div>
              <h3 className="text-2xl font-bold text-mo-dark mb-3">{step.title}</h3>
              <p className="text-mo-gray">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-mo-dark rounded-lg p-6 md:p-10 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Lightning-quick operation - the solution every hunter has been waiting for
            </h3>
            <p className="text-white/80">
              Our patented blind design folds down easily into your boat or hunting spot when not in use. When you're ready to hunt, a simple pull of the release transforms it into your perfect blind.
            </p>
          </div>
          <div className="md:w-1/2 aspect-video">
            <div className="rounded-lg bg-mo-amber/30 h-full flex items-center justify-center">
              <p className="text-white text-xl">Video Demo Coming Soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
