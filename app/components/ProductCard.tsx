'use client'

import { Product } from '../lib/products'
import { ShoppingCart } from 'lucide-react'

interface Props {
  product: Product
  onAddToCart: () => void
}

export function ProductCard({ product, onAddToCart }: Props) {
  const hasSale = !!product.originalPrice

  return (
    <div className="product-card">
      <div className="image-placeholder aspect-[4/3] bg-[#f4f4f5] flex items-center justify-center">
        <div className="text-[11px] text-gray-400 tracking-widest">IMAGE</div>
      </div>

      <div className="p-4">
        <div className="font-semibold text-[15px] leading-tight mb-3 pr-2">{product.name}</div>

        <div className="flex items-baseline gap-x-2 mb-4">
          {hasSale && <span className="price-original">${product.originalPrice}</span>}
          <span className="price-sale">${product.price}</span>
        </div>

        <button onClick={onAddToCart} className="btn-yellow w-full py-3 text-sm rounded-2xl flex items-center justify-center gap-2 font-medium active:scale-[0.985]">
          <ShoppingCart size={16} />
          Add to Cart
        </button>
      </div>
    </div>
  )
}