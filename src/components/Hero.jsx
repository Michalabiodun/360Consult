import { Link } from 'react-router-dom';
import heroBg from '../assets/hero-bg.png';

function Hero() {
  return (
    <section
      className="relative bg-soft-white overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,21,54,0.98), rgba(0,21,54,0.55), rgba(0,21,54,0.05)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center right',
      }}
    >
      <div className="mx-auto max-w-6xl px-4 pt-20 pb-24">
        <div className="max-w-2xl space-y-6">
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-gold">
            Your 360° Partner for Personal & Professional Success
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-soft-white">
            Achieve Clarity. <span className="gold-gradient-text">Drive Growth.</span> Sustain Excellence.
          </h1>
          <p className="text-sm md:text-base text-slate-100/90 max-w-xl">
            We provide practical, people-centred solutions for individuals, families, and organisations—so you can grow
            without losing what matters most.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/services"
              className="px-5 py-2.5 rounded-full bg-gold text-navy text-xs font-semibold shadow-md hover:bg-gold-light transition-colors"
            >
              Book Consultation
            </Link>
            <Link
              to="/services"
              className="px-5 py-2.5 rounded-full border border-soft-white/70 text-xs font-semibold text-soft-white hover:bg-soft-white/10 transition-colors"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

