'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ArrowLeft,
  Wallet,
  RotateCcw,
  CheckCircle,
  ArrowRight,
  ChefHat,
  Menu,
  X,
  ShieldCheck,
  Zap,
  MapPin
} from 'lucide-react'

export default function MobileFirstSupreme() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleBooking = (plan: string) => {
    const phoneNumber = "91945948888"
    const message = `*Mullavanam Inquiry:* I'm interested in the *${plan}* pack (Al Ghadiya x Ruchi).`
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#0D1F12] antialiased selection:bg-[#D4AF37] selection:text-white">
      
      {/* --- SEO-OPTIMIZED HEADER --- */}
      <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-[#D4AF37]/10">
        <nav className="max-w-[1400px] mx-auto px-6 py-4 md:py-6 flex justify-between items-center" role="navigation">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="bg-[#0D1F12] p-2 rounded-lg group-hover:bg-[#D4AF37] transition-colors">
              <ArrowLeft size={18} className="text-[#D4AF37]" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-black tracking-tighter uppercase leading-none">Mullavanam</span>
              <span className="text-[8px] font-black uppercase tracking-[0.3em] text-[#D4AF37]">Group Enterprise</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8 text-[10px] font-black uppercase tracking-widest">
            <a href="#kitchen" className="hover:text-[#D4AF37]">Al Gadhiya Kitchen</a>
            <a href="#ruchi" className="hover:text-[#D4AF37]">Ruchi Tiffin</a>
            <a href="#pricing" className="hover:text-[#D4AF37]">Meal Packs</a>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => handleBooking('General')}
              className="hidden md:block bg-[#0D1F12] text-[#D4AF37] px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-[#D4AF37]/30"
            >
              Contact Us
            </button>
            <button className="lg:hidden p-2 text-[#0D1F12]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-b border-[#D4AF37]/20 overflow-hidden"
            >
              <div className="flex flex-col p-6 space-y-4 text-[12px] font-black uppercase tracking-widest">
                <a href="#kitchen" onClick={() => setIsMenuOpen(false)}>Al Gadhiya Kitchen</a>
                <a href="#ruchi" onClick={() => setIsMenuOpen(false)}>Ruchi Tiffin</a>
                <a href="#pricing" onClick={() => setIsMenuOpen(false)}>Meal Packs</a>
                <button onClick={() => handleBooking('Mobile')} className="w-full bg-[#0D1F12] text-[#D4AF37] py-4 rounded-xl">Inquire Now</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* --- HERO: MOBILE RESPONSIVE OPTIMIZED --- */}
        <section className="pt-32 md:pt-48 pb-16 md:pb-32 px-6">
          <div className="max-w-[1400px] mx-auto flex flex-col items-center text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              className="z-10"
            >
              <div className="inline-flex items-center space-x-2 bg-[#D4AF37]/10 text-[#8A6D3B] px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 md:mb-10">
                <MapPin size={12} />
                <span>Trivandrum's Premium Tiffin Network</span>
              </div>
              <h1 className="text-5xl md:text-[9rem] font-black leading-[0.9] tracking-tighter mb-8 uppercase">
                Pay <span className="text-[#D4AF37] italic">For.</span> <br/> What you eat <span className="underline decoration-[#D4AF37] decoration-4 md:decoration-8 underline-offset-4">  </span>
              </h1>
              <p className="text-base md:text-xl text-slate-500 max-w-2xl leading-relaxed mb-10 md:mb-14 italic px-4">
                Powered by <strong>Al Gadhiya Kitchen</strong>. Managed by <strong>Ruchi Tiffin</strong>. The first meal wallet with lifetime rollover credits.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                 <button onClick={() => handleBooking('Hero')} className="bg-[#0D1F12] text-[#D4AF37] px-10 py-5 rounded-[2rem] text-xs font-black uppercase tracking-widest shadow-2xl flex items-center justify-center group">
                    Book Your First Meal
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
                 </button>
              </div>
            </motion.div>

            {/* Responsive Image Grid */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 w-full max-w-5xl">
               <img src="https://images.unsplash.com/photo-1547573854-74d2a71d0826?q=80&w=600" className="aspect-square object-cover rounded-[2rem] md:rounded-[4rem] shadow-lg" alt="Al Ghadiya Premium Meals" />
               <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=600" className="aspect-square object-cover rounded-[2rem] md:rounded-[4rem] shadow-lg md:mt-12" alt="Corporate Kitchen Standards" />
               <img src="https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=600" className="hidden md:block aspect-square object-cover rounded-[4rem] shadow-lg" alt="Ruchi Tiffin Delivery" />
            </div>
          </div>
        </section>

        {/* --- AL GHADIYA: THE KITCHEN ENGINE (SEO: Service Area) --- */}
        <section id="kitchen" className="py-20 md:py-32 bg-[#0D1F12] text-white rounded-[3rem] md:rounded-[7rem] mx-4 overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="order-2 md:order-1">
              <div className="relative">
                <img src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=800" className="rounded-[3rem] md:rounded-[5rem] w-full" alt="Al Ghadiya Kitchen Facility" />
               
              </div>
            </div>
            <div className="order-1 md:order-2">
              <span className="text-[#D4AF37] font-black text-[10px] uppercase tracking-[0.5em] mb-4 md:mb-8 block italic">The Powerhouse</span>
              <h2 className="text-4xl md:text-8xl font-black tracking-tighter uppercase mb-8 italic leading-none">Al Gadhiya <br/> Kitchen.</h2>
              <p className="text-white/50 text-base md:text-xl leading-relaxed mb-10">
                Operating a massive 10,000 sq.ft facility in Trivandrum, we provide the industrial scale required for corporate excellence with the soul of home-cooked flavors.
              </p>
              <div className="flex gap-8">
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-[#D4AF37]">100+</span>
                  <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest mt-1">Meals served Daily</span>
                </div>
                <div className="w-[1px] bg-white/10" />
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-[#D4AF37]">12+ Yrs</span>
                  <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest mt-1">Heritage</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- RUCHI: SMART WALLET (SEO: Feature Keywords) --- */}
        <section id="ruchi" className="py-20 md:py-40 px-6">
          <div className="max-w-[1400px] mx-auto text-center">
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-16 md:mb-24 italic underline decoration-[#D4AF37] underline-offset-8">The Ruchi Tiffin <span className="text-[#D4AF37]">Advantage.</span></h2>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
               {/* Mobile Bento Card 1 */}
               <div className="bg-white p-8 md:p-16 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col items-center text-center">
                  <div className="bg-[#D4AF37]/10 p-6 rounded-full text-[#D4AF37] mb-8">
                     <RotateCcw size={40} />
                  </div>
                  <h4 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-4">Zero Loss Rollover</h4>
                  <p className="text-slate-500 max-w-xs leading-relaxed font-medium italic">Unused meal credits carry forward automatically. Your money, saved.</p>
               </div>

               {/* Mobile Bento Card 2 */}
               <div className="bg-white p-8 md:p-16 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col items-center text-center">
                  <div className="bg-[#D4AF37]/10 p-6 rounded-full text-[#D4AF37] mb-8">
                     <Wallet size={40} />
                  </div>
                  <h4 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-4">Digital Meal Wallet</h4>
                  <p className="text-slate-500 max-w-xs leading-relaxed font-medium italic">Pause, play, or cancel your tiffin with one tap before 8:00 AM.</p>
               </div>
            </div>
          </div>
        </section>

        {/* --- PRICING: SEO-READY ARTICLE TAGS --- */}
        <section id="pricing" className="py-20 md:py-32 px-6 bg-[#F5F2ED] rounded-[3rem] md:rounded-[7rem] mx-4 mb-10">
          <div className="max-w-[1400px] mx-auto text-center">
             <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400 mb-6 block">Pricing Table</span>
             <h3 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-16 italic text-[#0D1F12]">Select Your <span className="text-[#D4AF37]">Credit Pack.</span></h3>

             <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-end">
                {/* Pack 1 */}
                <article className="bg-white p-10 md:p-14 rounded-[4rem] text-left shadow-sm">
                   <h4 className="text-2xl font-black uppercase italic tracking-tighter mb-2">Standard</h4>
                   <p className="text-[10px] font-bold uppercase text-slate-400 mb-8">Daily Lunch Credits</p>
                   <div className="flex items-baseline mb-10">
                      <span className="text-5xl font-black">₹2,999</span>
                      <span className="text-[10px] font-bold ml-2 opacity-30">/ 30 Meals</span>
                   </div>
                   <button onClick={() => handleBooking('Standard')} className="w-full py-5 rounded-[2rem] bg-[#0D1F12] text-white text-[10px] font-black uppercase tracking-widest hover:bg-[#D4AF37] transition-colors">Buy Credits</button>
                </article>

                {/* Pack 2 (Supreme Choice) */}
                <article className="bg-[#0D1F12] p-12 md:p-16 rounded-[4rem] text-left text-white shadow-2xl scale-100 md:scale-110 relative overflow-hidden">
                   <div className="absolute top-6 right-8 bg-[#D4AF37] text-[#0D1F12] px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest">Most Popular</div>
                   <h4 className="text-3xl font-black uppercase italic tracking-tighter mb-2 text-[#D4AF37]">Elite Combo</h4>
                   <p className="text-[10px] font-bold uppercase text-white/40 mb-8">Lunch + Dinner + Sunday Special</p>
                   <div className="flex items-baseline mb-12">
                      <span className="text-6xl font-black">₹5,499</span>
                      <span className="text-[10px] font-bold ml-2 opacity-40">/ 60 Meals</span>
                   </div>
                   <button onClick={() => handleBooking('Elite')} className="w-full py-6 rounded-[2.5rem] bg-[#D4AF37] text-[#0D1F12] text-[10px] font-black uppercase tracking-widest hover:bg-white transition-all">Claim Elite Access</button>
                </article>

                {/* Pack 3 */}
                <article className="bg-white p-10 md:p-14 rounded-[4rem] text-left shadow-sm">
                   <h4 className="text-2xl font-black uppercase italic tracking-tighter mb-2">Trial Pack</h4>
                   <p className="text-[10px] font-bold uppercase text-slate-400 mb-8">1 Week Experience</p>
                   <div className="flex items-baseline mb-10">
                      <span className="text-5xl font-black">₹849</span>
                      <span className="text-[10px] font-bold ml-2 opacity-30">/ 7 Meals</span>
                   </div>
                   <button onClick={() => handleBooking('Trial')} className="w-full py-5 rounded-[2rem] border-2 border-[#0D1F12] text-[#0D1F12] text-[10px] font-black uppercase tracking-widest hover:bg-[#0D1F12] hover:text-white transition-colors">Start Trial</button>
                </article>
             </div>
          </div>
        </section>
      </main>

      {/* --- SUPREME FOOTER --- */}
      <footer className="bg-white pt-20 pb-10 px-6">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-12 border-b border-slate-100 pb-20">
           <div>
              <h4 className="text-3xl font-black uppercase tracking-tighter mb-4 italic underline decoration-[#D4AF37] underline-offset-4">Mullavanam Group.</h4>
              <p className="text-slate-400 text-sm max-w-md italic font-medium">The intersection of Al Ghadiya's massive culinary history and Ruchi's digital future. Trusted across Technopark and Trivandrum since 2012.</p>
           </div>
           <div className="grid grid-cols-2 gap-8 text-[10px] font-black uppercase tracking-[0.2em]">
              <div className="space-y-4">
                 <p className="text-[#D4AF37]">The Kitchen</p>
                 <p className="opacity-40">Phase 1, Technopark</p>
              </div>
              <div className="space-y-4 text-right md:text-left">
                 <p className="text-[#D4AF37]">Connect</p>
                 <p className="opacity-40">+91 94594 88888</p>
              </div>
           </div>
        </div>
        <div className="text-center mt-10">
           <p className="text-[9px] font-black uppercase tracking-[0.6em] text-slate-200">© 2026 Al Gadhiya Kitchen × Ruchi Tiffin • All Credits Protected</p>
        </div>
      </footer>
    </div>
  )
}