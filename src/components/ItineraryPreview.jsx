@@ .. @@
   return (
     <motion.div 
       initial={{ scale: 0.9, opacity: 0 }}
       animate={{ scale: 1, opacity: 1 }}
-      transition={{ duration: 0.5 }}
-      className="backdrop-blur-xl bg-card-bg/95 rounded-3xl p-8 border border-accent-teal/20 shadow-2xl max-w-md"
+      transition={{ duration: 0.8 }}
+      className="backdrop-blur-xl bg-card-bg border border-glass-border rounded-3xl p-8 shadow-glass max-w-md relative overflow-hidden group hover:shadow-glow-teal transition-all duration-500"
     >
-      <div className="flex justify-between items-center mb-6 pb-4 border-b border-accent-teal/20">
-        <h3 className="text-xl font-semibold text-text-primary">Tokyo Adventure</h3>
-        <span className="text-accent-teal text-sm font-bold bg-accent-teal/20 px-3 py-1 rounded-full">
+      {/* Shimmer effect */}
+      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
+      
+      <div className="flex justify-between items-center mb-8 pb-6 border-b border-glass-border relative z-10">
+        <div>
+          <h3 className="text-xl font-bold text-text-primary mb-1">Tokyo Adventure</h3>
+          <p className="text-text-muted text-sm">Curated by AI</p>
+        </div>
+        <span className="text-accent-teal text-sm font-bold bg-accent-teal/20 px-4 py-2 rounded-full border border-accent-teal/30 shadow-glow-teal">
           5 days
         </span>
       </div>
       
-      <div className="space-y-4">
+      <div className="space-y-5 relative z-10">
         {days.map((day, index) => (
           <motion.div 
             key={day.number}
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
-            transition={{ duration: 0.5, delay: index * 0.1 }}
-            className="flex gap-4 p-4 bg-card-secondary/60 rounded-xl border border-accent-teal/10"
+            transition={{ duration: 0.6, delay: index * 0.15 }}
+            whileHover={{ scale: 1.02, x: 5 }}
+            className="flex gap-4 p-5 bg-card-secondary border border-glass-border rounded-2xl hover:border-accent-teal/40 transition-all duration-300 group/item cursor-pointer"
           >
-            <div className="bg-gradient-accent text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
+            <div className="bg-gradient-accent text-white w-10 h-10 rounded-2xl flex items-center justify-center font-bold text-sm shadow-glow-teal group-hover/item:shadow-glow-coral transition-all duration-300">
               {day.number}
             </div>
             <div className="flex-1">
-              <h4 className="text-text-primary font-medium mb-1">{day.title}</h4>
-              <p className="text-text-muted text-sm">{day.description}</p>
+              <h4 className="text-text-primary font-semibold mb-2 group-hover/item:text-accent-teal transition-colors duration-300">{day.title}</h4>
+              <p className="text-text-muted text-sm leading-relaxed">{day.description}</p>
             </div>
           </motion.div>
         ))}
       </div>
+      
+      <motion.div 
+        className="mt-8 pt-6 border-t border-glass-border text-center relative z-10"
+        initial={{ opacity: 0 }}
+        animate={{ opacity: 1 }}
+        transition={{ duration: 0.8, delay: 0.8 }}
+      >
+        <p className="text-text-muted text-xs mb-3">Estimated budget</p>
+        <p className="text-accent-teal font-bold text-lg">$1,200 - $1,800</p>
+      </motion.div>
     </motion.div>
   )
 }