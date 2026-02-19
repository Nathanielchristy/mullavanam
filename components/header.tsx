'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact' }, // Single clean contact link
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-3 bg-white/80 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-b border-white/20'
          : 'py-6 bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="group flex flex-col items-start space-y-0">
            <span className="text-2xl md:text-3xl font-extrabold tracking-tighter text-[#1B3F22] leading-none transition-transform duration-300 group-hover:scale-105">
              MULLA<span className="text-[#C5A059]">VANAM</span>
            </span>
            <span className="text-[9px] uppercase tracking-[0.4em] font-semibold text-gray-500 ml-0.5">
              Group of Companies
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative group text-sm uppercase tracking-widest font-bold text-[#1B3F22]/80 hover:text-[#1B3F22] transition-colors duration-300"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C5A059] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            
            {/* GET IN TOUCH - Changed to <a> for scrolling */}
            <a 
              href="#contact"
              suppressHydrationWarning
              className="bg-[#1B3F22] text-white px-7 py-2.5 rounded-full text-sm font-bold tracking-wide hover:bg-[#C5A059] hover:shadow-lg transition-all duration-300 active:scale-95 inline-block text-center"
            >
              GET IN TOUCH
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#1B3F22] hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
            suppressHydrationWarning
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`md:hidden absolute left-0 right-0 top-full bg-white/95 backdrop-blur-xl transition-all duration-300 ease-in-out border-b border-gray-100 overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-6 py-8 flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-2xl font-bold text-[#1B3F22] hover:text-[#C5A059] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <hr className="border-gray-100" />
            
            {/* CONTACT US - Changed to <a> for scrolling */}
            <a 
              href="#contact"
              onClick={() => setIsOpen(false)}
              suppressHydrationWarning
              className="w-full bg-[#1B3F22] text-white py-4 rounded-xl font-bold tracking-widest text-center block"
            >
              CONTACT US
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}