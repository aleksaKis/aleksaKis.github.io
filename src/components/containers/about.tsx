import { MotionValue, motion, useTransform } from 'framer-motion';

export const About = ({ yScroll }: { yScroll: MotionValue<number> }) => {
    const scale = useTransform(yScroll, [0, 0.5], [0, 1]);

    return (
        <div id="about" className="min-h-[300svh] relative flex justify-center">
            <motion.div
                transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                style={{ scale }}
                className="border-blue-400 border shadow rounded-full z-10 flex items-center p-3 overflow-hidden backdrop-blur-lg
                w-[90dsw] h-[90svw] max-h-[550px] max-w-[550px] sticky top-1/4 transform"
            >
                <p
                    className="mx-auto text-center sm:text-base text-sm p-2 px-10 bg-gradient-to-r from-blue-100 to-blue-600 bg- bg-clip-text"
                    style={{ '-webkit-text-fill-color': 'transparent' }}
                >
                    Hi, I&apos;am a Front-end Engineer with expertise in React,
                    Angular, and JavaScript/TypeScript, that excels in crafting
                    seamless user experiences and robust web solutions.
                    Experienced with UI/UX design, backend development, and
                    DevOps practices. Dedicated to user-centric design and
                    mentorship. Committed to innovation and continuous learning.
                    Poised to drive positive change in the ever-evolving
                    landscape of web development.
                </p>
            </motion.div>
        </div>
    );
};
