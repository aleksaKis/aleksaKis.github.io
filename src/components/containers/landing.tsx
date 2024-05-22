import { Navigation } from '../../common/landing/navigation';
import { Social } from '../../common/landing/social';

export const Landing = () => (
    <div className="relative min-h-svh flex mx-4 my-2 place-content-center flex-col justify-evenly sm:justify-center">
        <div className="flex gap-2 max-w-full flex-wrap">
            <div className="basis-4/12">
                <h1 className="sm:text-8xl text-6xl tracking-tight whitespace-nowrap">
                    Aleksa Kis
                </h1>
                <h2 className="text-2xl tracking-tight">Front-end Developer</h2>
            </div>
            <p className="basis-6/12 mx-auto min-w-80 text-center sm:text-base text-sm">
                Hi, I&apos;am a Front-end Engineer with expertise in React,
                Angular, and JavaScript/TypeScript, that excels in crafting
                seamless user experiences and robust web solutions. Experienced
                with UI/UX design, backend development, and DevOps practices.
                Dedicated to user-centric design and mentorship. Committed to
                innovation and continuous learning. Poised to drive positive
                change in the ever-evolving landscape of web development.
            </p>
        </div>
        <Social />
        <Navigation />
    </div>
);
