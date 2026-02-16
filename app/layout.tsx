import type { Metadata, Viewport } from 'next'

import './globals.css'

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
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
