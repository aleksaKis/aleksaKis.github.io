import { MotionValue } from 'framer-motion';

import { isLowEndDevice } from '../../utils/device-check';
import { Aurora } from './aurora';
import { BasicAurora } from './basic-autora';

const AURORA_COLORS = ['#9933ff', '#7f2bcd', '#66259b', '#4c1a69', '#320f37'];

export function AnimatedAuroras({
    scrollYProgress,
}: {
    scrollYProgress: MotionValue<number>;
}) {
    return (
        <div className="pointer-events-none">
            {isLowEndDevice()
                ? AURORA_COLORS.map((color, index) => (
                      <BasicAurora
                          key={index}
                          borderColor={color}
                          size={370 + index * 70}
                      />
                  ))
                : AURORA_COLORS.map((color, index) => (
                      <Aurora
                          key={index}
                          scrollYProgress={scrollYProgress}
                          borderColor={color}
                          size={370 + index * 70}
                      />
                  ))}
        </div>
    );
}
