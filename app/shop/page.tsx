'use client'

import Link from 'next/link'

const products = [
  { id: 1, slug: 'be-happy-hoodie', name: 'Be Happy Hoodie', price: 120, originalPrice: 160, image: 'https://picsum.photos/id/1005/600/600' },
  { id: 2, slug: 'cosmic-necklace', name: 'Cosmic Necklace', price: 90, originalPrice: 120, image: 'https://picsum.photos/id/251/600/600' },
  { id: 3, slug: 'purple-haze-necklace', name: 'Purple Haze Aura Quartz Necklace', price: 120, originalPrice: 140, image: 'https://picsum.photos/id/201/600/600' },
]

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Big header exactly like your screenshots */}
      <div className="bg-yellow-300 py-10 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <div className="text-[52px] font-black tracking-[-2px] text-pink-600 leading-none">
            crafty 528hz
          </div>
          <p className="text-xs tracking-[3px] text-black mt-2 font-medium">
            UPCYCLED • COLORFUL • ONE OF A KIND
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 pt-6">
        <p className="text-sm mb-4">Showing {products.length} items</p>

        <div className="grid grid-cols-2 gap-4">
          {products.map((p) => {
            const discount = Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100)
            return (
              <Link key={p.id} href={`/shop/${p.slug}`} className="block">
                <div className="relative aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                  <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">-{discount}%</div>
                </div>
                <div className="mt-3">
                  <div className="font-medium">{p.name}</div>
                  <div className="flex gap-2 mt-1">
                    <span className="line-through text-gray-400 text-sm">${p.originalPrice}</span>
                    <span className="text-red-600 font-semibold">${p.price}</span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}