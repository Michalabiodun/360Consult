import { motion } from 'framer-motion';
import { GlowCard } from './ui/spotlight-card';

const BenefitCard = ({ title, description, delay = 0 }) => (
    <GlowCard
        customSize={true}
        glowColor="orange"
        className="rounded-2xl h-full"
    >
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.97 }}
            className="flex flex-col justify-between h-full w-full p-6"
        >
            <div className="space-y-3">
                <h3 className="text-2xl font-bold text-white leading-tight">
                    {title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                    {description}
                </p>
            </div>
        </motion.div>
    </GlowCard>
);

const BenefitCards = () => {
    return (
        <section className="bg-gray-800 py-20">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <BenefitCard
                        title="Optimize leads to large interests"
                        description="Your 360° Partner for your Personal and provide a holistic approach in commitment, ensuring every every of your life success and is organized. By aligning personal values and professional roles, we create sustainable sustainable and kids interactions."
                        delay={0.1}
                    />
                    <BenefitCard
                        title="Develop teams to develop teams"
                        description="Develop up four teams complete developing teams wiring and manage relationship, feels of overwhelming network fire-teams and communication, understand how expertises installation and long-term acting protects."
                        delay={0.2}
                    />
                    <BenefitCard
                        title="Build tech stacks"
                        description="Build tech stacks for develop explores fashionable and manage relationships they connection developing relationships and continuous installation, and team cast energy, sustainable, enhanced resilience, and staying connection and coloring."
                        delay={0.3}
                    />
                    <BenefitCard
                        title="Enhancement client-care"
                        description="Enhance client-care to providence with you to receive you approach the manage satisfaction that intention operations, crowns. By aligning personal values and professional value, we realize sustainable sustainable clients."
                        delay={0.4}
                    />
                </div>
            </div>
        </section>
    );
};

export default BenefitCards;
