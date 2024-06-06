import { MotionValue, motion, useTransform } from 'framer-motion';

import dashboardBackground from '../../assets/dashboard-background.jpg';

export const About = ({ yScroll }: { yScroll: MotionValue<number> }) => {
    const opacity = useTransform(yScroll, [0, 0.2], [0, 1]);
    const top = useTransform(yScroll, [0, 0.2], ['10%', '-50%']);

    const backgroundGradient = useTransform(
        yScroll,
        [0.2, 0.5, 1],
        [
            'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(48,48,179,1) 0%, rgba(0,212,255,1) 100%)',
            'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(48,48,179,1) 50%, rgba(0,212,255,1) 100%)',
            'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(48,48,179,1) 100%, rgba(0,212,255,1) 100%)',
        ],
    );
    return (
        <div id="about" className="min-h-[300svh] relative">
            <motion.div
                style={{ top }}
                transition={{ duration: 5, ease: 'linear' }}
                className="absolute w-[200svw] h-[200svw] bg-black blur-lg flex justify-center rounded-full left-1/2 -translate-x-1/2"
            />
            <div className="sticky top-1/2 -translate-y-1/2">
                {/* <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    src={dashboardBackground}
                    className=" object-contain absolute"
                /> */}
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
                        Hi, I&apos;am a Front-end Engineer with expertise in
                        React, Angular, and JavaScript/TypeScript, that excels
                        in crafting seamless user experiences and robust web
                        solutions. Experienced with UI/UX design, backend
                        development, and DevOps practices. Dedicated to
                        user-centric design and mentorship. Committed to
                        innovation and continuous learning. Poised to drive
                        positive change in the ever-evolving landscape of web
                        development.
                    </motion.p>
                </motion.div>
            </div>
        </div>
    );
};
