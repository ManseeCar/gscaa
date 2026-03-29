import React from 'react';
import { motion } from 'framer-motion';
import { BoxIcon } from 'lucide-react';
interface ObjectiveCardProps {
  number: string;
  title: string;
  description: string;
  icon: BoxIcon;
  index: number;
}
export function ObjectiveCard({
  number,
  title,
  description,
  icon: Icon,
  index
}: ObjectiveCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true,
        margin: '-50px'
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.1
      }}
      className="bg-cream border border-sage/20 rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col h-full relative overflow-hidden">
      
      {/* Decorative background element */}
      <div className="absolute -right-6 -top-6 text-forest/5 pointer-events-none">
        <Icon size={120} strokeWidth={1} />
      </div>

      <div className="flex items-center justify-between mb-6 relative z-10">
        <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center border border-gold/30">
          <span className="text-gold font-heading font-bold text-xl">
            {number}
          </span>
        </div>
        <div className="w-10 h-10 rounded-full bg-forest/5 flex items-center justify-center text-forest">
          <Icon size={20} />
        </div>
      </div>

      <h3 className="font-heading text-2xl text-forest font-semibold mb-4 relative z-10">
        {title}
      </h3>

      <p className="font-body text-darkText/80 leading-relaxed relative z-10 flex-grow">
        {description}
      </p>
    </motion.div>);

}