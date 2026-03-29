import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Quote, AlertTriangle } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { Footer } from '../components/Footer';
interface FounderPageProps {
  onNavigate: (page: string) => void;
}
export function FounderPage({ onNavigate }: FounderPageProps) {
  const experienceAreas = [
  'Championship-level course preparation',
  'Large-scale renovation projects',
  'Turfgrass science and agronomy',
  'Operational leadership and team management'];

  const africaChallenges = [
  'Limited access to modern equipment',
  'Gaps in technical training',
  'Resource constraints',
  'Outdated maintenance practices'];

  const visionPoints = [
  'Sustainable',
  'Efficient',
  'Globally competitive',
  'Environmentally responsible'];

  return (
    <main className="w-full min-h-screen bg-cream selection:bg-gold/30 selection:text-forest">
      {/* Hero Section */}
      <header className="relative w-full bg-forest flex flex-col justify-center overflow-hidden px-6 py-24 md:py-32 min-h-[70vh]">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage:
              'radial-gradient(circle at 30% 40%, #52796F 0%, transparent 50%)'
            }} />
          
          <div
            className="absolute bottom-0 right-0 w-full h-full"
            style={{
              backgroundImage:
              'radial-gradient(circle at 70% 70%, #D4A843 0%, transparent 50%)'
            }} />
          
        </div>
        <div className="absolute top-1/3 left-[-5%] w-[500px] h-[500px] border border-sage/15 rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-[-8%] w-[400px] h-[400px] border border-gold/15 rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto w-full mt-12 md:mt-0">
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
              duration: 0.6
            }}
            className="inline-block px-4 py-1.5 rounded-full bg-gold/20 border border-gold/30 text-gold font-body text-xs font-bold tracking-widest uppercase mb-6">
            
            Founder's Message
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
              duration: 0.6,
              delay: 0.1
            }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl text-white font-bold leading-tight mb-6 max-w-4xl">
            
            Raising Standards in African Golf
          </motion.h1>

          <motion.div
            initial={{
              width: 0
            }}
            animate={{
              width: '80px'
            }}
            transition={{
              duration: 0.8,
              delay: 0.3
            }}
            className="h-1 bg-gold mb-6" />
          

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
              duration: 0.6,
              delay: 0.2
            }}
            className="font-body text-lg md:text-2xl text-cream/90 max-w-2xl leading-relaxed">
            
            A vision built on global experience, dedicated to transforming golf
            course management across Africa.
          </motion.p>
        </div>
      </header>

      {/* Meet the Founder */}
      <section className="py-20 md:py-28 px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          <SectionHeading number="01" title="Meet the Founder" />

          <div className="grid lg:grid-cols-5 gap-12 items-start mt-12">
            {/* Founder Photo */}
            <motion.div
              initial={{
                opacity: 0,
                x: -30
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.6
              }}
              className="lg:col-span-2 relative">
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/WhatsApp_Image_2026-03-21_at_10.11.12_AM_(2).jpg"
                  alt="Tizayi Tundu Sithole on a pristine golf course green"
                  className="w-full aspect-[3/4] object-cover object-top" />
                
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/20 pointer-events-none" />
              </div>
              {/* Gold accent frame */}
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-2 border-gold/30 -z-10" />
              {/* Name plate */}
              <div className="mt-6 text-center">
                <p className="font-heading text-xl font-semibold text-forest">
                  Tizayi Tundu Sithole
                </p>
                <p className="font-body text-sm text-sage mt-1">
                  Assistant Golf Course Superintendent
                </p>
              </div>
            </motion.div>

            {/* Bio Text */}
            <motion.div
              initial={{
                opacity: 0,
                x: 30
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.6,
                delay: 0.2
              }}
              className="lg:col-span-3 space-y-6">
              
              <p className="font-body text-xl text-darkText/80 leading-relaxed">
                This initiative is inspired by the work and experience of{' '}
                <span className="text-forest font-semibold">
                  Tizayi Tundu Sithole
                </span>
                , an Assistant Golf Course Superintendent with international
                experience in both Africa and the United States.
              </p>
              <p className="font-body text-xl text-darkText/80 leading-relaxed">
                His journey into golf began through community involvement and
                competitive play, where a deeper appreciation for the game
                evolved into a passion for the science and precision behind
                maintaining world-class courses.
              </p>
              <p className="font-body text-xl text-forest font-medium leading-relaxed border-l-4 border-gold pl-6 py-2 bg-gold/5 rounded-r-lg">
                Today, that passion drives a mission to bring global standards
                back home — adapting them to the African context to create
                lasting impact.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Mission */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            number="02"
            title="The Mission"
            subtitle="The mission is clear: To raise the standard of golf course maintenance and management across Africa." />
          

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
            }}>
            
            <p className="font-body text-xl text-darkText/80 leading-relaxed mt-8">
              This means bridging the gap between local challenges and global
              best practices — introducing systems, knowledge, and innovation
              that improve both course quality and long-term sustainability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Professional Foundation */}
      <section className="py-20 md:py-28 px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            number="03"
            title="Professional Foundation"
            subtitle="Backed by hands-on experience across internationally recognized facilities, the foundation of this initiative is built on real-world expertise." />
          

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
              once: true
            }}
            transition={{
              duration: 0.6
            }}
            className="font-body text-xl text-darkText/80 leading-relaxed mt-8 mb-10">
            
            From high-level course maintenance in the United States to project
            management in Botswana and Zimbabwe, the experience gained spans:
          </motion.p>

          <div className="grid gap-5">
            {experienceAreas.map((area, index) =>
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: -20
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true,
                margin: '-50px'
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}
              className="flex items-start gap-4 p-6 rounded-xl bg-white border border-sage/10 shadow-sm">
              
                <CheckCircle2 className="w-6 h-6 text-forest shrink-0 mt-0.5" />
                <p className="font-body text-lg text-darkText/90 leading-relaxed">
                  {area}
                </p>
              </motion.div>
            )}
          </div>

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
              once: true
            }}
            transition={{
              duration: 0.6
            }}
            className="font-body text-xl text-forest font-semibold leading-relaxed mt-10">
            
            This global exposure provides the insight needed to elevate
            standards locally.
          </motion.p>
        </div>
      </section>

      {/* Why Africa */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            number="04"
            title="Why Africa"
            subtitle="Africa holds incredible potential for golf — from its landscapes to its growing interest in the sport." />
          

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
              once: true
            }}
            transition={{
              duration: 0.6
            }}
            className="font-body text-xl text-darkText/80 leading-relaxed mt-8 mb-10">
            
            However, many courses face challenges such as:
          </motion.p>

          <div className="grid gap-5">
            {africaChallenges.map((challenge, index) =>
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: -20
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true,
                margin: '-50px'
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}
              className="flex items-start gap-4 p-6 rounded-xl bg-cream/50 border border-sage/10">
              
                <AlertTriangle className="w-6 h-6 text-gold shrink-0 mt-0.5" />
                <p className="font-body text-lg text-darkText/90 leading-relaxed">
                  {challenge}
                </p>
              </motion.div>
            )}
          </div>

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
              once: true
            }}
            transition={{
              duration: 0.6
            }}
            className="font-body text-xl text-forest font-semibold leading-relaxed mt-10">
            
            Addressing these challenges is not just about improvement — it's
            about unlocking the full potential of golf across the continent.
          </motion.p>
        </div>
      </section>

      {/* The Vision */}
      <section className="py-20 md:py-28 px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            number="05"
            title="The Vision"
            subtitle="The long-term vision is to build a new standard for golf in Africa — one that is:" />
          

          <div className="grid sm:grid-cols-2 gap-6 mt-12">
            {visionPoints.map((point, index) =>
            <motion.div
              key={index}
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
                margin: '-50px'
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}
              className="bg-white p-8 rounded-2xl border border-sage/10 shadow-sm flex items-center gap-4">
              
                <div className="w-12 h-12 rounded-full bg-forest/5 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-forest" />
                </div>
                <p className="font-heading text-xl font-semibold text-forest">
                  {point}
                </p>
              </motion.div>
            )}
          </div>

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
              once: true
            }}
            transition={{
              duration: 0.6
            }}
            className="font-body text-xl text-darkText/80 leading-relaxed mt-10 max-w-3xl">
            
            By combining global knowledge with local understanding, this
            initiative aims to redefine what is possible for golf course
            management in Africa.
          </motion.p>
        </div>
      </section>

      {/* Quote Block */}
      <section className="py-20 md:py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}
            className="relative bg-forest rounded-3xl p-10 md:p-16 text-center overflow-hidden">
            
            <div className="absolute top-6 left-8 opacity-10">
              <Quote className="w-24 h-24 text-gold" />
            </div>
            <blockquote className="relative z-10 font-heading text-2xl md:text-3xl lg:text-4xl text-white font-semibold leading-snug italic">
              "Great courses aren't just built — they're maintained, improved,
              and reimagined over time."
            </blockquote>
            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="h-px w-8 bg-gold" />
              <span className="font-body text-gold font-semibold tracking-wide text-sm uppercase">
                Tizayi Tundu Sithole
              </span>
              <div className="h-px w-8 bg-gold" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 md:py-32 px-6 bg-forest text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-gold/30" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
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
            
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-white">
              Be Part of the Movement
            </h2>
            <p className="font-body text-xl text-sage/90 mb-12 leading-relaxed max-w-2xl mx-auto">
              Change starts with awareness — and grows through collective
              action. Be part of the movement to raise standards in African
              golf.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onNavigate('petition')}
                className="group inline-flex items-center gap-3 bg-gold text-forest px-8 py-4 rounded-full font-body font-bold text-lg transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-[0_0_30px_rgba(212,168,67,0.4)] focus:outline-none focus:ring-4 focus:ring-gold/50">
                
                Sign the Petition
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => onNavigate('proposal')}
                className="inline-flex items-center gap-3 bg-transparent text-white px-8 py-4 rounded-full font-body font-bold text-lg border-2 border-white/30 transition-all duration-300 hover:bg-white/10 hover:border-white/60 focus:outline-none focus:ring-4 focus:ring-white/20">
                
                View Proposal
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer onAction={() => onNavigate('petition')} />
    </main>);

}