import { motion } from 'framer-motion';

export const Showcase = () => {
    return (
        <div
            id="about"
            className="relative min-h-svh flex justify-center items-center"
        >
            <div className="relative flex gap-2">
                <motion.div
                    initial={{ bottom: 0 }}
                    transition={{ delay: 1.1, duration: 2.5 }}
                    animate={{ bottom: 20 }}
                    className="l-0 absolute w-5 h-5 rounded-full bg-slate-300"
                />
                <motion.div className="left-6 absolute w-5 h-5 rounded-full bg-slate-300" />
                <motion.div className="left-12 absolute w-5 h-5 rounded-full bg-slate-300" />
            </div>
        </div>
    );
};
