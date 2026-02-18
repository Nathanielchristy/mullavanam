'use client'

import React, { useState } from 'react'
import { 
  Calendar, Users, Search, ChevronDown, 
  UserPlus, UserMinus, Tag, ShieldCheck, 
  Clock, MapPin, Zap
} from 'lucide-react'

export default function BudgetAffordableStays() {
  // --- STATE MANAGEMENT ---
  const [adultCount, setAdultCount] = useState(1)
  const [childCount, setChildCount] = useState(0)
  const [showDropdown, setShowDropdown] = useState(false)
  const [showResults, setShowResults] = useState(false)
  
  // DATE STATES
  const [checkIn, setCheckIn] = useState("2026-02-20")
  const [checkOut, setCheckOut] = useState("2026-02-22")

  const changeAdults = (val: number) => setAdultCount(prev => Math.max(1, prev + val))
  const changeChildren = (val: number) => setChildCount(prev => Math.max(0, prev + val))

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
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans pb-10">
      
      {/* --- TOP PROMO BAR --- */}
      <div className="bg-[#D4AF37] text-[#1B3F22] py-2 px-4 text-center text-[9px] md:text-[10px] font-black uppercase tracking-[0.1em] md:tracking-[0.2em]">
        🔥 Limited Offer: Book today for an extra 10% off with code <span className="underline">MULLA10</span>
      </div>

      {/* --- VISION HEADER --- */}
      <header className="bg-white pt-10 pb-20 md:pb-24 px-6 border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#1B3F22]/5 px-4 py-2 rounded-full mb-6">
            <Tag size={14} className="text-[#1B3F22]" />
            <span className="text-[10px] font-black uppercase text-[#1B3F22] tracking-widest text-center">Trivandrum's Best Value Stay</span>
          </div>
          <h1 className="text-3xl md:text-6xl font-black tracking-tight mb-4 leading-tight">
            Affordable Budget Stay <br />
            <span className="text-[#1B3F22]">For Everyone.</span>
          </h1>
          <p className="text-slate-500 font-medium text-sm md:text-base">Comfort shouldn't cost a fortune. Experience Trivandrum's most budget-friendly residency.</p>
        </div>
      </header>

      {/* --- SEARCH WIDGET (Fully Responsive & Functional) --- */}
      <section className="max-w-5xl mx-auto px-4 -mt-10 md:-mt-12 relative z-50">
        <div className="bg-[#1B3F22] p-2 md:p-3 rounded-[2rem] md:rounded-full shadow-2xl grid grid-cols-1 md:grid-cols-12 gap-2">
          
          {/* Check-in Input */}
          <div className="md:col-span-3 bg-white/10 rounded-2xl md:rounded-l-full p-3 flex items-center gap-3 border border-white/10 relative overflow-hidden">
            <Calendar className="text-[#D4AF37] shrink-0" size={18} />
            <div className="flex flex-col w-full">
              <span className="text-[8px] font-bold text-white/50 uppercase">Check-in</span>
              <input 
                type="date" 
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="bg-transparent font-bold text-xs text-white uppercase outline-none w-full [color-scheme:dark]" 
              />
            </div>
          </div>

          {/* Check-out Input */}
          <div className="md:col-span-3 bg-white/10 rounded-2xl p-3 flex items-center gap-3 border border-white/10 relative overflow-hidden">
            <Calendar className="text-[#D4AF37] shrink-0" size={18} />
            <div className="flex flex-col w-full">
              <span className="text-[8px] font-bold text-white/50 uppercase">Check-out</span>
              <input 
                type="date" 
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="bg-transparent font-bold text-xs text-white uppercase outline-none w-full [color-scheme:dark]" 
              />
            </div>
          </div>

          {/* Occupancy Selector */}
          <div 
            className="md:col-span-4 bg-white/10 rounded-2xl p-3 flex items-center justify-between gap-3 border border-white/10 cursor-pointer relative"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <div className="flex items-center gap-3">
              <Users className="text-[#D4AF37] shrink-0" size={18} />
              <div className="flex flex-col text-left">
                <span className="text-[8px] font-bold text-white/50 uppercase">Occupancy</span>
                <span className="text-xs font-bold text-white uppercase">{adultCount} Ad, {childCount} Ch</span>
              </div>
            </div>
            <ChevronDown size={14} className={`text-white/50 transition-transform ${showDropdown ? 'rotate-180' : ''}`} />

            {/* Dropdown Menu */}
            {showDropdown && (
              <div 
                className="absolute top-[115%] left-0 w-full bg-white shadow-2xl rounded-2xl p-6 border border-slate-100 z-[100] text-slate-900 animate-in fade-in slide-in-from-top-2"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <p className="font-black text-[10px] uppercase">Adults</p>
                    <p className="text-[8px] text-slate-400 font-bold tracking-tighter uppercase">13+ Years</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <button onClick={() => changeAdults(-1)} className="p-2 rounded-lg border border-slate-100 hover:bg-slate-50 transition-all"><UserMinus size={14}/></button>
                    <span className="font-bold text-sm w-4 text-center">{adultCount}</span>
                    <button onClick={() => changeAdults(1)} className="p-2 rounded-lg border border-slate-100 hover:bg-slate-50 transition-all"><UserPlus size={14}/></button>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <p className="font-black text-[10px] uppercase">Children</p>
                    <p className="text-[8px] text-slate-400 font-bold tracking-tighter uppercase">0-12 Years</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <button onClick={() => changeChildren(-1)} className="p-2 rounded-lg border border-slate-100 hover:bg-slate-50 transition-all"><UserMinus size={14}/></button>
                    <span className="font-bold text-sm w-4 text-center">{childCount}</span>
                    <button onClick={() => changeChildren(1)} className="p-2 rounded-lg border border-slate-100 hover:bg-slate-50 transition-all"><UserPlus size={14}/></button>
                  </div>
                </div>
                <button 
                  onClick={() => setShowDropdown(false)} 
                  className="w-full bg-[#1B3F22] text-[#D4AF37] py-3 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-lg active:scale-95 transition-all"
                >Update Selection</button>
              </div>
            )}
          </div>

          {/* Search Button */}
          <button 
            onClick={() => { setShowResults(true); setShowDropdown(false); }}
            className="md:col-span-2 bg-[#D4AF37] text-[#1B3F22] rounded-2xl md:rounded-full font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 hover:bg-white hover:scale-[1.02] active:scale-95 transition-all py-4 md:py-0 shadow-xl md:shadow-none"
          >
            <Zap size={14} fill="currentColor" /> <span className="md:hidden lg:inline">Show Deals</span>
          </button>
        </div>
      </section>

      {/* --- CONTENT AREA --- */}
      <main className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        {showResults ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 animate-in fade-in slide-in-from-bottom-4">
            {rooms.map(room => (
              <div key={room.id} className="bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all relative group">
                <div className="absolute top-5 right-5 bg-red-600 text-white font-black text-[9px] px-3 py-1 rounded-full z-10 animate-pulse uppercase tracking-tighter">
                  {room.offerText}
                </div>
                <div className="h-52 md:h-60 overflow-hidden">
                  <img src={room.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={room.name} />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-lg md:text-xl font-black uppercase tracking-tight mb-2">{room.name}</h3>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex flex-col">
                      <span className="text-slate-400 text-[10px] font-bold line-through tracking-tighter italic">WAS ₹{room.originalPrice}</span>
                      <span className="text-xl md:text-2xl font-black text-[#1B3F22]">₹{room.discountedPrice}</span>
                    </div>
                    <div className="bg-green-100 text-green-700 text-[9px] font-black px-2 py-1 rounded-md uppercase">
                      SAVE ₹{room.originalPrice - room.discountedPrice}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {room.features.map(f => (
                      <div key={f} className="text-[8px] md:text-[9px] font-bold text-slate-500 border border-slate-100 px-3 py-2 rounded-xl bg-slate-50/50 uppercase italic">
                        {f}
                      </div>
                    ))}
                  </div>
                  <button className="w-full bg-[#1B3F22] text-[#D4AF37] py-4 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] shadow-lg active:scale-95 transition-all">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
             <div className="p-8 md:p-10 bg-white rounded-[2rem] border border-slate-100 text-center flex flex-col items-center">
                <ShieldCheck size={32} className="text-[#D4AF37] mb-4" />
                <h4 className="font-black uppercase text-xs md:text-sm mb-2">No Hidden Fees</h4>
                <p className="text-[10px] md:text-xs text-slate-500 italic">GST and all service charges included in the final price.</p>
             </div>
             <div className="p-8 md:p-10 bg-white rounded-[2rem] border border-slate-100 text-center flex flex-col items-center">
                <Clock size={32} className="text-[#D4AF37] mb-4" />
                <h4 className="font-black uppercase text-xs md:text-sm mb-2">24h Check-in</h4>
                <p className="text-[10px] md:text-xs text-slate-500 italic">Flexible timing to accommodate budget travelers.</p>
             </div>
             <div className="p-8 md:p-10 bg-white rounded-[2rem] border border-slate-100 text-center flex flex-col items-center">
                <MapPin size={32} className="text-[#D4AF37] mb-4" />
                <h4 className="font-black uppercase text-xs md:text-sm mb-2">Prime Location</h4>
                <p className="text-[10px] md:text-xs text-slate-500 italic">Stay in the heart of the city without the high price.</p>
             </div>
          </div>
        )}
      </main>
    </div>
  )
}