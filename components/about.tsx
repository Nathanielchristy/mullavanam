'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, Users, Heart, ShieldCheck } from 'lucide-react'

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const stats = [
    { icon: <Users className="w-5 h-5" />, label: 'Happy Residents', value: '500+' },
    { icon: <Heart className="w-5 h-5" />, label: 'Meals Served', value: '10k+' },
    { icon: <ShieldCheck className="w-5 h-5" />, label: 'Hygiene Rating', value: 'A+' },
    { icon: <Award className="w-5 h-5" />, label: 'Years of Trust', value: '12+' },
  ]

  return (
    <section id="about" className="py-24 px-6 bg-white overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Visual Storytelling */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative z-10 rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* Main Lifestyle Image */}
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000" 
                alt="Premium Living" 
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
            
            {/* Decorative Gold Frame */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#C5A059]/30 rounded-2xl -z-10 hidden md:block" />
            
            {/* Floating "Since" Badge */}
            <motion.div 
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              className="absolute -top-10 -left-10 bg-[#1B3F22] text-white p-8 rounded-full shadow-xl hidden lg:flex flex-col items-center justify-center border-4 border-white"
            >
              <span className="text-[10px] uppercase tracking-widest font-bold opacity-70">Established</span>
              <span className="text-2xl font-black">2012</span>
            </motion.div>
          </div>

          {/* Right Side: Content & Stats */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#C5A059] mb-4">
                Our Legacy
              </h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-[#1B3F22] mb-8 leading-tight">
                Crafting the Art of <br />
                <span className="italic font-serif font-light">Authentic Hospitality</span>
              </h3>
              
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-10">
                <p>
                  Mullavanam Group emerged from a simple vision: to redefine urban living in Trivandrum by marrying 
                  <strong className="text-[#1B3F22]"> premium comfort</strong> with the warmth of 
                  <strong className="text-[#1B3F22]"> traditional Kerala heritage</strong>.
                </p>
                <p>
                  Whether it is our meticulously curated room rentals or our farm-to-table tiffin services, we don’t just provide a service—we host an experience. Our philosophy is rooted in <em>'Athithi Devo Bhava'</em>, ensuring every interaction feels like family.
                </p>
              </div>

              {/* Advanced Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-8 border-t border-gray-100">
                {stats.map((stat, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + (idx * 0.1) }}
                    className="text-center sm:text-left"
                  >
                    <div className="text-[#C5A059] mb-2 flex justify-center sm:justify-start">{stat.icon}</div>
                    <div className="text-2xl font-bold text-[#1B3F22]">{stat.value}</div>
                    <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <motion.button 
                whileHover={{ x: 10 }}
                className="mt-4 flex items-center space-x-3 text-[#1B3F22] font-bold group"
              >
                <span className="border-b-2 border-[#C5A059]">Discover Our Story</span>
                <span className="text-[#C5A059] transition-transform group-hover:translate-x-2">→</span>
              </motion.button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}