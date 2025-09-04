import React from 'react'
import { motion } from 'framer-motion'
import ItineraryPreview from './ItineraryPreview'

const Hero = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-mesh"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-accent-coral/5 via-transparent to-accent-teal/5"></div>
      
      {/* Floating orbs */}
      <motion.div 
        className="absolute top-20 left-10 w-32 h-32 bg-accent-teal/20 rounded-full blur-xl"
        animate={{ 
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-40 h-40 bg-accent-coral/20 rounded-full blur-xl"
        animate={{ 
          x: [0, -25, 0],
          y: [0, 15, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block"
            >
              <span className="bg-gradient-accent text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide shadow-glow-teal animate-pulse">
                ✈️ AI-Powered Travel Planning
              </span>
            </motion.div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-[1.1] bg-gradient-to-r from-text-primary via-accent-teal to-accent-purple bg-clip-text text-transparent">
              Plan your perfect trip with AI-powered itineraries
            </h1>
            
            <p className="text-xl lg:text-2xl text-text-muted leading-relaxed font-light">
              Get personalized day-by-day travel plans based on your interests, budget, and travel style. 
              <span className="text-accent-teal font-medium">No more hours of research</span> – just amazing adventures.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-accent text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-glow-teal hover:shadow-glow-coral transition-all duration-500 relative overflow-hidden group"
              >
                <span className="relative z-10 tracking-wide">Start Planning Your Trip</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="text-text-secondary border border-glass-border px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/5 hover:border-accent-teal/50 transition-all duration-300 backdrop-blur-sm tracking-wide"
              >
                See Sample Itinerary
              </motion.button>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center gap-6 pt-4"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 bg-gradient-accent rounded-full border-2 border-dark-bg"></div>
                  ))}
                </div>
                <span className="text-text-muted text-sm">50,000+ travelers</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex text-accent-gold">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <span className="text-text-muted text-sm">4.9/5 rating</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end relative"
          >
            <div className="absolute inset-0 bg-gradient-accent opacity-20 blur-3xl rounded-full"></div>
            <ItineraryPreview />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero