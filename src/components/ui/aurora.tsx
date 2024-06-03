import { MotionValue, motion, useSpring, useTransform } from 'framer-motion';
import random from 'lodash/random';

const MAX_ROTATION = 360;

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
        [0, 0.3],
        [1, 2],
        { clamp: true },
    );

    const rotate = useTransform(scrollYProgress, [0, 0.3], [0, 100], {
        clamp: true,
    });
    const containerRotation = random(0, MAX_ROTATION);

    return (
        <div className="max-h-screen max-w-screen h-screen w-screen fixed overflow-hidden">
            <motion.div
                animate={{ rotate: containerRotation }}
                initial={{
                    rotate: containerRotation + MAX_ROTATION,
                }}
                transition={{
                    repeatType: 'loop',
                    ease: 'linear',
                    loop: Infinity,
                    duration: random(30, 40),
                    stiffness: 200,
                    repeat: Infinity,
                }}
                style={{
                    translateX: '-50%',
                    translateY: '-50%',
                    scale,
                }}
                className="border-dotted blur-sm rounded-full top-1/2 absolute top left-1/2 overflow-hidden"
            >
                <motion.div
                    animate={{ scale: 1, opacity: 0.8 }}
                    initial={{ scale: 0, opacity: 1 }}
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
