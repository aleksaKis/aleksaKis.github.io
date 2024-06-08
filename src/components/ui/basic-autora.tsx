import { motion } from 'framer-motion';
import random from 'lodash/random';
import { memo, useMemo } from 'react';

const MAX_ROTATION = 360;

// Optimized version of the aurora component for low-end devices
export const BasicAurora = memo(
    ({ size, borderColor }: { size: number; borderColor: string }) => {
        const containerRotation = useMemo(() => random(0, MAX_ROTATION), []);

        return (
            <div className="max-h-screen max-w-screen h-screen w-screen fixed overflow-hidden">
                <motion.div
                    animate={{
                        rotate: containerRotation,
                    }}
                    initial={{
                        rotate: containerRotation + MAX_ROTATION / 2,
                    }}
                    transition={{
                        ease: 'linear',
                        duration: 5,
                    }}
                    style={{
                        translateX: '-50%',
                        translateY: '-50%',
                    }}
                    className="rounded-full top-1/2 absolute left-1/2 overflow-hidden blur-sm"
                >
                    <motion.div
                        animate={{ scale: 1, opacity: 0.7 }}
                        initial={{ scale: 0, opacity: 1 }}
                        transition={{
                            duration: 5,
                        }}
                        style={{
                            borderWidth: useMemo(() => random(10, 20), []),
                            borderColor: borderColor,
                            width: `${size}px`,
                            height: `${size}px`,
                        }}
                    />
                </motion.div>
            </div>
        );
    },
);

BasicAurora.displayName = 'BasicAurora';
