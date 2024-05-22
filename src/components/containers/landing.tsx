import { Separator } from '@radix-ui/react-separator';
import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';

import { AnimatedTooltip } from '../ui/animated-tooltip';

export const Landing = () => (
    <div className="relative min-h-svh flex mx-4 my-2 place-content-center flex-col">
        <div className="flex gap-2 max-w-full flex-wrap">
            <div className="basis-4/12">
                <h1 className="text-8xl tracking-tight whitespace-nowrap">
                    Aleksa Kis
                </h1>
                <h2 className="text-2xl tracking-tight">Front-end Developer</h2>
            </div>
            <p className="basis-6/12 mx-auto min-w-80 text-center">
                Hi, I&apos;am a Front-end Engineer with expertise in React,
                Angular, and JavaScript/TypeScript, that excels in crafting
                seamless user experiences and robust web solutions. Experienced
                with UI/UX design, backend development, and DevOps practices.
                Dedicated to user-centric design and mentorship. Committed to
                innovation and continuous learning. Poised to drive positive
                change in the ever-evolving landscape of web development.
            </p>
        </div>
        <div className="flex">
            <AnimatedTooltip name="LinkedIn" designation="Let's connect">
                <SocialIcon
                    network="linkedin"
                    url="https://linkedin.com/in/aleksa-kis"
                />
            </AnimatedTooltip>
            <AnimatedTooltip name="GitHub" designation="Checkout my projects">
                <SocialIcon
                    network="github"
                    url="https://github.com/aleksaKis"
                />
            </AnimatedTooltip>
            <AnimatedTooltip name="E-mail" designation="Contact me">
                <SocialIcon network="email" url="mailto:kishaleksa@gmail.com" />
            </AnimatedTooltip>
        </div>
        <div className="self-center text-center absolute bottom-32 flex flex-col gap-1">
            <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 2.5 }}
                exit={{ opacity: 0 }}
            >
                <a href="#about">About </a>
                <Separator
                    className=" inline-block w-[1px] h-3 mx-2 bg-neutral-300"
                    decorative
                    orientation="vertical"
                />

                <a href="#experience">Work Experience</a>
            </motion.nav>
            <motion.div
                className="self-center"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: '110%', opacity: 1 }}
                transition={{ delay: 1.3, duration: 1.3 }}
                exit={{ opacity: 0 }}
            >
                <Separator className="h-[1px] bg-neutral-300" />
            </motion.div>
        </div>
    </div>
);
