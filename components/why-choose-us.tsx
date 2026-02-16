'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, BadgePercent, HeartPulse, Sparkles } from 'lucide-react'

export default function WhyChooseUs() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const features = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Prime Location',
      description: 'Centrally located in Trivandrum with seamless access to tech hubs, transport, and hospitals.',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: <BadgePercent className="w-6 h-6" />,
      title: 'Transparent Pricing',
      description: 'Premium living and authentic food at competitive rates with absolutely no hidden charges.',
    },
    {
      icon: <HeartPulse className="w-6 h-6" />,
      title: 'Hygiene First',
      description: 'From kitchen to bedroom, we follow rigorous sanitization protocols for your peace of mind.',
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Modern Comfort',
      description: 'Thoughtfully curated spaces and amenities designed to make you feel right at home.',
    },
  ]

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#C5A059] mb-3">
            The Mullavanam Advantage
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Designed for Comfort, <br className="hidden md:block" /> Built on Trust.
          </h3>
          <div className="w-12 h-1 bg-[#1B3F22] mx-auto rounded-full"></div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group p-8 rounded-2xl border border-slate-100 bg-slate-50/30 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#1B3F22] mb-6 group-hover:bg-[#1B3F22] group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              
              <h4 className="text-lg font-bold text-slate-900 mb-3">
                {feature.title}
              </h4>
              
              <p className="text-slate-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Optional: Simple Trust Footer */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-center mt-16 text-slate-400 text-sm font-medium"
        >
          Trusted by over 500+ residents and families in Trivandrum.
        </motion.p>
      </div>
    </section>
  )
}