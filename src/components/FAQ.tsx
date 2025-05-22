
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Will Mo-Blind fit my boat?",
    answer: "Mo-Blind is designed to fit most standard hunting boats. With four available sizes and our adjustable mounting system, we can accommodate everything from small jon boats to larger guided hunting vessels. If you're unsure which size is right for you, contact our support team."
  },
  {
    question: "How long does installation take?",
    answer: "Basic installation can be completed in 5-10 minutes. The blind comes with all necessary hardware and an easy-to-follow instruction manual. Once installed, daily setup takes less than 30 seconds."
  },
  {
    question: "Can I get replacement parts?",
    answer: "Yes, we offer a complete line of replacement parts and accessories. Contact us at partners@mo-blind.com for parts inquiries or special orders."
  },
  {
    question: "What's the warranty coverage?",
    answer: "Mo-Blind comes with a 1-year warranty against defects in materials and workmanship. We also offer a 30-day satisfaction guarantee on all new purchases."
  },
  {
    question: "Is camouflage customizable?",
    answer: "Currently, Mo-Blind comes in our standard waterfowl pattern that's effective across various hunting environments. For custom camo options or commercial quantities, please contact our partnership team."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-mo-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-mo-dark text-center mb-16">
          Frequently Asked Questions
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold text-mo-dark">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-mo-gray">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
