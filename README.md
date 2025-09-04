# wanderly
wanderly code
// package.json
{
  "name": "wanderly-travel",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^10.16.4",
    "lucide-react": "^0.263.1"
  },
  "devDependencies": {
    "@types/react": "^18.2.15",
    "@types/react-dom": "^18.2.7",
    "@vitejs/plugin-react": "^4.0.3",
    "autoprefixer": "^10.4.14",
    "eslint": "^8.45.0",
    "eslint-plugin-react": "^7.32.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.3",
    "postcss": "^8.4.27",
    "tailwindcss": "^3.3.3",
    "vite": "^4.4.5"
  }
}

// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})

// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0f0f23',
        'dark-secondary': '#1a1a2e',
        'dark-tertiary': '#16213e',
        'card-bg': '#1a202c',
        'card-secondary': '#2d3748',
        'accent-coral': '#ff6b6b',
        'accent-teal': '#4ecdc4',
        'text-primary': '#ffffff',
        'text-secondary': '#e2e8f0',
        'text-muted': '#a0aec0',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
        'gradient-accent': 'linear-gradient(135deg, #ff6b6b, #4ecdc4)',
        'gradient-card': 'linear-gradient(135deg, rgba(26, 32, 44, 0.95) 0%, rgba(45, 55, 72, 0.95) 100%)',
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}

// postcss.config.js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

// index.html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Wanderly - AI Travel Planner</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// src/index.css
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

body {
  font-family: 'Inter', sans-serif;
}

// src/App.jsx
import React from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Destinations from './components/Destinations'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-gradient-main text-text-secondary">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Destinations />
        <CTA />
      </main>
    </div>
  )
}

export default App

// src/components/Header.jsx
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 backdrop-blur-xl bg-dark-bg/95 border-b border-accent-teal/20"
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.a 
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-accent text-white px-5 py-3 rounded-full font-bold text-lg shadow-lg hover:shadow-accent-teal/50 transition-all duration-300"
          >
            WANDERLY
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['How it works', 'Destinations', 'Examples', 'Pricing'].map((item) => (
              <motion.a
                key={item}
                href="#"
                whileHover={{ y: -2 }}
                className="text-text-secondary hover:text-accent-teal font-medium transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-accent group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </nav>

          <div className="hidden md:block">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-text-secondary border border-accent-teal/30 px-4 py-2 rounded-full hover:bg-accent-teal/10 hover:border-accent-teal transition-all duration-300"
            >
              Sign in
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-text-secondary"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 space-y-4"
          >
            {['How it works', 'Destinations', 'Examples', 'Pricing'].map((item) => (
              <a
                key={item}
                href="#"
                className="block text-text-secondary hover:text-accent-teal py-2"
              >
                {item}
              </a>
            ))}
            <a
              href="#"
              className="block text-text-secondary border border-accent-teal/30 px-4 py-2 rounded-full hover:bg-accent-teal/10 text-center"
            >
              Sign in
            </a>
          </motion.nav>
        )}
      </div>
    </motion.header>
  )
}

export default Header

// src/components/Hero.jsx
import React from 'react'
import { motion } from 'framer-motion'
import ItineraryPreview from './ItineraryPreview'

const Hero = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent-coral/10 via-transparent to-accent-teal/10"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-text-primary to-accent-teal bg-clip-text text-transparent leading-tight">
              Plan your perfect trip with AI-powered itineraries
            </h1>
            <p className="text-xl text-text-muted mb-8 leading-relaxed">
              Get personalized day-by-day travel plans based on your interests, budget, and travel style. 
              No more hours of research – just amazing adventures.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-accent text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-accent-teal/30 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Start Planning Your Trip</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <ItineraryPreview />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero

// src/components/ItineraryPreview.jsx
import React from 'react'
import { motion } from 'framer-motion'

