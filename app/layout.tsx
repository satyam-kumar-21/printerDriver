import React from 'react'
import './globals.css'
import Footer from './components/Footer'
import Header from './components/Header'
import ScrollToTop from './components/ScrollToTop'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

function layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} data-scroll-behavior="smooth">
      <body className={`min-h-screen bg-slate-50 text-slate-900 ${inter.className}`}>
        <ScrollToTop />
        <Header />
        
        <main className="w-full pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

export default layout
