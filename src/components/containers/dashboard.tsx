import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

import promo from '../../assets/aleksa_kis_promo.mp4';
import { PlayIcon } from '../icons/play';
import { ContainerScroll } from '../ui/tablet-container';

export const Dashboard = () => {
    const [showPlayButton, setShowPlayButton] = useState(true);
    const [showCallToAction, setShowCallToAction] = useState(false);
    const ref = useRef<HTMLVideoElement>(null);

    const handlePlay = () => {
        if (ref.current) {
            ref.current.play();
            setShowPlayButton(false);
        }
    };

    const handleEnd = () => {
        setShowCallToAction(true);
    };

    return (
        <div className="flex justify-center flex-col max-h-screen overflow-hidden relative py-10">
            <ContainerScroll>
                <div className="rounded-xl object-cover h-full object-left-top relative">
                    {showPlayButton && (
                        <button
                            onClick={handlePlay}
                            className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-30 
                        rounded-3xl flex gap-2 justify-center items-center text-white"
                        >
                            <PlayIcon className="w-10 h-10" />
                            <span className="text-2xl">Play</span>
                        </button>
                    )}
                    {showCallToAction && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-30 
                        rounded-3xl flex flex-col md:flex-row justify-evenly items-center text-white text-2xl"
                        >
                            <h5 className="md:text-4xl text-xl font-bold text-white text-center basis-1/4">
                                Want to work together?
                            </h5>
                            <span className="md:text-xl text-base text-white text-center basis-1/4">
                                Feel free to contact me at{' '}
                                <a
                                    href="mailto:kishaleksa@gmail.com"
                                    className="underline"
                                >
                                    kishaleksa@gmail.com
                                </a>
                            </span>
                        </motion.div>
                    )}
                    <video
                        onEnded={handleEnd}
                        ref={ref}
                        playsInline={true}
                        muted={true}
                        className="w-full h-full object-fit rounded-3xl"
                    >
                        <source src={promo} type="video/mp4" />
                    </video>
                </div>
            </ContainerScroll>
        </div>
    );
};
