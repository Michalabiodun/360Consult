import { Target, Users, Layout, Headset } from 'lucide-react';
import { motion } from 'framer-motion';

const ExpertiseCard = ({ icon: Icon, title }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="bg-[#0A1A2F] border border-white/5 p-8 rounded-2xl flex flex-col items-center justify-center text-center space-y-4 group cursor-pointer"
    >
        <div className="p-4 rounded-xl bg-gold/5 group-hover:bg-gold/10 transition-colors">
            <Icon className="w-6 h-6 text-gold" />
        </div>
        <h3 className="text-xs font-semibold uppercase tracking-widest text-soft-white">{title}</h3>
    </motion.div>
);

const ExpertiseSection = () => {
    return (
        <section className="bg-[#051124] py-20 border-t border-white/5">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-soft-white mb-4">
                    Expertise Across Every Dimension
                </h2>
                <p className="text-slate-400 text-sm mb-16">
                    Determine your path into 360° office intention.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <ExpertiseCard icon={Target} title="Lead Generation" />
                    <ExpertiseCard icon={Users} title="Staff Training" />
                    <ExpertiseCard icon={Layout} title="CRM Systems" />
                    <ExpertiseCard icon={Headset} title="Customer Support" />
                </div>
            </div>
        </section>
    );
};

export default ExpertiseSection;
