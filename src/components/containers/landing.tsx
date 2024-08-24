import { motion } from 'framer-motion';

import { Social } from '../../common/landing/social';

export const Landing = () => (
    <div className="relative min-h-dvh flex my-2 place-content-center flex-col justify-evenly sm:justify-center gap-2 px-6 max-w-[1280px] mx-auto">
        <div className="mt-auto">
            <h1 className="text-neutral-100 sm:text-8xl text-7xl tracking-tight whitespace-nowrap font-semibold md:text-left text-center font-header">
                Aleksa Kis
            </h1>
            <h2 className="sm:text-2xl text-xl tracking-tight font-semibold md:text-left text-center font-header">
                Front-end Developer
            </h2>
        </div>
        <div className="flex justify-between items-center flex-wrap">
            <Social />
        </div>
        <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
            className="text-base text-center mt-auto mb-8"
        >
            Crafting seamless user experiences and robust web solutions.
        </motion.span>
    </div>
);
