import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GlowCard } from './ui/spotlight-card';

const SERVICE_MODES = {
  personal: {
    label: 'Personal & Family',
    subtitle: 'For individuals, couples, and families seeking clarity and healthier rhythms.',
    items: [
      {
        title: 'Marriage & Relationship Systems',
        description:
          'Create communication rhythms, conflict frameworks, and shared goals that keep your most important relationships aligned.',
        channel: 'mentorship',
      },
      {
        title: 'Parenting & Family Culture',
        description:
          'Design values, routines, and boundaries that make your home feel safe, connected, and sustainable.',
        channel: 'mentorship',
      },
      {
        title: 'Career Clarity Intensives',
        description:
          'Zoom out on your story, strengths, and season to design a practical, values-aligned career roadmap.',
        channel: 'mentorship',
      },
      {
        title: 'Personal Capacity & Burnout Reset',
        description:
          'Redesign your workload, boundaries, and energy so you can show up fully without burning out.',
        channel: 'mentorship',
      },
    ],
  },
  business: {
    label: 'Business & Growth',
    subtitle: 'For teams, founders, and organisations building people-centred systems.',
    items: [
      {
        title: 'Customer Journey & CRM Design',
        description:
          'Map and systemise your customer journey with CRM flows that feel personal, not robotic.',
        channel: 'designCrm',
      },
      {
        title: 'Lead Generation Funnels',
        description:
          'Design ethical, story-driven funnels that attract the right clients without gimmicks.',
        channel: 'designCrm',
      },
      {
        title: 'Staff Training & Culture Workshops',
        description:
          'Equip your team with soft skills, service excellence, and aligned behaviours that stick.',
        channel: 'mentorship',
      },
      {
        title: 'Keynotes & Public Speaking for Events',
        description:
          'Book 360consult for conferences and townhalls focused on clarity, resilience, and human-centred leadership.',
        channel: 'speaking',
      },
    ],
  },
};

function Services() {
  const [mode, setMode] = useState('personal');
  const activeMode = SERVICE_MODES[mode];

  const channelToCta = (channel) => {
    if (channel === 'mentorship') {
      return { to: '/book/mentorship', label: 'Book discovery call' };
    }
    if (channel === 'designCrm') {
      return { to: '/request-quote', label: 'Request a quote' };
    }
    if (channel === 'speaking') {
      return { to: '/event-inquiry', label: 'Inquiry for events' };
    }
    return { to: '/services', label: 'Learn more' };
  };

  return (
    <section className="bg-soft-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
          <div>
            <h2 className="text-xs font-semibold tracking-[0.22em] uppercase text-gold">
              Specialized Consulting Services
            </h2>
            <p className="text-2xl md:text-3xl font-semibold text-navy mt-2">
              Designed for real humans, in life and in business.
            </p>
            <p className="text-sm text-slate-600 mt-2 max-w-xl">
              Use the toggle to see how 360consult supports both personal & family journeys and business & growth
              transformations—without overwhelming you with services you do not need.
            </p>
          </div>
          <div className="flex gap-2 text-xs">
            <button
              type="button"
              onClick={() => setMode('personal')}
              className={`px-3 py-1.5 rounded-full font-semibold transition-colors ${mode === 'personal'
                  ? 'bg-navy text-soft-white'
                  : 'border border-slate-300 text-slate-700 bg-white hover:border-navy/60'
                }`}
            >
              Personal &amp; Family
            </button>
            <button
              type="button"
              onClick={() => setMode('business')}
              className={`px-3 py-1.5 rounded-full font-semibold transition-colors ${mode === 'business'
                  ? 'bg-navy text-soft-white'
                  : 'border border-slate-300 text-slate-700 bg-white hover:border-navy/60'
                }`}
            >
              Business &amp; Growth
            </button>
          </div>
        </div>

        <p className="text-sm text-slate-600 mb-6">{activeMode.subtitle}</p>

        <div className="grid gap-6 md:grid-cols-4">
          {activeMode.items.map((service, index) => {
            const cta = channelToCta(service.channel);
            return (
              <GlowCard
                key={service.title}
                customSize={true}
                glowColor="orange"
                className="rounded-2xl h-full"
              >
                <motion.article
                  className="flex flex-col justify-between h-full w-full"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold text-navy">{service.title}</h3>
                    <p className="text-xs text-slate-600">{service.description}</p>
                  </div>
                  <Link
                    to={cta.to}
                    className="mt-4 inline-flex items-center gap-1 text-[11px] font-semibold text-navy hover:text-gold transition-colors"
                  >
                    {cta.label}
                    <span aria-hidden="true">→</span>
                  </Link>
                </motion.article>
              </GlowCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;

