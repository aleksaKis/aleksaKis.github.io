import { useScroll } from 'framer-motion';
import { useRef } from 'react';

import { Experience } from './components/containers/experience';
import { Landing } from './components/containers/landing';
import { Showcase } from './components/containers/showcase';
import { AnimatedAuroras } from './components/ui/animated-auroras';
import { SparklesCore } from './components/ui/sarkles';

function App() {
    const mainRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({ container: mainRef });
    return (
        <main className="overflow-x-hidden relative">
            <div
                ref={mainRef}
                className="bg-stone-950 text-neutral-300 h-screen w-screen overflow-x-hidden overflow-y-auto"
            >
                <div className="top-0 w-full absolute inset-0 h-screen pointer-events-none">
                    <SparklesCore
                        background="transparent"
                        minSize={0.3}
                        maxSize={2}
                        particleDensity={10}
                        className="w-full h-full"
                        particleColor="#FFFFFF"
                    />
                </div>
                <AnimatedAuroras scrollYProgress={scrollYProgress} />
                <div className="max-w-[1280px] mx-auto px-6">
                    <Landing />
                    <Experience />
                    <Showcase />
                </div>
            </div>
        </main>
    );
}

export default App;
