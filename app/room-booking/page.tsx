'use client'

import React, { useState, useRef, useEffect } from 'react'
import { 
  Calendar, Users, ChevronDown, 
  UserPlus, UserMinus, Tag, ShieldCheck, 
  Clock, MapPin, Zap, ArrowLeft, Menu, X, Home, Utensils, Phone, Info
} from 'lucide-react'

export default function BudgetAffordableStays() {
  const [adultCount, setAdultCount] = useState(1)
  const [showDropdown, setShowDropdown] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [isSideNavOpen, setIsSideNavOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  
  // Initialize dates safely
  const [checkIn, setCheckIn] = useState("2026-02-20")
  const [checkOut, setCheckOut] = useState("2026-02-22")

  const contentRef = useRef<HTMLDivElement>(null)

  // Handle Hydration: Ensure component is mounted before using browser-only features
  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleShowResults = () => {
    setShowResults(true)
    setShowDropdown(false)
    setTimeout(() => {
      contentRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  const handleBack = () => {
    setShowResults(false)
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  // Prevent rendering if not mounted to avoid flicker/mismatch, 
  // or use suppressHydrationWarning on the specific div.
  if (!isMounted) return null 

  const navItems = [
    { name: 'Home', icon: <Home size={18} />, href: '/' },
    { name: 'Rooms', icon: <ShieldCheck size={18} />, href: '#rooms' },
    { name: 'Ruchi Tiffin', icon: <Utensils size={18} />, href: '#tiffin' },
    { name: 'About Us', icon: <Info size={18} />, href: '#about' },
    { name: 'Contact', icon: <Phone size={18} />, href: '#contact' },
  ]

  const rooms = [
    {
      id: 1,
      name: "Budget Standard Room",
      originalPrice: 2500,
      discountedPrice: 1499,
      offerText: "Early Bird 40% OFF",
      image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=800",
      features: ["Free WiFi", "AC Available", "Walk to Transit"]
    },
    {
      id: 2,
      name: "Economy Twin Room",
      originalPrice: 3200,
      discountedPrice: 1999,
      offerText: "Today's Top Deal",
      image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=800",
      features: ["2 Single Beds", "Breakfast Included", "TV"]
    }
  ]

  return (
    <div 
      className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans pb-10 overflow-x-hidden"
      suppressHydrationWarning // This fixes the extension-injected attribute error
    >
      
      {/* --- SIDE NAVBAR OVERLAY --- */}
      {isSideNavOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[100] backdrop-blur-sm transition-opacity"
          onClick={() => setIsSideNavOpen(false)}
        />
      )}

      {/* --- SIDE NAVBAR --- */}
      <div className={`fixed top-0 left-0 h-full w-72 bg-[#1B3F22] z-[110] shadow-2xl transform transition-transform duration-300 ease-in-out ${isSideNavOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-10">
            <span className="text-[#D4AF37] font-black tracking-tighter text-xl">MULLAVANAM</span>
            <button onClick={() => setIsSideNavOpen(false)} className="text-white/70 hover:text-white">
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                className="flex items-center gap-4 px-4 py-3 text-white/80 hover:bg-white/10 hover:text-[#D4AF37] rounded-xl transition-all font-bold uppercase text-xs tracking-widest"
                onClick={() => setIsSideNavOpen(false)}
              >
                {item.icon}
                {item.name}
              </a>
            ))}
          </nav>

          <div className="mt-auto p-4 bg-white/5 rounded-2xl border border-white/10">
            <p className="text-[10px] text-white/40 uppercase font-black mb-2 tracking-widest">Support</p>
            <p className="text-[#D4AF37] font-bold text-sm">+91 98765 43210</p>
          </div>
        </div>
      </div>

      {/* --- TOP HEADER --- */}
      <nav className="sticky top-0 bg-white/80 backdrop-blur-md z-50 border-b border-slate-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button 
            onClick={() => setIsSideNavOpen(true)}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <Menu size={24} className="text-[#1B3F22]" />
          </button>
          <span className="font-black text-lg tracking-tighter text-[#1B3F22]">MULLAVANAM</span>
          <div className="w-10" />
        </div>
      </nav>

      {/* --- PROMO --- */}
      <div className="bg-[#D4AF37] text-[#1B3F22] py-2 px-4 text-center text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] relative">
        🔥 Limited Offer: Book today for an extra 10% off with code <span className="underline">MULLA10</span>
      </div>

      {/* --- HERO --- */}
      <header className="bg-white pt-10 pb-20 md:pb-24 px-6 border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#1B3F22]/5 px-4 py-2 rounded-full mb-6">
            <Tag size={14} className="text-[#1B3F22]" />
            <span className="text-[10px] font-black uppercase text-[#1B3F22] tracking-widest">Trivandrum's Best Value Stay</span>
          </div>
          <h1 className="text-3xl md:text-6xl font-black tracking-tight mb-4 leading-tight">
            Affordable Budget Stay <br />
            <span className="text-[#1B3F22]">For Everyone.</span>
          </h1>
          <p className="text-slate-500 font-medium text-sm md:text-base italic">Clean. Safe. Central. Starting from ₹999.</p>
        </div>
      </header>

      {/* --- SEARCH WIDGET --- */}
      <section className="max-w-5xl mx-auto px-4 -mt-10 md:-mt-12 relative z-40">
        <div className="bg-[#1B3F22] p-2 md:p-3 rounded-[2rem] md:rounded-full shadow-2xl grid grid-cols-1 md:grid-cols-12 gap-2">
          
          <div className="md:col-span-3 bg-white/10 rounded-2xl md:rounded-l-full p-3 flex items-center gap-3 border border-white/10">
            <Calendar className="text-[#D4AF37]" size={18} />
            <div className="flex flex-col w-full">
              <span className="text-[8px] font-bold text-white/50 uppercase">Check-in</span>
              <input type="date" value={checkIn} onChange={(e)=>setCheckIn(e.target.value)} className="bg-transparent font-bold text-xs text-white uppercase outline-none w-full [color-scheme:dark]" />
            </div>
          </div>

          <div className="md:col-span-3 bg-white/10 rounded-2xl p-3 flex items-center gap-3 border border-white/10">
            <Calendar className="text-[#D4AF37]" size={18} />
            <div className="flex flex-col w-full">
              <span className="text-[8px] font-bold text-white/50 uppercase">Check-out</span>
              <input type="date" value={checkOut} onChange={(e)=>setCheckOut(e.target.value)} className="bg-transparent font-bold text-xs text-white uppercase outline-none w-full [color-scheme:dark]" />
            </div>
          </div>

          <div className="md:col-span-4 bg-white/10 rounded-2xl p-3 flex items-center justify-between gap-3 border border-white/10 cursor-pointer relative" onClick={() => setShowDropdown(!showDropdown)}>
            <div className="flex items-center gap-3">
              <Users className="text-[#D4AF37]" size={18} />
              <div className="flex flex-col text-left">
                <span className="text-[8px] font-bold text-white/50 uppercase">Occupancy</span>
                <span className="text-xs font-bold text-white uppercase">{adultCount} Adult</span>
              </div>
            </div>
            <ChevronDown size={14} className="text-white/50" />
            {showDropdown && (
              <div className="absolute top-[115%] left-0 w-full bg-white shadow-2xl rounded-2xl p-6 border border-slate-100 z-[100] text-slate-900" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-6">
                  <span className="font-black text-[10px] uppercase">Adults</span>
                  <div className="flex items-center gap-4">
                    <button onClick={() => setAdultCount(Math.max(1, adultCount - 1))} className="p-2 border rounded-lg"><UserMinus size={14}/></button>
                    <span className="font-bold text-sm">{adultCount}</span>
                    <button onClick={() => setAdultCount(adultCount + 1)} className="p-2 border rounded-lg"><UserPlus size={14}/></button>
                  </div>
                </div>
                <button onClick={() => setShowDropdown(false)} className="w-full bg-[#1B3F22] text-[#D4AF37] py-3 rounded-xl font-black text-[10px] uppercase tracking-widest">Update</button>
              </div>
            )}
          </div>

          <button onClick={handleShowResults} className="md:col-span-2 bg-[#D4AF37] text-[#1B3F22] rounded-2xl md:rounded-full font-black uppercase text-[10px] flex items-center justify-center gap-2 hover:bg-white transition-all py-4 md:py-0">
            <Zap size={14} fill="currentColor" /> Show Deals
          </button>
        </div>
      </section>

      {/* --- CONTENT --- */}
      <main ref={contentRef} className="max-w-6xl mx-auto px-6 py-12 md:py-16 relative">
        {showResults ? (
          <div className="animate-in fade-in slide-in-from-bottom-4">
            <div className="mb-10">
              <button 
                onClick={handleBack}
                className="inline-flex items-center gap-3 px-6 py-3 bg-[#1B3F22] text-[#D4AF37] rounded-xl shadow-xl hover:bg-black transition-all group border border-[#D4AF37]/20"
              >
                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                <span className="text-[11px] font-black uppercase tracking-widest">Back to Features</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {rooms.map(room => (
                <div key={room.id} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all relative">
                  <div className="absolute top-5 right-5 bg-red-600 text-white font-black text-[9px] px-3 py-1 rounded-full z-10 animate-pulse uppercase">{room.offerText}</div>
                  <img src={room.image} className="w-full h-52 md:h-60 object-cover" alt={room.name} />
                  <div className="p-8">
                    <h3 className="text-xl font-black uppercase mb-4">{room.name}</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex flex-col">
                        <span className="text-slate-400 text-[10px] font-bold line-through">₹{room.originalPrice}</span>
                        <span className="text-2xl font-black text-[#1B3F22]">₹{room.discountedPrice}</span>
                      </div>
                      <div className="bg-green-100 text-green-700 text-[10px] font-black px-2 py-1 rounded-md uppercase">SAVE ₹{room.originalPrice - room.discountedPrice}</div>
                    </div>
                    <button className="w-full bg-[#1B3F22] text-[#D4AF37] py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-lg">Book Now</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="p-10 bg-white rounded-[2rem] border border-slate-100 text-center flex flex-col items-center">
                <ShieldCheck size={32} className="text-[#D4AF37] mb-4" />
                <h4 className="font-black uppercase text-sm mb-2">No Hidden Fees</h4>
                <p className="text-xs text-slate-500 italic">GST and all service charges included.</p>
             </div>
             <div className="p-10 bg-white rounded-[2rem] border border-slate-100 text-center flex flex-col items-center">
                <Clock size={32} className="text-[#D4AF37] mb-4" />
                <h4 className="font-black uppercase text-sm mb-2">24h Check-in</h4>
                <p className="text-xs text-slate-500 italic">Flexible timing for budget travelers.</p>
             </div>
             <div className="p-10 bg-white rounded-[2rem] border border-slate-100 text-center flex flex-col items-center">
                <MapPin size={32} className="text-[#D4AF37] mb-4" />
                <h4 className="font-black uppercase text-sm mb-2">Prime Location</h4>
                <p className="text-xs text-slate-500 italic">Stay in the heart of Trivandrum.</p>
             </div>
          </div>
        )}
      </main>
    </div>
  )
}