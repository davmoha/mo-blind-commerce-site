
import { useState } from "react";
import { PRODUCT_SIZES, ADDONS } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useCart } from "@/context/CartContext";
import { Addon } from "@/types";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const ProductSelection = () => {
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedAddons, setSelectedAddons] = useState<Addon[]>([]);
  const { addToCart } = useCart();

  const selectedProduct = selectedProductId !== null 
    ? PRODUCT_SIZES.find(product => product.id === selectedProductId)
    : null;

  const handleAddonToggle = (addon: Addon) => {
    if (selectedAddons.some(a => a.id === addon.id)) {
      setSelectedAddons(selectedAddons.filter(a => a.id !== addon.id));
    } else {
      setSelectedAddons([...selectedAddons, addon]);
    }
  };

  const handleAddToCart = () => {
    if (selectedProduct) {
      addToCart(selectedProduct, quantity, selectedAddons);
    }
  };

  const calculateTotal = () => {
    if (!selectedProduct) return 0;
    
    const productTotal = selectedProduct.price * quantity;
    const addonsTotal = selectedAddons.reduce((sum, addon) => sum + addon.price, 0) * quantity;
    
    return productTotal + addonsTotal;
  };

  return (
    <section id="product-selection" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-mo-dark text-center mb-6">
          Choose Your Perfect Mo-Blind
        </h2>
        <p className="text-center text-mo-gray max-w-2xl mx-auto mb-16">
          Select the blind that fits your needs perfectly. Our five precision-engineered sizes accommodate virtually any waterfowling setup.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative">
            <img 
              src="/lovable-uploads/7852f550-7caf-440e-98d1-e74fd21de296.png" 
              alt="Mo-Blind Product" 
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-mo-dark/70 p-4 rounded-b-lg">
              <p className="text-white text-center">
                Official Launch Coming Fall 2025 - Pre-order Now
              </p>
            </div>
          </div>
          
          {/* Product Selection Form */}
          <div>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-6">Configure Your Mo-Blind</h3>
                
                <div className="mb-8">
                  <h4 className="font-semibold mb-3">1. Select Size</h4>
                  <RadioGroup 
                    value={selectedProductId?.toString() || ""}
                    onValueChange={(value) => setSelectedProductId(Number(value))}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {PRODUCT_SIZES.map((product) => (
                        <div key={product.id} className="flex items-start space-x-2">
                          <RadioGroupItem value={product.id.toString()} id={`size-${product.id}`} />
                          <div className="grid gap-1.5">
                            <Label htmlFor={`size-${product.id}`} className="font-medium">
                              {product.size} - ${product.price}
                            </Label>
                            <p className="text-sm text-gray-500">
                              {product.length} - {product.idealFor}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
                
                <div className="mb-8">
                  <h4 className="font-semibold mb-3">2. Select Add-ons (Optional)</h4>
                  {ADDONS.map((addon) => (
                    <div key={addon.id} className="flex items-start space-x-2 mb-2">
                      <Checkbox 
                        id={`addon-${addon.id}`} 
                        checked={selectedAddons.some(a => a.id === addon.id)}
                        onCheckedChange={() => handleAddonToggle(addon)}
                      />
                      <div className="grid gap-1.5">
                        <label
                          htmlFor={`addon-${addon.id}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {addon.name} - ${addon.price}
                        </label>
                        <p className="text-sm text-gray-500">
                          {addon.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mb-8">
                  <h4 className="font-semibold mb-3">3. Quantity</h4>
                  <div className="flex items-center">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                      disabled={quantity <= 1}
                    >
                      -
                    </Button>
                    <span className="mx-4">{quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </Button>
                  </div>
                </div>
                
                <div className="mb-8 p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>${calculateTotal()}</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-mo-teal hover:bg-mo-teal/90 text-mo-dark font-semibold"
                  size="lg"
                  disabled={selectedProductId === null}
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </Button>
                
                <p className="text-sm text-center mt-4 text-gray-500">
                  Need parts or have questions? <a href="/contact" className="text-mo-teal hover:underline">Contact us</a>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-center">Size Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-mo-beige">
                  <th className="p-3 text-left">Size</th>
                  <th className="p-3 text-left">Length</th>
                  <th className="p-3 text-left">Ideal For</th>
                  <th className="p-3 text-right">Price</th>
                </tr>
              </thead>
              <tbody>
                {PRODUCT_SIZES.map((product) => (
                  <tr key={product.id} className="border-b">
                    <td className="p-3 font-medium">{product.size}</td>
                    <td className="p-3">{product.length}</td>
                    <td className="p-3">{product.idealFor}</td>
                    <td className="p-3 text-right">${product.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSelection;
