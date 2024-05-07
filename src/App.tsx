import { Experience } from './components/containers/expirience';
import { Landing } from './components/containers/landing';
import { SparklesCore } from './components/ui/sarkles';

function App() {
    return (
        <main className="bg-stone-950 overflow-y-auto text-neutral-300 h-screen w-screen">
            <div className="w-full absolute inset-0 h-screen pointer-events-none">
                <SparklesCore
                    background="transparent"
                    minSize={0.3}
                    maxSize={2}
                    particleDensity={4}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />
            </div>
            <div className="max-w-[1280px] mx-auto">
                <Landing />
                <Experience />
            </div>
        </main>
    );
}

export default App;
