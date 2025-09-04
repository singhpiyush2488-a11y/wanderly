@@ .. @@
 const Features = () => {
   const features = [
     {
       icon: "🤖",
       title: "AI-Powered Planning",
-      description: "Our intelligent algorithm creates personalized itineraries based on your preferences, budget, and travel dates in seconds."
+      description: "Our intelligent algorithm creates personalized itineraries based on your preferences, budget, and travel dates in seconds.",
+      gradient: "from-accent-purple to-accent-teal"
     },
     {
       icon: "🎯",
       title: "Perfectly Personalized",
-      description: "From adventure seekers to culture enthusiasts, every itinerary is tailored to match your unique travel style and interests."
+      description: "From adventure seekers to culture enthusiasts, every itinerary is tailored to match your unique travel style and interests.",
+      gradient: "from-accent-coral to-accent-purple"
     },
     {
       icon: "⚡",
       title: "Save Hours of Research",
-      description: "Skip the endless planning. Get a complete day-by-day itinerary with activities, restaurants, and logistics all figured out."
+      description: "Skip the endless planning. Get a complete day-by-day itinerary with activities, restaurants, and logistics all figured out.",
+      gradient: "from-accent-teal to-accent-gold"
     }
   ]
 
   return (
-    <section className="py-20 px-6">
-      <div className="max-w-6xl mx-auto">
+    <section className="py-24 px-6 relative">
+      <div className="max-w-7xl mx-auto">
         <motion.div 
-          className="backdrop-blur-xl bg-card-bg/40 rounded-[3rem] p-12 border border-accent-teal/10"
+          className="backdrop-blur-xl bg-card-bg border border-glass-border rounded-[3rem] p-16 shadow-glass relative overflow-hidden"
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
         >
-          <div className="text-center mb-16">
-            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
+          {/* Background pattern */}
+          <div className="absolute inset-0 opacity-30">
+            <div className="absolute top-10 left-10 w-2 h-2 bg-accent-teal rounded-full animate-pulse"></div>
+            <div className="absolute top-20 right-20 w-1 h-1 bg-accent-coral rounded-full animate-pulse delay-300"></div>
+            <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-accent-purple rounded-full animate-pulse delay-700"></div>
+          </div>
+          
+          <div className="text-center mb-20 relative z-10">
+            <motion.h2 
+              className="text-4xl lg:text-5xl font-bold text-text-primary mb-6 leading-tight"
+              initial={{ opacity: 0, y: 20 }}
+              whileInView={{ opacity: 1, y: 0 }}
+              viewport={{ once: true }}
+              transition={{ duration: 0.6 }}
+            >
               Why travelers love Wanderly
-            </h2>
-            <p className="text-xl text-text-muted">
+            </motion.h2>
+            <motion.p 
+              className="text-xl lg:text-2xl text-text-muted font-light"
+              initial={{ opacity: 0, y: 20 }}
+              whileInView={{ opacity: 1, y: 0 }}
+              viewport={{ once: true }}
+              transition={{ duration: 0.6, delay: 0.2 }}
+            >
               Create unforgettable journeys tailored just for you
-            </p>
+            </motion.p>
           </div>
 
-          <div className="grid md:grid-cols-3 gap-8">
+          <div className="grid md:grid-cols-3 gap-10 relative z-10">
             {features.map((feature, index) => (
               <motion.div
                 key={feature.title}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
-                transition={{ duration: 0.5, delay: index * 0.1 }}
-                whileHover={{ scale: 1.05, y: -10 }}
-                className="backdrop-blur-xl bg-card-secondary/95 rounded-3xl p-8 text-center border border-accent-teal/20 shadow-xl hover:shadow-2xl hover:border-accent-teal/40 transition-all duration-300 group cursor-pointer"
+                transition={{ duration: 0.6, delay: index * 0.15 }}
+                whileHover={{ scale: 1.05, y: -15 }}
+                className="backdrop-blur-xl bg-card-secondary border border-glass-border rounded-3xl p-10 text-center shadow-glass hover:shadow-glow-teal hover:border-accent-teal/40 transition-all duration-500 group cursor-pointer relative overflow-hidden"
               >
-                <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center text-4xl mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
+                {/* Card shimmer effect */}
+                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
+                
+                <div className={`w-24 h-24 bg-gradient-to-br ${feature.gradient} rounded-3xl flex items-center justify-center text-4xl mx-auto mb-8 shadow-glow-teal group-hover:shadow-glow-coral group-hover:scale-110 transition-all duration-500 relative z-10`}>
                   {feature.icon}
                 </div>
-                <h3 className="text-xl font-semibold text-text-primary mb-3">
+                <h3 className="text-2xl font-bold text-text-primary mb-4 group-hover:text-accent-teal transition-colors duration-300 relative z-10">
                   {feature.title}
                 </h3>
-                <p className="text-text-muted leading-relaxed">
+                <p className="text-text-muted leading-relaxed text-lg font-light relative z-10">
                   {feature.description}
                 </p>
               </motion.div>