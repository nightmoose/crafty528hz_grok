'use client'

import Link from 'next/link'
import { products } from '../lib/products'

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Big colorful logo header like screenshot */}
      <div className="bg-yellow-300 py-10 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <div className="text-[48px] font-black tracking-[-2px] text-pink-600 leading-none">
            crafty 528hz
          </div>
          <p className="text-xs tracking-[3px] text-black mt-2 font-medium">
            UPCYCLED • COLORFUL • ONE OF A KIND
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 pt-6 pb-20">
        <div className="flex gap-2 overflow-x-auto pb-6 text-sm">
          {['All Products', 'Accessories', 'Clothing', 'Earrings'].map((cat, i) => (
            <div key={i} className={`px-5 py-2 rounded-full whitespace-nowrap flex-shrink-0 ${i===0 ? 'bg-black text-white' : 'bg-gray-100'}`}>
              {cat}
            </div>
          ))}
        </div>

        <p className="text-sm mb-4">Showing {products.length} items</p>

        <div className="grid grid-cols-2 gap-4">
          {products.map((p) => {
            const discount = p.originalPrice ? Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100) : 0;
            return (
              <Link key={p.id} href={`/shop/${p.slug}`} className="group">
                <div className="relative aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  {p.originalPrice && (
                    <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">-{discount}%</div>
                  )}
                </div>
                <div className="mt-3">
                  <div className="font-medium">{p.name}</div>
                  <div className="flex gap-2 mt-1">
                    {p.originalPrice && <span className="line-through text-gray-400 text-sm">${p.originalPrice}</span>}
                    <span className="text-red-600 font-semibold">${p.price}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}