import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Suspense } from 'react'
import { FacebookPixelEvents } from "../components/pixel_events"
const inter = Inter({ subsets: ['latin'] })
const FB_PIXEL_ID =process.env.Pixel_key
export const metadata: Metadata = {
  title: 'Coach & Cleen',
  description: 'Coach professionnelle certifié',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <noscript>
          <img height="1" width="1" style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
      </head>
        
        <body className={inter.className}>{children}
      
        <Suspense fallback={null}>
          <FacebookPixelEvents />
        </Suspense>
        </body>
    </html>
  )
}
