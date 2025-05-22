
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(2, {
    message: "Subject must be at least 2 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log(values);
      toast.success("Message sent successfully! We'll get back to you soon.");
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <section className="py-16 bg-mo-light">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-mo-dark mb-4">Contact Us</h1>
              <p className="text-mo-gray mb-12 max-w-3xl">
                Need parts for your Mo-Blind? Have questions about our products or services? We're here to help!
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="your@email.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                              <Input placeholder="What is this regarding?" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="How can we help you?" 
                                className="min-h-[150px]"
                                {...field} 
                              />
                            </FormControl>
                            <FormDescription>
                              Please be as specific as possible so we can best assist you.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        className="bg-mo-teal hover:bg-mo-teal/90 text-mo-dark font-semibold"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </Form>
                </div>
                
                <div>
                  <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                    <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-start gap-3">
                        <Mail className="h-5 w-5 text-mo-teal mt-1" />
                        <div>
                          <p className="font-semibold">Email</p>
                          <a href="mailto:partners@mo-blind.com" className="text-mo-teal hover:underline">
                            partners@mo-blind.com
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Phone className="h-5 w-5 text-mo-teal mt-1" />
                        <div>
                          <p className="font-semibold">Phone</p>
                          <a href="tel:+15555555555" className="text-mo-teal hover:underline">
                            (555) 555-5555
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-mo-dark text-white rounded-lg shadow-lg p-8">
                    <h3 className="text-xl font-bold mb-4">Parts & Accessories</h3>
                    <p className="mb-6">
                      Need replacement parts for your Mo-Blind? Contact us directly and we'll help you find exactly what you need.
                    </p>
                    <Button 
                      variant="outline" 
                      className="border-white text-white hover:bg-white/10 w-full"
                      asChild
                    >
                      <a href="mailto:parts@mo-blind.com">Request Parts</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
