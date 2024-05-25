import { MotionValue, motion } from 'framer-motion';

import { Navigation } from '../../common/landing/navigation';
import { Social } from '../../common/landing/social';
import { FlipWords } from '../ui/flip-words';

const words = [
    'beautiful',
    'functional',
    'responsive',
    'accessible',
    'intuitive',
];

export const Landing = () => (
    <div className="relative min-h-svh flex mx-4 my-2 place-content-center flex-col justify-evenly sm:justify-center gap-2">
        <div>
            <h1 className="sm:text-8xl text-7xl tracking-tight whitespace-nowrap">
                Aleksa Kis
            </h1>
            <h2 className="sm:text-2xl text-xl tracking-tight">
                Front-end Developer
            </h2>
        </div>
        <div className="flex justify-between items-center flex-wrap">
            <Social />
            <span className="text-xl self-end overflow-hidden max-w-[220px] text-neutral-100">
                I create
                <FlipWords words={words} />
                UI.
            </span>
        </div>

        <Navigation />
    </div>
);
