import React from 'react'
import './globals.css'
import Footer from './components/Footer'
import Header from './components/Header'

function layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <Header />
        <main className="w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

export default layout
