
import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-mo-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img 
              src="/lovable-uploads/0b054249-8a58-4035-931e-a300e4ff00a2.png" 
              alt="Mo-Blind Logo" 
              className="h-16 mb-4" 
            />
            <p className="mt-4 text-gray-300 max-w-md">
              Revolutionizing duck hunting with our innovative automatic popup duck blinds. Bringing you closer to nature, one hunt at a time.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-mo-teal">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-mo-teal transition">Home</Link>
              </li>
              <li>
                <Link to="/#features" className="text-gray-300 hover:text-mo-teal transition">Features</Link>
              </li>
              <li>
                <Link to="/#how-it-works" className="text-gray-300 hover:text-mo-teal transition">How It Works</Link>
              </li>
              <li>
                <Link to="/#testimonials" className="text-gray-300 hover:text-mo-teal transition">Testimonials</Link>
              </li>
              <li>
                <Link to="/partner" className="text-gray-300 hover:text-mo-teal transition">Become a Partner</Link>
              </li>
              <li>
                <Link to="/#faq" className="text-gray-300 hover:text-mo-teal transition">FAQ</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-mo-teal">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-mo-teal mt-1" />
                <a href="mailto:partners@mo-blind.com" className="text-gray-300 hover:text-mo-teal transition">
                  partners@mo-blind.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-mo-teal mt-1" />
                <a href="tel:+15555555555" className="text-gray-300 hover:text-mo-teal transition">
                  (555) 555-5555
                </a>
              </div>
              <p className="pt-4 text-gray-300">
                <Link to="/contact" className="text-mo-teal hover:underline">
                  Need parts or have questions? Contact us
                </Link>
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {currentYear} Mo-Blind. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-mo-teal">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-gray-400 hover:text-mo-teal">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
