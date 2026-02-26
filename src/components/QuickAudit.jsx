import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const questions = [
  {
    id: 'focus',
    label: 'Which area feels most pressing right now?',
    options: ['Career', 'Relationship / Family', 'Business / Organisation'],
  },
  {
    id: 'state',
    label: 'How would you describe your current state?',
    options: ['Stuck & unclear', 'Managing but stretched', 'Growing and need structure'],
  },
  {
    id: 'goal',
    label: 'What do you want most in the next 6–12 months?',
    options: ['Clarity & direction', 'Peace at home / work', 'Sustainable growth'],
  },
];

function recommendService(answers) {
  const focus = answers.focus;
  const goal = answers.goal;

  if (focus === 'Career') {
    return {
      title: 'Career Clarity Intensive',
      description:
        'Zoom out on your story, strengths, and opportunities to design a practical, values-aligned career roadmap.',
      to: '/book/mentorship',
      cta: 'Book a discovery call',
    };
  }
  if (focus === 'Relationship / Family') {
    return {
      title: 'Marriage & Family Systems Mentorship',
      description:
        'Rebuild communication, boundaries, and shared rhythms that make home feel safe, connected, and sustainable.',
      to: '/book/mentorship',
      cta: 'Book a family clarity session',
    };
  }
  if (focus === 'Business / Organisation' && goal === 'Sustainable growth') {
    return {
      title: 'Business Systems & CRM Design',
      description:
        'Audit your customer journey and build people-centred funnels, CRM flows, and service standards.',
      to: '/request-quote',
      cta: 'Request a strategy & systems quote',
    };
  }

  return {
    title: '360° Strategy Session',
    description:
      'A focused 60–90 minute session to diagnose your season, prioritise goals, and choose the right 360consult path.',
    to: '/book/mentorship',
    cta: 'Book a 360° strategy call',
  };
}

function QuickAudit() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const currentQuestion = questions[step];
  const result = step >= questions.length ? recommendService(answers) : null;

  return (
    <section className="bg-navy text-soft-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-10">
          <div className="space-y-3 max-w-md">
            <h2 className="text-xs font-semibold tracking-[0.22em] uppercase text-gold">
              Quick Diagnostic Tool
            </h2>
            <p className="text-2xl md:text-3xl font-semibold">
              In 3 minutes, pinpoint where to start.
            </p>
            <p className="text-sm text-slate-200">
              Choose the area that feels the most urgent right now. We&apos;ll give you a simple read on what&apos;s
              happening beneath the surface and where to focus first.
            </p>
          </div>

          <div className="relative w-full max-w-md">
            <div className="absolute -top-4 -right-4 h-10 w-10 rounded-full bg-gold/20" />
            <motion.div
              className="relative rounded-3xl border border-slate-600 bg-navy/60 p-6 space-y-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -6 }}
            >
              {result ? (
                <>
                  <div className="space-y-3 text-xs">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-gold">
                      Your recommended next step
                    </p>
                    <p className="text-sm font-semibold text-soft-white">{result.title}</p>
                    <p className="text-slate-100">{result.description}</p>
                  </div>
                  <div className="flex flex-col gap-2 text-xs">
                    <Link
                      to={result.to}
                      className="w-full rounded-full bg-gold text-navy font-semibold py-2.5 text-center hover:bg-gold-light transition-colors"
                    >
                      {result.cta}
                    </Link>
                    <button
                      type="button"
                      onClick={() => {
                        setAnswers({});
                        setStep(0);
                      }}
                      className="w-full rounded-full border border-slate-500 text-slate-100 py-2 hover:border-soft-white/70 transition-colors"
                    >
                      Restart quick audit
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="space-y-2 text-xs">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-gold">
                      360° clarity question {step + 1} of {questions.length}
                    </p>
                    <p className="text-sm font-semibold text-soft-white">{currentQuestion.label}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 text-xs">
                    {currentQuestion.options.map((option) => {
                      const isSelected = answers[currentQuestion.id] === option;
                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => {
                            setAnswers((prev) => ({ ...prev, [currentQuestion.id]: option }));
                          }}
                          className={`px-3 py-1.5 rounded-full border text-[11px] ${
                            isSelected
                              ? 'bg-soft-white text-navy border-soft-white'
                              : 'border-slate-500 text-slate-200 hover:border-soft-white/70'
                          }`}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-300">
                    <span>
                      Progress:{' '}
                      <span className="font-semibold text-gold">
                        {step + 1}/{questions.length}
                      </span>
                    </span>
                    <button
                      type="button"
                      disabled={!answers[currentQuestion.id]}
                      onClick={() => {
                        if (!answers[currentQuestion.id]) return;
                        setStep((prev) => prev + 1);
                      }}
                      className="rounded-full bg-gold text-navy font-semibold px-4 py-1.5 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gold-light transition-colors"
                    >
                      Next
                    </button>
                  </div>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuickAudit;

