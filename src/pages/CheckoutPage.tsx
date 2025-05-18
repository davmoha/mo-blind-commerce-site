
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  address: z.string().min(5, {
    message: "Please enter a valid address.",
  }),
  city: z.string().min(2, {
    message: "Please enter a valid city.",
  }),
  state: z.string().min(2, {
    message: "Please enter a valid state.",
  }),
  zipCode: z.string().min(5, {
    message: "Please enter a valid ZIP code.",
  }),
  notes: z.string().optional(),
});

const CheckoutPage = () => {
  const { items, totalPrice, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      notes: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // In a real implementation, you would send this data to Google Forms
    console.log("Order Details:", {
      customer: values,
      items: items,
      totalPrice: totalPrice,
      orderDate: new Date(),
    });
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Order submitted successfully! We'll contact you to confirm your order.");
      clearCart();
      setIsSubmitting(false);
      navigate("/");
    }, 1500);
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center pt-24">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
            <p className="text-gray-500 mb-8">Add some products to checkout</p>
            <Button 
              className="bg-mo-teal hover:bg-mo-teal/90 text-mo-dark"
              onClick={() => navigate("/")}
            >
              Return to Shop
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <section className="py-12 bg-mo-light">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-mo-dark mb-8">Checkout</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Order Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-bold mb-6">Shipping Information</h2>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>First Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Last Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="john.doe@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input placeholder="(555) 123-4567" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Address</FormLabel>
                            <FormControl>
                              <Input placeholder="123 Main St" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="col-span-2">
                          <FormField
                            control={form.control}
                            name="city"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>City</FormLabel>
                                <FormControl>
                                  <Input placeholder="New York" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <FormField
                          control={form.control}
                          name="state"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>State</FormLabel>
                              <FormControl>
                                <Input placeholder="NY" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="zipCode"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>ZIP Code</FormLabel>
                              <FormControl>
                                <Input placeholder="10001" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="notes"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Order Notes (Optional)</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Any special instructions for your order..." 
                                className="min-h-[100px]"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="pt-4">
                        <p className="text-sm text-gray-500 mb-6">
                          <span className="font-semibold">Note:</span> This is a pre-order for Fall 2025. We'll contact you to confirm your order details and arrange payment.
                        </p>
                        
                        <Button 
                          type="submit" 
                          className="w-full bg-mo-teal hover:bg-mo-teal/90 text-mo-dark font-semibold py-6 text-lg"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Processing..." : "Complete Order"}
                        </Button>
                      </div>
                    </form>
                  </Form>
                </div>
              </div>
              
              {/* Order Summary */}
              <div>
                <div className="bg-white rounded-lg shadow-lg p-8 sticky top-24">
                  <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
                  
                  {items.map((item, index) => (
                    <div key={index} className="mb-4 pb-4 border-b">
                      <div className="flex justify-between">
                        <div>
                          <h4 className="font-semibold">Mo-Blind {item.product.size}</h4>
                          <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                          
                          {item.addons.length > 0 && (
                            <div className="mt-1">
                              <p className="text-xs text-gray-500">Add-ons:</p>
                              <ul className="text-xs text-gray-500">
                                {item.addons.map((addon, addonIndex) => (
                                  <li key={addonIndex}>• {addon.name}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                        
                        <div className="font-semibold">
                          ${item.product.price * item.quantity}
                          {item.addons.length > 0 && (
                            <p className="text-xs text-gray-500 text-right">
                              + ${item.addons.reduce((sum, addon) => sum + addon.price, 0) * item.quantity}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <Separator className="my-4" />
                  
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold">${totalPrice}</span>
                  </div>
                  
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Shipping</span>
                    <span>Free</span>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div className="flex justify-between text-xl font-bold mb-6">
                    <span>Total</span>
                    <span>${totalPrice}</span>
                  </div>
                  
                  <Button 
                    variant="outline"
                    className="w-full"
                    onClick={() => navigate("/#product-selection")}
                  >
                    Continue Shopping
                  </Button>
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

export default CheckoutPage;
