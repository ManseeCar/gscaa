import React from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  Target,
  Users,
  Lightbulb,
  Globe,
  TrendingUp } from
'lucide-react';
import { Hero } from '../components/Hero';
import { SectionHeading } from '../components/SectionHeading';
import { ObjectiveCard } from '../components/ObjectiveCard';
import { Footer } from '../components/Footer';
interface ProposalPageProps {
  onNavigate: (page: string) => void;
}
export function ProposalPage({ onNavigate }: ProposalPageProps) {
  const purposes = [
  "Expand GCSAA's global footprint by formally engaging the African golf maintenance community.",
  'Provide structured professional development, certification pathways, and continuing education for African turf professionals.',
  "Promote sustainable, climate-appropriate turfgrass management practices suited to Africa's diverse regions.",
  'Strengthen collaboration between African golf facilities and international industry partners.',
  'Create a centralized network for knowledge exchange, mentorship, and technical support.'];

  const objectives = [
  {
    title: 'Professional Development',
    description:
    'Deliver GCSAA-aligned training, workshops, and certification programs across Africa.',
    icon: Target
  },
  {
    title: 'Capacity Building',
    description:
    'Strengthen the skills of superintendents, assistants, technicians, and grounds staff.',
    icon: Users
  },
  {
    title: 'Research & Innovation',
    description:
    'Encourage region-specific turfgrass research and promote environmentally responsible maintenance practices.',
    icon: Lightbulb
  },
  {
    title: 'Networking',
    description:
    'Facilitate connections between African professionals and the global GCSAA community.',
    icon: Globe
  },
  {
    title: 'Industry Growth',
    description:
    'Support the development of golf tourism and course sustainability through improved maintenance standards.',
    icon: TrendingUp
  }];

  const activities = [
  'Establish a founding committee representing multiple African regions.',
  'Conduct needs assessments to identify training gaps and priority areas.',
  'Organize annual or biannual Africa Turfgrass Summits under GCSAA guidance.',
  'Facilitate online and in-person educational programs led by GCSAA educators and certified professionals.',
  'Develop partnerships with golf federations, course owners, and turf suppliers across Africa.',
  'Promote GCSAA membership and certification among African professionals.'];

  const outcomes = [
  'A recognized and active GCSAA Africa Affiliate Chapter.',
  'Increased number of GCSAA-certified professionals on the continent.',
  'Improved maintenance standards and course conditions across African golf facilities.',
  'Stronger professional networks and knowledge-sharing platforms.',
  'Enhanced sustainability practices adapted to African climates and resource constraints.',
  'Greater visibility of African turf professionals within the global golf industry.'];

  const justifications = [
  'Strengthen global leadership in turfgrass education.',
  "Expand the association's international membership base.",
  'Promote consistent global standards in golf course management.',
  'Support emerging markets where golf is growing rapidly.',
  'Create long-term partnerships that benefit both GCSAA and African golf communities.'];

  return (
    <main className="w-full min-h-screen bg-cream selection:bg-gold/30 selection:text-forest">
      <Hero />

      {/* 01. Background & Rationale */}
      <section className="py-20 md:py-28 px-6 bg-cream">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            number="01"
            title="Background and Rationale"
            subtitle="Understanding the current landscape of golf course management in Africa." />
          

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
            className="prose prose-lg max-w-none font-body text-darkText/80 space-y-6">
            
            <p className="text-xl leading-relaxed">
              Golf in Africa has experienced{' '}
              <span className="text-forest font-semibold">
                steady growth over the past decade
              </span>
              , with increasing investment in golf courses, tourism, and sports
              development. Despite this progress, many African golf course
              superintendents, turf managers, and greenkeeping teams lack access
              to structured professional development, standardized training, and
              global best practices in turfgrass management.
            </p>
            <p className="text-xl leading-relaxed">
              The Golf Course Superintendents Association of America (GCSAA) is
              globally recognized for its leadership in education,
              certification, and professional standards in golf course
              management. However, Africa currently has no formal GCSAA
              affiliate chapter, resulting in limited access to GCSAA programs,
              networking, and industry support for professionals on the
              continent.
            </p>
            <p className="text-xl leading-relaxed font-medium text-forest border-l-4 border-gold pl-6 py-2 bg-gold/5 rounded-r-lg">
              Establishing an Africa Affiliate Chapter would bridge this gap by
              creating a unified platform for education, collaboration, and
              professional growth tailored to the unique environmental,
              agronomic, and economic conditions of African golf courses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 02. Purpose & Mission */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionHeading number="02" title="Purpose of the Proposed Chapter" />

          <div className="grid gap-6 mt-12">
            {purposes.map((purpose, index) =>
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
              
                <CheckCircle2 className="w-6 h-6 text-forest shrink-0 mt-1" />
                <p className="font-body text-lg text-darkText/90 leading-relaxed">
                  {purpose}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* 03. Objectives */}
      <section className="py-20 md:py-32 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            number="03"
            title="Core Objectives"
            subtitle="Strategic pillars guiding the establishment and operation of the chapter." />
          

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {objectives.map((obj, index) =>
            <ObjectiveCard
              key={index}
              index={index}
              number={`0${index + 1}`}
              title={obj.title}
              description={obj.description}
              icon={obj.icon} />

            )}
          </div>
        </div>
      </section>

      {/* 04. Proposed Activities */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeading number="04" title="Proposed Activities" />

          <div className="mt-12 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-gold before:via-gold/50 before:to-transparent">
            {activities.map((activity, index) =>
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
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-gold text-forest font-bold font-heading shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10">
                  {index + 1}
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl bg-cream border border-sage/10 shadow-sm">
                  <p className="font-body text-lg text-darkText/80">
                    {activity}
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* 05. Expected Outcomes */}
      <section className="py-20 md:py-28 px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          <SectionHeading number="05" title="Expected Outcomes" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {outcomes.map((outcome, index) =>
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                scale: 0.95
              }}
              whileInView={{
                opacity: 1,
                scale: 1
              }}
              viewport={{
                once: true,
                margin: '-50px'
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}
              className="bg-white p-8 rounded-2xl border border-sage/10 shadow-sm flex flex-col gap-4">
              
                <div className="w-12 h-12 rounded-full bg-forest/5 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-forest" />
                </div>
                <p className="font-body text-lg text-darkText/90 font-medium leading-relaxed">
                  {outcome}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* 06. Justification for GCSAA Support */}
      <section className="py-24 md:py-32 px-6 bg-forest text-white relative overflow-hidden">
        {/* Abstract background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full border border-gold/30 -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full border border-sage/30 translate-y-1/3 -translate-x-1/4" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <SectionHeading
            number="06"
            title="Justification for GCSAA Support"
            light />
          

          <div className="grid md:grid-cols-2 gap-12 mt-16 items-center">
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
              className="space-y-6">
              
              {justifications.map((justification, index) =>
              <div key={index} className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-gold mt-2.5 shrink-0" />
                  <p className="font-body text-xl text-cream/90 leading-relaxed">
                    {justification}
                  </p>
                </div>
              )}
            </motion.div>

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
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-3xl">
              
              <Target className="w-12 h-12 text-gold mb-6" />
              <h3 className="font-heading text-3xl font-semibold mb-4 text-white">
                Mission Alignment
              </h3>
              <p className="font-body text-xl text-sage/90 leading-relaxed">
                The establishment of an Africa Affiliate Chapter aligns
                perfectly with GCSAA's mission to advance the profession and
                improve the quality of golf course management worldwide.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer onAction={() => onNavigate('petition')} />
    </main>);

}