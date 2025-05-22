
export type ProductSize = "Small" | "Medium" | "Large" | "Extra Large";

export interface ProductDetails {
  id: number;
  size: ProductSize;
  length: string;
  idealFor: string;
  price: number;
}

export interface Addon {
  id: number;
  name: string;
  description: string;
  price: number;
}

export interface CartItem {
  product: ProductDetails;
  quantity: number;
  addons: Addon[];
}

export interface Partner {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  message: string;
}
