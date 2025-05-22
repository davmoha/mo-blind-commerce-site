
const testimonials = [
  {
    quote: "I shot my limit the first morning!",
    author: "Jake R., Nebraska",
    rating: 5
  },
  {
    quote: "Trusted by Guides",
    author: "Professional Guide LLC, Kansas",
    rating: 5
  },
  {
    quote: "Best blind I've used in 25 years of hunting",
    author: "Mark T., Missouri",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-mo-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Real Results: What Hunters Say
        </h2>
        <p className="text-white/70 text-center mb-16 max-w-2xl mx-auto">
          Don't just take our word for it - hear from hunters across the country who are transforming their experience with Mo-Blind
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
              <p className="text-sm text-mo-gray">{testimonial.author}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-white/70 text-xl">
            4.9/5 Average Rating from hunters across the country
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
