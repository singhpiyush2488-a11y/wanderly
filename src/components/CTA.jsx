+@@ .. @@
+const CTA = () => {
+  return (
+    <section className="py-24 px-6 relative">
+      <div className="max-w-5xl mx-auto">
+        <motion.div 
+          className="bg-gradient-card rounded-[3rem] p-20 text-center relative overflow-hidden border border-glass-border shadow-glass"
+          initial={{ opacity: 0, y: 50 }}
+          whileInView={{ opacity: 1, y: 0 }}
+          viewport={{ once: true }}
+          transition={{ duration: 0.8 }}
+        >
+          {/* Enhanced background effects */}
+          <div className="absolute inset-0 bg-gradient-mesh"></div>
+          <motion.div 
+            className="absolute inset-0"
+            animate={{ 
+              background: [
+                "radial-gradient(circle at 20% 30%, rgba(78, 205, 196, 0.15) 0%, transparent 70%)",
+                "radial-gradient(circle at 80% 70%, rgba(255, 107, 107, 0.15) 0%, transparent 70%)",
+                "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 70%)"
+              ]
+            }}
+            transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
+          />
+          
+          {/* Floating particles */}
+          {[...Array(6)].map((_, i) => (
+            <motion.div
+              key={i}
+              className="absolute w-2 h-2 bg-accent-teal/40 rounded-full"
+              style={{
+                left: `${20 + i * 15}%`,
+                top: `${30 + (i % 2) * 40}%`,
+              }}
+              animate={{
+                y: [0, -20, 0],
+                opacity: [0.4, 0.8, 0.4],
+              }}
+              transition={{
+                duration: 4 + i,
+                repeat: Infinity,
+                delay: i * 0.5,
+              }}
+            />
+          ))}
+
+          <div className="relative z-10">
+            <motion.h2 
+              className="text-5xl lg:text-6xl font-bold text-text-primary mb-8 leading-[1.1]"
+              initial={{ opacity: 0, y: 20 }}
+              whileInView={{ opacity: 1, y: 0 }}
+              viewport={{ once: true }}
+              transition={{ duration: 0.6 }}
+            >
+              Ready for your next 
+              <span className="bg-gradient-accent bg-clip-text text-transparent"> adventure?</span>
+            </motion.h2>
+            
+            <motion.p 
+              className="text-2xl text-text-secondary mb-12 font-light leading-relaxed max-w-3xl mx-auto"
+              initial={{ opacity: 0, y: 20 }}
+              whileInView={{ opacity: 1, y: 0 }}
+              viewport={{ once: true }}
+              transition={{ duration: 0.6, delay: 0.2 }}
+            >
+              Join thousands of travelers who've discovered their perfect trips with Wanderly
+            </motion.p>
+            
+            <motion.div
+              initial={{ opacity: 0, y: 20 }}
+              whileInView={{ opacity: 1, y: 0 }}
+              viewport={{ once: true }}
+              transition={{ duration: 0.6, delay: 0.4 }}
+              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
+            >
+              <motion.button
+                whileHover={{ scale: 1.05, y: -3 }}
+                whileTap={{ scale: 0.95 }}
+                className="bg-gradient-accent text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-glow-teal hover:shadow-glow-coral transition-all duration-500 relative overflow-hidden group border-2 border-accent-teal/30 hover:border-accent-teal/60"
+              >
+                <span className="relative z-10 tracking-wide">Create Your Itinerary</span>
+                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
+              </motion.button>
+              
+              <motion.button
+                whileHover={{ scale: 1.05, y: -3 }}
+                whileTap={{ scale: 0.95 }}
+                className="text-text-secondary border border-glass-border px-10 py-5 rounded-2xl font-semibold text-xl hover:bg-white/5 hover:border-accent-teal/50 transition-all duration-300 backdrop-blur-sm tracking-wide"
+              >
+                Watch Demo
+              </motion.button>
+            </motion.div>
+            
+            <motion.div
+              initial={{ opacity: 0, y: 20 }}
+              whileInView={{ opacity: 1, y: 0 }}
+              viewport={{ once: true }}
+              transition={{ duration: 0.6, delay: 0.6 }}
+              className="mt-12 flex justify-center items-center gap-8 text-text-muted"
+            >
+              <div className="flex items-center gap-2">
+                <span className="text-accent-teal">✓</span>
+                <span className="font-medium">Free to start</span>
+              </div>
+              <div className="flex items-center gap-2">
+                <span className="text-accent-teal">✓</span>
+                <span className="font-medium">No credit card required</span>
+              </div>
+              <div className="flex items-center gap-2">
+                <span className="text-accent-teal">✓</span>
+                <span className="font-medium">Instant results</span>
+              </div>
+            </motion.div>
+          </div>
+        </motion.div>
+      </div>
+    </section>
+  )
+}
+
+export default CTA
+