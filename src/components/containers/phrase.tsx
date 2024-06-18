import { motion } from 'framer-motion';

import { FlipWords } from '../ui/flip-words';

const words = [
    'beautiful',
    'functional',
    'responsive',
    'accessible',
    'intuitive',
];

export const Phrase = () => {
    return (
        <motion.div
            className="min-h-[100svh] relative px-6 flex justify-center items-center"
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
            whileInView={{ opacity: 1 }}
        >
            <h4 className="sm:text-3xl text-2xl overflow-hidden text-neutral-100 z-50 px-6 select-none">
                I create
                <FlipWords words={words} />
                web applications.{' '}
                <motion.button
                    style={{ position: 'absolute' }}
                    whileInView={{ rotate: 20 }}
                    transition={{
                        duration: 2,
                        ease: 'easeIn',
                    }}
                    whileTap={{
                        scale: 0,
                        rotate: 40,
                        top: '200px',
                        right: '30px',
                    }}
                >
                    🚀
                </motion.button>{' '}
                <br />
                Making the web a better place, one line of code at a time.
            </h4>
        </motion.div>
    );
};
