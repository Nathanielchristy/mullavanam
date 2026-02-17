'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  ArrowLeft,
  Wallet,
  Zap,
  RotateCcw,
  Timer,
  CheckCircle,
  ArrowRight,
  ChefHat,
  Percent,
  MapPin,
  Star
} from 'lucide-react'

const foodImages = [
  { url: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=500", alt: "Traditional Kerala Sadhya Lunch Tiffin" },
  { url: "https://images.unsplash.com/photo-1601050638917-3f040058ec9d?q=80&w=500", alt: "Healthy Masala Dosa Tiffin Service" },
  { url: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=500", alt: "Authentic Kerala Chicken Curry Tiffin" },
  { url: "https://images.unsplash.com/photo-1567337710282-00832b415979?q=80&w=500", alt: "Soft Idli and Sambar Tiffin Breakfast" },
  { url: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?q=80&w=500", alt: "Premium Rice and Veg Meals Trivandrum" },
  { url: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=500", alt: "Kerala Fish Curry Meal Delivery" },
]

export default function RuchiTiffinPage() {
  const handleBooking = (plan: string) => {
    const phoneNumber = "91945948888"
    const message = `*Ruchi Tiffin Booking*%0A%0AHi! I want to book the *${plan}* plan. I love the Carry-Forward credit feature!`
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-orange-500 selection:text-white">
      
      {/* --- SEO HEADER / NAV --- */}
      <header>
        <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md px-6 py-4 border-b border-slate-50">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link href="/" aria-label="Back to Mullavanam Home" className="flex items-center space-x-2 group">
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-xl font-black tracking-tighter uppercase">RUCHI<span className="text-orange-500">.</span></span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-6 text-[10px] font-bold uppercase tracking-widest text-slate-400">
              <span className="flex items-center gap-1"><MapPin size={12}/> Trivandrum</span>
              <span className="flex items-center gap-1"><Star size={12} fill="currentColor" className="text-orange-500"/> 4.9 Rating</span>
            </div>

            <button onClick={() => handleBooking('General')} className="bg-[#1B3F22] text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-orange-600 transition-colors">
              Join Now
            </button>
          </div>
        </nav>
      </header>

      <main>
        {/* --- HERO SECTION: Optimized for "Tiffin Service" Keywords --- */}
        <section className="pt-32 pb-20 px-6" aria-labelledby="hero-heading">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <div className="inline-flex items-center space-x-2 border border-orange-200 bg-orange-50 text-orange-600 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-8">
                  <Zap size={12} fill="currentColor" />
                  <span>India's Most Flexible Meal Plan</span>
                </div>
                {/* H1 is critical for SEO - contains core service keywords */}
                <h1 id="hero-heading" className="text-7xl lg:text-[8.5rem] font-black leading-[0.85] tracking-tighter mb-8">
                  Eat "Smart.<br />Pay for Use.
                </h1>
                <p className="text-xl text-slate-500 max-w-lg leading-relaxed mb-8">
                  Premium <strong>Tiffin Service in Trivandrum</strong>. Our unique <strong>carry-forward meal credits</strong> ensure you only pay for the food you actually eat. No more wasted subscriptions.
                </p>
                <div className="flex gap-4">
                  <button onClick={() => handleBooking('Get Started')} className="bg-[#1B3F22] text-white px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-xl">
                    Get Free Trial Meal
                  </button>
                </div>
              </motion.div>

              {/* STAGGERED IMAGE GRID with Alt Tags */}
              <div className="relative flex space-x-4" aria-hidden="true">
                <div className="flex flex-col space-y-4 pt-12">
                  <img src={foodImages[0].url} alt={foodImages[0].alt} className="w-48 h-64 object-cover rounded-[3rem]" />
                  <img src={foodImages[1].url} alt={foodImages[1].alt} className="w-48 h-64 object-cover rounded-[3rem]" />
                </div>
                <div className="flex flex-col space-y-4">
                  <img src={foodImages[2].url} alt={foodImages[2].alt} className="w-48 h-64 object-cover rounded-[3rem]" />
                  <img src={foodImages[3].url} alt={foodImages[3].alt} className="w-48 h-64 object-cover rounded-[3rem]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- THE BENTO FEATURE CARD --- */}
        <section className="py-20 px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="bg-[#1B3F22] rounded-[4rem] p-8 md:p-16 text-white shadow-2xl relative overflow-hidden"
            >
              <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-12">
                <div className="max-w-xl">
                  <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 italic">The Zero-Waste Meal Wallet</h2>
                  <p className="text-white/60 text-lg mb-8 italic">
                    "Traditional tiffin services take your money even if you miss a meal. At Ruchi, unused meals are credited back to your wallet for next month."
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="bg-white/10 px-4 py-2 rounded-xl flex items-center gap-2 border border-white/5">
                      <RotateCcw size={16} className="text-orange-400" />
                      <span className="text-[10px] font-black uppercase tracking-widest">Unlimited Rollover</span>
                    </div>
                    <div className="bg-white/10 px-4 py-2 rounded-xl flex items-center gap-2 border border-white/5">
                      <Timer size={16} className="text-orange-400" />
                      <span className="text-[10px] font-black uppercase tracking-widest">Flex-Cancel (8AM)</span>
                    </div>
                  </div>
                </div>
                
                <article className="bg-white rounded-[3rem] p-10 text-[#1B3F22] text-center min-w-[280px] shadow-2xl">
                   <span className="text-orange-500 font-black text-[10px] uppercase tracking-widest">Most Popular Choice</span>
                   <p className="text-6xl font-black my-4 tracking-tighter">₹5,499</p>
                   <p className="text-xs font-bold text-slate-400 uppercase mb-8">60 Flexible Meal Credits</p>
                   <button onClick={() => handleBooking('Executive Combo')} className="w-full bg-[#1B3F22] text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-orange-500 transition-colors">Buy Credit Pack</button>
                </article>
              </div>
              <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] -mr-48 -mt-48" />
            </motion.div>
          </div>
        </section>

        {/* --- PRICING GRID: Use <article> for individual items --- */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <header className="text-center mb-16">
              <h2 className="text-5xl font-black tracking-tighter uppercase italic">Flexible Meal Plans</h2>
              <p className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.4em] mt-4">Home-Cooked delivery in Trivandrum</p>
            </header>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Plan 1 */}
              <article className="p-12 rounded-[3.5rem] border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl transition-all">
                <h3 className="text-xl font-black uppercase italic mb-2 tracking-tighter">Standard Lunch</h3>
                <p className="text-4xl font-black mb-8 italic text-orange-500">₹2,999</p>
                <ul className="space-y-4 mb-10 text-xs font-bold text-slate-500 italic">
                  <li className="flex items-center gap-3"><CheckCircle size={14} className="text-green-600"/> 30 Meal Credits</li>
                  <li className="flex items-center gap-3"><CheckCircle size={14} className="text-green-600"/> Mon - Sat Delivery</li>
                  <li className="flex items-center gap-3"><CheckCircle size={14} className="text-green-600"/> Carry-Forward Credits</li>
                </ul>
                <button onClick={() => handleBooking('Standard Lunch')} className="w-full py-4 border-2 border-[#1B3F22] rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-[#1B3F22] hover:text-white transition-all">Select Plan</button>
              </article>

              {/* Plan 2 */}
              <article className="p-12 rounded-[3.5rem] bg-[#1B3F22] text-white shadow-2xl scale-105 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 px-4 py-1 rounded-full text-[8px] font-black uppercase tracking-widest shadow-lg">Technopark Favorite</div>
                <h3 className="text-xl font-black uppercase italic mb-2 tracking-tighter">Executive Combo</h3>
                <p className="text-4xl font-black mb-8 italic text-orange-400">₹5,499</p>
                <ul className="space-y-4 mb-10 text-xs font-bold italic opacity-80">
                  <li className="flex items-center gap-3"><CheckCircle size={14} className="text-orange-400"/> 60 Meal Credits</li>
                  <li className="flex items-center gap-3"><CheckCircle size={14} className="text-orange-400"/> Lunch + Dinner Delivery</li>
                  <li className="flex items-center gap-3"><CheckCircle size={14} className="text-orange-400"/> Sunday Special Sadhya</li>
                </ul>
                <button onClick={() => handleBooking('Executive Combo')} className="w-full py-4 bg-white text-[#1B3F22] rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-orange-500 hover:text-white transition-all">Best Value</button>
              </article>

              {/* Plan 3 */}
              <article className="p-12 rounded-[3.5rem] border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl transition-all">
                <h3 className="text-xl font-black uppercase italic mb-2 tracking-tighter">Trial Week</h3>
                <p className="text-4xl font-black mb-8 italic text-orange-500">₹849</p>
                <ul className="space-y-4 mb-10 text-xs font-bold text-slate-500 italic">
                  <li className="flex items-center gap-3"><CheckCircle size={14} className="text-green-600"/> 7 Meal Credits</li>
                  <li className="flex items-center gap-3"><CheckCircle size={14} className="text-green-600"/> Instant Setup</li>
                  <li className="flex items-center gap-3"><CheckCircle size={14} className="text-green-600"/> No Commitment</li>
                </ul>
                <button onClick={() => handleBooking('Trial Week')} className="w-full py-4 border-2 border-[#1B3F22] rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-[#1B3F22] hover:text-white transition-all">Start Trial</button>
              </article>
            </div>
          </div>
        </section>
      </main>

      {/* --- SEO FOOTER --- */}
      <footer className="py-20 px-6 border-t border-slate-50 text-center">
        <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.6em] mb-4">Ruchi Tiffin • A Mullavanam Group Company</p>
        <p className="text-slate-300 text-[10px] uppercase font-bold tracking-widest">Delivering across Technopark, Kazhakkoottam, and Trivandrum City.</p>
      </footer>
    </div>
  )
}