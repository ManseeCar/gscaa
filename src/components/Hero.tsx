import React from 'react';
import { motion } from 'framer-motion';
export function Hero() {
  return (
    <header className="relative w-full min-h-[90vh] bg-forest flex items-center justify-center overflow-hidden px-6 py-20">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage:
            'radial-gradient(circle at 20% 30%, #52796F 0%, transparent 50%)'
          }} />
        
        <div
          className="absolute bottom-0 right-0 w-full h-full"
          style={{
            backgroundImage:
            'radial-gradient(circle at 80% 80%, #D4A843 0%, transparent 50%)'
          }} />
        
      </div>

      {/* Abstract turf/golf pattern (CSS only) */}
      <div className="absolute top-1/4 right-[-10%] w-[600px] h-[600px] border-[1px] border-sage/20 rounded-full pointer-events-none" />
      <div className="absolute top-1/4 right-[-5%] w-[500px] h-[500px] border-[1px] border-sage/30 rounded-full pointer-events-none" />
      <div className="absolute top-1/4 right-[0%] w-[400px] h-[400px] border-[1px] border-gold/20 rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-start">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            ease: 'easeOut'
          }}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-sage/20 border border-sage/30 backdrop-blur-sm mb-8">
          
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span className="text-gold font-body text-sm font-semibold tracking-wide uppercase">
            GCSAA Africa Affiliate Chapter
          </span>
        </motion.div>

        <motion.h1
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: 'easeOut'
          }}
          className="font-heading text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-tight mb-8 max-w-4xl">
          
          Advancing Golf Course Management Across Africa
        </motion.h1>

        <motion.div
          initial={{
            width: 0
          }}
          animate={{
            width: '100px'
          }}
          transition={{
            duration: 1,
            delay: 0.6,
            ease: 'easeInOut'
          }}
          className="h-1 bg-gold mb-8" />
        

        <motion.p
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: 'easeOut'
          }}
          className="font-body text-xl md:text-2xl text-cream/90 max-w-2xl leading-relaxed">
          
          Establishing a unified platform for education, collaboration, and
          professional growth tailored to the unique conditions of African golf
          courses.
        </motion.p>
      </div>
    </header>);

}