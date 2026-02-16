'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.3,
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-4xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary mb-4">
            About Mullavanam Group
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full"></div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          <div>
            <p className="text-lg text-foreground/70 mb-4 leading-relaxed">
              Mullavanam Group is a trusted name in Trivandrum, providing premium room rentals and authentic Kerala tiffin services since our establishment. We believe in combining comfort with affordability, and tradition with modern convenience.
            </p>
            <p className="text-lg text-foreground/70 mb-4 leading-relaxed">
              Our commitment is to offer a home-away-from-home experience where every guest feels valued, and every meal tastes like it's made with love. We take pride in maintaining the highest standards of hygiene, comfort, and customer service.
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-muted rounded-lg p-8 premium-shadow"
          >
            <div className="flex items-center justify-center">
              <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="font-display text-6xl font-bold text-white/40">M</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
