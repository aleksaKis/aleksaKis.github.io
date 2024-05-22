import { MotionValue, motion, useSpring, useTransform } from 'framer-motion';
import random from 'lodash/random';

export const Aurora = ({
    scrollYProgress,
    size,
    borderColor,
}: {
    scrollYProgress: MotionValue<number>;
    size: number;
    borderColor: string;
}) => {
    const scale = useTransform(
        useSpring(scrollYProgress, {
            damping: random(10, 20),
            stiffness: random(100, 200),
        }),
        [0, 1],
        [1, 0.2],
        { clamp: true },
    );

    const rotate = useTransform(scrollYProgress, [0, 1], [0, 90]);

    return (
        <div className="h-screen w-screen absolute">
            <motion.div
                animate={{ rotate: random(0, 360) }}
                initial={{ rotate: random(0, 360) }}
                transition={{
                    repeatType:
                        random(0, 1).toFixed() === '0' ? 'reverse' : 'loop',
                    yoyo: Infinity,
                    duration: random(70, 90),
                    repeat: Infinity,
                }}
                style={{
                    translateX: '-50%',
                    translateY: '-50%',
                    scale,
                }}
                className="border-dotted blur-sm
             rounded-full top-1/2 absolute top left-1/2 overflow-hidden"
            >
                <motion.div
                    animate={{ scale: 1 }}
                    initial={{ scale: 0 }}
                    transition={{
                        yoyo: Infinity,
                        duration: random(2, 5),
                    }}
                    style={{
                        borderWidth: random(10, 20),
                        borderColor: borderColor,
                        width: `${size}px`,
                        height: `${size}px`,
                        rotate,
                    }}
                />
            </motion.div>
        </div>
    );
};
