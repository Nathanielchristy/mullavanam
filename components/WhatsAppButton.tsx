'use client'

import React from 'react'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const phoneNumber = "919495948888" // REPLACE WITH YOUR ACTUAL NUMBER (with country code, no +)
  const message = "Hello Mullavanam! I'm interested in booking a budget stay. Can you help me?"
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[100] flex items-center justify-center bg-[#25D366] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-[#128C7E] group animate-bounce hover:animate-none"
      aria-label="Chat on WhatsApp"
    >
      {/* Tooltip text that appears on hover */}
      <span className="absolute right-full mr-4 bg-[#1B3F22] text-[#D4AF37] px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-[#D4AF37]/20 shadow-xl">
        Chat with us
      </span>
      
      {/* WhatsApp Icon (using Lucide MessageCircle as a base) */}
      <MessageCircle size={28} fill="currentColor" />
      
      {/* Notification Dot */}
      <span className="absolute top-0 right-0 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white"></span>
      </span>
    </a>
  )
}