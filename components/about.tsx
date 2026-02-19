'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Wallet, MapPin, Coffee, ShieldCheck, ArrowRight } from 'lucide-react'

export default function BudgetAbout() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const features = [
    { 
      icon: <Wallet className="w-5 h-5" />, 
      title: 'Budget Friendly', 
      desc: 'Lowest price guaranteed for premium rooms in Trivandrum.' 
    },
    { 
      icon: <MapPin className="w-5 h-5" />, 
      title: 'Prime Location', 
      desc: 'Walking distance to major transit hubs and Al Ghadiya kitchen.' 
    },
    { 
      icon: <Coffee className="w-5 h-5" />, 
      title: 'Quality Service', 
      desc: 'Affordable stays shouldn’t compromise on cleanliness or comfort.' 
    },
    { 
      icon: <ShieldCheck className="w-5 h-5" />, 
      title: 'Safe & Secure', 
      desc: '24/7 security and verified guest entries for total peace of mind.' 
    },
  ]

  return (
    <section id="about" className="py-20 px-6 bg-[#FDFCFB]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Image with Value Badge */}
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="rounded-[2.5rem] overflow-hidden shadow-xl border-8 border-white"
            >
              <img 
                src="https://i.pinimg.com/1200x/49/63/e7/4963e768b1c989161482936ee2abd744.jpg" 
                alt="Affordable Budget Stay in Trivandrum" 
                className="w-full h-[450px] object-cover"
              />
            </motion.div>
            
            {/* SEO Floating Badge */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -right-2 md:right-10 bg-[#D4AF37] p-6 rounded-2xl shadow-2xl text-[#1B3F22]"
            >
              <p className="text-[10px] font-black uppercase tracking-tighter">Starting From</p>
              <p className="text-3xl font-black">₹999<span className="text-sm">/day</span></p>
            </motion.div>
          </div>

          {/* Right Side: SEO Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="inline-block bg-[#1B3F22] text-[#D4AF37] px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                Best Budget Stays in Trivandrum
              </h2>
              <h3 className="text-4xl md:text-5xl font-black text-[#1B3F22] leading-[1.1] mb-6">
                Your Preferred <span className="text-[#D4AF37]">Budget Stay</span> in Trivandrum
              </h3>
              
              <div className="text-gray-600 text-lg space-y-4 mb-8">
                <p>
                  At <strong className="text-[#1B3F22]">Mullavanam Stays</strong>, our vision is simple: providing high-quality, 
                  <span className="text-[#1B3F22] font-bold"> affordable accommodation in Trivandrum</span> for students, 
                  travelers, and professionals. 
                </p>
                <p className="text-base">
                  We believe that a tight budget shouldn't mean a compromise on hygiene or safety. 
                  Located in the heart of the city, we offer the most competitive rates for clean, 
                  modern, and well-maintained rooms.
                </p>
              </div>

              {/* Feature Grid */}
              <div className="grid sm:grid-cols-2 gap-6">
                {features.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 * idx }}
                    className="flex gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-md transition-all group border border-transparent hover:border-slate-100"
                  >
                    <div className="bg-[#D4AF37]/20 p-3 rounded-xl text-[#1B3F22] group-hover:bg-[#1B3F22] group-hover:text-[#D4AF37] transition-colors h-fit">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1B3F22] text-sm uppercase">{item.title}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div className="pt-8">
                <button className="flex items-center gap-3 bg-[#1B3F22] text-[#D4AF37] px-8 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-black transition-all shadow-lg">
                  View Budget Plans <ArrowRight size={16} />
                </button>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}