import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Calendar, Users, DollarSign, Heart, Mountain, Camera, Utensils } from 'lucide-react'

const PlanningDemo = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    destination: '',
    dates: '',
    travelers: '',
    budget: '',
    interests: []
  })

  const steps = [
    {
      title: "Where do you want to go?",
      icon: <MapPin className="w-6 h-6" />,
      field: "destination"
    },
    {
      title: "When are you traveling?",
      icon: <Calendar className="w-6 h-6" />,
      field: "dates"
    },
    {
      title: "How many travelers?",
      icon: <Users className="w-6 h-6" />,
      field: "travelers"
    },
    {
      title: "What's your budget range?",
      icon: <DollarSign className="w-6 h-6" />,
      field: "budget"
    },
    {
      title: "What interests you most?",
      icon: <Heart className="w-6 h-6" />,
      field: "interests"
    }
  ]

  const interests = [
    { id: 'adventure', label: 'Adventure', icon: <Mountain className="w-5 h-5" /> },
    { id: 'culture', label: 'Culture', icon: <Camera className="w-5 h-5" /> },
    { id: 'food', label: 'Food & Dining', icon: <Utensils className="w-5 h-5" /> },
    { id: 'relaxation', label: 'Relaxation', icon: <Heart className="w-5 h-5" /> }
  ]

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleInterestToggle = (interestId) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interestId)
        ? prev.interests.filter(id => id !== interestId)
        : [...prev.interests, interestId]
    }))
  }

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="backdrop-blur-xl bg-card-bg border border-glass-border rounded-[3rem] p-16 shadow-glass relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Try our planning process
            </h2>
            <p className="text-xl text-text-muted font-light">
              See how easy it is to create your perfect itinerary
            </p>
          </div>

          {/* Progress bar */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-4">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                    index <= currentStep 
                      ? 'bg-gradient-accent text-white border-accent-teal shadow-glow-teal' 
                      : 'border-glass-border text-text-muted'
                  }`}
                  whileHover={{ scale: 1.1 }}
                >
                  {step.icon}
                </motion.div>
              ))}
            </div>
            <div className="w-full bg-card-secondary rounded-full h-2">
              <motion.div 
                className="bg-gradient-accent h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          {/* Form content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="min-h-[200px] flex flex-col justify-center"
            >
              <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">
                {steps[currentStep].title}
              </h3>

              {currentStep === 0 && (
                <input
                  type="text"
                  placeholder="e.g., Tokyo, Japan"
                  value={formData.destination}
                  onChange={(e) => setFormData(prev => ({ ...prev, destination: e.target.value }))}
                  className="w-full bg-card-secondary border border-glass-border rounded-2xl px-6 py-4 text-text-primary placeholder-text-muted focus:border-accent-teal focus:outline-none transition-all duration-300"
                />
              )}

              {currentStep === 1 && (
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="date"
                    value={formData.dates.split(' - ')[0] || ''}
                    onChange={(e) => setFormData(prev => ({ ...prev, dates: e.target.value + ' - ' + (prev.dates.split(' - ')[1] || '') }))}
                    className="bg-card-secondary border border-glass-border rounded-2xl px-6 py-4 text-text-primary focus:border-accent-teal focus:outline-none transition-all duration-300"
                  />
                  <input
                    type="date"
                    value={formData.dates.split(' - ')[1] || ''}
                    onChange={(e) => setFormData(prev => ({ ...prev, dates: (prev.dates.split(' - ')[0] || '') + ' - ' + e.target.value }))}
                    className="bg-card-secondary border border-glass-border rounded-2xl px-6 py-4 text-text-primary focus:border-accent-teal focus:outline-none transition-all duration-300"
                  />
                </div>
              )}

              {currentStep === 2 && (
                <select
                  value={formData.travelers}
                  onChange={(e) => setFormData(prev => ({ ...prev, travelers: e.target.value }))}
                  className="w-full bg-card-secondary border border-glass-border rounded-2xl px-6 py-4 text-text-primary focus:border-accent-teal focus:outline-none transition-all duration-300"
                >
                  <option value="">Select number of travelers</option>
                  <option value="1">Solo traveler</option>
                  <option value="2">Couple</option>
                  <option value="3-4">Small group (3-4)</option>
                  <option value="5+">Large group (5+)</option>
                </select>
              )}

              {currentStep === 3 && (
                <div className="grid grid-cols-2 gap-4">
                  {['$500-1000', '$1000-2500', '$2500-5000', '$5000+'].map((budget) => (
                    <motion.button
                      key={budget}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setFormData(prev => ({ ...prev, budget }))}
                      className={`p-4 rounded-2xl border transition-all duration-300 ${
                        formData.budget === budget
                          ? 'bg-gradient-accent text-white border-accent-teal shadow-glow-teal'
                          : 'bg-card-secondary border-glass-border text-text-secondary hover:border-accent-teal/50'
                      }`}
                    >
                      {budget}
                    </motion.button>
                  ))}
                </div>
              )}

              {currentStep === 4 && (
                <div className="grid grid-cols-2 gap-4">
                  {interests.map((interest) => (
                    <motion.button
                      key={interest.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleInterestToggle(interest.id)}
                      className={`p-4 rounded-2xl border transition-all duration-300 flex items-center gap-3 ${
                        formData.interests.includes(interest.id)
                          ? 'bg-gradient-accent text-white border-accent-teal shadow-glow-teal'
                          : 'bg-card-secondary border-glass-border text-text-secondary hover:border-accent-teal/50'
                      }`}
                    >
                      {interest.icon}
                      {interest.label}
                    </motion.button>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
              className="px-6 py-3 rounded-2xl border border-glass-border text-text-secondary hover:bg-white/5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </motion.button>

            <span className="text-text-muted text-sm">
              Step {currentStep + 1} of {steps.length}
            </span>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNext}
              className="bg-gradient-accent text-white px-6 py-3 rounded-2xl font-semibold shadow-glow-teal hover:shadow-glow-coral transition-all duration-300"
            >
              {currentStep === steps.length - 1 ? 'Generate Itinerary' : 'Next'}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PlanningDemo