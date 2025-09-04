@@ .. @@
   return (
-    <section className="py-20 px-6">
-      <div className="max-w-6xl mx-auto">
+    <section className="py-24 px-6 relative">
+      <div className="max-w-7xl mx-auto">
         <motion.div 
-          className="backdrop-blur-xl bg-gradient-card rounded-[3rem] p-12 border border-accent-teal/20 shadow-2xl"
+          className="backdrop-blur-xl bg-gradient-card rounded-[3rem] p-16 border border-glass-border shadow-glass relative overflow-hidden"
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
         >
-          <div className="text-center mb-16">
-            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
+          {/* Animated background elements */}
+          <motion.div 
+            className="absolute top-0 right-0 w-64 h-64 bg-accent-teal/10 rounded-full blur-3xl"
+            animate={{ 
+              scale: [1, 1.2, 1],
+              opacity: [0.3, 0.5, 0.3],
+            }}
+            transition={{ duration: 8, repeat: Infinity }}
+          />
+          
+          <div className="text-center mb-20 relative z-10">
+            <motion.h2 
+              className="text-4xl lg:text-5xl font-bold text-text-primary mb-6 leading-tight"
+              initial={{ opacity: 0, y: 20 }}
+              whileInView={{ opacity: 1, y: 0 }}
+              viewport={{ once: true }}
+              transition={{ duration: 0.6 }}
+            >
               How it works
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
               Creating your perfect itinerary is as easy as 1-2-3
-            </p>
+            </motion.p>
           </div>
 
-          <div className="grid md:grid-cols-3 gap-12">
+          <div className="grid md:grid-cols-3 gap-16 relative z-10">
             {steps.map((step, index) => (
-              <motion.div
-                key={step.number}
-                initial={{ opacity: 0, y: 30 }}
-                whileInView={{ opacity: 1, y: 0 }}
-                viewport={{ once: true }}
-                transition={{ duration: 0.5, delay: index * 0.2 }}
-                className="text-center group"
-              >
-                <motion.div 
-                  whileHover={{ scale: 1.1 }}
-                  className="w-16 h-16 bg-gradient-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-xl group-hover:shadow-accent-teal/50 transition-all duration-300"
+              <div key={step.number} className="relative">
+                {/* Connection line */}
+                {index < steps.length - 1 && (
+                  <div className="hidden md:block absolute top-8 left-full w-16 h-0.5 bg-gradient-to-r from-accent-teal to-transparent z-0"></div>
+                )}
+                
+                <motion.div
+                  initial={{ opacity: 0, y: 30 }}
+                  whileInView={{ opacity: 1, y: 0 }}
+                  viewport={{ once: true }}
+                  transition={{ duration: 0.6, delay: index * 0.2 }}
+                  className="text-center group relative z-10"
                 >
-                  {step.number}
-                </motion.div>
-                <h3 className="text-xl font-semibold text-text-primary mb-3">
-                  {step.title}
-                </h3>
-                <p className="text-text-muted leading-relaxed">
-                  {step.description}
-                </p>
-              </motion.div>
+                  <motion.div 
+                    whileHover={{ scale: 1.15, rotate: 5 }}
+                    className="w-20 h-20 bg-gradient-accent text-white rounded-3xl flex items-center justify-center text-2xl font-bold mx-auto mb-8 shadow-glow-teal group-hover:shadow-glow-coral transition-all duration-500 relative overflow-hidden"
+                  >
+                    <span className="relative z-10">{step.number}</span>
+                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
+                  </motion.div>
+                  <h3 className="text-2xl font-bold text-text-primary mb-4 group-hover:text-accent-teal transition-colors duration-300">
+                    {step.title}
+                  </h3>
+                  <p className="text-text-muted leading-relaxed text-lg font-light">
+                    {step.description}
+                  </p>
+                </motion.div>
+              </div>
             ))}
           </div>
         </motion.div>