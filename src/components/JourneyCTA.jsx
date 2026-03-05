import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const JourneyCTA = () => {
    return (
        <motion.section 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#051124] py-20 border-t border-white/5"
        >
            <div className="max-w-6xl mx-auto px-4">
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex flex-col md:flex-row items-center justify-between gap-8"
                >
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-2"
                    >
                        <h2 className="text-2xl font-bold text-soft-white">
                            Ready for your 360° shift?
                        </h2>
                        <p className="text-slate-400 text-xs">
                            Develop your personal story strategy build and stacked the lasting piece in your success plans.
                        </p>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-wrap gap-4"
                    >
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
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default JourneyCTA;
