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
      <div className="image-placeholder aspect-[4/3] bg-[#f4f4f5] flex items-center justify-center text-xs tracking-[2px] text-gray-400">
        IMAGE
      </div>

      <div className="p-5">
        <h3 className="font-semibold tracking-tight text-[15px] mb-3 leading-snug">{product.name}</h3>

        <div className="flex items-baseline gap-2 mb-5">
          {hasSale && <span className="price-original text-sm">${product.originalPrice}</span>}
          <span className="price-sale text-xl font-bold">${product.price}</span>
        </div>

        <button onClick={onAddToCart} className="btn-yellow w-full py-[13px] rounded-2xl text-sm font-semibold flex items-center justify-center gap-2 active:scale-[0.985]">
          <ShoppingCart size={16} />
          Add to Cart
        </button>
      </div>
    </div>
  )
}