
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import CartContent from "./CartContent";

const Header = () => {
  const { totalItems } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-mo-dark/90 py-2 shadow-lg backdrop-blur-sm" 
          : "bg-mo-dark/60 py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="relative flex items-center">
          <img 
            src="/lovable-uploads/0b054249-8a58-4035-931e-a300e4ff00a2.png" 
            alt="Mo-Blind Logo" 
            className="h-12 md:h-16" 
          />
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-white hover:text-mo-teal transition">Home</Link>
          <Link to="/#features" className="text-white hover:text-mo-teal transition">Features</Link>
          <Link to="/#how-it-works" className="text-white hover:text-mo-teal transition">How It Works</Link>
          <Link to="/#testimonials" className="text-white hover:text-mo-teal transition">Testimonials</Link>
          <Link to="/#faq" className="text-white hover:text-mo-teal transition">FAQ</Link>
          <Link to="/partner" className="text-white hover:text-mo-teal transition">Become a Partner</Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-6 w-6 text-white" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-mo-teal text-mo-dark text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-md overflow-y-auto">
              <CartContent />
            </SheetContent>
          </Sheet>
          
          <Button 
            className="bg-mo-teal hover:bg-mo-teal/90 text-mo-dark font-semibold hidden md:flex"
            asChild
          >
            <a href="#product-selection">Shop Now</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
