import { MotionValue, motion, useTransform } from 'framer-motion';

export const About = ({ yScroll }: { yScroll: MotionValue<number> }) => {
    const scale = useTransform(yScroll, [0, 0.3], [0.3, 0.95]);

    return (
        <div
            id="about"
            className="min-h-[300svh] relative flex justify-center bg"
        >
            <motion.div
                style={{ scale }}
                className="bg-gradient-to-r from-purple-500 to-purple-900 border-zinc-100 shadow rounded-full z-10 
                flex items-center p-3 overflow-hidden w-[90svw] h-[90svw] max-h-[550px] max-w-[550px]  sticky top-[25%]"
            >
                <p className="mx-auto text-center sm:text-base text-sm p-2 px-10">
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
