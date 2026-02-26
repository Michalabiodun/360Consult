import { motion } from 'framer-motion';

function MissionStatement() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          className="rounded-3xl bg-navy text-soft-white px-6 md:px-10 py-10 md:py-12 grid gap-8 md:grid-cols-[1.4fr,1fr]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-4">
            <p className="text-xs font-semibold tracking-[0.22em] uppercase text-gold">
              The Mission
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold">
              Clarity for your world. Capacity for your calling. Systems for your success.
            </h2>
            <p className="text-sm text-slate-100 max-w-xl">
              360consult exists to bridge the gap between human needs and corporate expectations. We design people-first
              strategies, structures, and support so that individuals, families, and organisations can sustain growth
              without losing what matters most.
            </p>
          </div>

          <div className="space-y-4 text-sm">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold mb-1">
                Clarity
              </p>
              <p className="text-slate-100">
                See your current season and options from a 360° vantage point instead of reacting from urgency.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold mb-1">
                Purpose
              </p>
              <p className="text-slate-100">
                Align decisions with your values so that growth feels meaningful, not random.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold mb-1">
                Success
              </p>
              <p className="text-slate-100">
                Build rhythms, teams, and systems that keep you healthy while you scale impact.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default MissionStatement;

