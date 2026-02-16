'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Maximize2 } from 'lucide-react'

export default function Gallery() {
  const [filter, setFilter] = useState('all')
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const categories = [
    { id: 'all', label: 'All Excellence' },
    { id: 'rooms', label: 'Living Spaces' },
    { id: 'food', label: 'Authentic Dining' },
  ]

  const galleryItems = [
    { id: 1, category: 'food', title: 'Traditional Kerala Sadhya', img: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1000' },
    { id: 2, category: 'rooms', title: 'Premium Executive Suite', img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1000' },
    { id: 3, category: 'food', title: 'Fresh Appam & Stew', img: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?q=80&w=1000' },
    { id: 4, category: 'rooms', title: 'Room for rent', img: 'https://cupliv.com/images/bangalore/Settl-Siena/1.jpg' },
    { id: 5, category: 'food', title: 'Daily Tiffin Service', img: 'https://www.contiki.com/six-two/app/uploads/2024/03/IMG-20240318-WA0007-e1710844435378.jpg' },
    { id: 6, category: 'rooms', title: 'Tasty lunch', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSneBguKyINXBbUh2lQrR7lL3XGkZ1wznELcg&s' },
  ]

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter)

  return (
    <section id="gallery" className="py-24 bg-[#FAF9F6]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
          >
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-[#C5A059] mb-3">Visual Journey</h2>
            <h3 className="text-4xl font-bold text-slate-900">The Mullavanam Experience</h3>
          </motion.div>

          {/* Category Filter Pills */}
          <div className="flex space-x-2 bg-white p-1.5 rounded-full shadow-sm border border-slate-100">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-6 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                  filter === cat.id 
                    ? 'bg-[#1B3F22] text-white shadow-md' 
                    : 'text-slate-500 hover:text-[#1B3F22]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry-Style Grid */}
        <motion.div 
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer bg-slate-200 shadow-lg"
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B3F22]/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-[#C5A059] text-[10px] font-bold uppercase tracking-widest mb-1">
                        {item.category === 'rooms' ? 'Living' : 'Dining'}
                      </p>
                      <h4 className="text-white font-bold text-lg">{item.title}</h4>
                    </div>
                    <div className="bg-white/20 backdrop-blur-md p-2 rounded-full text-white">
                      <Maximize2 size={18} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}