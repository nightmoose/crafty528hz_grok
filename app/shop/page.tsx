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

  const categories = ['All', 'Accessories', 'Clothing', 'Earrings', 'April Drop']

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
      <nav className="border-b sticky top-0 z-50 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <a href="/" className="font-bold text-2xl tracking-tighter">Crafty 528 Hz</a>
          <button onClick={() => setCartOpen(true)} className="flex items-center gap-2 px-5 py-2.5 rounded-2xl border text-sm">
            <ShoppingBag size={18} />
            <span>Cart ({cart.length})</span>
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 pt-8 pb-16">
        {/* Mobile Category Navigation - Proper horizontal scroll */}
        <div className="lg:hidden mb-6">
          <div className="flex gap-2 overflow-x-auto pb-2 snap-x">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm border transition-all whitespace-nowrap snap-start ${selectedCategory === cat ? 'bg-yellow-300 border-yellow-300 font-semibold' : 'bg-white border-gray-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <div className="w-56 hidden lg:block">
            <div className="text-xs tracking-[1.5px] text-gray-500 mb-3 px-1">CATEGORIES</div>
            <div className="flex flex-col gap-1">
              {categories.map(cat => (
                <button key={cat} onClick={() => setSelectedCategory(cat)} className={`text-left px-4 py-2.5 rounded-2xl text-sm mb-1 transition-all ${selectedCategory === cat ? 'bg-yellow-100 font-medium' : 'hover:bg-gray-50'}`}>
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1">
            <div className="flex justify-between items-end mb-6">
              <div>
                <h1 className="text-4xl font-semibold tracking-tighter">All Products</h1>
                <p className="text-sm text-gray-500 mt-1">Showing {filtered.length} items</p>
              </div>
              <select className="text-sm border rounded-2xl px-4 py-2">
                <option>Most popular</option>
              </select>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8">
              {filtered.map((product, i) => (
                <ProductCard key={i} product={product} onAddToCart={() => addToCart(product)} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} cart={cart} onRemove={removeFromCart} />
    </div>
  )
}