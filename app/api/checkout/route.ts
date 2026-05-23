import { NextResponse } from 'next/server'
import Stripe from 'stripe'

export async function POST(request: Request) {
  // Stripe is instantiated inside the handler so it doesn't run during build
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2025-02-24.acacia',
  })

  try {
    const { items } = await request.json()

    // TODO: Replace with real cart line items
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: { name: 'Crafty 528 Hz Order' },
            unit_amount: 5000,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/shop`,
    })

    return NextResponse.json({ url: session.url })
  } catch (error: any) {
    console.error(error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
