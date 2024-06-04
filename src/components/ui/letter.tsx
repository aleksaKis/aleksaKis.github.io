import { motion } from 'framer-motion';
import { memo } from 'react';

const LetterCore = ({ letter, index }: { letter: string; index: number }) => (
    <motion.span
        initial={{ opacity: 0, y: 10, filter: 'blur(8px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{
            delay: index * 0.08,
            duration: 0.4,
        }}
        className="inline-block"
    >
        {letter}
    </motion.span>
);

export const Letter = memo(
    LetterCore,
    (prev, next) => prev.letter === next.letter,
);
