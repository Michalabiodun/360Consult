import { Eye, TrendingUp, Users, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const StatCard = ({ icon: Icon, stat, label, className = "" }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`bg-[#0A1A2F] border border-white/5 p-6 rounded-2xl flex flex-col items-center justify-center text-center space-y-2 ${className}`}
    >
        {Icon && <Icon className="w-6 h-6 text-gold mb-2" />}
        <h3 className="text-2xl font-bold text-soft-white">{stat}</h3>
        <p className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold">{label}</p>
    </motion.div>
);

const StatSection = () => {
    return (
        <section className="bg-[#051124] py-20">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-flex p-3 rounded-2xl bg-gold/10">
                            <Eye className="w-6 h-6 text-gold" />
                        </div>
                        <h2 className="text-3xl font-bold text-soft-white leading-tight">
                            The "Why": 360° Clarity
                        </h2>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-lg">
                            Your 360° Partner for personal and professional systems. We provide a holistic
                            approach in alignment, ensuring every area of your life approach is maximized.
                            By aligning personal values and professional roles, we create sustainable
                            outcomes that last generations.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <StatCard
                            stat="98%"
                            label="Customer Wins"
                        />
                        <StatCard
                            icon={Star}
                            stat=""
                            label="Value Integrated"
                            className="bg-[#161C24]"
                        />
                        <StatCard
                            icon={TrendingUp}
                            stat=""
                            label="Available for all 360°"
                            className="bg-[#002147]"
                        />
                        <StatCard
                            stat="500+"
                            label="Success Stories"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatSection;
