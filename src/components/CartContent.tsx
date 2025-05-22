
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Trash2, X, Plus, Minus } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";

const CartContent = () => {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="h-full flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <p className="text-gray-500 mb-8">Add items to get started</p>
        <Button 
          className="bg-mo-teal hover:bg-mo-teal/90 text-mo-dark"
          onClick={() => navigate("/#product-selection")}
        >
          Shop Now
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold">Your Cart ({items.length})</h3>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={clearCart} 
          className="text-gray-500 hover:text-red-500"
        >
          Clear All
        </Button>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        {items.map((item, index) => (
          <div key={index} className="mb-6 pb-6 border-b">
            <div className="flex justify-between">
              <div>
                <h4 className="font-bold">Mo-Blind {item.product.size}</h4>
                <p className="text-sm text-gray-500">Length: {item.product.length}</p>
                <p className="text-sm text-gray-500">Ideal for: {item.product.idealFor}</p>
                
                {item.addons.length > 0 && (
                  <div className="mt-2">
                    <p className="text-sm font-semibold">Add-ons:</p>
                    <ul className="text-xs text-gray-500">
                      {item.addons.map((addon, addonIndex) => (
                        <li key={addonIndex}>
                          • {addon.name} (+${addon.price})
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => removeFromCart(index)} 
                className="text-gray-400 hover:text-red-500"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center border rounded-md">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => updateQuantity(index, item.quantity - 1)}
                  className="h-8 w-8"
                >
                  <Minus className="h-3 w-3" />
                </Button>
                <span className="w-8 text-center">{item.quantity}</span>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => updateQuantity(index, item.quantity + 1)}
                  className="h-8 w-8"
                >
                  <Plus className="h-3 w-3" />
                </Button>
              </div>
              
              <div className="font-semibold">
                ${item.product.price * item.quantity}
                {item.addons.length > 0 && (
                  <span className="text-sm text-gray-500">
                    {" + $" + item.addons.reduce((sum, addon) => sum + addon.price, 0) * item.quantity + " add-ons"}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-auto">
        <Separator className="my-4" />
        <div className="flex justify-between text-lg font-bold mb-4">
          <span>Total</span>
          <span>${totalPrice}</span>
        </div>
        <Button 
          className="w-full bg-mo-teal hover:bg-mo-teal/90 text-mo-dark"
          onClick={() => navigate("/checkout")}
        >
          Checkout
        </Button>
        <p className="text-xs text-center mt-4 text-gray-500">
          Shipping calculated at checkout
        </p>
      </div>
    </div>
  );
};

export default CartContent;
