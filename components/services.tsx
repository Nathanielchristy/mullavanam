'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Home, UtensilsCrossed } from 'lucide-react'

export default function Services() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const services = [
    {
      icon: Home,
      title: 'Premium Room Rentals',
      features: [
        'Comfortable, well-furnished rooms',
        '24/7 security and CCTV',
        'High-speed WiFi included',
        'Spacious common areas',
        'Daily housekeeping service',
      ],
      cta: 'Enquire Now',
    },
    {
      icon: UtensilsCrossed,
      title: 'Authentic Tiffin Center',
      features: [
        'Traditional Kerala cuisine',
        'Fresh, hygienic preparation',
        'Multiple menu options daily',
        'Home delivery available',
        'Customized meal plans',
      ],
      cta: "See Today's Menu",
    },
  ]

  return (
    <section id="services" className="py-20 px-4 bg-muted">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={cardVariants} className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Discover the perfect blend of comfort and authentic experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white rounded-lg p-8 premium-shadow hover:premium-shadow-hover transition-all duration-300"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-primary rounded-lg mb-6">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl font-bold text-primary mb-4">
                  {service.title}
                </h3>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span className="text-foreground/70">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
                >
                  {service.cta}
                </motion.button>

                {/* Image Placeholder */}
                <div className="mt-6 w-full h-48 bg-gradient-to-br from-muted to-input rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Image Placeholder</span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
