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
        <div className="min-h-svh flex justify-center items-center">
            <h4 className="text-3xl overflow-hidden text-neutral-100">
                I create
                <FlipWords words={words} />
                web applications.{' '}
                <motion.button
                    whileTap={{
                        scale: 0.9,
                        rotate: 360,
                        transition: { duration: 1 },
                    }}
                >
                    🚀
                </motion.button>{' '}
                <br />
                Making the web a better place, one line of code at a time.
            </h4>
        </div>
    );
};
