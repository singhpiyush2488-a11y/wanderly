@@ .. @@
   return (
     <motion.header 
       initial={{ y: -100 }}
       animate={{ y: 0 }}
-      className="sticky top-0 z-50 backdrop-blur-xl bg-dark-bg/95 border-b border-accent-teal/20"
+      className="sticky top-0 z-50 backdrop-blur-xl bg-dark-bg/80 border-b border-glass-border shadow-glass"
     >
-      <div className="max-w-6xl mx-auto px-6 py-4">
+      <div className="max-w-7xl mx-auto px-6 py-5">
         <div className="flex items-center justify-between">
           <motion.a 
             href="#"
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
-            className="bg-gradient-accent text-white px-5 py-3 rounded-full font-bold text-lg shadow-lg hover:shadow-accent-teal/50 transition-all duration-300"
+            className="bg-gradient-accent text-white px-6 py-3 rounded-2xl font-bold text-lg shadow-glow-teal hover:shadow-glow-coral transition-all duration-500 relative overflow-hidden group"
           >
-            WANDERLY
            <span className="relative z-10 tracking-wide">FITFLOW</span>
+            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
           </motion.a>
 
           {/* Desktop Navigation */}
-          <nav className="hidden md:flex items-center space-x-8">
            {['Workouts', 'Progress', 'Community', 'Nutrition'].map((item) => (
             {['How it works', 'Destinations', 'Examples', 'Pricing'].map((item) => (
               <motion.a
                 key={item}
                 href="#"
-                whileHover={{ y: -2 }}
-                className="text-text-secondary hover:text-accent-teal font-medium transition-colors relative group"
+                whileHover={{ y: -3 }}
+                className="text-text-secondary hover:text-accent-teal font-medium transition-all duration-300 relative group tracking-wide"
               >
                 {item}
-                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-accent group-hover:w-full transition-all duration-300"></span>
+                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-accent group-hover:w-full transition-all duration-500 rounded-full"></span>
               </motion.a>
             ))}
           </nav>
 
           <div className="hidden md:block">
             <motion.a
               href="#"
-              whileHover={{ scale: 1.05 }}
+              whileHover={{ scale: 1.05, y: -2 }}
               whileTap={{ scale: 0.95 }}
-              className="text-text-secondary border border-accent-teal/30 px-4 py-2 rounded-full hover:bg-accent-teal/10 hover:border-accent-teal transition-all duration-300"
+              className="text-text-secondary border border-glass-border px-6 py-3 rounded-2xl hover:bg-accent-teal/10 hover:border-accent-teal hover:shadow-glow-teal transition-all duration-300 backdrop-blur-sm font-medium tracking-wide"
             >
               Sign in
             </motion.a>
@@ .. @@
           <motion.nav 
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
-            className="md:hidden mt-4 space-y-4"
+            className="md:hidden mt-6 space-y-4 backdrop-blur-xl bg-card-bg/95 rounded-2xl p-6 border border-glass-border"
           >
            {['Workouts', 'Progress', 'Community', 'Nutrition'].map((item) => (
               <a
                 key={item}
                 href="#"
-                className="block text-text-secondary hover:text-accent-teal py-2"
+                className="block text-text-secondary hover:text-accent-teal py-3 px-4 rounded-xl hover:bg-accent-teal/10 transition-all duration-300 font-medium"
               >
                 {item}
               </a>
             ))}
             <a
               href="#"
-              className="block text-text-secondary border border-accent-teal/30 px-4 py-2 rounded-full hover:bg-accent-teal/10 text-center"
+              className="block text-text-secondary border border-glass-border px-6 py-3 rounded-2xl hover:bg-accent-teal/10 text-center font-medium mt-4"
             >
               Sign in
             </a>