'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Gallery() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const galleryItems = Array.from({ length: 6 }).map((_, i) => ({
    id: i + 1,
  }))

  return (
    <section id="gallery" className="py-20 px-4 bg-muted">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary mb-4">
            Gallery
          </h2>
          <p className="text-lg text-foreground/70">
            A glimpse into our premium rooms and dining experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-lg aspect-square cursor-pointer"
            >
              <motion.div
                className="w-full h-full bg-gradient-to-br from-primary to-accent flex items-center justify-center relative overflow-hidden"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-white/30 font-display text-2xl">Image {item.id}</span>
                <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="text-white font-semibold text-center"
                  >
                    {item.id % 2 === 1 ? 'Room View' : 'Dining'}
                  </motion.div>
                </div>
              </motion.div>
              <div className="absolute inset-0 border-2 border-white/20 rounded-lg"></div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
