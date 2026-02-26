import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const AuditOption = ({ number, text }) => (
    <motion.button
        whileHover={{ x: 5 }}
        className="w-full text-left p-5 rounded-xl bg-[#0A1A2F]/50 border border-white/5 flex items-center justify-between hover:bg-gold/5 hover:border-gold/20 transition-all group"
    >
        <div className="flex items-center space-x-4">
            <span className="text-[10px] text-slate-500 font-mono italic">{number}</span>
            <span className="text-sm font-medium text-soft-white group-hover:text-gold transition-colors">{text}</span>
        </div>
        <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-gold transition-colors" />
    </motion.button>
);

const InteractiveAudit = () => {
    return (
        <section className="bg-[#051124] py-24 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
                <h2 className="text-3xl font-bold text-soft-white mb-4">
                    Interactive Quick Audit
                </h2>
                <p className="text-slate-400 text-sm mb-12">
                    Determine your path hit to 360° needed today.
                </p>

                <div className="bg-[#081424] border border-white/5 rounded-3xl p-8 md:p-12 space-y-10">
                    <div className="space-y-4">
                        <div className="flex justify-between items-end mb-2">
                            <span className="text-[10px] uppercase tracking-widest text-gold font-bold">Step 01</span>
                        </div>
                        <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: '33%' }}
                                viewport={{ once: true }}
                                className="h-full bg-gold"
                            />
                        </div>
                        <h3 className="text-xl font-semibold text-soft-white pt-4">
                            Where is your focus most needed today?
                        </h3>
                    </div>

                    <div className="space-y-3">
                        <AuditOption number="1" text="Career & Legacy Coding" />
                        <AuditOption number="2" text="Business Design & Efficiency" />
                        <AuditOption number="3" text="Personal Systems Quick Audit" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InteractiveAudit;
