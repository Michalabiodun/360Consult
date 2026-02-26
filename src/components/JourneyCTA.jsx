import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

const JourneyCTA = () => {
    return (
        <section className="bg-[#051124] py-20 border-t border-white/5">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="space-y-2">
                        <h2 className="text-2xl font-bold text-soft-white">
                            Ready for your 360° shift?
                        </h2>
                        <p className="text-slate-400 text-xs">
                            Develop your personal story strategy build and stacked the lasting piece in your success plans.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <Link
                            to="/request-quote"
                            className="px-8 py-3 bg-gold text-navy font-bold rounded-lg hover:bg-gold-light transition-colors text-sm"
                        >
                            Apply for a Consultation
                        </Link>
                        <Link
                            to="/services"
                            className="px-8 py-3 bg-white/5 border border-white/10 text-soft-white font-semibold rounded-lg hover:bg-white/10 transition-all text-sm flex items-center gap-2"
                        >
                            View Our Portfolio <ExternalLink className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JourneyCTA;
