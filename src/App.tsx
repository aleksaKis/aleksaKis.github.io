import { useScroll } from 'framer-motion';
import { useRef } from 'react';

import { Experience } from './components/containers/experience';
import { Landing } from './components/containers/landing';
import { Showcase } from './components/containers/showcase';
import { Aurora } from './components/ui/aurora';
import { SparklesCore } from './components/ui/sarkles';

function App() {
    const mainRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({ container: mainRef });
    return (
        <main
            ref={mainRef}
            className="bg-stone-950 relative overflow-x-hidden overflow-y-auto text-neutral-300 h-screen w-screen"
        >
            <div className="w-full absolute inset-0 h-screen pointer-events-none">
                <SparklesCore
                    background="transparent"
                    minSize={0.3}
                    maxSize={2}
                    particleDensity={10}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />
            </div>
            <div className="max-w-[1280px] mx-auto px-6">
                <div className="overflow-hidden w-full lg:opacity-100 opacity-40">
                    <Aurora
                        scrollYProgress={scrollYProgress}
                        borderColor="#72FCF9"
                        size={230}
                    />
                    <Aurora
                        scrollYProgress={scrollYProgress}
                        borderColor="#727BFC"
                        size={300}
                    />
                    <Aurora
                        scrollYProgress={scrollYProgress}
                        borderColor="#F8FC92"
                        size={360}
                    />
                    <Aurora
                        scrollYProgress={scrollYProgress}
                        borderColor="#8332AC"
                        size={430}
                    />
                    <Aurora
                        scrollYProgress={scrollYProgress}
                        borderColor="#FFCAD4"
                        size={500}
                    />
                </div>
                <Landing />
                <Experience />
                <Showcase />
            </div>
        </main>
    );
}

export default App;
