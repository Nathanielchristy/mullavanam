'use client'

import React, { useState } from 'react'
import { 
  Calendar, Users, Search, ChevronDown, 
  UserPlus, UserMinus, Tag, Percent, 
  ShieldCheck, Clock, MapPin, Zap
} from 'lucide-react'

export default function BudgetAffordableStays() {
  const [adultCount, setAdultCount] = useState(1)
  const [childCount, setChildCount] = useState(0)
  const [showDropdown, setShowDropdown] = useState(false)
  const [showResults, setShowResults] = useState(false)

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
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans">
      
      {/* --- TOP PROMO BAR --- */}
      <div className="bg-[#D4AF37] text-[#1B3F22] py-2 px-6 text-center text-[10px] font-black uppercase tracking-[0.2em]">
        🔥 Limited Offer: Book today and get an extra 10% off with code <span className="underline">MULLA10</span>
      </div>

      {/* --- VISION HEADER --- */}
      <header className="bg-white pt-12 pb-24 px-6 border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#1B3F22]/5 px-4 py-2 rounded-full mb-6">
            <Tag size={14} className="text-[#1B3F22]" />
            <span className="text-[10px] font-black uppercase text-[#1B3F22] tracking-widest">Trivandrum's Best Value Stay</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
            Affordable Budget Stay <br />
            <span className="text-[#1B3F22]">For Everyone.</span>
          </h1>
          <p className="text-slate-500 font-medium">Comfort shouldn't cost a fortune. Experience Trivandrum's most budget-friendly   residency.</p>
        </div>
      </header>

      {/* --- COMPACT SEARCH WIDGET --- */}
      <section className="max-w-5xl mx-auto px-6 -mt-12 relative z-50">
        <div className="bg-[#1B3F22] p-3 rounded-3xl shadow-2xl grid grid-cols-1 md:grid-cols-12 gap-2">
          
          <div className="md:col-span-3 bg-white/10 rounded-2xl p-3 flex items-center gap-3 border border-white/10">
            <Calendar className="text-[#D4AF37]" size={18} />
            <div className="flex flex-col">
              <span className="text-[8px] font-bold text-white/50 uppercase">Dates</span>
              <span className="text-xs font-bold text-white uppercase">Feb 20 - Feb 22</span>
            </div>
          </div>

          <div 
            className="md:col-span-6 bg-white/10 rounded-2xl p-3 flex items-center justify-between gap-3 border border-white/10 cursor-pointer relative"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <div className="flex items-center gap-3">
              <Users className="text-[#D4AF37]" size={18} />
              <div className="flex flex-col text-left">
                <span className="text-[8px] font-bold text-white/50 uppercase">Occupancy</span>
                <span className="text-xs font-bold text-white uppercase">{adultCount} Adults, {childCount} Children</span>
              </div>
            </div>
            <ChevronDown size={14} className="text-white/50" />

            {/* THE DROPDOWN LOGIC */}
            {showDropdown && (
              <div 
                className="absolute top-[115%] left-0 w-full bg-white shadow-2xl rounded-2xl p-6 border border-slate-100 z-[100] text-slate-900"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-6">
                  <span className="font-black text-[10px] uppercase">Adults</span>
                  <div className="flex items-center gap-4">
                    <button onClick={() => changeAdults(-1)} className="p-2 rounded-lg border border-slate-100 hover:bg-slate-50"><UserMinus size={14}/></button>
                    <span className="font-bold text-sm w-4 text-center">{adultCount}</span>
                    <button onClick={() => changeAdults(1)} className="p-2 rounded-lg border border-slate-100 hover:bg-slate-50"><UserPlus size={14}/></button>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-6">
                  <span className="font-black text-[10px] uppercase">Children</span>
                  <div className="flex items-center gap-4">
                    <button onClick={() => changeChildren(-1)} className="p-2 rounded-lg border border-slate-100 hover:bg-slate-50"><UserMinus size={14}/></button>
                    <span className="font-bold text-sm w-4 text-center">{childCount}</span>
                    <button onClick={() => changeChildren(1)} className="p-2 rounded-lg border border-slate-100 hover:bg-slate-50"><UserPlus size={14}/></button>
                  </div>
                </div>
                <button onClick={() => setShowDropdown(false)} className="w-full bg-[#1B3F22] text-[#D4AF37] py-3 rounded-xl font-black text-[10px] uppercase tracking-widest">Update Selection</button>
              </div>
            )}
          </div>

          <button 
            onClick={() => setShowResults(true)}
            className="md:col-span-3 bg-[#D4AF37] text-[#1B3F22] rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-white transition-all py-4"
          >
            <Zap size={16} fill="currentColor" /> Show Deals
          </button>
        </div>
      </section>

      {/* --- AFFORDABLE OFFERS LIST --- */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        {showResults ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rooms.map(room => (
              <div key={room.id} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all relative">
                {/* DISCOUNT BADGE */}
                <div className="absolute top-5 right-5 bg-red-600 text-white font-black text-[9px] px-3 py-1 rounded-full z-10 animate-pulse uppercase tracking-tighter">
                  {room.offerText}
                </div>

                <div className="h-60 overflow-hidden">
                  <img src={room.image} className="w-full h-full object-cover" alt={room.name} />
                </div>
                
                <div className="p-8">
                  <h3 className="text-xl font-black uppercase tracking-tight mb-2">{room.name}</h3>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex flex-col">
                      <span className="text-slate-400 text-[10px] font-bold line-through">₹{room.originalPrice}</span>
                      <span className="text-2xl font-black text-[#1B3F22]">₹{room.discountedPrice}</span>
                    </div>
                    <div className="bg-green-100 text-green-700 text-[10px] font-black px-2 py-1 rounded-md uppercase">
                      Save ₹{room.originalPrice - room.discountedPrice}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 mb-8">
                    {room.features.map(f => (
                      <div key={f} className="text-[9px] font-bold text-slate-500 border border-slate-50 p-2 rounded-xl text-center bg-slate-50/50 uppercase italic">
                        {f}
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-[#1B3F22] text-[#D4AF37] py-4 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] shadow-lg flex items-center justify-center gap-2">
                    Claim This Deal
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="p-10 bg-white rounded-[2rem] border border-slate-100 text-center">
                <ShieldCheck size={32} className="mx-auto text-[#D4AF37] mb-4" />
                <h4 className="font-black uppercase text-sm mb-2">No Hidden Fees</h4>
                <p className="text-xs text-slate-500 leading-relaxed italic">GST and all service charges included in the final price.</p>
             </div>
             <div className="p-10 bg-white rounded-[2rem] border border-slate-100 text-center">
                <Clock size={32} className="mx-auto text-[#D4AF37] mb-4" />
                <h4 className="font-black uppercase text-sm mb-2">24h Check-in</h4>
                <p className="text-xs text-slate-500 leading-relaxed italic">Flexible timing to accommodate budget travelers.</p>
             </div>
             <div className="p-10 bg-white rounded-[2rem] border border-slate-100 text-center">
                <MapPin size={32} className="mx-auto text-[#D4AF37] mb-4" />
                <h4 className="font-black uppercase text-sm mb-2">Prime Location</h4>
                <p className="text-xs text-slate-500 leading-relaxed italic">Stay in the heart of the city without the heart-stopping price.</p>
             </div>
          </div>
        )}
      </main>
    </div>
  )
}