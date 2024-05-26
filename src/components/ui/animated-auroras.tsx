import { MotionValue } from 'framer-motion';

import { Aurora } from './aurora';

const colors = [
    '#72FCF9',
    '#727BFC',
    '#F8FC92',
    '#8332AC',
    '#FFCAD4',
    '#FF9A8B',
    '#FF00FF',
    '#00FFFF',
    '#FFD700',
    '#7FFF00',
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
