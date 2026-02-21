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
  MapPin,
  BookOpen,
  UtensilsCrossed
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
      
      {/* --- FLOATING MENU BUTTON (MOBILE ONLY) --- */}
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed bottom-8 right-8 z-[60] lg:hidden"
      >
        <Link href="/menu">
          <button className="bg-[#D4AF37] text-[#0D1F12] p-5 rounded-full shadow-[0_20px_50px_rgba(212,175,55,0.4)] flex items-center justify-center">
            <UtensilsCrossed size={24} />
          </button>
        </Link>
      </motion.div>

      {/* --- SEO-OPTIMIZED HEADER --- */}
      <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-[#D4AF37]/10">
        <nav className="max-w-[1400px] mx-auto px-6 py-4 md:py-6 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="bg-[#0D1F12] p-2 rounded-lg group-hover:bg-[#D4AF37] transition-all duration-500">
              <ArrowLeft size={18} className="text-[#D4AF37]" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-black tracking-tighter uppercase leading-none">Mullavanam</span>
              <span className="text-[8px] font-black uppercase tracking-[0.3em] text-[#D4AF37]">Group Enterprise</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8 text-[10px] font-black uppercase tracking-widest">
            <a href="#kitchen" className="hover:text-[#D4AF37] transition-colors">Al Gadhiya Kitchen</a>
            <a href="#ruchi" className="hover:text-[#D4AF37] transition-colors">Ruchi Tiffin</a>
            <Link href="/menu" className="text-[#D4AF37] border-b border-[#D4AF37]">Explore Menu</Link>
            <a href="#pricing" className="hover:text-[#D4AF37] transition-colors">Meal Packs</a>
          </div>

          <div className="flex items-center gap-4">
             <Link href="/menu" className="hidden sm:block">
                <button className="bg-transparent text-[#0D1F12] px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest border-2 border-[#0D1F12] hover:bg-[#0D1F12] hover:text-white transition-all">
                   Daily Menu
                </button>
             </Link>
            <button className="lg:hidden p-2 text-[#0D1F12]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      <main>
        {/* --- HERO SECTION --- */}
        <section className="pt-32 md:pt-48 pb-16 md:pb-32 px-6 overflow-hidden">
          <div className="max-w-[1400px] mx-auto flex flex-col items-center text-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="z-10"
            >
              <div className="inline-flex items-center space-x-3 bg-white shadow-sm border border-slate-100 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-slate-400">Accepting Lunch Orders</span>
                <span className="text-[#D4AF37]">•</span>
                <span className="flex items-center gap-1"><MapPin size={10}/> Trivandrum</span>
              </div>

              <h1 className="text-6xl md:text-[10rem] font-black leading-[0.85] tracking-tighter mb-10 uppercase">
                Pay <span className="text-[#D4AF37] italic">Only.</span> <br/>
                <span className="relative">
                  What You Eat
                  <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 600 12" fill="none"><path d="M2 10C150 2 450 2 598 10" stroke="#D4AF37" strokeWidth="4" strokeLinecap="round"/></svg>
                </span>
              </h1>

              <p className="text-lg md:text-2xl text-slate-500 max-w-3xl leading-relaxed mb-12 italic px-4 font-medium">
                The first digital meal wallet with <span className="text-[#0D1F12] font-bold">lifetime rollover credits</span>. We look to coook are you reday to Eat!!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button 
                  onClick={() => handleBooking('Hero')} 
                  className="w-full sm:w-auto bg-[#0D1F12] text-[#D4AF37] px-12 py-6 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] shadow-[0_20px_50px_rgba(0,0,0,0.2)] flex items-center justify-center group hover:scale-105 transition-all"
                >
                  Start Subscription
                  <ArrowRight size={18} className="ml-3 group-hover:translate-x-2 transition-transform" />
                </button>
                
                <Link href="/menu" className="w-full sm:w-auto">
                  <button className="w-full bg-white text-[#0D1F12] px-12 py-6 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] border-2 border-slate-100 flex items-center justify-center group hover:border-[#D4AF37] transition-all">
                    <BookOpen size={18} className="mr-3 text-[#D4AF37]" />
                    View Today's Menu
                  </button>
                </Link>
              </div>
            </motion.div>

            {/* Visual Teaser */}
            <div className="mt-20 relative w-full max-w-6xl">
               <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#D4AF37]/20 rounded-full blur-[80px]" />
               <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                  <motion.img 
                    initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                    src="https://images.unsplash.com/photo-1547573854-74d2a71d0826?q=80&w=800" 
                    className="aspect-[4/5] object-cover rounded-[3rem] shadow-2xl" 
                  />
                  <motion.img 
                    initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }}
                    src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800" 
                    className="aspect-[4/5] object-cover rounded-[3rem] shadow-2xl md:mt-16" 
                  />
                  <motion.img 
                    initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
                    src="https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=800" 
                    className="hidden md:block aspect-[4/5] object-cover rounded-[3rem] shadow-2xl mt-32" 
                  />
               </div>
            </div>
          </div>
        </section>

        {/* --- AL GHADIYA KITCHEN --- */}
        <section id="kitchen" className="py-24 md:py-40 bg-[#0D1F12] text-white rounded-[4rem] md:rounded-[8rem] mx-4 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-[#D4AF37] rounded-full blur-[150px]" />
          </div>
          
          <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-2 gap-20 items-center relative z-10">
            <div>
              <span className="text-[#D4AF37] font-black text-[10px] uppercase tracking-[0.5em] mb-8 block italic">Quality Infrastructure</span>
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-10 italic leading-[0.9]">Industrial Scale. <br/> <span className="text-[#D4AF37]">Soulful</span> Taste.</h2>
              <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-12 max-w-xl">
                Our massive facility in Trivandrum isn't just a kitchen; it's a precision-engineered hub of culinary excellence, adhering to the highest safety and hygiene standards.
              </p>
              <div className="flex gap-12">
                <div>
                  <p className="text-4xl font-black text-[#D4AF37]">10k</p>
                  <p className="text-[10px] font-black uppercase opacity-40 mt-2 tracking-widest">Sq. Ft Facility</p>
                </div>
                <div className="w-[1px] bg-white/10" />
                <div>
                  <p className="text-4xl font-black text-[#D4AF37]">HACCP</p>
                  <p className="text-[10px] font-black uppercase opacity-40 mt-2 tracking-widest">Certified Safety</p>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 border border-[#D4AF37]/20 rounded-[4rem] group-hover:inset-0 transition-all duration-700" />
              <img src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=800" className="rounded-[3rem] md:rounded-[4rem] grayscale hover:grayscale-0 transition-all duration-1000" alt="Kitchen" />
            </div>
          </div>
        </section>

        {/* --- SMART FEATURES --- */}
        <section id="ruchi" className="py-24 md:py-48 px-6">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic">The Ruchi <br/> <span className="text-[#D4AF37]">Advantage.</span></h2>
              <Link href="/menu">
                <button className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest group">
                  Discover our daily variety <ArrowRight size={20} className="text-[#D4AF37] group-hover:translate-x-3 transition-transform" />
                </button>
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: <RotateCcw />, title: "Lifetime Rollover", desc: "Unused meals never expire. They roll over to your next month automatically." },
                { icon: <Zap />, title: "Instant Pause", desc: "Going out for lunch? Pause your tiffin by 8 AM via WhatsApp—no charges applied." },
                { icon: <ShieldCheck />, title: "Premium Sourcing", desc: "We use only first-press oils and farm-fresh vegetables for every single meal." }
              ].map((feat, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10 }}
                  className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all"
                >
                  <div className="bg-[#D4AF37]/10 w-16 h-16 rounded-2xl flex items-center justify-center text-[#D4AF37] mb-8">
                    {feat.icon}
                  </div>
                  <h4 className="text-2xl font-black uppercase italic tracking-tighter mb-4">{feat.title}</h4>
                  <p className="text-slate-500 leading-relaxed font-medium italic">{feat.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- PRICING SECTION --- */}
        <section id="pricing" className="py-24 px-6 bg-[#F5F2ED] rounded-[4rem] md:rounded-[8rem] mx-4 mb-20">
          <div className="max-w-[1400px] mx-auto text-center">
            <h3 className="text-5xl md:text-9xl font-black tracking-tighter uppercase mb-20 italic">Credit <span className="text-[#D4AF37]">Packs.</span></h3>
            
            <div className="grid md:grid-cols-3 gap-8 md:items-center">
               {/* Pack 1 */}
               <div className="bg-white p-12 rounded-[4rem] text-left border border-white hover:border-[#D4AF37]/20 transition-all">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">Basic Plan</span>
                  <h4 className="text-3xl font-black uppercase italic mt-2 mb-8">Standard</h4>
                  <div className="mb-10">
                    <span className="text-6xl font-black">₹2,999</span>
                    <span className="text-sm font-bold opacity-30 ml-2">/ 30 Credits</span>
                  </div>
                  <ul className="space-y-4 mb-12 text-sm font-medium italic text-slate-500">
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500"/> Lifetime Rollover</li>
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500"/> Delivery Included</li>
                  </ul>
                  <button onClick={() => handleBooking('Standard')} className="w-full py-6 rounded-2xl bg-[#0D1F12] text-[#D4AF37] text-[10px] font-black uppercase tracking-widest">Select Pack</button>
               </div>

               {/* Pack 2 (PRO) */}
               <div className="bg-[#0D1F12] p-16 rounded-[4rem] text-left text-white shadow-2xl relative overflow-hidden scale-105">
                  <div className="absolute top-8 right-8 bg-[#D4AF37] text-[#0D1F12] px-4 py-1 rounded-full text-[8px] font-black uppercase tracking-widest">Recommended</div>
                  <h4 className="text-4xl font-black uppercase italic text-[#D4AF37] mb-8">Elite Combo</h4>
                  <div className="mb-10">
                    <span className="text-7xl font-black">₹5,499</span>
                    <span className="text-sm font-bold opacity-40 ml-2">/ 60 Credits</span>
                  </div>
                  <ul className="space-y-4 mb-12 text-sm font-medium italic text-white/60">
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-[#D4AF37]"/> Lunch & Dinner Credits</li>
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-[#D4AF37]"/> Priority Support</li>
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-[#D4AF37]"/> Weekend Specials</li>
                  </ul>
                  <button onClick={() => handleBooking('Elite')} className="w-full py-6 rounded-2xl bg-[#D4AF37] text-[#0D1F12] text-[10px] font-black uppercase tracking-widest">Get Elite Access</button>
               </div>

               {/* Pack 3 */}
               <div className="bg-white p-12 rounded-[4rem] text-left border border-white hover:border-[#D4AF37]/20 transition-all">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">Trial Plan</span>
                  <h4 className="text-3xl font-black uppercase italic mt-2 mb-8">Seven Day</h4>
                  <div className="mb-10">
                    <span className="text-6xl font-black">₹849</span>
                    <span className="text-sm font-bold opacity-30 ml-2">/ 7 Credits</span>
                  </div>
                  <ul className="space-y-4 mb-12 text-sm font-medium italic text-slate-500">
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500"/> Full Experience</li>
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500"/> Instant Setup</li>
                  </ul>
                  <button onClick={() => handleBooking('Trial')} className="w-full py-6 rounded-2xl border-2 border-[#0D1F12] text-[#0D1F12] text-[10px] font-black uppercase tracking-widest">Start Trial</button>
               </div>
            </div>
          </div>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-white pt-24 pb-12 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start border-b border-slate-100 pb-20 gap-12">
            <div>
              <h4 className="text-4xl font-black uppercase tracking-tighter italic mb-6">Mullavanam Group.</h4>
              <p className="text-slate-400 max-w-sm italic font-medium leading-relaxed">
                Powered by Al Gadhiya's massive production capacity and Ruchi's digital-first customer experience.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
              <div className="space-y-4">
                <p className="text-[10px] font-black uppercase tracking-widest text-[#D4AF37]">Explore</p>
                <Link href="/menu" className="block text-sm font-bold uppercase tracking-tighter hover:text-[#D4AF37]">The Menu</Link>
                <a href="#kitchen" className="block text-sm font-bold uppercase tracking-tighter hover:text-[#D4AF37]">The Kitchen</a>
              </div>
              <div className="space-y-4">
                <p className="text-[10px] font-black uppercase tracking-widest text-[#D4AF37]">Support</p>
                <p className="text-sm font-bold uppercase tracking-tighter">WhatsApp Help</p>
                <p className="text-sm font-bold uppercase tracking-tighter">Refund Policy</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center mt-12 gap-6">
            <p className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-300 italic">© 2026 Al Gadhiya Kitchen × Ruchi Tiffin • All Credits Protected</p>
            <div className="flex gap-6">
              <div className="w-8 h-8 rounded-full bg-slate-100" />
              <div className="w-8 h-8 rounded-full bg-slate-100" />
              <div className="w-8 h-8 rounded-full bg-slate-100" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}