export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Classic White Sneakers",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400",
    category: "Footwear",
    description: "Timeless white sneakers for everyday comfort"
  },
  {
    id: 2,
    name: "Leather Backpack",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
    category: "Bags",
    description: "Premium leather backpack with laptop compartment"
  },
  {
    id: 3,
    name: "Minimalist Watch",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    category: "Accessories",
    description: "Elegant timepiece with genuine leather strap"
  },
  {
    id: 4,
    name: "Wireless Headphones",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    category: "Electronics",
    description: "Premium sound with active noise cancellation"
  },
  {
    id: 5,
    name: "Cotton T-Shirt",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    category: "Clothing",
    description: "Soft organic cotton casual tee"
  },
  {
    id: 6,
    name: "Sunglasses",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400",
    category: "Accessories",
    description: "UV protection with polarized lenses"
  },
  {
    id: 7,
    name: "Running Shoes",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
    category: "Footwear",
    description: "Lightweight and breathable for maximum performance"
  },
  {
    id: 8,
    name: "Denim Jacket",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400",
    category: "Clothing",
    description: "Classic denim jacket with modern fit"
  }
];
