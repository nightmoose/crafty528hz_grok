'use client'

import Link from 'next/link'
import { Product } from '../lib/products'
import { ShoppingCart } from 'lucide-react'

interface Props {
  product: Product
  onAddToCart: () => void
}

export function ProductCard({ product, onAddToCart }: Props) {
  const hasSale = !!product.originalPrice
  const discount = hasSale 
    ? Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100) 
    : 0

  return (
    <div className="product-card group">
      <Link href={`/shop/${product.slug}`} className="block">
        <div className="relative aspect-[4/3] bg-[#f4f4f5] overflow-hidden">
          {product.image ? (
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
            />
          ) : (
            <div className="image-placeholder w-full h-full flex items-center justify-center text-xs tracking-[2px] text-gray-400">
              IMAGE
            </div>
          )}
          {hasSale && (
            <div className="absolute top-3 right-3 bg-red-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
              -{discount}%
            </div>
          )}
        </div>
      </Link>

      <div className="p-4">
        <Link href={`/shop/${product.slug}`}>
          <h3 className="font-semibold tracking-tight text-[15px] mb-2 leading-snug group-hover:text-[#FF9F1C] transition-colors">{product.name}</h3>
        </Link>

        <div className="flex items-baseline gap-2 mb-4">
          {hasSale && <span className="price-original text-sm">${product.originalPrice}</span>}
          <span className="price-sale text-xl font-bold">${product.price}</span>
        </div>

        <button 
          onClick={(e) => { e.stopPropagation(); onAddToCart() }} 
          className="btn-yellow w-full py-3 rounded-2xl text-sm font-semibold flex items-center justify-center gap-2 active:scale-[0.985]"
        >
          <ShoppingCart size={16} />
          Add to Cart
        </button>
      </div>
    </div>
  )
}