import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Clock, DollarSign } from 'lucide-react'

const ItineraryPreview = () => {
  const days = [
    {
      number: 1,
      title: "Explore Traditional Tokyo",
      description: "Visit Senso-ji Temple, Asakusa district, and traditional markets",
      time: "9:00 AM - 6:00 PM",
      cost: "$85"
    },
    {
      number: 2,
      title: "Modern Tokyo Experience", 
      description: "Shibuya Crossing, Harajuku, and Tokyo Skytree",
      time: "10:00 AM - 8:00 PM",
      cost: "$120"
    },
    {
      number: 3,
      title: "Food & Culture Tour",
      description: "Tsukiji Market, sushi workshop, and tea ceremony",
      time: "8:00 AM - 5:00 PM", 
      cost: "$150"
    }
  ]

  return (
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="backdrop-blur-xl bg-card-bg border border-glass-border rounded-3xl p-8 shadow-glass max-w-md relative overflow-hidden group hover:shadow-glow-teal transition-all duration-500"
    >
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      
      <div className="flex justify-between items-center mb-8 pb-6 border-b border-glass-border relative z-10">
        <div>
          <h3 className="text-xl font-bold text-text-primary mb-1 flex items-center gap-2">
            <MapPin size={20} className="text-accent-teal" />
            Tokyo Adventure
          </h3>
          <p className="text-text-muted text-sm">Curated by AI • Cultural Focus</p>
        </div>
        <span className="text-accent-teal text-sm font-bold bg-accent-teal/20 px-4 py-2 rounded-full border border-accent-teal/30 shadow-glow-teal">
          5 days
        </span>
      </div>
      
      <div className="space-y-5 relative z-10">
        {days.map((day, index) => (
          <motion.div 
            key={day.number}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ scale: 1.02, x: 5 }}
            className="flex gap-4 p-5 bg-card-secondary border border-glass-border rounded-2xl hover:border-accent-teal/40 transition-all duration-300 group/item cursor-pointer"
          >
            <div className="bg-gradient-accent text-white w-10 h-10 rounded-2xl flex items-center justify-center font-bold text-sm shadow-glow-teal group-hover/item:shadow-glow-coral transition-all duration-300">
              {day.number}
            </div>
            <div className="flex-1">
              <h4 className="text-text-primary font-semibold mb-2 group-hover/item:text-accent-teal transition-colors duration-300">{day.title}</h4>
              <p className="text-text-muted text-sm leading-relaxed mb-3">{day.description}</p>
              <div className="flex items-center gap-4 text-xs text-text-muted">
                <div className="flex items-center gap-1">
                  <Clock size={12} />
                  <span>{day.time}</span>
                </div>
                <div className="flex items-center gap-1">
                  <DollarSign size={12} />
                  <span>{day.cost}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        className="mt-8 pt-6 border-t border-glass-border relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="flex justify-between items-center mb-4">
          <p className="text-text-muted text-sm">Total estimated budget</p>
          <p className="text-accent-teal font-bold text-lg">$1,200 - $1,800</p>
        </div>
        <div className="flex gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 bg-gradient-accent text-white py-2 rounded-xl font-semibold text-sm shadow-glow-teal hover:shadow-glow-coral transition-all duration-300"
          >
            Customize
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 border border-glass-border text-text-secondary py-2 rounded-xl font-semibold text-sm hover:bg-white/5 transition-all duration-300"
          >
            Export PDF
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ItineraryPreview