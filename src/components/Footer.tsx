import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
export function Footer({ onAction }: {onAction?: () => void;}) {
  return (
    <footer className="bg-forest text-cream py-24 px-6 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6
          }}>
          
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8 text-white">
            A Transformative Opportunity
          </h2>

          <p className="font-body text-lg md:text-xl text-sage/90 mb-12 leading-relaxed max-w-3xl mx-auto">
            Africa represents a significant and largely untapped opportunity for
            professional development in golf course maintenance. By establishing
            a GCSAA Africa Affiliate Chapter, the association can play a
            transformative role in elevating turf management standards,
            supporting sustainable course operations, and empowering a new
            generation of golf course professionals across the continent.
          </p>

          <p className="font-body text-xl text-gold font-medium mb-12">
            We respectfully request GCSAA's consideration and support in
            initiating this important and timely initiative.
          </p>

          <button
            onClick={onAction}
            className="group inline-flex items-center gap-3 bg-gold text-forest px-8 py-4 rounded-full font-body font-bold text-lg transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-[0_0_30px_rgba(212,168,67,0.4)] focus:outline-none focus:ring-4 focus:ring-gold/50"
            aria-label="Support This Initiative">
            
            Support This Initiative
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto mt-24 pt-8 border-t border-sage/30 flex flex-col md:flex-row items-center justify-between text-sage text-sm font-body">
        <p>
          © {new Date().getFullYear()} GCSAA Africa Affiliate Chapter Proposal.
        </p>
        <p className="mt-4 md:mt-0">Advancing the profession worldwide.</p>
      </div>
    </footer>);

}