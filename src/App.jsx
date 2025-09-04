@@ .. @@
 import React from 'react'
 import { motion } from 'framer-motion'
 import Header from './components/Header'
 import Hero from './components/Hero'
-import Features from './components/Features'
-import HowItWorks from './components/HowItWorks'
-import Destinations from './components/Destinations'
+import WorkoutPreview from './components/WorkoutPreview'
+import Features from './components/Features'
+import PersonalizationEngine from './components/PersonalizationEngine'
+import SocialFeatures from './components/SocialFeatures'
 import CTA from './components/CTA'
 
 function App() {
   return (
     <div className="min-h-screen bg-gradient-main text-text-secondary">
       <Header />
       <main>
         <Hero />
+        <WorkoutPreview />
         <Features />
-        <HowItWorks />
-        <Destinations />
+        <PersonalizationEngine />
+        <SocialFeatures />
         <CTA />
       </main>
     </div>