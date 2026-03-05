import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/approach', label: 'Our Approach' },
  { to: '/services', label: 'Services' },
  { to: '/values', label: 'Values' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 bg-soft-white md:bg-soft-white/95 backdrop-blur-none md:backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 z-50">
          <div className="h-8 w-8 rounded-full border border-gold flex items-center justify-center text-[10px] font-semibold text-navy">
            360°
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-[0.2em] text-navy uppercase">
              Consult
            </span>
            <span className="text-[10px] text-slate-500">
              Clarity. Growth. Excellence.
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `relative py-1 transition-colors hover:text-navy ${isActive ? 'text-navy font-semibold' : 'text-slate-600'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/services"
            className="px-4 py-2 rounded-full bg-navy text-xs font-semibold text-soft-white shadow-md hover:bg-navy/90 transition-colors"
          >
            Book Consultation
          </Link>
        </div>

        {/* Mobile Actions */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="https://wa.me/2340000000000"
            target="_blank"
            rel="noreferrer"
            className="p-2 text-[#25D366] hover:scale-110 transition-transform"
            aria-label="Chat on WhatsApp"
          >
            <span className="material-symbols-outlined text-3xl font-bold">chat</span>
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="z-50 p-2 text-navy focus:outline-none bg-white rounded-lg shadow-sm border border-slate-200"
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {isOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-soft-white flex flex-col p-6 pt-24"
          >
            <nav className="flex flex-col gap-6 text-xl font-medium">
              {navLinks.map((item, index) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `block py-2 ${isActive ? 'text-gold font-bold' : 'text-navy'}`
                    }
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            <div className="mt-auto flex flex-col gap-4 pb-10">
              <Link
                to="/services"
                className="w-full py-4 text-center rounded-xl bg-navy text-sm font-semibold text-soft-white shadow-lg"
              >
                Book Consultation
              </Link>
              <a
                href="https://wa.me/2340000000000"
                target="_blank"
                rel="noreferrer"
                className="w-full py-4 text-center rounded-xl bg-[#25D366] text-sm font-semibold text-white shadow-md flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined">chat</span>
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;

