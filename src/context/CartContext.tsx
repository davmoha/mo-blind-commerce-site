
import React, { createContext, useContext, useState } from "react";
import { CartItem, Addon, ProductDetails } from "../types";
import { toast } from "sonner";

interface CartContextType {
  items: CartItem[];
  addToCart: (product: ProductDetails, quantity: number, addons: Addon[]) => void;
  removeFromCart: (itemIndex: number) => void;
  updateQuantity: (itemIndex: number, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (product: ProductDetails, quantity: number, addons: Addon[] = []) => {
    setItems((prevItems) => {
      // Check if product already in cart
      const existingItemIndex = prevItems.findIndex(
        (item) => item.product.id === product.id
      );

      if (existingItemIndex >= 0) {
        // Update existing item
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += quantity;
        updatedItems[existingItemIndex].addons = addons;
        toast.success("Cart updated successfully");
        return updatedItems;
      } else {
        // Add new item
        toast.success("Added to cart successfully");
        return [...prevItems, { product, quantity, addons }];
      }
    });
  };

  const removeFromCart = (itemIndex: number) => {
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems.splice(itemIndex, 1);
      toast.info("Item removed from cart");
      return updatedItems;
    });
  };

  const updateQuantity = (itemIndex: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemIndex);
      return;
    }

    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[itemIndex].quantity = quantity;
      return updatedItems;
    });
  };

  const clearCart = () => {
    setItems([]);
    toast.info("Cart cleared");
  };

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  
  const totalPrice = items.reduce((total, item) => {
    // Base product price * quantity
    const productTotal = item.product.price * item.quantity;
    
    // Add addons prices
    const addonsTotal = item.addons.reduce((sum, addon) => sum + addon.price, 0) * item.quantity;
    
    return total + productTotal + addonsTotal;
  }, 0);

  return (
    <CartContext.Provider 
      value={{ 
        items, 
        addToCart, 
        removeFromCart, 
        updateQuantity, 
        clearCart,
        totalItems,
        totalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
