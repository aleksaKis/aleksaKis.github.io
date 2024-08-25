import { motion, useAnimationControls } from 'framer-motion';

import { FlipWords } from '../ui/flip-words';

const words = [
    'beautiful',
    'functional',
    'responsive',
    'accessible',
    'intuitive',
];

export const Phrase = () => {
    const controls = useAnimationControls();

    const lunchRocket = () => {
        controls.start({
            scale: 0,
            rotate: 40,
            top: '200px',
            right: '-100px',
        });
    };
    return (
        <motion.div
            className="min-h-[100dvh] relative px-6 flex justify-center items-center"
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
            whileInView={{ opacity: 1 }}
        >
            <h3 className="sm:text-2xl text-xl overflow-hidden text-neutral-100 z-50 px-6 select-none font-header">
                I create
                <FlipWords words={words} />
                web applications.{' '}
                <motion.button
                    className="ml-2"
                    animate={controls}
                    onClick={lunchRocket}
                    style={{ position: 'absolute' }}
                    whileInView={{ rotate: 20 }}
                    transition={{
                        duration: 1.5,
                        ease: 'easeIn',
                    }}
                >
                    🚀
                </motion.button>{' '}
                <br />
                Making the web a better place, one line of code at a time.
            </h3>
        </motion.div>
    );
};
