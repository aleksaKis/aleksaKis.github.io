import { Navigation } from '../../common/landing/navigation';
import { Social } from '../../common/landing/social';

export const Landing = () => (
    <div className="relative min-h-svh flex my-2 place-content-center flex-col justify-evenly sm:justify-center gap-2 px-6 max-w-[1280px] mx-auto">
        <div>
            <h1 className="sm:text-8xl text-7xl tracking-tight whitespace-nowrap font-semibold">
                Aleksa Kis
            </h1>
            <h2 className="sm:text-2xl text-xl tracking-tightfont-semibold">
                Front-end Developer
            </h2>
        </div>
        <div className="flex justify-between items-center flex-wrap">
            <Social />
        </div>
        <Navigation />
    </div>
);
