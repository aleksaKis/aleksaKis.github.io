import { MotionValue } from 'framer-motion';

import { Aurora } from './aurora';

const colors = [
    '#9933ff',
    '#8a29e6',
    '#7b20cc',
    '#6c16b3',
    '#5d0c99',
    '#4e027f',
    '#3f0066',
    '#30004c',
    '#200033',
];

export function AnimatedAuroras({
    scrollYProgress,
}: {
    scrollYProgress: MotionValue<number>;
}) {
    return (
        <div className="pointer-events-none">
            {colors.map((color, index) => (
                <Aurora
                    key={index}
                    scrollYProgress={scrollYProgress}
                    borderColor={color}
                    size={230 + index * 70}
                />
            ))}
        </div>
    );
}
