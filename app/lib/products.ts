export interface Product {
  id: number
  name: string
  description: string
  price: number
  originalPrice?: number
  category: string
}

export const products: Product[] = [
  {
    id: 1,
    name: "Be Happy Hoodie",
    description: "Black sweatshirt with fun patches and bead details.",
    price: 120,
    originalPrice: 160,
    category: "Clothing"
  },
  {
    id: 2,
    name: "The Hamsa Hand Dreamer Hoodie",
    description: "Purple and pink upcycled hoodie with star patches.",
    price: 200,
    originalPrice: 225,
    category: "Clothing"
  },
  {
    id: 3,
    name: "Neon Fairy Prom Dress Upcycle",
    description: "White and lime green upcycled prom dress.",
    price: 50,
    originalPrice: 125,
    category: "Clothing"
  },
  {
    id: 4,
    name: "Purple Haze Aura Quartz Necklace",
    description: "Crystal point necklace with purple aura quartz.",
    price: 120,
    originalPrice: 140,
    category: "Accessories"
  },
  {
    id: 5,
    name: "Cosmic Necklace",
    description: "Gold chain necklace with crystal pendant.",
    price: 90,
    originalPrice: 120,
    category: "Accessories"
  },
  {
    id: 6,
    name: "Upcycled Hoodie Set",
    description: "Tie-dye hoodie and pants set with patches.",
    price: 200,
    originalPrice: 275,
    category: "Clothing"
  }
]
