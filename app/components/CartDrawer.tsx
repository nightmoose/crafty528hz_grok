'use client'

import { Product } from '../lib/products'
import { X, CreditCard } from 'lucide-react'
import { loadStripe } from '@stripe/stripe-js' // We'll add this properly later

interface CartDrawerProps {
  isOpen: boolean
  onClose: () => void
  cart: Product[]
  onRemove: (index: number) => void
}

export function CartDrawer({ isOpen, onClose, cart, onRemove }: CartDrawerProps) {
  const total = cart.reduce((sum, item) => sum + item.price, 0)

  const handleCheckout = async () => {
    // Placeholder for Stripe Checkout
    // In next step we'll connect real Stripe
    alert(`Checkout flow ready! Total: $${total}\n\nWe'll connect real Stripe + Supabase in the next push.`)
    // TODO: Call API route to create Stripe Checkout session
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col">
        <div className="p-6 border-b flex justify-between items-center">
          <div className="font-medium text-xl">Your Cart</div>
          <button onClick={onClose}><X /></button>
        </div>

        {cart.length === 0 ? (
          <div className="flex-1 flex items-center justify-center text-[#8B7E6B]">
            Your cart is empty
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-auto p-6 space-y-6">
              {cart.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#F1EDE5] rounded-xl flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="font-medium">{item.name}</div>
                    <div className="text-sm text-[#8B7E6B]">{item.category}</div>
                    <div className="mt-1 font-light">${item.price}</div>
                  </div>
                  <button 
                    onClick={() => onRemove(index)}
                    className="text-[#8B7E6B] hover:text-red-500 self-start"
                  >
                    <X size={18} />
                  </button>
                </div>
              ))}
            </div>

            <div className="p-6 border-t space-y-4">
              <div className="flex justify-between text-lg">
                <span>Total</span>
                <span className="font-medium">${total}</span>
              </div>
              
              <button 
                onClick={handleCheckout}
                className="w-full flex items-center justify-center gap-3 bg-[#4A3F6B] text-white py-4 rounded-2xl font-medium active:scale-[0.985] transition-all"
              >
                <CreditCard size={20} />
                Checkout with Stripe
              </button>
              
              <p className="text-center text-xs text-[#8B7E6B]">Secure checkout powered by Stripe</p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}