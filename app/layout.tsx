import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from 'sonner'

export const metadata: Metadata = {
  title: 'Crafty 528 Hz | Healing Jewelry',
  description: 'Handcrafted jewelry tuned to the 528 Hz frequency of love. Elegant, meaningful pieces for the modern seeker.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#F8F5F2] text-[#2C2522]">
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  )
}