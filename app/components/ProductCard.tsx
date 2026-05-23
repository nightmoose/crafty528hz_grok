'use client'

import { Product } from '../lib/products'

import { ShoppingCart } from 'lucide-react'

interface ProductCardProps {
  product: Product
  onAddToCart: () => void
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="product-card group bg-white rounded-3xl overflow-hidden border border-[#E5DFD3]">
      <div className="aspect-square bg-[#F1EDE5] relative overflow-hidden">
        {/* Placeholder for real images - replace with next/image + Supabase Storage later */}
        <div className="absolute inset-0 flex items-center justify-center text-[#C5A26F]/30 text-6xl">
          {product.category[0]}
        </div>
        <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-xs tracking-widest">
          {product.category}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="font-medium text-xl tracking-tight pr-4">{product.name}</h3>
            <p className="text-sm text-[#8B7E6B] mt-1 line-clamp-2">{product.description}</p>
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-6">
          <div className="text-2xl font-light tracking-tight">${product.price}</div>
          
          <button 
            onClick={onAddToCart}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#4A3F6B] text-white text-sm hover:bg-[#3a314f] active:scale-[0.985] transition-all"
          >
            <ShoppingCart size={16} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}