const ItineraryPreview = () => {
  const days = [
    {
      number: 1,
      title: "Explore Traditional Tokyo",
      description: "Visit Senso-ji Temple, Asakusa district, and traditional markets"
    },
    {
      number: 2,
      title: "Modern Tokyo Experience",
      description: "Shibuya Crossing, Harajuku, and Tokyo Skytree"
    },
    {
      number: 3,
      title: "Food & Culture Tour",
      description: "Tsukiji Market, sushi workshop, and tea ceremony"
    }
  ]

  return (
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="backdrop-blur-xl bg-card-bg/95 rounded-3xl p-8 border border-accent-teal/20 shadow-2xl max-w-md"
    >
      <div className="flex justify-between items-center mb-6 pb-4 border-b border-accent-teal/20">
        <h3 className="text-xl font-semibold text-text-primary">Tokyo Adventure</h3>
        <span className="text-accent-teal text-sm font-bold bg-accent-teal/20 px-3 py-1 rounded-full">
          5 days
        </span>
      </div>
      
      <div className="space-y-4">
        {days.map((day, index) => (
          <motion.div 
            key={day.number}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex gap-4 p-4 bg-card-secondary/60 rounded-xl border border-accent-teal/10"
          >
            <div className="bg-gradient-accent text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
              {day.number}
            </div>
            <div className="flex-1">
              <h4 className="text-text-primary font-medium mb-1">{day.title}</h4>
              <p className="text-text-muted text-sm">{day.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default ItineraryPreview

// src/components/Features.jsx
import React from 'react'
import { motion } from 'framer-motion'

const Features = () => {
  const features = [
    {
      icon: "🤖",
      title: "AI-Powered Planning",
      description: "Our intelligent algorithm creates personalized itineraries based on your preferences, budget, and travel dates in seconds."
    },
    {
      icon: "🎯",
      title: "Perfectly Personalized",
      description: "From adventure seekers to culture enthusiasts, every itinerary is tailored to match your unique travel style and interests."
    },
    {
      icon: "⚡",
      title: "Save Hours of Research",
      description: "Skip the endless planning. Get a complete day-by-day itinerary with activities, restaurants, and logistics all figured out."
    }
  ]

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="backdrop-blur-xl bg-card-bg/40 rounded-[3rem] p-12 border border-accent-teal/10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              Why travelers love Wanderly
            </h2>
            <p className="text-xl text-text-muted">
              Create unforgettable journeys tailored just for you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="backdrop-blur-xl bg-card-secondary/95 rounded-3xl p-8 text-center border border-accent-teal/20 shadow-xl hover:shadow-2xl hover:border-accent-teal/40 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center text-4xl mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-muted leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features

// src/components/HowItWorks.jsx
import React from 'react'
import { motion } from 'framer-motion'

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Tell us your preferences",
      description: "Share your destination, dates, interests, budget, and travel style with our smart questionnaire."
    },
    {
      number: 2,
      title: "AI creates your itinerary",
      description: "Our AI analyzes thousands of attractions, restaurants, and activities to craft your perfect day-by-day plan."
    },
    {
      number: 3,
      title: "Customize and explore",
      description: "Fine-tune your itinerary, export to PDF, share with friends, and start your amazing adventure!"
    }
  ]

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="backdrop-blur-xl bg-gradient-card rounded-[3rem] p-12 border border-accent-teal/20 shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              How it works
            </h2>
            <p className="text-xl text-text-muted">
              Creating your perfect itinerary is as easy as 1-2-3
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center group"
              >
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 bg-gradient-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-xl group-hover:shadow-accent-teal/50 transition-all duration-300"
                >
                  {step.number}
                </motion.div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-text-muted leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks

// src/components/Destinations.jsx
import React from 'react'
import { motion } from 'framer-motion'

const Destinations = () => {
  const destinations = [
    {
      name: "Tokyo, Japan",
      description: "Modern metropolis meets ancient traditions",
      duration: "3-7 days",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=250&fit=crop",
      id: "tokyo"
    },
    {
      name: "Paris, France", 
      description: "City of lights, love, and incredible cuisine",
      duration: "4-6 days",
      image: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=400&h=250&fit=crop",
      id: "paris"
    },
    {
      name: "Bali, Indonesia",
      description: "Tropical paradise with temples and beaches", 
      duration: "5-10 days",
      image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=400&h=250&fit=crop",
      id: "bali"
    },
    {
      name: "New York, USA",
      description: "The city that never sleeps",
      duration: "3-6 days", 
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=250&fit=crop",
      id: "nyc"
    }
  ]

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="backdrop-blur-xl bg-card-bg/30 rounded-[3rem] p-12 border border-accent-teal/10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary">
              Popular destinations
            </h2>
            <motion.a 
              href="#"
              whileHover={{ x: 5 }}
              className="text-accent-teal font-medium hover:text-accent-coral transition-colors"
            >
              View all destinations ›
            </motion.a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="backdrop-blur-xl bg-card-secondary/95 rounded-3xl overflow-hidden border border-accent-teal/20 shadow-xl hover:shadow-2xl hover:border-accent-teal/40 transition-all duration-300 cursor-pointer group"
                onClick={() => console.log(`Planning trip to ${destination.name}`)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-48 object-cover filter brightness-75 contrast-110 group-hover:brightness-90 group-hover:scale-110 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    {destination.name}
                  </h3>
                  <p className="text-text-muted text-sm mb-4">
                    {destination.description}
                  </p>
                  <span className="bg-gradient-to-r from-accent-teal/20 to-accent-coral/20 text-accent-teal text-xs font-bold px-3 py-1 rounded-full border border-accent-teal/30">
                    {destination.duration}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Destinations

// src/components/CTA.jsx
import React from 'react'
import { motion } from 'framer-motion'

const CTA = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="bg-gradient-to-br from-card-bg to-card-secondary rounded-[3rem] p-16 text-center relative overflow-hidden border border-accent-teal/20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent-coral/10 via-transparent to-accent-teal/10"></div>
          <motion.div 
            className="absolute inset-0 opacity-30"
            animate={{ 
              background: [
                "radial-gradient(circle at 20% 30%, rgba(78, 205, 196, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 70%, rgba(255, 107, 107, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 50% 50%, rgba(78, 205, 196, 0.1) 0%, transparent 50%)"
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          />

          <div className="relative z-10">
            <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Ready for your next adventure?
            </h2>
            <p className="text-xl text-text-secondary mb-8 opacity-90">
              Join thousands of travelers who've discovered their perfect trips with Wanderly
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-accent text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-accent-teal/30 transition-all duration-300 relative overflow-hidden group border-2 border-accent-teal/30 hover:border-accent-teal/50"
            >
              <span className="relative z-10">Create Your Itinerary</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
