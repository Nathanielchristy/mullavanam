'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, DollarSign, Shield, Armchair } from 'lucide-react'

export default function WhyChooseUs() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const features = [
    {
      icon: MapPin,
      title: 'Prime Location',
      description: 'Centrally located in Trivandrum with easy access to all major areas',
    },
    {
      icon: DollarSign,
      title: 'Affordable Pricing',
      description: 'Premium quality services at competitive and transparent prices',
    },
    {
      icon: Shield,
      title: 'Hygienic Standards',
      description: 'Strict adherence to health and safety protocols in all services',
    },
    {
      icon: Armchair,
      title: 'Comfortable Living',
      description: 'Thoughtfully designed spaces for your comfort and well-being',
    },
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary mb-4">
            Why Choose Mullavanam
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Experience the difference that quality and care make
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-muted rounded-lg p-6 text-center hover:premium-shadow transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="font-semibold text-primary mb-2 font-display">
                  {feature.title}
                </h3>
                <p className="text-sm text-foreground/70">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
