import type { Metadata } from 'next'
import { Inter, Poppins, Roboto } from 'next/font/google'
import './globals.css'
import { Footer } from '@/components/shared/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const roboto = Roboto({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'FoodLab - Fast, Fresh & Right To Your Door',
    template: '%s | FoodLab',
  },
  description: 'Order food from the best restaurants and shops in Bangladesh. Fast delivery, fresh food, great deals!',
  keywords: ['food delivery', 'restaurants', 'Bangladesh', 'online order', 'foodlab'],
  authors: [{ name: 'FoodLab' }],
  creator: 'FoodLab',
  publisher: 'FoodLab',

  icons: {
    icon: '/icon.png',       
    // apple: '/icon.png',
  },
  
  
  manifest: '/manifest.json',
  
  openGraph: {
    title: 'FoodLab - Food Delivery in Bangladesh',
    description: 'Order delicious food from top restaurants near you',
    url: 'https://foodlab.com',
    siteName: 'FoodLab',
    images: [
      {
        url: '/FoodLabLogo.png',     
        width: 1200,
        height: 630,
        alt: 'FoodLab - Food Delivery',
      },
    ],
    locale: 'bn_BD',
    type: 'website',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'FoodLab - Food Delivery',
    description: 'Order food online from best restaurants',
    images: ['/logo.png'],    // logo.png ইউজ করবে
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="bn" className={`${poppins.variable} ${inter.variable} ${roboto.variable}`}>
      <body className={poppins.className}>
        {children}
      <Footer/>
      </body>
    </html>
  )
}