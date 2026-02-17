'use client'

import Link from 'next/link' // Import Link from Next.js
import { motion } from 'framer-motion'
import { ArrowRight, Utensils, BedDouble } from 'lucide-react'

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
      className="relative min-h-screen flex items-center overflow-hidden bg-[#FAF9F6]"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#1B3F22]/5 hidden lg:block" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content - SEO & Branding */}
        <motion.div 
          initial="hidden"
          animate="visible"
          className="z-10"
        >
          <motion.div custom={0} variants={fadeInUp} className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#1B3F22]/10 border border-[#1B3F22]/20 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A059] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C5A059]"></span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#1B3F22]">Now Serving in Trivandrum</span>
          </motion.div>

          <motion.h1 
            custom={1} 
            variants={fadeInUp}
            className="text-5xl lg:text-7xl font-extrabold text-[#1B3F22] leading-[1.1] mb-6"
          >
            Where <span className="text-[#C5A059]">Heritage</span> <br /> 
            Meets Modernity.
          </motion.h1>

          <motion.p 
            custom={2} 
            variants={fadeInUp}
            className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed"
          >
            Experience the gold standard of living. From <strong>premium room rentals</strong> to <strong>authentic Kerala tiffin services</strong>, Mullavanam Group brings the heart of Trivandrum to your doorstep.
          </motion.p>

          <motion.div 
            custom={3} 
            variants={fadeInUp}
            className="flex flex-wrap gap-4"
          >
            <button className="group flex items-center bg-[#1B3F22] text-white px-8 py-4 rounded-xl font-bold transition-all hover:bg-[#25522d] hover:shadow-2xl active:scale-95">
              Explore Living Spaces
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>

            {/* Link to Ruchi Tiffin Page */}
            <Link href="/ruchi-tiffin">
              <button className="group flex items-center border-2 border-[#1B3F22] text-[#1B3F22] px-8 py-4 rounded-xl font-bold transition-all hover:bg-[#1B3F22] hover:text-white active:scale-95">
                Ruchi Tiffin
                <Utensils className="ml-2 w-4 h-4 transition-transform group-hover:rotate-12" />
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Content - Visuals */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2000')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black/10 transition-hover hover:bg-black/0 duration-500" />
          </div>

          {/* Floating Cards with Links for better UX */}
          <Link href="/rooms">
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-10 p-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl flex items-center space-x-4 border border-white/20 cursor-pointer hover:bg-white transition-colors"
            >
              <div className="bg-[#C5A059] p-3 rounded-xl text-white">
                <BedDouble size={24} />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-gray-400">Premium Stay</p>
                <p className="text-sm font-bold text-[#1B3F22]">Luxury Suites</p>
              </div>
            </motion.div>
          </Link>

          <Link href="/ruchi-tiffin">
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 left-10 p-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl flex items-center space-x-4 border border-white/20 cursor-pointer hover:bg-white transition-colors"
            >
              <div className="bg-[#1B3F22] p-3 rounded-xl text-white">
                <Utensils size={24} />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-gray-400">Traditional Taste</p>
                <p className="text-sm font-bold text-[#1B3F22]">Kerala Tiffin</p>
              </div>
            </motion.div>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#1B3F22] to-transparent animate-bounce" />
      </div>
    </section>
  )
}