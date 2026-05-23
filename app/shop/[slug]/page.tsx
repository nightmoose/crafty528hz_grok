'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { products, getProductBySlug } from '../../lib/products'
import { CartDrawer } from '../../components/CartDrawer'
import { ArrowLeft, ShoppingCart, Heart, Share2 } from 'lucide-react'

export default function ProductDetailPage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug as string
  const product = getProductBySlug(slug)

  const [cartOpen, setCartOpen] = useState(false)
  const [cart, setCart] = useState<any[]>([])
  const [selectedImage, setSelectedImage] = useState(0)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <p className="text-xl mb-4">Product not found</p>
          <Link href="/shop" className="btn-yellow px-6 py-3 rounded-2xl inline-block">Back to Shop</Link>
        </div>
      </div>
    )
  }

  const hasSale = !!product.originalPrice
  const discount = hasSale 
    ? Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100) 
    : 0
  const savings = hasSale ? product.originalPrice! - product.price : 0

  // For demo, use main image + 2 variations (picsum variations)
  const images = product.image 
    ? [product.image, `https://picsum.photos/id/201/600/600`, `https://picsum.photos/id/160/600/600`]
    : ['https://picsum.photos/id/201/600/600', 'https://picsum.photos/id/160/600/600', 'https://picsum.photos/id/251/600/600']

  const addToCart = () => {
    setCart([...cart, product])
    setCartOpen(true)
  }

  const buyNow = () => {
    // For now, add to cart and simulate checkout
    addToCart()
    // Could navigate to checkout in future
    setTimeout(() => {
      alert('Thank you! This would proceed to checkout in a full implementation.')
    }, 800)
  }

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Top bar - mobile style */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/shop" className="flex items-center gap-2 text-sm font-medium">
            <ArrowLeft size={18} /> Back
          </Link>
          <div className="font-semibold tracking-tight">Crafty 528 Hz</div>
          <button onClick={() => setCartOpen(true)} className="text-sm flex items-center gap-1.5">
            Cart <span className="bg-yellow-300 px-2 py-0.5 rounded-full text-xs">{cart.length}</span>
          </button>
        </div>
      </div>

      <div className="max-w-2xl mx-auto">
        {/* Large Hero Image - matching screenshot style */}
        <div className="relative w-full aspect-[4/3] bg-[#f8f7f4] overflow-hidden">
          <img 
            src={images[selectedImage]} 
            alt={product.name}
            className="w-full h-full object-cover"
          />
          {hasSale && (
            <div className="absolute top-4 right-4 bg-white/90 text-red-600 text-xs font-bold px-3 py-1 rounded-full shadow">
              SAVE {discount}%
            </div>
          )}
        </div>

        {/* Thumbnails row - exactly like screenshots */}
        <div className="flex gap-3 px-4 pt-3 pb-2">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImage(idx)}
              className={`w-16 h-16 rounded-xl overflow-hidden border-2 flex-shrink-0 transition-all ${selectedImage === idx ? 'border-yellow-400 scale-105' : 'border-gray-200'}`}
            >
              <img src={img} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>

        {/* Product Info */}
        <div className="px-4 pt-2 pb-8">
          <h1 className="text-3xl font-semibold tracking-tighter mb-3">{product.name}</h1>

          {/* Pricing block matching screenshots */}
          <div className="flex items-end gap-3 mb-1">
            {hasSale && (
              <span className="text-lg text-gray-400 line-through">${product.originalPrice}.00 USD</span>
            )}
            <span className="text-3xl font-bold text-red-600">${product.price}.00 USD</span>
          </div>
          
          {hasSale && (
            <div className="text-sm text-gray-500 mb-6">
              You save <span className="font-semibold text-red-600">${savings}.00 USD</span> ({discount}%)
            </div>
          )}

          <p className="text-gray-600 mb-8 leading-relaxed">{product.description}</p>

          {/* Action Buttons - prominent yellow like screenshots */}
          <div className="space-y-3">
            <button 
              onClick={buyNow}
              className="w-full bg-[#FFEB3B] hover:bg-[#FFE11F] active:bg-[#FFEB3B] transition-colors text-[#111827] font-bold text-lg py-4 rounded-2xl shadow-sm flex items-center justify-center gap-2"
            >
              BUY NOW
            </button>
            
            <button 
              onClick={addToCart}
              className="w-full bg-[#FFEB3B] hover:bg-[#FFE11F] active:bg-[#FFEB3B] transition-colors text-[#111827] font-bold text-lg py-4 rounded-2xl shadow-sm flex items-center justify-center gap-2"
            >
              <ShoppingCart size={20} />
              ADD TO CART
            </button>
          </div>

          {/* Extra info / trust signals */}
          <div className="mt-8 pt-6 border-t text-sm text-gray-500 space-y-1">
            <div>✓ Handmade with upcycled materials</div>
            <div>✓ One of a kind piece</div>
            <div>✓ Ships from Florida</div>
          </div>
        </div>
      </div>

      {/* Mobile-style bottom navigation bar matching the screenshots */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t z-50">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <Link href="/shop" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200">
              <ArrowLeft size={18} />
            </Link>
            
            <button className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200">
              <Share2 size={18} />
            </button>
          </div>

          <div className="flex-1 mx-3">
            <a 
              href="https://y528hz.com" 
              target="_blank" 
              className="block text-center text-xs bg-gray-900 text-white px-4 py-1.5 rounded-full font-mono tracking-wider"
            >
              y528hz.com
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200">
              <Heart size={18} />
            </button>
            <button 
              onClick={() => alert('Menu / more options')}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-xl leading-none"
            >
              ⋯
            </button>
          </div>
        </div>
      </div>

      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} cart={cart} onRemove={(i) => setCart(cart.filter((_, idx) => idx !== i))} />
    </div>
  )
}