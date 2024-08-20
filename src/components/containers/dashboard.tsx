import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

import promo from '../../assets/aleksa_kis_promo.mp4';
import { PlayIcon } from '../icons/play';
import { ReplayIcon } from '../icons/replay';
import { ContainerScroll } from '../ui/tablet-container';

export const Dashboard = () => {
    const [showPlayButton, setShowPlayButton] = useState(true);
    const [showCallToAction, setShowCallToAction] = useState(false);
    const ref = useRef<HTMLVideoElement>(null);

    const handlePlay = () => {
        if (ref.current) {
            ref.current.play();
            setShowCallToAction(false);
            setShowPlayButton(false);
        }
    };

    const handleEnd = () => {
        setShowCallToAction(true);
    };

    return (
        <div className="flex justify-center flex-col max-h-[80dvh] overflow-hidden relative py-10">
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
                            className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50
                        rounded-3xl flex flex-col justify-evenly items-center text-white text-2xl z-10"
                        >
                            <div className="flex items-center flex-col gap-5">
                                <h5 className="md:text-4xl text-xl font-bold text-white text-center">
                                    Want to work together?
                                </h5>
                                <span className="md:text-xl text-base text-white text-center">
                                    Feel free to contact me at{' '}
                                    <a
                                        href="mailto:kishaleksa@gmail.com"
                                        className="underline"
                                    >
                                        kishaleksa@gmail.com
                                    </a>
                                </span>
                            </div>
                            <button
                                onClick={handlePlay}
                                className="flex items-center gap-2 justify-center bg-[#ff0201] rounded-xl px-4 py-3"
                            >
                                <ReplayIcon className="w-6" />
                                <span className="text-lg">Replay</span>
                            </button>
                        </motion.div>
                    )}
                    <video
                        controlsList="nodownload"
                        onEnded={handleEnd}
                        ref={ref}
                        controls
                        playsInline={true}
                        className="w-full h-full object-fit rounded-3xl"
                    >
                        <source src={promo} type="video/mp4" />
                    </video>
                </div>
            </ContainerScroll>
            {showCallToAction && (
                <span className="absolute bottom-20 text-2xs flex items-center justify-center w-full">
                    Like music in the video? Check out the more songs at my{' '}
                    <a
                        className=" text-[#ff0201] ml-1 underline font-bold"
                        href="https://www.youtube.com/@luviasanel8166/featured"
                    >
                        YouTube
                    </a>
                </span>
            )}
        </div>
    );
};
