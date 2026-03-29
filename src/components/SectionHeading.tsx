import React from 'react';
import { motion } from 'framer-motion';
interface SectionHeadingProps {
  number: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}
export function SectionHeading({
  number,
  title,
  subtitle,
  light = false
}: SectionHeadingProps) {
  return (
    <div className="mb-12 md:mb-16">
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
          once: true,
          margin: '-100px'
        }}
        transition={{
          duration: 0.6
        }}
        className="flex items-center gap-4 mb-4">
        
        <span className="text-gold font-body font-bold tracking-widest text-sm uppercase">
          {number}
        </span>
        <div className="h-px bg-gold w-12" />
      </motion.div>

      <motion.h2
        initial={{
          opacity: 0,
          y: 20
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        viewport={{
          once: true,
          margin: '-100px'
        }}
        transition={{
          duration: 0.6,
          delay: 0.1
        }}
        className={`font-heading text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 ${light ? 'text-white' : 'text-forest'}`}>
        
        {title}
      </motion.h2>

      {subtitle &&
      <motion.p
        initial={{
          opacity: 0,
          y: 20
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        viewport={{
          once: true,
          margin: '-100px'
        }}
        transition={{
          duration: 0.6,
          delay: 0.2
        }}
        className={`font-body text-lg md:text-xl max-w-3xl leading-relaxed ${light ? 'text-gray-200' : 'text-sage'}`}>
        
          {subtitle}
        </motion.p>
      }
    </div>);

}