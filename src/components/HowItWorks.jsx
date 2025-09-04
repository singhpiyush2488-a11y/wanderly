import React from 'react'
import { motion } from 'framer-motion'

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Tell us your preferences",
      description: "Share your destination, dates, interests, budget, and travel style with our smart questionnaire.",
      details: "5-7 quick questions about adventure vs. relaxation, food interests, and budget range"
    },
    {
      number: 2,
      title: "AI creates your itinerary",
      description: "Our AI analyzes thousands of attractions, restaurants, and activities to craft your perfect day-by-day plan.",
      details: "Complete multi-day itinerary with timing, logistics, and weather considerations"
    },
    {
      number: 3,
      title: "Customize and explore",
      description: "Fine-tune your itinerary, export to PDF, share with friends, and start your amazing adventure!",
      details: "Interactive maps, booking integration, and real-time adjustments"
    }
  ]

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="backdrop-blur-xl bg-gradient-card rounded-[3rem] p-16 border border-glass-border shadow-glass relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Animated background elements */}
          <motion.div 
            className="absolute top-0 right-0 w-64 h-64 bg-accent-teal/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          
          <div className="text-center mb-20 relative z-10">
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold text-text-primary mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              How it works
            </motion.h2>
            <motion.p 
              className="text-xl lg:text-2xl text-text-muted font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Creating your perfect itinerary is as easy as 1-2-3
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-16 relative z-10">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-16 h-0.5 bg-gradient-to-r from-accent-teal to-transparent z-0"></div>
                )}
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center group relative z-10"
                >
                  <motion.div 
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    className="w-20 h-20 bg-gradient-accent text-white rounded-3xl flex items-center justify-center text-2xl font-bold mx-auto mb-8 shadow-glow-teal group-hover:shadow-glow-coral transition-all duration-500 relative overflow-hidden"
                  >
                    <span className="relative z-10">{step.number}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-text-primary mb-4 group-hover:text-accent-teal transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed text-lg font-light mb-4">
                    {step.description}
                  </p>
                  <p className="text-accent-teal text-sm font-medium">
                    {step.details}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks