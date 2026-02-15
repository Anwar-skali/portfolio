import { motion } from 'framer-motion';

const ScrollReveal = ({ children, width = "100%", delay = 0.1 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: delay
            }}
            style={{ width }}
        >
            {children}
        </motion.div>
    );
};





export default ScrollReveal;
