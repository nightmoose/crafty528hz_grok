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
    <div className="product-card group bg-white border border-gray-100 rounded-2xl overflow-hidden">
      <div className="image-placeholder aspect-[4/3] w-full flex items-center justify-center bg-gray-100">
        {/* Replace with real image later */}
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-[15px] leading-tight tracking-tight mb-2 pr-1">
          {product.name}
        </h3>

        <div className="flex items-baseline gap-2 mb-4">
          {hasSale && <span className="price-original text-sm">${product.originalPrice}</span>}
          <span className="price-sale text-[17px] font-semibold">${product.price}</span>
        </div>

        <button 
          onClick={onAddToCart}
          className="btn-yellow w-full py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 active:scale-[0.985]"
        >
          <ShoppingCart size={15} />
          Add to Cart
        </button>
      </div>
    </div>
  )
}