import type { Metadata, Viewport } from 'next'
import './globals.css'
// Import the WhatsApp component (make sure the path matches where you saved it)
import WhatsAppButton from '../components/WhatsAppButton' 

export const metadata: Metadata = {
  title: 'Mullavanam Group - Premium Living & Authentic Dining',
  description: 'Experience comfortable premium room rentals and authentic Kerala tiffin services in Trivandrum. Your home away from home with authentic taste.',
  keywords: 'room rentals, PG accommodation, Kerala tiffin, premium living, Trivandrum',
  openGraph: {
    title: 'Mullavanam Group - Premium Living & Authentic Dining',
    description: 'Experience comfortable premium room rentals and authentic Kerala tiffin services in Trivandrum.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#1f3d2b',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      {/* 1. suppressHydrationWarning is added to the body to stop 
             browser extension errors (like fdprocessedid).
      */}
      <body 
        className="font-sans antialiased" 
        suppressHydrationWarning={true}
      >
        {children}
        
        {/* 2. WhatsApp Button added here so it shows on every page */}
        <WhatsAppButton />
      </body>
    </html>
  )
}