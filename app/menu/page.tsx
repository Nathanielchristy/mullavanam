'use client'

import React, { useState } from 'react'
import { Utensils, Clock, Leaf, ShieldCheck, ArrowRight, Truck, Gift } from 'lucide-react'
import Header from '../../components/header'

// Added "Combos" to categories
const menuCategories = ["All", "Breakfast", "Lunch", "Combos", "Ruchi Specials", "Dinner"]

const menuItems = [
  {
    id: 1,
    name: "Kerala Sadhya",
    category: "Lunch",
    price: 180,
    description: "Authentic Kerala feast with 18+ items served on a traditional banana leaf.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=800",
    tags: ["Must Try", "Authentic"]
  },
  {
    id: 4,
    name: "Office Lunch Combo",
    category: "Combos",
    price: 250,
    description: "Executive Kerala Meals + Special Fish Curry + Fresh Lime Juice.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800",
    tags: ["Best Seller", "Combo Offer"]
  },
  {
    id: 2,
    name: "Appam with Stew",
    category: "Breakfast",
    price: 120,
    description: "Fluffy lace crepes served with creamy vegetable or chicken coconut stew.",
    image: "https://images.unsplash.com/photo-1626132646529-5006375325d7?q=80&w=800",
    tags: ["Chef Special"]
  },
  {
    id: 5,
    name: "Family Dinner Pack",
    category: "Combos",
    price: 899,
    description: "4 Porotta + Chicken Roast + Beef Fry + 4 Sulaimani Tea.",
    image: "https://images.unsplash.com/photo-1603894584114-f48358249033?q=80&w=800",
    tags: ["Family Deal"]
  },
  {
    id: 3,
    name: "Ruchi Monthly Tiffin",
    category: "Ruchi Specials",
    price: 3500,
    description: "Home-style breakfast and dinner delivered daily. No MSG, no artificial colors.",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800",
    tags: ["Subscription", "Health"]
  }
]

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredItems = activeCategory === "All" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory)

  return (
    <main className="min-h-screen bg-[#FDFCF7]">
      <Header />
      
      {/* Free Delivery Banner */}
      <div className="fixed top-[70px] md:top-[80px] w-full bg-[#C5A059] text-[#1B3F22] py-2 z-[45] flex justify-center items-center gap-3">
        <Truck size={18} />
        <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">
          Free Delivery within 5 KM radius in Trivandrum
        </span>
      </div>

      {/* Hero Section */}
      <section className="relative pt-52 pb-24 bg-[#1B3F22] text-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-[#C5A059] font-black uppercase tracking-[0.4em] text-[10px] md:text-xs mb-6 block drop-shadow-sm">
            Authentic Kerala Dining
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-[1.1]">
            Our Culinary <span className="text-[#C5A059]">Heritage</span>
          </h1>
          <p className="text-white/80 italic text-base md:text-lg max-w-2xl mx-auto font-medium">
            "Fresh ingredients, traditional recipes, and the taste of home."
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#FDFCF7] to-transparent" />
      </section>

      {/* Filter Bar */}
      <div className="sticky top-[105px] md:top-[115px] z-40 bg-white/90 backdrop-blur-xl border-b border-gray-100 py-6 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex gap-4 overflow-x-auto no-scrollbar justify-start md:justify-center">
          {menuCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all whitespace-nowrap border-2 ${
                activeCategory === cat 
                ? 'bg-[#1B3F22] text-[#C5A059] border-[#1B3F22] shadow-lg scale-105' 
                : 'bg-transparent text-gray-400 border-gray-100 hover:border-[#C5A059] hover:text-[#1B3F22]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className={`group rounded-[3rem] overflow-hidden transition-all duration-500 hover:-translate-y-2 border ${
                item.category === "Combos" 
                ? "bg-[#F7F3E9] border-[#C5A059]/30 shadow-[0_15px_40px_rgba(197,160,89,0.1)]" 
                : "bg-white border-gray-50 shadow-[0_10px_40px_rgba(0,0,0,0.04)]"
              }`}
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                  {item.category === "Combos" && (
                    <span className="bg-[#C5A059] text-[#1B3F22] text-[9px] font-black uppercase px-4 py-1.5 rounded-full flex items-center gap-1 shadow-md">
                      <Gift size={10} /> COMBO DEAL
                    </span>
                  )}
                  {item.tags.map(tag => (
                    <span key={tag} className="bg-white/95 backdrop-blur-md text-[#1B3F22] text-[9px] font-black uppercase px-4 py-1.5 rounded-full shadow-sm">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="p-10">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-black text-[#1B3F22] uppercase tracking-tight leading-tight">{item.name}</h3>
                  <div className="flex flex-col items-end">
                    <span className="text-[#C5A059] font-black text-xl">₹{item.price}</span>
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-8 italic font-medium">"{item.description}"</p>
                <a 
                  href={`https://wa.me/91YOURNUMBER?text=Hi, I would like to order the ${item.name}`}
                  target="_blank"
                  className="inline-flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.2em] text-[#1B3F22] hover:text-[#C5A059] transition-all group/btn"
                >
                  Order via WhatsApp 
                  <ArrowRight size={16} className="text-[#C5A059] transition-transform group-hover/btn:translate-x-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tiffin Subscription Section... */}
      {/* (Previous Tiffin code remains here) */}
    </main>
  )
}