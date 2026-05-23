'use client'

import { useState } from 'react'
import { ProductCard } from '../components/ProductCard'
import { CartDrawer } from '../components/CartDrawer'
import { products, Product } from '../lib/products'
import { ShoppingBag } from 'lucide-react'

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [cartOpen, setCartOpen] = useState(false)
  const [cart, setCart] = useState<Product[]>([])

  const categories = ['All', 'Necklaces', 'Bracelets', 'Earrings', 'Pendants']

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory)

  const addToCart = (product: Product) => {
    setCart(prev => [...prev, product])
    setCartOpen(true)
  }

  const removeFromCart = (index: number) => {
    setCart(prev => prev.filter((_, i) => i !== index))
  }

  return (
    <div className="min-h-screen bg-[#F8F5F2]">
      <nav className="border-b border-[#E5DFD3] bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <a href="/" className="font-semibold tracking-tight text-xl">Crafty 528 Hz</a>
          
          <button 
            onClick={() => setCartOpen(true)}
            className="flex items-center gap-2 px-5 py-2 rounded-full border border-[#E5DFD3] hover:bg-white transition-colors"
          >
            <ShoppingBag size={18} />
            <span>Cart ({cart.length})</span>
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 pt-12 pb-20">
        <div className="flex justify-between items-end mb-10">
          <div>
            <div className="text-[#C5A26F] text-sm tracking-[2px]">THE COLLECTION</div>
            <h1 className="text-6xl font-light tracking-[-2px]">All Jewelry</h1>
          </div>
          
          <div className="flex gap-2 flex-wrap">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm transition-all ${selectedCategory === cat 
                  ? 'bg-[#4A3F6B] text-white' 
                  : 'bg-white border border-[#E5DFD3] hover:bg-[#F1EDE5]'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <ProductCard 
              key={index} 
              product={product} 
              onAddToCart={() => addToCart(product)} 
            />
          ))}
        </div>
      </div>

      <CartDrawer 
        isOpen={cartOpen} 
        onClose={() => setCartOpen(false)} 
        cart={cart} 
        onRemove={removeFromCart}
      />
    </div>
  )
}