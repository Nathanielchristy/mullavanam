'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Send, MapPin, Phone, Mail, ArrowUpRight, Sparkles, CheckCircle } from 'lucide-react'

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  
  // State to capture form inputs
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  // Function to handle WhatsApp Redirect
  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const phoneNumber = "919495948888"; // Your number with country code
    const message = `*New Inquiry - Mullavanam Group*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Message:* ${formData.message}`;
    
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappURL, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-[#0A0F1C] text-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* SEO & Brand Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <div className="flex items-center space-x-2 text-[#C5A059] mb-4">
            <Sparkles size={20} />
            <span className="text-sm font-bold tracking-[0.3em] uppercase">Premium Concierge</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
            Mullavanam <span className="text-slate-500 font-light italic">Group.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Bento Box 1: Contact Info */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-5 grid gap-6"
          >
            {[
              { icon: <Phone size={24}/>, title: 'Call Us', detail: '+91 94594 8888', sub: 'Instant Booking' },
              { icon: <Mail size={24}/>, title: 'Email', detail: 'info@mullavanam.com', sub: 'Corporate Queries' },
              { icon: <MapPin size={24}/>, title: 'Location', detail: 'Trivandrum, Kerala', sub: 'Near Technopark' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                variants={itemVariants}
                className="p-8 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/[0.08] transition-all group"
              >
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-[#1B3F22] rounded-2xl text-[#C5A059]">
                    {item.icon}
                  </div>
                  <ArrowUpRight className="text-white/20 group-hover:text-[#C5A059] transition-colors" />
                </div>
                <div className="mt-6">
                  <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest">{item.title}</h4>
                  <p className="text-2xl font-bold mt-1">{item.detail}</p>
                  <p className="text-sm text-white/40 mt-1">{item.sub}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bento Box 2: The Action Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            className="lg:col-span-7 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md border border-white/10 rounded-[3rem] p-8 md:p-12"
          >
            <h3 className="text-3xl font-bold mb-8">Send an Inquiry</h3>
            <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/40 uppercase ml-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Name" 
                    required
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-[#C5A059] transition-all outline-none" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/40 uppercase ml-2">Phone</label>
                  <input 
                    type="tel" 
                    placeholder="+91" 
                    required
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-[#C5A059] transition-all outline-none" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-white/40 uppercase ml-2">Your Message</label>
                <textarea 
                  rows={4} 
                  placeholder="How can we help?" 
                  required
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-[#C5A059] transition-all outline-none resize-none" 
                />
              </div>

              <button 
                type="submit"
                className="w-full py-5 bg-[#C5A059] text-[#1B3F22] font-black uppercase tracking-widest rounded-2xl flex items-center justify-center space-x-3 hover:brightness-110 transition-all shadow-xl shadow-[#C5A059]/10 active:scale-[0.98]"
              >
                <span>Submit Inquiry</span>
                <Send size={18} />
              </button>
            </form>

            <div className="mt-8 flex items-center justify-center space-x-6 text-white/30">
              <div className="flex items-center space-x-2">
                <CheckCircle size={14} />
                <span className="text-[10px] uppercase font-bold tracking-tighter">Verified Property</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle size={14} />
                <span className="text-[10px] uppercase font-bold tracking-tighter">Authentic Kerala Kitchen</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
      <span className="sr-only">Mullavanam Group: Professional Room Rentals and Kerala Tiffin Services in Trivandrum.</span>
    </section>
  )
}   