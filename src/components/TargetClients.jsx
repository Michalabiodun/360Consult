import { motion } from 'framer-motion';

const clientSegments = [
  {
    label: 'Individuals',
    description: 'High-capacity professionals, creatives, and leaders navigating transition or growth.',
    avatar:
      'https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?w=150&h=150&fit=crop&crop=faces',
  },
  {
    label: 'Families',
    description: 'Couples and parents designing healthier rhythms, communication, and legacy.',
    avatar:
      'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=150&h=150&fit=crop&crop=faces',
  },
  {
    label: 'Startups',
    description: 'Founders building culture, service excellence, and humane ways of scaling.',
    avatar:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=150&h=150&fit=crop&crop=faces',
  },
  {
    label: 'SMEs',
    description: 'Growing businesses needing clearer structure, systems, and customer journeys.',
    avatar:
      'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?w=150&h=150&fit=crop&crop=faces',
  },
  {
    label: 'Corporations',
    description: 'HR and leadership teams investing in people, resilience, and culture change.',
    avatar:
      'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=150&h=150&fit=crop&crop=faces',
  },
];

function TargetClients() {

  return (
    <section className="bg-soft-white py-12">
      <div className="mx-auto max-w-6xl px-4 space-y-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] uppercase text-gold">
              Who We Serve
            </p>
            <p className="text-sm text-slate-600">
              Human beings and organisations committed to doing good work, well.
            </p>
          </div>
          <div className="hidden md:block text-[11px] text-slate-500"></div>
        </div>

        <div className="relative flex w-full items-center justify-center overflow-hidden">
          <div className="group flex w-full overflow-hidden [--gap:1rem] [gap:var(--gap)]">
            <div className="flex shrink-0 flex-row [gap:var(--gap)] animate-marquee group-hover:[animation-play-state:paused]">
              {[...Array(2)].map((_, setIndex) =>
                clientSegments.map((segment, index) => (
                  <motion.div
                    key={`${setIndex}-${segment.label}`}
                    className="min-w-[240px] md:min-w-[260px] snap-start flex flex-col justify-between rounded-xl border-t border-gold/40 bg-gradient-to-b from-navy/95 via-navy/90 to-navy/85 px-4 py-5 text-soft-white shadow-sm"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2, delay: index * 0.02 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-10 w-10 rounded-full overflow-hidden border border-gold/50 bg-soft-white/5">
                        <img
                          src={segment.avatar}
                          alt={segment.label}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex flex-col items-start">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                          {segment.label}
                        </p>
                        <p className="text-[11px] text-soft-white/80">Segment</p>
                      </div>
                    </div>
                    <p className="text-xs text-soft-white/90">{segment.description}</p>
                  </motion.div>
                )),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TargetClients;

