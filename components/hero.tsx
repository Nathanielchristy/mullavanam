'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Utensils, BedDouble, Sparkles, ReceiptText } from 'lucide-react'

export default function Hero() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
    })
  }

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center overflow-hidden bg-[#FAF9F6] pt-20"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#1B3F22]/5 hidden lg:block" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#1B3F22]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <motion.div 
          initial="hidden"
          animate="visible"
          className="z-10"
        >
          {/* 50% OFFER HIGHLIGHT */}
          <motion.div 
            custom={0} 
            variants={fadeInUp} 
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#C5A059] mb-8 shadow-lg shadow-[#C5A059]/20"
          >
         
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#1B3F22]">
              Special Launch Offer: 50% OFF First Booking
            </span>
          </motion.div>

          <motion.h1 
            custom={1} 
            variants={fadeInUp}
            className="text-6xl lg:text-[5.5rem] font-black text-[#1B3F22] leading-[0.95] mb-8 tracking-tighter"
          >
            Stay <span className="text-[#C5A059]">Budget.</span> <br /> 
            Eat <span className="italic font-serif font-light">Authentic.</span>
          </motion.h1>

          <motion.p 
            custom={2} 
            variants={fadeInUp}
            className="text-xl text-gray-600 mb-12 max-w-lg leading-relaxed font-medium"
          >
            Trivandrum's finest 
            <span className="text-[#1B3F22] font-bold"> Room Stay </span> 
            and 
            <span className="text-[#1B3F22] font-bold"> Ruchi Tiffin services</span>. 
            Now at <span className="bg-[#C5A059]/20 px-2 py-1 rounded font-bold text-[#8A6D3B]">Half Price</span> for your first experience.
          </motion.p>

          <motion.div 
            custom={3} 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row flex-wrap gap-5"
          >
            <Link href="/room-booking">
              <button className="group flex items-center justify-center bg-[#1B3F22] text-[#C5A059] px-10 py-5 rounded-2xl font-black uppercase text-[11px] tracking-widest transition-all hover:scale-105 hover:shadow-2xl active:scale-95 w-full sm:w-auto">
                Book a Room
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2" />
              </button>
            </Link>

            <Link href="/menu">
              <button className="group flex items-center justify-center bg-white border-2 border-[#1B3F22] text-[#1B3F22] px-10 py-5 rounded-2xl font-black uppercase text-[11px] tracking-widest transition-all hover:bg-[#1B3F22] hover:text-[#C5A059] active:scale-95 w-full sm:w-auto">
                View Menu
                <ReceiptText className="ml-2 w-5 h-5" />
              </button>
            </Link>
          </motion.div>

          <motion.p custom={4} variants={fadeInUp} className="mt-8 text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em]">
            *Limited time offer for new members in Trivandrum
          </motion.p>
        </motion.div>

        {/* Right Content - Visuals */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          {/* Main Image Container */}
          <div className="relative h-[550px] lg:h-[650px] rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] border-8 border-white">
            <img 
              src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2000" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-110" 
              alt="Mullavanam Room"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1B3F22]/40 to-transparent" />
          </div>

          {/* Floating Card: Room Booking */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 md:right-0 p-6 bg-white/95 backdrop-blur-xl rounded-[2rem] shadow-2xl flex items-center space-x-5 border border-white/20 z-20"
          >
            <div className="bg-[#1B3F22] p-4 rounded-2xl text-[#C5A059]">
              <BedDouble size={28} />
            </div>
            <div>
              <p className="text-[10px] uppercase font-black tracking-widest text-[#C5A059]">Rooms</p>
              <p className="text-lg font-black text-[#1B3F22]">Starts at ₹999</p>
            </div>
          </motion.div>

          {/* Floating Card: 50% OFF CIRCLE */}
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#C5A059] rounded-full flex flex-col items-center justify-center shadow-2xl z-30 border-4 border-[#FAF9F6]"
          >
            <span className="text-[#1B3F22] text-3xl font-black leading-none">50%</span>
            <span className="text-[#1B3F22] text-[10px] font-black uppercase tracking-tighter">Discount</span>
          </motion.div>

          {/* Floating Card: Tiffin Service */}
        
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3">
        <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[#1B3F22]/40">Explore More</span>
        <div className="w-[2px] h-16 bg-gradient-to-b from-[#1B3F22] to-transparent" />
      </div>
    </section>
  )
}