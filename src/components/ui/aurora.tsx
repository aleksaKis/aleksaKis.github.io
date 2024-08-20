import { MotionValue, motion, useSpring, useTransform } from 'framer-motion';
import random from 'lodash/random';
import { memo, useMemo } from 'react';

const MAX_ROTATION = 360;

export const Aurora = memo(
    ({
        scrollYProgress,
        size,
        borderColor,
    }: {
        scrollYProgress: MotionValue<number>;
        size: string;
        borderColor: string;
    }) => {
        const stiffness = useMemo(() => random(100, 200), []);

        const scale = useTransform(
            useSpring(scrollYProgress, { damping: 50, stiffness }),
            [0, 0.3],
            [1, 1.5],
            { clamp: true },
        );

        const rotate = useTransform(scrollYProgress, [0, 0.3], [0, 100], {
            clamp: true,
        });
        const containerRotation = 0;

        return (
            <div className="max-h-screen max-w-screen h-screen w-screen fixed overflow-hidden">
                <motion.div
                    animate={{ rotate: containerRotation }}
                    initial={{ rotate: containerRotation - MAX_ROTATION }}
                    transition={{
                        repeatType: 'loop',
                        ease: 'linear',
                        loop: Infinity,
                        duration: useMemo(() => random(30, 40), []),
                        stiffness: 100,
                        repeat: Infinity,
                    }}
                    style={{
                        translateX: '-50%',
                        translateY: '-50%',
                        scale,
                    }}
                    className="rounded-full top-1/2 absolute left-1/2 overflow-hidden blur-sm"
                >
                    <motion.div
                        animate={{ scale: 1, opacity: 0.8 }}
                        initial={{ scale: 0, opacity: 1 }}
                        transition={{
                            duration: 3,
                        }}
                        style={{
                            borderWidth: useMemo(() => random(10, 20), []),
                            borderColor: borderColor,
                            width: size,
                            height: size,
                            rotate,
                        }}
                    />
                </motion.div>
            </div>
        );
    },
);

Aurora.displayName = 'AuroraComponent';
