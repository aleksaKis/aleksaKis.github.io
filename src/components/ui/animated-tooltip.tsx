import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import React, { HTMLAttributes, useState } from 'react';

export const AnimatedTooltip = ({
    name,
    designation,
    children,
}: {
    name: string;
    designation: string;
    children: React.ReactNode;
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const springConfig = { stiffness: 100, damping: 5 };
    const x = useMotionValue(0); // going to set this value on mouse move
    // rotate the tooltip
    const rotate = useSpring(
        useTransform(x, [-100, 100], [-45, 45]),
        springConfig,
    );
    // translate the tooltip
    const translateX = useSpring(
        useTransform(x, [-100, 100], [-50, 50]),
        springConfig,
    );

    const handleMouseMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
        const halfWidth = event.currentTarget.offsetWidth / 2;
        x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
    };

    const ChildElement = (
        props: Partial<typeof children> & HTMLAttributes<HTMLDivElement>,
    ) =>
        children
            ? React.cloneElement(children as React.ReactElement, props)
            : null;

    return (
        <div
            className="-mr-4 relative group"
            key={name}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isHovered && (
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.6 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: {
                            type: 'spring',
                            stiffness: 260,
                            damping: 10,
                        },
                    }}
                    exit={{ opacity: 0, y: 20, scale: 0.6 }}
                    style={{
                        translateX: translateX,
                        rotate: rotate,
                        whiteSpace: 'nowrap',
                    }}
                    className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs  flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
                >
                    <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px" />
                    <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px" />
                    <div className="font-bold text-white relative z-30 text-base">
                        {name}
                    </div>
                    <div className="text-white text-xs">{designation}</div>
                </motion.div>
            )}
            {ChildElement && (
                <div className="relative hover:z-50 h-14 w-14 group-hover:scale-105 group-hover:z-30 transition duration-500">
                    <a
                        // @ts-expect-error @TODO: Work on this hacky solution
                        href={children && children.props?.url}
                        onMouseMove={handleMouseMove}
                        className="absolute z-50 w-full h-full"
                    />
                    <ChildElement className="border-2 rounded-full border-white" />
                </div>
            )}
        </div>
    );
};
