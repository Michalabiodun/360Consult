import { Link } from 'react-router-dom';
import { Mail, Phone, Globe, Linkedin, Twitter, Instagram, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#051124] text-soft-white pt-20 pb-10 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute bottom-0 right-0 p-8 opacity-10">
        <Sparkles className="w-48 h-48 text-gold" />
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 relative z-10">
          {/* Logo & Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gold rounded-sm flex items-center justify-center">
                <span className="text-navy font-black text-xs">360</span>
              </div>
              <span className="font-bold tracking-widest text-lg uppercase">360Consult</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-[240px]">
              The interior design provides full performance in business networking programs.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gold/80">Quick Links</h3>
            <ul className="space-y-3 text-xs text-slate-400">
              <li><Link to="/approach" className="hover:text-gold transition-colors">Our Methodology</Link></li>
              <li><Link to="/book/mentorship" className="hover:text-gold transition-colors">Book with us</Link></li>
              <li><Link to="/" className="hover:text-gold transition-colors">Claim video</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gold/80">Contact</h3>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-gold" />
                <span>360consultlimited@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-gold" />
                <span>+234 9125976855</span>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-gold" />
                <span>Online integration</span>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gold/80">Connect</h3>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-gold/30 hover:bg-gold/5 transition-all">
                <Linkedin className="w-4 h-4 text-slate-300" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-gold/30 hover:bg-gold/5 transition-all">
                <Twitter className="w-4 h-4 text-slate-300" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-gold/30 hover:bg-gold/5 transition-all">
                <Instagram className="w-4 h-4 text-slate-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-500 font-medium uppercase tracking-widest">
          <p>© {new Date().getFullYear()} 360CONSULT. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <Link to="#" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-gold transition-colors">Product Center</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
