import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

import { About } from './components/containers/about';
import { Dashboard } from './components/containers/dashboard';
import { Experience } from './components/containers/experience';
import { Footer } from './components/containers/footer';
import { Landing } from './components/containers/landing';
import { Skills } from './components/containers/skills';
import { AnimatedAuroras } from './components/ui/animated-auroras';
import { SparklesCore } from './components/ui/sarkles';

function App() {
    const mainRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({ container: mainRef });

    const display = useTransform(scrollYProgress, [0, 0.1], ['block', 'none']);

    return (
        <main className="overflow-hidden relative">
            <div
                id="content"
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
                <motion.div style={{ display }}>
                    <AnimatedAuroras scrollYProgress={scrollYProgress} />
                </motion.div>
                <div className="mx-auto z-10">
                    <Landing />
                    <About yScroll={scrollYProgress} />
                    <hr />
                    <Dashboard />
                    <Skills />
                    <Experience />
                    <Footer />
                </div>
            </div>
        </main>
    );
}

export default App;
