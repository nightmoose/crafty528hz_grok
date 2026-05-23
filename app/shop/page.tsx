'use client'

import { useState } from 'react'
import { ProductCard } from '../components/ProductCard'
import { CartDrawer } from '../components/CartDrawer'
import { products } from '../lib/products'
import { ShoppingBag } from 'lucide-react'

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [cartOpen, setCartOpen] = useState(false)
  const [cart, setCart] = useState<any[]>([])

  const categories = ['All', 'Accessories', 'Clothing', 'Earrings']

  const filtered = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory)

  const addToCart = (p: any) => {
    setCart([...cart, p])
    setCartOpen(true)
  }

  const removeFromCart = (index: number) => {
    setCart(cart.filter((_, i) => i !== index))
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Top Nav */}
      <nav className="border-b sticky top-0 z-50 bg-white">
        <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">
          <a href="/" className="font-bold text-2xl tracking-tighter">Crafty 528 Hz</a>
          <button onClick={() => setCartOpen(true)} className="flex items-center gap-2 px-4 py-2 rounded-2xl border text-sm">
            <ShoppingBag size={18} />
            <span>Cart ({cart.length})</span>
          </button>
        </div>
      </nav>

      {/* Colorful Header - matches screenshot vibe */}
      <div className="bg-yellow-300 py-8 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <div className="text-[42px] font-black tracking-[-1.5px] text-[#E11D48]">
            crafty 528hz
          </div>
          <p className="text-xs tracking-[3px] text-gray-700 mt-1 font-medium">UPCYCLED • COLORFUL • ONE OF A KIND</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 pt-6 pb-20">
        {/* Mobile Category Pills */}
        <div className="lg:hidden mb-5">
          <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm border whitespace-nowrap flex-shrink-0 transition-all ${selectedCategory === cat ? 'bg-yellow-300 border-yellow-400 font-semibold' : 'bg-white border-gray-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-baseline mb-4">
          <div>
            <h1 className="text-3xl font-semibold tracking-tighter">All Products</h1>
            <p className="text-sm text-gray-500">{filtered.length} items</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-8">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={() => addToCart(product)} />
          ))}
        </div>
      </div>

      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} cart={cart} onRemove={removeFromCart} />
    </div>
  )
}