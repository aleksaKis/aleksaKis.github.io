import { MotionValue, motion, useTransform } from 'framer-motion';

export const About = ({ yScroll }: { yScroll: MotionValue<number> }) => {
    const opacity = useTransform(yScroll, [0, 0.1, 0.2, 0.5], [0, 0, 1, 0]);
    const top = useTransform(yScroll, [0, 0.2], ['10%', '-30%']);
    const backgroundColor = useTransform(
        yScroll,
        [0, 0.1, 1],
        ['transparent', 'transparent', '#09090b'],
    );

    const backgroundGradient = useTransform(
        yScroll,
        [0, 0.2, 0.4, 0.6, 0.8, 1],
        [
            'linear-gradient(90deg, #8be8a4 0%, #8be8a4 0%, #55a2e0 100%)',
            'linear-gradient(90deg, #8be8a4 0%, #8be8a4 20%, #55a2e0 100%)',
            'linear-gradient(90deg, #498dd1 0%, #8be8a4 40%, #55a2e0 100%)',
            'linear-gradient(90deg, #2245a3 0%, #8be8a4 60%, #55a2e0 100%)',
            'linear-gradient(90deg, #183173 0%, #55a2e0 80%, #8be8a4 100%)',
            'linear-gradient(90deg, #0b2e8a 0%, #55a2e0 100%, #8be8a4 100%)',
        ],
    );

    return (
        <motion.div
            id="about"
            className="md:min-h-[300dvh] min-h-[200dvh] relative px-6"
            style={{ backgroundColor }}
        >
            <motion.div
                style={{ top }}
                transition={{ duration: 5, ease: 'linear' }}
                className="absolute w-[200dvw] h-[200dvh] bg-zinc-950 blur-lg flex justify-center rounded-t-full left-1/2 -translate-x-1/2"
            />
            <div className="sticky top-1/2 -translate-y-1/2">
                <motion.div
                    style={{ opacity }}
                    className="backdrop-blur-lg max-w-[600px] rounded px-2 py-1 mx-auto"
                >
                    <motion.p
                        className="mx-auto text-center text-lg font-bold"
                        style={{
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            backgroundImage: backgroundGradient,
                        }}
                    >
                        Hi, I&apos;am a Front-end developer with expertise in
                        React, Angular, and JavaScript, that excels in crafting
                        seamless user experiences and robust web solutions.
                        Experienced with UI/UX design, backend development, and
                        DevOps practices. Dedicated to user-centric design and
                        mentorship. Committed to innovation and continuous
                        learning. Poised to drive positive change in the
                        ever-evolving landscape of web development.
                    </motion.p>
                </motion.div>
            </div>
        </motion.div>
    );
};
