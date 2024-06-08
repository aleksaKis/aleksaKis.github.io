import { AnimatePresence, motion } from 'framer-motion';
import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { cn } from '../../utils/cn';
import { Letter } from './letter';

const FlipWordsComponent = ({
    words,
    duration = 3000,
    className,
}: {
    words: string[];
    duration?: number;
    className?: string;
}) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const intervalRef = useRef<number | null>(null);

    const startAnimation = useCallback(() => {
        let lastTime = 0;
        const animate = (time: number) => {
            if (!lastTime || time - lastTime >= duration) {
                setCurrentWordIndex(
                    (prevIndex) => (prevIndex + 1) % words.length,
                );
                lastTime = time;
            }
            intervalRef.current = requestAnimationFrame(animate);
        };
        intervalRef.current = requestAnimationFrame(animate);
    }, [duration, words.length]);

    useEffect(() => {
        startAnimation();
        return () => {
            if (intervalRef.current) {
                cancelAnimationFrame(intervalRef.current);
            }
        };
    }, [startAnimation]);

    const currentWord = useMemo(
        () => words[currentWordIndex],
        [currentWordIndex, words],
    );

    const initialAnim = useMemo(
        () => ({
            opacity: 0,
            y: 10,
        }),
        [],
    );

    const animateAnim = useMemo(
        () => ({
            opacity: 1,
            y: 0,
        }),
        [],
    );

    const transitionAnim = useMemo(
        () => ({
            duration: 0.4,
            ease: 'easeInOut',
            type: 'spring',
            stiffness: 100,
            damping: 10,
        }),
        [],
    );

    const exitAnim = useMemo(
        () => ({
            opacity: 0,
            y: -40,
            x: 40,
            filter: 'blur(8px)',
            scale: 2,
            position: 'absolute',
        }),
        [],
    );

    return (
        <AnimatePresence mode="popLayout">
            <motion.div
                key={currentWordIndex}
                initial={initialAnim}
                animate={animateAnim}
                transition={transitionAnim}
                // @ts-expect-error - `exit` is not a valid prop
                exit={exitAnim}
                className={cn(
                    'z-10 inline-block relative text-left text-neutral-900 dark:text-neutral-100 px-2',
                    className,
                )}
            >
                {currentWord.split('').map((letter, index) => (
                    <Letter key={index} letter={letter} index={index} />
                ))}
            </motion.div>
        </AnimatePresence>
    );
};

export const FlipWords = memo(FlipWordsComponent, (prevProps, nextProps) => {
    return (
        prevProps.words.length === nextProps.words.length &&
        prevProps.duration === nextProps.duration
    );
});
