import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

import { About } from './components/containers/about';
import { Dashboard } from './components/containers/dashboard';
import { Experience } from './components/containers/experience';
import { Footer } from './components/containers/footer';
import { Landing } from './components/containers/landing';
import { Phrase } from './components/containers/phrase';
import { Projects } from './components/containers/projects';
import { AnimatedAuroras } from './components/ui/animated-auroras';
import { SparklesCore } from './components/ui/sarkles';
import { ShootingStars } from './components/ui/shoting-starts';

function App() {
    const mainRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({ container: mainRef });

    const display = useTransform(scrollYProgress, [0, 0.1], ['block', 'none']);

    return (
        <main className="overflow-hidden relative">
            <div
                id="content"
                ref={mainRef}
                className="bg-neutral-950 text-neutral-300 h-[100dvh] w-screen overflow-x-hidden overflow-y-auto"
            >
                <div className="top-0 w-full absolute inset-0 h-screen pointer-events-none">
                    <ShootingStars />
                    <SparklesCore
                        background="black"
                        minSize={0.3}
                        maxSize={2}
                        particleDensity={1.2}
                        className="w-full h-full"
                        particleColor="#FFFFFF"
                    />
                </div>
                <motion.div style={{ display }}>
                    <AnimatedAuroras scrollYProgress={scrollYProgress} />
                </motion.div>
                <Landing />
                <About yScroll={scrollYProgress} />
                <Phrase />
                <Experience />
                <Projects />
                <Dashboard />
                <Footer />
            </div>
        </main>
    );
}

export default App;
