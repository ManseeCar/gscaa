import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Mail, Phone, User } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { PetitionForm } from '../components/PetitionForm';
interface PetitionPageProps {
  onNavigate: (page: string) => void;
}
export function PetitionPage({ onNavigate }: PetitionPageProps) {
  const reasons = [
  'Growing demand for skilled turfgrass professionals',
  'Limited access to standardized training across many regions',
  'Need for a unified professional body serving the entire continent',
  'Opportunity to connect African turf managers with global GCSAA resources',
  'Strengthening sustainability and maintenance standards across Africa'];

  return (
    <main className="w-full min-h-screen bg-cream selection:bg-gold/30 selection:text-forest">
      {/* Hero Section */}
      <header className="relative w-full bg-forest flex flex-col justify-center overflow-hidden px-6 py-16 md:py-24">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full border border-gold/20 -translate-y-1/4 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full border border-sage/30 translate-y-1/4 -translate-x-1/4" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto w-full pt-8">
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
            
            Petition of Interest
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
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight mb-6 max-w-3xl">
            
            Join the Movement to Establish a GCSAA Africa Chapter
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
            className="font-body text-lg md:text-xl text-cream/80 max-w-2xl leading-relaxed">
            
            Help us determine the level of interest across the continent to form
            a unified platform for education, certification, and professional
            development.
          </motion.p>
        </div>
      </header>

      {/* Why an Africa Chapter */}
      <section className="py-20 md:py-28 px-6 bg-cream">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            number="01"
            title="Why an Africa Chapter?"
            subtitle="The critical drivers behind this initiative." />
          

          <div className="grid gap-4 mt-10">
            {reasons.map((reason, index) =>
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
                duration: 0.4,
                delay: index * 0.1
              }}
              className="flex items-start gap-4 p-5 rounded-xl bg-white border border-sage/10 shadow-sm">
              
                <CheckCircle2 className="w-6 h-6 text-forest shrink-0 mt-0.5" />
                <p className="font-body text-lg text-darkText/90">{reason}</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Petition Statement */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeading number="02" title="Petition Statement" />

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
            }}
            className="mt-10 p-8 md:p-12 bg-gold/5 border-l-4 border-gold rounded-r-2xl">
            
            <p className="font-body text-xl text-darkText/90 leading-relaxed mb-8">
              We, the undersigned, express our interest in exploring the
              establishment of a GCSAA Africa Chapter that would:
            </p>

            <ul className="space-y-4 mb-10 font-body text-lg text-darkText/80">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-forest shrink-0" />{' '}
                Provide professional development and continuing education
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-forest shrink-0" />{' '}
                Promote sustainable turfgrass management practices
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-forest shrink-0" />{' '}
                Strengthen collaboration among African golf facilities
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-forest shrink-0" />{' '}
                Offer access to GCSAA certification and technical expertise
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-forest shrink-0" />{' '}
                Build a continent-wide network of turfgrass professionals
              </li>
            </ul>

            <div className="p-4 bg-white/60 rounded-lg border border-gold/20">
              <p className="font-body text-sm font-semibold text-forest uppercase tracking-wide">
                Note: Signing this petition does not oblige you to join. It
                simply helps determine whether there is sufficient interest to
                proceed.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 md:py-28 px-6 bg-cream">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            number="03"
            title="Express Your Interest"
            subtitle="Please provide your details below to sign the petition." />
          

          <div className="mt-12">
            <PetitionForm />
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24 px-6 bg-forest text-white relative overflow-hidden">
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
            
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-white">
              Alternative Submission
            </h2>
            <p className="font-body text-lg text-sage/90 mb-12 max-w-2xl mx-auto">
              If you prefer to submit a physical copy, please scan and email the
              filled-out form to the contact below.
            </p>

            <div className="inline-flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-3xl">
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold mb-2">
                  <User className="w-6 h-6" />
                </div>
                <span className="font-heading text-xl font-semibold">
                  Tizayi Sithole
                </span>
              </div>

              <div className="hidden md:block w-px h-16 bg-white/10" />

              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold mb-2">
                  <Mail className="w-6 h-6" />
                </div>
                <a
                  href="mailto:tizayisithole@gmail.com"
                  className="font-body text-lg hover:text-gold transition-colors">
                  
                  tizayisithole@gmail.com
                </a>
              </div>

              <div className="hidden md:block w-px h-16 bg-white/10" />

              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold mb-2">
                  <Phone className="w-6 h-6" />
                </div>
                <a
                  href="tel:+14752586465"
                  className="font-body text-lg hover:text-gold transition-colors">
                  
                  +1 (475) 258-6465
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>);

}