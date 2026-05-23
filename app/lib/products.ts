export interface Product {
  id: number
  slug: string
  name: string
  description: string
  price: number
  originalPrice?: number
  category: string
  image?: string
}

export const products: Product[] = [
  {
    id: 1,
    slug: "be-happy-hoodie",
    name: "Be Happy Hoodie",
    description: "Black sweatshirt with fun patches and bead details. Upcycled with love.",
    price: 120,
    originalPrice: 160,
    category: "Clothing",
    image: "https://picsum.photos/id/1005/600/600"
  },
  {
    id: 2,
    slug: "hamsa-hand-dreamer-hoodie",
    name: "The Hamsa Hand Dreamer Hoodie",
    description: "Purple and pink upcycled hoodie with star patches and positive vibes.",
    price: 200,
    originalPrice: 225,
    category: "Clothing",
    image: "https://picsum.photos/id/1011/600/600"
  },
  {
    id: 3,
    slug: "neon-fairy-prom-dress-upcycle",
    name: "Neon Fairy Prom Dress Upcycle",
    description: "White and lime green upcycled prom dress with delicate details.",
    price: 50,
    originalPrice: 125,
    category: "Clothing",
    image: "https://picsum.photos/id/106/600/600"
  },
  {
    id: 4,
    slug: "purple-haze-aura-quartz-necklace",
    name: "Purple Haze Aura Quartz Necklace",
    description: "Stunning crystal point necklace featuring purple aura quartz.",
    price: 120,
    originalPrice: 140,
    category: "Accessories",
    image: "https://picsum.photos/id/201/600/600"
  },
  {
    id: 5,
    slug: "cosmic-necklace",
    name: "Cosmic Necklace",
    description: "Gold chain necklace with crystal pendant and celestial charms.",
    price: 90,
    originalPrice: 120,
    category: "Accessories",
    image: "https://picsum.photos/id/251/600/600"
  },
  {
    id: 6,
    slug: "upcycled-hoodie-set",
    name: "Upcycled Hoodie Set",
    description: "Tie-dye hoodie and pants set with patches and colorful accents.",
    price: 200,
    originalPrice: 275,
    category: "Clothing",
    image: "https://picsum.photos/id/160/600/600"
  }
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug)
}
