'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation */}
      <nav className="border-b bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="font-bold text-2xl tracking-tight">Crafty 528 Hz</Link>
            
            <div className="hidden md:flex items-center gap-6 text-sm">
              <Link href="/shop" className="hover:text-gray-600">All Products</Link>
              <Link href="/shop?category=Accessories" className="hover:text-gray-600">Accessories</Link>
              <Link href="/shop?category=Clothing" className="hover:text-gray-600">Clothing</Link>
              <Link href="/shop?category=Earrings" className="hover:text-gray-600">Earrings</Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/shop" className="text-sm hover:text-gray-600">Shop</Link>
            <Link href="/shop" className="btn-yellow px-5 py-2 rounded-lg text-sm">Shop Now</Link>
          </div>
        </div>
      </nav>

      {/* Bright Hero - Matching original vibe */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #FFEB3B 0%, #FF9F1C 100%)' }}>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <div className="mx-auto w-80 h-80 md:w-96 md:h-96 bg-white rounded-3xl flex items-center justify-center shadow-2xl mb-8">
            <div className="text-center">
              <div className="text-[72px] md:text-[90px] font-black tracking-tighter leading-none"
                   style={{ color: '#FF2D95', WebkitTextStroke: '3px #E11D48' }}>
                crafty
              </div>
              <div className="text-[64px] md:text-[80px] font-black tracking-tighter -mt-6"
                   style={{ color: '#FF2D95', WebkitTextStroke: '3px #E11D48' }}>
                528hz
              </div>
            </div>
          </div>

          <p className="text-2xl md:text-3xl text-[#1F2937] font-medium mb-8">
            Upcycled. Colorful. One of a kind.
          </p>

          <Link 
            href="/shop" 
            className="inline-flex items-center gap-3 bg-white text-[#1F2937] px-10 py-4 rounded-2xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Shop the Collection
            <ArrowRight />
          </Link>
        </div>
      </section>

      {/* Quick Categories */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['All Products', 'Accessories', 'Clothing', 'Earrings'].map((cat) => (
            <Link 
              key={cat}
              href={`/shop?category=${cat === 'All Products' ? '' : cat}`}
              className="group block p-8 border rounded-3xl hover:bg-yellow-50 transition-colors text-center"
            >
              <div className="font-semibold text-xl group-hover:text-[#FF9F1C]">{cat}</div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="border-t py-8 text-sm text-gray-500">
        <div className="max-w-7xl mx-auto px-6 text-center">
          © {new Date().getFullYear()} Crafty 528 Hz
        </div>
      </footer>
    </div>
  )
}