import { Shield, Award, Heart, TrendingUp, CheckSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const ValueItem = ({ icon: Icon, title, description }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center space-y-4"
    >
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
            <Icon className="w-6 h-6 text-gold" />
        </div>
        <div className="space-y-1">
            <h3 className="text-sm font-semibold text-soft-white">{title}</h3>
            <p className="text-[10px] text-slate-500 leading-tight max-w-[120px]">{description}</p>
        </div>
    </motion.div>
);

const ValuesSection = () => {
    return (
        <section className="bg-[#051124] py-24">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-soft-white mb-2">
                    Foundation of Excellence
                </h2>
                <div className="w-16 h-1 bg-gold mx-auto mb-16 rounded-full" />

                <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
                    <ValueItem
                        icon={Shield}
                        title="Integrity"
                        description="Endorse & inspire all conceptual next engagement."
                    />
                    <ValueItem
                        icon={Award}
                        title="Excellence"
                        description="Enhance business stories are fabulous talent."
                    />
                    <ValueItem
                        icon={Heart}
                        title="Empathy"
                        description="Deep understanding and empathy relationship needs."
                    />
                    <ValueItem
                        icon={TrendingUp}
                        title="Growth"
                        description="Manage relationships & growth with building."
                    />
                    <ValueItem
                        icon={CheckSquare}
                        title="Accountability"
                        description="Design, customize delivering customer experiences."
                    />
                </div>
            </div>
        </section>
    );
};

export default ValuesSection;
