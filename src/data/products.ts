
import { Addon, ProductDetails } from "../types";

export const PRODUCT_SIZES: ProductDetails[] = [
  {
    id: 1,
    size: "Small",
    length: "12 ft",
    idealFor: "Compact & light applications, shallow craft",
    price: 500,
  },
  {
    id: 2,
    size: "Medium",
    length: "16 ft",
    idealFor: "Standard Jon Boats and skiffs",
    price: 600,
  },
  {
    id: 3,
    size: "Large",
    length: "24 ft",
    idealFor: "Larger Jon Boats or multi-hunter boats",
    price: 700,
  },
  {
    id: 4,
    size: "Extra Large",
    length: "32 ft",
    idealFor: "Commercial guide operations and larger vessels",
    price: 800,
  },
];

export const ADDONS: Addon[] = [
  {
    id: 1,
    name: "Adjustable Ground Anchor System",
    description: "Securely anchor your blind in various terrain conditions",
    price: 125,
  },
  {
    id: 2,
    name: "Carrying Bag",
    description: "Durable water-resistant bag for easy transport and storage",
    price: 75,
  },
];
