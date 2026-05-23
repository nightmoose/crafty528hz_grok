'use client'

import { useState } from 'react'
import { ProductCard } from '../components/ProductCard'
import { CartDrawer } from '../components/CartDrawer'
import { products } from '../lib/products'
import { ShoppingBag } from 'lucide-react'

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [cartOpen, setCartOpen] = useState(false)
  const [cart, setCart] = useState<any[]>([])

  const categories = ['All', 'Accessories', 'Clothing', 'Earrings', 'April Drop']

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory || selectedCategory === 'All')

  const addToCart = (product: any) => {
    setCart(prev => [...prev, product])
    setCartOpen(true)
  }

  const removeFromCart = (index: number) => {
    setCart(prev => prev.filter((_, i) => i !== index))
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <nav className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="font-bold text-2xl tracking-tighter">Crafty 528 Hz</a>
          
          <button 
            onClick={() => setCartOpen(true)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border text-sm hover:bg-gray-50 transition-colors"
          >
            <ShoppingBag size={18} />
            <span>Cart ({cart.length})</span>
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 pt-8 pb-20">
        {/* Mobile Category Pills */}
        <div className="lg:hidden mb-6">
          <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm border transition-all ${selectedCategory === cat 
                  ? 'bg-yellow-400 border-yellow-400 font-medium' 
                  : 'bg-white border-gray-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <div className="w-52 hidden lg:block pt-1">
            <div className="text-xs font-semibold tracking-[1px] text-gray-500 mb-3 px-1">SHOP BY CATEGORY</div>
            <div className="space-y-1">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`w-full text-left px-4 py-2.5 text-sm rounded-xl transition-all ${selectedCategory === cat 
                    ? 'bg-yellow-100 font-medium' 
                    : 'hover:bg-gray-100 text-gray-700'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-y-3 mb-6">
              <div>
                <h1 className="text-3xl font-semibold tracking-tighter">All Products</h1>
                <p className="text-gray-500 text-sm mt-0.5">Showing {filteredProducts.length} items</p>
              </div>
              
              <select className="border rounded-xl px-4 py-2 text-sm bg-white w-full sm:w-auto">
                <option>Sort: Most popular</option>
                <option>Sort: Newest first</option>
                <option>Sort: Price low to high</option>
              </select>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {filteredProducts.map((product, index) => (
                <ProductCard 
                  key={index} 
                  product={product} 
                  onAddToCart={() => addToCart(product)} 
                />
              ))}
            </div>
          </div>
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