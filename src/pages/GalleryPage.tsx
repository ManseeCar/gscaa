import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Droplets, Sun, Leaf } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { Footer } from '../components/Footer';
interface GalleryPageProps {
  onNavigate: (page: string) => void;
}
interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}
export function GalleryPage({ onNavigate }: GalleryPageProps) {
  const africaImages: GalleryImage[] = [
  {
    src: "/WhatsApp_Image_2026-03-21_at_10.11.11_AM.jpg",
    alt: 'African golf course grounds maintenance worker clearing vegetation',
    caption: ''
  },
  {
    src: "/WhatsApp_Image_2026-03-21_at_10.11.05_AM.jpg",
    alt: 'African grounds crew loading vegetation onto a tractor trailer',
    caption: ''
  },
  {
    src: "/WhatsApp_Image_2026-03-21_at_10.10.51_AM.jpg",
    alt: 'African golf course green with sand bunkers and workers maintaining the turf by hand',
    caption: ''
  },
  {
    src: "/1980281_735244459860935_8735898055285510381_o-1540x1024-1.jpg",
    alt: 'Scenic African golf course with water feature and dramatic clouds',
    caption: ''
  }];

  const americaImages: GalleryImage[] = [
  {
    src: "/WhatsApp_Image_2026-03-21_at_10.10.38_AM.jpg",
    alt: 'American golf course with professional riding mower maintaining pristine fairways',
    caption: ''
  },
  {
    src: "/WhatsApp_Image_2026-03-21_at_10.10.28_AM.jpg",
    alt: 'Commercial Toro mower on a manicured American golf course fairway',
    caption: ''
  },
  {
    src: "/WhatsApp_Image_2026-03-21_at_10.11.12_AM_(2).jpg",
    alt: 'Golf course superintendent on a pristine American green with cypress trees',
    caption: ''
  },
  {
    src: "/WhatsApp_Image_2026-03-21_at_10.11.12_AM_(1).jpg",
    alt: 'Precision greens mower on a championship-level American putting green',
    caption: ''
  }];

  return (
    <main className="w-full min-h-screen bg-cream selection:bg-gold/30 selection:text-forest pt-20 md:pt-0">
      {/* Hero Section */}
      <header className="relative w-full bg-forest flex flex-col justify-center overflow-hidden px-6 py-24 md:min-h-[70vh]">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/80 to-transparent" />
        </div>

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
            
            Visual Comparison
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
            
            A Tale of Two Landscapes
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
            
            Exploring the unique agronomic challenges and breathtaking beauty of
            African golf courses compared to traditional American layouts.
          </motion.p>
        </div>
      </header>

      {/* The African Landscape */}
      <section className="py-20 md:py-32 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            number="01"
            title="The African Landscape"
            subtitle="Characterized by diverse climates, native flora, and unique wildlife integration." />
          

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
            className="font-body text-xl text-darkText/80 leading-relaxed max-w-3xl mb-12">
            
            African golf courses often blend seamlessly into the natural savanna
            or coastal environments. Superintendents face unique challenges
            managing warm-season grasses under intense sun and varying water
            availability.
          </motion.p>

          {/* 4-Image Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            {africaImages.map((image, index) =>
            <motion.div
              key={index}
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
                duration: 0.5,
                delay: index * 0.1
              }}
              className="group relative rounded-2xl overflow-hidden shadow-lg bg-white border border-sage/10">
              
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                  src={image.src}
                  alt={image.alt}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
                
                </div>
              </motion.div>
            )}
          </div>

          {/* Info Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
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
                duration: 0.5
              }}
              className="bg-white p-6 rounded-2xl border border-sage/10 shadow-sm">
              
              <Sun className="w-8 h-8 text-gold mb-4" />
              <h3 className="font-heading text-xl font-semibold text-forest mb-2">
                Climate Resilience
              </h3>
              <p className="font-body text-darkText/70">
                Requires drought-tolerant turf varieties like Bermudagrass and
                Paspalum.
              </p>
            </motion.div>
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
                duration: 0.5,
                delay: 0.1
              }}
              className="bg-white p-6 rounded-2xl border border-sage/10 shadow-sm">
              
              <Leaf className="w-8 h-8 text-gold mb-4" />
              <h3 className="font-heading text-xl font-semibold text-forest mb-2">
                Native Integration
              </h3>
              <p className="font-body text-darkText/70">
                Courses often feature indigenous vegetation and natural wildlife
                corridors.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The American Landscape */}
      <section className="py-20 md:py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            number="02"
            title="The American Landscape"
            subtitle="Defined by manicured precision, varied seasonal climates, and established infrastructure." />
          

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
            className="font-body text-xl text-darkText/80 leading-relaxed max-w-3xl mb-12">
            
            American courses benefit from decades of established agronomic
            research and advanced irrigation infrastructure. The focus is often
            on pristine, highly manicured playing surfaces across both cool and
            warm-season zones.
          </motion.p>

          {/* 4-Image Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            {americaImages.map((image, index) =>
            <motion.div
              key={index}
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
                duration: 0.5,
                delay: index * 0.1
              }}
              className="group relative rounded-2xl overflow-hidden shadow-lg bg-cream border border-sage/10">
              
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                  src={image.src}
                  alt={image.alt}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
                
                </div>
              </motion.div>
            )}
          </div>

          {/* Info Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
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
                duration: 0.5
              }}
              className="bg-cream p-6 rounded-2xl border border-sage/10 shadow-sm">
              
              <Droplets className="w-8 h-8 text-forest mb-4" />
              <h3 className="font-heading text-xl font-semibold text-forest mb-2">
                Advanced Irrigation
              </h3>
              <p className="font-body text-darkText/70">
                Sophisticated water management systems and established supply
                networks.
              </p>
            </motion.div>
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
                duration: 0.5,
                delay: 0.1
              }}
              className="bg-cream p-6 rounded-2xl border border-sage/10 shadow-sm">
              
              <MapPin className="w-8 h-8 text-forest mb-4" />
              <h3 className="font-heading text-xl font-semibold text-forest mb-2">
                Standardized Care
              </h3>
              <p className="font-body text-darkText/70">
                Access to comprehensive GCSAA resources and localized university
                research.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bridging the Gap */}
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
            
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8 text-white">
              Our Vision: American Standards, African Spirit
            </h2>
            <p className="font-body text-xl text-sage/90 mb-12 leading-relaxed">
              The images above tell the story — African courses have incredible
              natural beauty and untapped potential, while American facilities
              showcase what's possible with structured training, proper
              resources, and GCSAA expertise. Our vision is to bring those
              world-class maintenance standards to every golf course across
              Africa, adapted to our unique climates and landscapes.
            </p>
            <button
              onClick={() => onNavigate('petition')}
              className="inline-flex items-center justify-center bg-gold text-forest px-10 py-4 rounded-full font-body font-bold text-lg transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-[0_0_30px_rgba(212,168,67,0.4)] focus:outline-none focus:ring-4 focus:ring-gold/50">
              
              Sign the Petition
            </button>
          </motion.div>
        </div>
      </section>

      <Footer onAction={() => onNavigate('petition')} />
    </main>);

}