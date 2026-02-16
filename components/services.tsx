'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Home, UtensilsCrossed, Check, ArrowRight } from 'lucide-react'

export default function Services() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const services = [
    {
      icon: <Home className="w-6 h-6" />,
      title: 'Premium Room Rentals',
      description: 'Find your perfect home in Trivandrum with our fully-managed, high-quality living spaces.',
      image: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45?q=80&w=1000',
      features: [
        'Fully Furnished & Air Conditioned',
        '24/7 Security & CCTV Monitoring',
        'High-Speed WiFi & Power Backup',
        'Daily Professional Housekeeping'
      ],
      cta: 'Check Availability',
      accent: 'border-t-4 border-[#1B3F22]'
    },
    {
      icon: <UtensilsCrossed className="w-6 h-6" />,
      title: 'Authentic Tiffin Center',
      description: 'Enjoy healthy, home-cooked Kerala meals delivered fresh to your door every day.',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1000',
      features: [
        'Pure Traditional Kerala Recipes',
        'Fresh Ingredients & No MSG',
        'Flexible Weekly/Monthly Plans',
        'Timely Doorstep Delivery'
      ],
      cta: 'Order Your Meal',
      accent: 'border-t-4 border-[#C5A059]'
    },
  ]

  return (
    <section id="services" className="py-24 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-sm font-bold tracking-widest uppercase text-[#C5A059] mb-3">What We Offer</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5">
            Quality Living & Authentic Dining
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            Mullavanam Group is dedicated to providing essential services with a focus on hygiene, comfort, and reliability.
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
              className={`bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col sm:flex-row ${service.accent}`}
            >
              {/* Left Side: Text Content */}
              <div className="p-8 sm:w-3/5 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center justify-center p-3 bg-slate-50 rounded-xl text-slate-900 mb-6">
                    {service.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h4>
                  <p className="text-slate-500 text-sm mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center text-sm text-slate-700">
                        <Check className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="flex items-center text-sm font-bold text-[#1B3F22] hover:text-[#C5A059] transition-colors group">
                  {service.cta}
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

              {/* Right Side: Image */}
              <div className="hidden sm:block sm:w-2/5 relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Help Banner */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-16 p-8 bg-[#1B3F22] rounded-2xl text-center md:text-left flex flex-col md:flex-row items-center justify-between"
        >
          <div className="mb-6 md:mb-0">
            <h4 className="text-white font-bold text-xl mb-1">Need a custom package?</h4>
            <p className="text-white/70 text-sm">We provide bulk bookings for corporate employees and institutions.</p>
          </div>
          <button className="bg-white text-[#1B3F22] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all">
            Contact Support
          </button>
        </motion.div>
      </div>
    </section>
  )
}