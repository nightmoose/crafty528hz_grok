'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { products, getProductBySlug } from '../../lib/products'
import { CartDrawer } from '../../components/CartDrawer'
import { ArrowLeft, ShoppingCart, Share2 } from 'lucide-react'

export default function ProductDetail() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);

  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState<any[]>([]);
  const [mainImageIndex, setMainImageIndex] = useState(0);

  if (!product) {
    return <div className="p-8 text-center">Product not found. <Link href="/shop">Back to shop</Link></div>;
  }

  const hasSale = !!product.originalPrice;
  const discount = hasSale ? Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100) : 0;
  const savings = hasSale ? product.originalPrice! - product.price : 0;

  const images = product.image 
    ? [product.image, `https://picsum.photos/id/201/800/800`, `https://picsum.photos/id/160/800/800`]
    : ['https://picsum.photos/id/201/800/800', 'https://picsum.photos/id/160/800/800'];

  const addToCart = () => {
    setCart([...cart, product]);
    setCartOpen(true);
  };

  const buyNow = () => {
    addToCart();
    setTimeout(() => alert('Checkout would open here in a full version.'), 600);
  };

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Top bar */}
      <div className="sticky top-0 z-50 bg-white border-b">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/shop" className="flex items-center gap-2 text-sm">
            <ArrowLeft size={18} /> Back
          </Link>
          <div className="font-semibold tracking-tight">Crafty 528 Hz</div>
          <button onClick={() => setCartOpen(true)} className="text-sm">Cart ({cart.length})</button>
        </div>
      </div>

      <div className="max-w-2xl mx-auto">
        {/* Large Hero Image */}
        <div className="relative w-full aspect-[4/3] bg-[#f8f7f4]">
          <img 
            src={images[mainImageIndex]} 
            alt={product.name}
            className="w-full h-full object-cover"
          />
          {hasSale && (
            <div className="absolute top-4 right-4 bg-white px-3 py-1 text-xs font-bold text-red-600 rounded-full shadow">SAVE {discount}%</div>
          )}
        </div>

        {/* Thumbnails */}
        <div className="flex gap-3 px-4 pt-3">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setMainImageIndex(i)}
              className={`w-16 h-16 rounded-xl overflow-hidden border-2 ${mainImageIndex === i ? 'border-yellow-400' : 'border-gray-200'}`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>

        {/* Info */}
        <div className="px-4 pt-5">
          <h1 className="text-3xl font-semibold tracking-tighter mb-3">{product.name}</h1>

          <div className="flex items-end gap-3 mb-1">
            {hasSale && <span className="text-lg text-gray-400 line-through">${product.originalPrice}.00</span>}
            <span className="text-3xl font-bold text-red-600">${product.price}.00</span>
          </div>
          {hasSale && <div className="text-sm text-gray-500 mb-6">You save ${savings}.00 ({discount}%)</div>}

          <p className="text-gray-600 mb-8">{product.description}</p>

          {/* Yellow Buttons - matching your screenshots */}
          <div className="space-y-3">
            <button 
              onClick={buyNow}
              className="w-full bg-[#FFEB3B] active:bg-[#FFE11F] text-[#111827] font-bold text-lg py-4 rounded-2xl"
            >
              BUY NOW
            </button>
            <button 
              onClick={addToCart}
              className="w-full bg-[#FFEB3B] active:bg-[#FFE11F] text-[#111827] font-bold text-lg py-4 rounded-2xl flex items-center justify-center gap-2"
            >
              <ShoppingCart size={20} />
              ADD TO CART
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar - mobile style like screenshots */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t z-50">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between text-sm">
          <Link href="/shop" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100">
            <ArrowLeft size={18} />
          </Link>
          <button className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100">
            <Share2 size={18} />
          </button>

          <a href="https://y528hz.com" className="flex-1 mx-4 text-center text-xs bg-gray-900 text-white py-1.5 rounded-full font-mono">y528hz.com</a>

          <button className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-xl">⋯</button>
        </div>
      </div>

      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} cart={cart} onRemove={(i) => setCart(cart.filter((_, idx) => idx !== i))} />
    </div>
  );
}