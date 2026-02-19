'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Home, UtensilsCrossed, Check, ArrowRight, Car, Coffee } from 'lucide-react'

export default function Services() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const services = [
    {
      icon: <Home className="w-6 h-6" />,
      title: 'Budget Room Rentals',
      description: 'The most affordable quality accommodation in Trivandrum. Clean, safe, and student-friendly living spaces.',
      image: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45?q=80&w=1000',
      features: [
        'Lowest Daily & Monthly Rates',
        '24/7 Security & High-Speed WiFi',
        'In-House Food Service Available',
        'Call Taxi & Easy Transport Access'
      ],
      cta: 'View Budget Rooms',
      accent: 'border-t-4 border-[#1B3F22]'
    },
    {
      icon: <UtensilsCrossed className="w-6 h-6" />,
      title: 'Ruchi Tiffin Center',
      description: 'Home-style Kerala meals that are light on your pocket. Fresh, healthy, and delivered daily.',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1000',
      features: [
        'Affordable Monthly Meal Plans',
        'Traditional No-MSG Recipes',
        'Fresh Ingredients from Local Farms',
        'Doorstep Delivery in Trivandrum'
      ],
      cta: 'View Meal Menu',
      accent: 'border-t-4 border-[#D4AF37]'
    },
  ]

  return (
    <section id="services" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* SEO Header Section */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-sm font-black tracking-[0.3em] uppercase text-[#D4AF37] mb-3">Value-Added Services</h2>
          <h3 className="text-3xl md:text-5xl font-black text-[#1B3F22] mb-5 tracking-tight">
            Affordable Stays & <br />
            <span className="italic font-serif font-light">Healthy Dining</span>
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            Our mission is to provide the <strong className="text-slate-900">best budget accommodation in Trivandrum</strong> without compromising on essential comforts or hygiene.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-10">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1 }}
              className={`bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden flex flex-col md:flex-row ${service.accent} hover:shadow-xl transition-shadow`}
            >
              {/* Left Side: Content */}
              <div className="p-8 md:w-3/5 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center justify-center p-3 bg-slate-50 rounded-2xl text-[#1B3F22] mb-6">
                    {service.icon}
                  </div>
                  <h4 className="text-2xl font-black text-[#1B3F22] mb-3 uppercase tracking-tight">{service.title}</h4>
                  <p className="text-slate-500 text-sm mb-6 leading-relaxed italic">{service.description}</p>
                  
                  <ul className="grid grid-cols-1 gap-y-3 mb-8">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center text-xs font-bold text-slate-700 uppercase tracking-wide">
                        <Check className="w-4 h-4 text-[#D4AF37] mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="flex items-center text-[10px] font-black uppercase tracking-widest text-[#1B3F22] hover:text-[#D4AF37] transition-colors group">
                  {service.cta}
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
                </button>
              </div>

              {/* Right Side: Image with Overlay Icons */}
              <div className="hidden md:block md:w-2/5 relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B3F22]/40 to-transparent" />
                
                {/* Specific Service Overlay (Visual Trust Signals) */}
                {service.title.includes('Budget') && (
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <div className="bg-white/90 p-2 rounded-lg shadow-lg"><Car size={16} className="text-[#1B3F22]" /></div>
                    <div className="bg-white/90 p-2 rounded-lg shadow-lg"><Coffee size={16} className="text-[#1B3F22]" /></div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Local SEO / Support Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="mt-16 p-10 bg-[#1B3F22] rounded-[2.5rem] text-center md:text-left flex flex-col md:flex-row items-center justify-between border-4 border-[#D4AF37]/20"
        >
          <div className="mb-6 md:mb-0">
            <h4 className="text-[#D4AF37] font-black text-2xl mb-2 uppercase tracking-tight">Save More on Group Bookings</h4>
            <p className="text-white/70 text-sm font-medium">Are you a group of students or corporate trainees? Get special budget rates for 3+ months.</p>
          </div>
          <button className="bg-[#D4AF37] text-[#1B3F22] px-10 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-white transition-all shadow-xl">
            Request Quote
          </button>
        </motion.div>
      </div>
    </section>
  )
}