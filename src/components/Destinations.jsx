@@ .. @@
   return (
-    <section className="py-20 px-6">
-      <div className="max-w-6xl mx-auto">
+    <section className="py-24 px-6 relative">
+      <div className="max-w-7xl mx-auto">
         <motion.div 
-          className="backdrop-blur-xl bg-card-bg/30 rounded-[3rem] p-12 border border-accent-teal/10"
+          className="backdrop-blur-xl bg-card-bg/50 rounded-[3rem] p-16 border border-glass-border shadow-glass relative overflow-hidden"
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
         >
-          <div className="flex justify-between items-center mb-12">
-            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary">
+          {/* Background decoration */}
+          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent-teal/5 via-transparent to-accent-coral/5"></div>
+          
+          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-6 relative z-10">
+            <div>
+              <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4 leading-tight">
+                Popular destinations
+              </h2>
+              <p className="text-xl text-text-muted font-light">Discover amazing places around the world</p>
+            </div>
+            <motion.a 
+              href="#"
+              whileHover={{ x: 8, scale: 1.05 }}
+              className="text-accent-teal font-semibold hover:text-accent-coral transition-all duration-300 flex items-center gap-2 text-lg group"
+            >
+              View all destinations 
+              <motion.span
+                animate={{ x: [0, 5, 0] }}
+                transition={{ duration: 1.5, repeat: Infinity }}
+                className="group-hover:translate-x-2 transition-transform duration-300"
+              >
+                →
+              </motion.span>
+            </motion.a>
+          </div>
+
+          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
+            {destinations.map((destination, index) => (
+              <motion.div
+                key={destination.id}
+                initial={{ opacity: 0, y: 40 }}
+                whileInView={{ opacity: 1, y: 0 }}
+                viewport={{ once: true }}
+                transition={{ duration: 0.6, delay: index * 0.1 }}
+                whileHover={{ scale: 1.05, y: -15 }}
+                className="backdrop-blur-xl bg-card-secondary border border-glass-border rounded-3xl overflow-hidden shadow-glass hover:shadow-glow-teal hover:border-accent-teal/40 transition-all duration-500 cursor-pointer group relative"
+                onClick={() => console.log(`Planning trip to ${destination.name}`)}
+              >
+                {/* Card shimmer effect */}
+                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-10"></div>
+                
+                <div className="relative overflow-hidden">
+                  <img 
+                    src={destination.image}
+                    alt={destination.name}
+                    className="w-full h-56 object-cover filter brightness-75 contrast-110 group-hover:brightness-90 group-hover:scale-110 transition-all duration-700"
+                  />
+                  <div className="absolute inset-0 bg-gradient-to-t from-card-secondary via-transparent to-transparent opacity-60"></div>
+                  <div className="absolute top-4 right-4">
+                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full border border-white/30">
+                      {destination.duration}
+                    </span>
+                  </div>
+                </div>
+                
+                <div className="p-8 relative z-10">
+                  <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-accent-teal transition-colors duration-300">
+                    {destination.name}
+                  </h3>
+                  <p className="text-text-muted leading-relaxed font-light mb-6">
+                    {destination.description}
+                  </p>
+                  <motion.button
+                    whileHover={{ scale: 1.05 }}
+                    whileTap={{ scale: 0.95 }}
+                    className="w-full bg-gradient-accent text-white py-3 rounded-2xl font-semibold shadow-lg hover:shadow-glow-teal transition-all duration-300 relative overflow-hidden group/btn"
+                  >
+                    <span className="relative z-10">Plan Trip</span>
+                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500"></div>
+                  </motion.button>
+                </div>
+              </motion.div>
+            ))}
+          </div>
+        </motion.div>
+      </div>
+    </section>
+  )
+}
+
+export default Destinations
+