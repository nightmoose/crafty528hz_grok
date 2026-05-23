'use client'

import { Product } from '../lib/products'
import { ShoppingCart } from 'lucide-react'

interface ProductCardProps {
  product: Product
  onAddToCart: () => void
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const hasSale = product.originalPrice && product.originalPrice > product.price

  return (
    <div className="product-card group">
      {/* Image Placeholder Area */}
      <div className="image-placeholder aspect-[4/3] w-full flex items-center justify-center">
        {/* This will be replaced with real images later */}
      </div>

      <div className="p-5">
        <h3 className="font-semibold text-[15px] tracking-tight mb-2 pr-2 leading-tight">
          {product.name}
        </h3>

        <div className="flex items-baseline gap-2 mb-4">
          {hasSale && (
            <span className="price-original text-sm">${product.originalPrice}</span>
          )}
          <span className="price-sale text-xl">${product.price}</span>
        </div>

        <button 
          onClick={onAddToCart}
          className="btn-yellow w-full py-[13px] rounded-xl text-sm font-semibold flex items-center justify-center gap-2 active:scale-[0.985] transition-transform"
        >
          <ShoppingCart size={16} />
          Add to Cart
        </button>
      </div>
    </div>
  )
}