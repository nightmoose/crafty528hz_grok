export interface Product {
  id: number
  name: string
  description: string
  price: number
  category: string
}

export const products: Product[] = [
  {
    id: 1,
    name: "528 Hz Heart Pendant",
    description: "Sterling silver pendant tuned to the love frequency. A daily reminder of alignment.",
    price: 68,
    category: "Pendants"
  },
  {
    id: 2,
    name: "Rose Quartz Necklace",
    description: "Delicate chain with natural rose quartz. Opens the heart chakra.",
    price: 52,
    category: "Necklaces"
  },
  {
    id: 3,
    name: "Amethyst Harmony Bracelet",
    description: "Hand-knotted amethyst beads for calm and intuition.",
    price: 45,
    category: "Bracelets"
  },
  {
    id: 4,
    name: "Golden Frequency Earrings",
    description: "Subtle gold-plated hoops carrying 528 Hz intention.",
    price: 38,
    category: "Earrings"
  },
  {
    id: 5,
    name: "Lapis Lazuli Wisdom Necklace",
    description: "Deep blue lapis with gold accents. For truth and clarity.",
    price: 78,
    category: "Necklaces"
  },
  {
    id: 6,
    name: "Moonstone Glow Bracelet",
    description: "Iridescent moonstone for new beginnings and feminine energy.",
    price: 49,
    category: "Bracelets"
  },
  {
    id: 7,
    name: "Crystal Point Earrings",
    description: "Raw crystal points on delicate chains. Grounding and elevating.",
    price: 42,
    category: "Earrings"
  },
  {
    id: 8,
    name: "Infinite Love Ring",
    description: "Simple band engraved with the 528 Hz symbol. Everyday alignment.",
    price: 65,
    category: "Pendants" // can change to Rings later
  }
]
