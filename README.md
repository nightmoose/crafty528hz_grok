# Crafty 528 Hz

Modern jewelry e-commerce site built with Next.js, Supabase, and Stripe.

Replacing the GoDaddy store with a fast, elegant, and easy-to-manage platform.

## Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/nightmoose/crafty528hz_grok.git
cd crafty528hz_grok
```

### 2. Install dependencies
```bash
npm install
```

### 3. Environment Variables
Copy `.env.example` to `.env.local` and fill in:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
```

### 4. Run locally
```bash
npm run dev
```

Open http://localhost:3000

## Features
- Elegant jewelry-focused design
- Product grid with categories
- Fully working cart
- Stripe Checkout integration
- Easy to add Supabase for products & orders later
- Simple admin-ready structure

## Deployment to Vercel
1. Push to this GitHub repo (already done)
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the `crafty528hz_grok` repository
4. Add the environment variables above
5. Deploy

Your site will be live in minutes.

## Next Steps
- Add your real 50 products (easy via code or Supabase later)
- Connect custom domain
- Style tweaks as needed

Built for Crafty 528 Hz — jewelry tuned to the frequency of love.