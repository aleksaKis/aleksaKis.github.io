import { Navigation } from '../../common/landing/navigation';
import { Social } from '../../common/landing/social';

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
        <Social />
        <Navigation />
    </div>
);
