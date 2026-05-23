'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="border-b border-[#E5DFD3] bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#4A3F6B] flex items-center justify-center">
              <span className="text-white text-sm font-medium">528</span>
            </div>
            <div>
              <div className="font-semibold tracking-tight text-xl">Crafty 528 Hz</div>
              <div className="text-[10px] text-[#8B7E6B] -mt-1">JEWELRY</div>
            </div>
          </div>
          
          <div className="flex items-center gap-8 text-sm">
            <Link href="/shop" className="hover:text-[#4A3F6B] transition-colors">Shop</Link>
            <Link href="#about" className="hover:text-[#4A3F6B] transition-colors">Our Story</Link>
            <Link href="/shop" className="btn-primary px-6 py-2.5 rounded-full text-sm font-medium flex items-center gap-2">
              Shop Collection
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-[90vh] flex items-center justify-center bg-[#2C2522] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#4A3F6B_0.8px,transparent_1px)] bg-[length:4px_4px] opacity-30"></div>
        
        <div className="relative z-10 max-w-4xl px-6 text-center">
          <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-sm mb-6 tracking-[3px]">TUNED TO THE FREQUENCY OF LOVE</div>
          
          <h1 className="text-7xl md:text-8xl font-light tracking-[-3.5px] mb-6">
            Crafty 528 Hz
          </h1>
          <p className="text-2xl md:text-3xl text-white/80 font-light tracking-tight mb-10">
            Handcrafted jewelry for the modern seeker
          </p>
          
          <Link 
            href="/shop" 
            className="inline-flex items-center gap-3 bg-white text-[#2C2522] px-10 py-4 rounded-full text-lg font-medium hover:bg-[#C5A26F] hover:text-white transition-all"
          >
            Explore the Collection
            <ArrowRight />
          </Link>
        </div>
      </section>

      {/* About / Story */}
      <section id="about" className="max-w-4xl mx-auto px-6 py-24 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="text-[#C5A26F] text-sm tracking-[3px] mb-3">THE FREQUENCY</div>
          <h2 className="text-5xl font-light tracking-tight mb-8">Jewelry that resonates</h2>
          <p className="text-xl text-[#5C5146] leading-relaxed">
            Each piece is thoughtfully crafted and energetically attuned to 528 Hz — 
            the frequency known as the "Miracle Tone" or "Love Frequency." 
            Wear beauty that aligns body, mind, and spirit.
          </p>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="bg-white py-16 border-t border-[#E5DFD3]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-10">
            <div>
              <div className="text-[#C5A26F] text-sm tracking-widest">DISCOVER</div>
              <h3 className="text-4xl font-light tracking-tight">Signature Collections</h3>
            </div>
            <Link href="/shop" className="flex items-center gap-2 text-sm hover:text-[#4A3F6B]">
              View all <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Necklaces', 'Bracelets', 'Earrings'].map((cat) => (
              <Link 
                key={cat} 
                href={`/shop?category=${cat.toLowerCase()}`}
                className="group block aspect-[4/3] bg-[#F1EDE5] rounded-3xl flex items-end p-8 hover:bg-[#E5DFD3] transition-colors"
              >
                <div>
                  <div className="text-3xl font-light tracking-tight group-hover:text-[#4A3F6B]">{cat}</div>
                  <div className="text-sm text-[#8B7E6B] mt-1">Explore collection →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-[#E5DFD3] py-12 text-sm text-[#8B7E6B]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-y-4">
          <div>© {new Date().getFullYear()} Crafty 528 Hz. All rights reserved.</div>
          <div className="flex gap-6">
            <span>Shipping</span>
            <span> Returns</span>
            <span>Contact</span>
          </div>
        </div>
      </footer>
    </div>
  )
}