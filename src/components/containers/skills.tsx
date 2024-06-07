import { motion } from 'framer-motion';

import { FlipWords } from '../ui/flip-words';

const words = [
    'beautiful',
    'functional',
    'responsive',
    'accessible',
    'intuitive',
];

export const Skills = () => {
    return (
        <motion.div
            className="min-h-svh flex justify-center items-center relative px-6"
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
            whileInView={{ opacity: 1 }}
        >
            <h4 className="sm:text-3xl text-2xl overflow-hidden text-neutral-100 z-50">
                I create
                <FlipWords words={words} />
                web applications.{' '}
                <motion.button
                    style={{ position: 'absolute' }}
                    transition={{ duration: 0.8, ease: 'easeIn' }}
                    whileTap={{
                        scale: 0,
                        rotate: 30,
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
