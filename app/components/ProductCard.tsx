'use client'

import { Product } from '../lib/products'
import { ShoppingCart } from 'lucide-react'

interface ProductCardProps {
  product: Product
  onAddToCart: () => void
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  // Support sale pricing
  const hasSale = product.originalPrice && product.originalPrice > product.price

  return (
    <div className="product-card group">
      <div className="aspect-[4/3] bg-gray-100 rounded-2xl mb-4 overflow-hidden relative">
        {/* Placeholder for real images - replace later */}
        <div className="absolute inset-0 flex items-center justify-center text-6xl text-gray-300">
          {product.category[0]}
        </div>
        {hasSale && (
          <div className="absolute top-3 right-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full font-medium">
            Sale
          </div>
        )}
      </div>

      <div>
        <h3 className="font-medium text-lg tracking-tight pr-4 mb-1">{product.name}</h3>
        
        <div className="flex items-baseline gap-2 mb-3">
          {hasSale && (
            <span className="price-original">${product.originalPrice}</span>
          )}
          <span className="price-sale text-xl">${product.price}</span>
        </div>

        <button 
          onClick={onAddToCart}
          className="btn-yellow w-full py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2"
        >
          <ShoppingCart size={16} />
          Add to Cart
        </button>
      </div>
    </div>
  )
}