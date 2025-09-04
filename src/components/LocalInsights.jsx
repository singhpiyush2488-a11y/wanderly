import React from 'react'
import { motion } from 'framer-motion'
import { Users, Star, MapPin, Clock } from 'lucide-react'

const LocalInsights = () => {
  const insights = [
    {
      city: "Rome",
      tip: "Skip the crowded Trevi Fountain at noon. Visit at 7 AM for magical photos without the crowds.",
      author: "Marco, Local Guide",
      rating: 4.9,
      saves: 2847,
      category: "Hidden Gems"
    },
    {
      city: "Tokyo", 
      tip: "The best ramen isn't in Shibuya. Try Ichiran in Shinjuku's back alleys - locals queue here daily.",
      author: "Yuki, Food Blogger",
      rating: 4.8,
      saves: 1923,
      category: "Local Eats"
    },
    {
      city: "Paris",
      tip: "Avoid tourist trap cafés near Eiffel Tower. Café de Flore serves the same quality at half the price.",
      author: "Sophie, Resident",
      rating: 4.7,
      saves: 3156,
      category: "Budget Tips"
    }
  ]

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="backdrop-blur-xl bg-card-bg border border-glass-border rounded-[3rem] p-16 shadow-glass relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent-teal/5 via-transparent to-accent-coral/5"></div>
          
          <div className="text-center mb-20 relative z-10">
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold text-text-primary mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Local insider intelligence
            </motion.h2>
            <motion.p 
              className="text-xl lg:text-2xl text-text-muted font-light max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Real recommendations from locals and residents who know the hidden gems beyond typical tourist attractions
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {insights.map((insight, index) => (
              <motion.div
                key={insight.city}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="backdrop-blur-xl bg-card-secondary border border-glass-border rounded-3xl p-8 shadow-glass hover:shadow-glow-teal hover:border-accent-teal/40 transition-all duration-500 group cursor-pointer relative overflow-hidden"
              >
                {/* Card shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-accent-teal" />
                      <span className="font-bold text-text-primary">{insight.city}</span>
                    </div>
                    <span className="bg-accent-teal/20 text-accent-teal px-3 py-1 rounded-full text-xs font-semibold border border-accent-teal/30">
                      {insight.category}
                    </span>
                  </div>
                  
                  <blockquote className="text-text-secondary leading-relaxed mb-6 italic text-lg">
                    "{insight.tip}"
                  </blockquote>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-accent rounded-full"></div>
                      <span className="text-text-muted text-sm font-medium">{insight.author}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-text-muted">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-accent-gold fill-current" />
                        <span>{insight.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{insight.saves}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-16 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-accent text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-glow-teal hover:shadow-glow-coral transition-all duration-500 relative overflow-hidden group"
            >
              <span className="relative z-10">Become a Local Contributor</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default LocalInsights