'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', phone: '', message: '' })
  }

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-XXXX-XXXXX',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'contact@mullavanam.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Trivandrum, Kerala',
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="relative w-16 h-16">
              <Image
                src="/logo.png"
                alt="Mullavanam Group"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-foreground/70">
            We'd love to hear from you. Reach out to us anytime.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="font-display text-2xl font-bold text-primary mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-semibold text-primary">{info.label}</p>
                        <p className="text-foreground/70">{info.value}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-muted p-6 rounded-lg">
              <h4 className="font-semibold text-primary mb-4">Business Hours</h4>
              <div className="space-y-2 text-sm text-foreground/70">
                <p>
                  <span className="font-medium">Monday - Friday:</span> 8:00 AM - 8:00 PM
                </p>
                <p>
                  <span className="font-medium">Saturday:</span> 9:00 AM - 7:00 PM
                </p>
                <p>
                  <span className="font-medium">Sunday:</span> 10:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="bg-muted rounded-lg p-8 space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-primary mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                placeholder="Your phone number"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-white border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                placeholder="Your message..."
              ></textarea>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  )
}
