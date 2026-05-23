'use client'

import Link from 'next/link'
import { products } from '../lib/products'
import { ShoppingBag } from 'lucide-react'

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 text-white">
      {/* Top Nav */}
      <nav className="border-b border-white/20 sticky top-0 z-50 bg-black/30 backdrop-blur">
        <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">
          <a href="/" className="font-bold text-2xl tracking-tighter">Crafty 528 Hz</a>
          <a href="/shop" className="flex items-center gap-2 px-4 py-2 rounded-2xl border border-white/30 text-sm">
            <ShoppingBag size={18} />
            <span>Cart</span>
          </a>
        </div>
      </nav>

      {/* Big Colorful Header */}
      <div className="py-10 px-6 text-center border-b border-white/20">
        <div className="max-w-xl mx-auto">
          <div className="text-[52px] font-black tracking-[-2px] text-white leading-none">
            crafty 528hz
          </div>
          <p className="text-xs tracking-[3px] text-white/80 mt-2 font-medium">
            UPCYCLED • COLORFUL • ONE OF A KIND
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 pt-6 pb-20">
        {/* Category Pills */}
        <div className="flex gap-2 overflow-x-auto pb-6 -mx-1 px-1">
          {['All Products', 'Accessories', 'Clothing', 'Earrings'].map((cat, i) => (
            <div 
              key={i}
              className={`px-5 py-2 rounded-full text-sm whitespace-nowrap flex-shrink-0 ${i === 0 ? 'bg-white text-purple-700' : 'bg-white/10 text-white'}`}
            >
              {cat}
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center mb-6">
          <p className="text-sm">Showing {products.length} items</p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-5">
          {products.map((product) => {
            const hasSale = !!product.originalPrice
            const discount = hasSale 
              ? Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100) 
              : 0

            return (
              <Link key={product.id} href={`/shop/${product.slug}`} className="group">
                <div className="relative aspect-[4/3] bg-white/10 rounded-2xl overflow-hidden">
                  {product.image ? (
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white/40 text-xs">IMAGE</div>
                  )}
                  {hasSale && (
                    <div className="absolute top-3 right-3 bg-white text-purple-700 text-[10px] font-bold px-2.5 py-1 rounded-full">
                      -{discount}%
                    </div>
                  )}
                </div>

                <div className="mt-3">
                  <h3 className="font-medium text-[15px] tracking-tight">{product.name}</h3>
                  <div className="flex items-baseline gap-2 mt-1">
                    {hasSale && (
                      <span className="text-sm text-white/50 line-through">${product.originalPrice}</span>
                    )}
                    <span className="text-white font-semibold">${product.price}</span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}