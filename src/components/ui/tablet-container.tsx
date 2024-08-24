import { motion } from 'framer-motion';
import React from 'react';

export const ContainerScroll = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-[80rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20">
            <div
                className="py-10 md:py-40 w-full relative"
                style={{
                    perspective: '1000px',
                }}
            >
                <Card>{children}</Card>
            </div>
        </div>
    );
};

export const Card = ({ children }: { children: React.ReactNode }) => {
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    return (
        <motion.div
            initial={{
                rotateX: 20,
                scale: isMobile ? 0.7 : 1.05,
                translate: 0,
            }}
            transition={{
                duration: 1.5,
                ease: 'easeInOut',
            }}
            whileInView={{
                rotateX: 0,
                scale: isMobile ? 0.9 : 1,
                translate: -100,
            }}
            style={{
                boxShadow:
                    '0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003',
            }}
            className="max-w-4xl -mt-12 mx-auto h-[35rem] md:h-[30rem] w-full border-4 border-[#666161] p-2 md:p-6 bg-[#060505] rounded-[30px] shadow-2xl"
        >
            <div className="h-full w-full overflow-hidden">{children}</div>
        </motion.div>
    );
};
