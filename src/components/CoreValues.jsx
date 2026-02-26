import { motion } from 'framer-motion';

const values = [
  {
    label: 'Integrity',
    icon: 'verified_user',
    description: 'We tell the truth with empathy, even when it is uncomfortable.',
    benefit: 'You always know where you stand and can make decisions on honest data, not wishful thinking.',
  },
  {
    label: 'Excellence',
    icon: 'workspace_premium',
    description: 'We bring structure, rigour, and care to every engagement.',
    benefit: 'Your projects are treated with the same focus and detail we would give to our own organisation.',
  },
  {
    label: 'Empathy',
    icon: 'diversity_3',
    description: 'We design around real lives, not idealised personas.',
    benefit: 'Your context, culture, and constraints are honoured—no copy-paste playbooks.',
  },
  {
    label: 'Growth',
    icon: 'trending_up',
    description: 'We prioritise sustainable change over quick wins.',
    benefit: 'You build momentum that lasts beyond the workshop or campaign.',
  },
  {
    label: 'Accountability',
    icon: 'flag',
    description: 'We stay in the work with you, not just in the workshop.',
    benefit: 'You have a partner who checks in, adjusts, and stays until the work lands.',
  },
];

function CoreValues() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-10 space-y-3">
          <h2 className="text-xs font-semibold tracking-[0.22em] uppercase text-gold">
            Our North Star Values
          </h2>
          <p className="text-2xl md:text-3xl font-semibold text-navy">The principles that guide every interaction.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-5 text-sm">
          {values.map((value, index) => (
            <motion.div
              key={value.label}
              className="group rounded-2xl border border-slate-100 bg-soft-white px-4 py-5 text-left shadow-sm relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-navy text-soft-white">
                  <span className="material-symbols-outlined text-base">{value.icon}</span>
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {value.label}
                </p>
              </div>
              <p className="text-xs text-slate-600">{value.description}</p>

              <div className="pointer-events-none absolute inset-0 bg-navy text-soft-white px-4 py-5 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold mb-2">
                  How this helps you
                </p>
                <p className="text-xs leading-relaxed">{value.benefit}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoreValues;

