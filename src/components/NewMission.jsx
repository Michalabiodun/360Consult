import { motion } from 'framer-motion';

const NewMission = () => {
    return (
        <motion.section 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-gold py-32 px-4"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="max-w-4xl mx-auto text-center"
            >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-navy uppercase leading-[1.1] tracking-tight">
                    Our mission is to <span className="border-b-4 border-navy">complete</span> every partner with the <span className="bg-navy text-gold px-2">Clarity</span> needed to destroy their <span className="border-b-4 border-navy">Purpose</span> and actively measurable <span className="bg-navy text-gold px-2">Success</span>.
                </h2>
            </motion.div>
        </motion.section>
    );
};

export default NewMission;
