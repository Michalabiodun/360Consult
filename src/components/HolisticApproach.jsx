import { useState } from 'react';
import { motion } from 'framer-motion';
import OrbitingCircles from './ui/OrbitingCircles';

const pillars = [
  {
    id: 'strategy',
    label: 'Strategy',
    summary: 'Clarify where you are going and why it matters now.',
    detail:
      'We help you name the right goals for this season instead of chasing every opportunity. You leave with a small number of priorities that actually move the needle.',
  },
  {
    id: 'systems',
    label: 'Systems',
    summary: 'Build rhythms and structures that support your goals.',
    detail:
      'From calendars to customer journeys, we design simple, human-centred systems that make the right actions easier to repeat.',
  },
  {
    id: 'support',
    label: 'Support',
    summary: 'Stay accountable with coaching and honest feedback.',
    detail:
      'You are not left alone with a PDF. We walk with you through experiments, setbacks, and wins so the new way of working can stick.',
  },
];

function HolisticApproach() {
  const [activePillar, setActivePillar] = useState(pillars[0].id);
  const active = pillars.find((p) => p.id === activePillar) ?? pillars[0];
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 mb-12">
          <div className="space-y-3 max-w-md">
            <h2 className="text-xs font-semibold tracking-[0.22em] uppercase text-gold">
              The 360° Holistic Approach
            </h2>
            <p className="text-2xl md:text-3xl font-semibold text-navy">
              We don&apos;t just solve problems; we optimize systems.
            </p>
            <p className="text-sm text-slate-600">
              Our methodology looks at every angle of your life and business. By aligning inner clarity with external
              structures, we unlock sustainable growth instead of quick fixes.
            </p>
          </div>

          <div className="grid gap-4 text-sm text-slate-600 max-w-md">
            <p>
              • Diagnose the root causes behind recurring patterns and stalled momentum.
            </p>
            <p>
              • Design practical rhythms, boundaries, and decision frameworks that support your season.
            </p>
            <p>
              • Deploy simple tools your team or family can actually use—no jargon, no fluff.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-[1.5fr,1fr] items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 h-16 w-16 rounded-full border border-gold/40" />
            <motion.div
              className="relative rounded-3xl border border-slate-100 bg-soft-white p-8 grid gap-6 md:grid-cols-[1.1fr,1fr]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -6 }}
            >
              {/* 360° moving growth center wheel */}
              <div className="relative flex h-64 items-center justify-center">
                <div className="h-40 w-40 md:h-48 md:w-48 rounded-full border border-gold/60 bg-white shadow-sm flex items-center justify-center">
                  <div className="h-24 w-24 rounded-full bg-navy text-soft-white flex flex-col items-center justify-center text-center px-4">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-gold-light">360°</p>
                    <p className="text-xs font-semibold">Growth Center</p>
                  </div>
                </div>

                {pillars.map((pillar, index) => {
                  const isActive = activePillar === pillar.id;
                  const baseDelay = index * 4;
                  return (
                    <OrbitingCircles
                      // eslint-disable-next-line react/no-array-index-key
                      key={pillar.id}
                      radius={90}
                      duration={26}
                      delay={baseDelay}
                      className="size-[78px] border-none bg-transparent"
                      path={false}
                    >
                      <button
                        type="button"
                        onClick={() => setActivePillar(pillar.id)}
                        className={`w-full rounded-full border px-3 py-1.5 text-[11px] font-semibold shadow-sm backdrop-blur-sm transition-colors ${
                          isActive
                            ? 'bg-gold text-navy border-gold'
                            : 'bg-white/90 text-slate-700 border-slate-200 hover:bg-gold/10'
                        }`}
                      >
                        {pillar.label}
                      </button>
                    </OrbitingCircles>
                  );
                })}
              </div>

              {/* Dynamic explanation */}
              <div className="space-y-3 text-sm text-slate-700">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {active.label}
                </p>
                <p className="text-sm text-slate-700">{active.summary}</p>
                <p className="text-sm text-slate-600">{active.detail}</p>
              </div>
            </motion.div>
          </div>

          <div className="space-y-4 text-sm text-slate-600">
            <p className="font-semibold text-navy">Who this approach serves best:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Leaders navigating complex transitions or expansion.</li>
              <li>High-capacity professionals at risk of burnout.</li>
              <li>Teams needing clarity, cohesion, and execution support.</li>
              <li>Families and individuals seeking aligned rhythms for work and home.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HolisticApproach;

