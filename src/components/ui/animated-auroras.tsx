import { MotionValue } from 'framer-motion';

import { isLowEndDevice } from '../../utils/device-check';
import { Aurora } from './aurora';
import { BasicAurora } from './basic-autora';

const AURORA_COLORS = ['#260733', '#2E073F', '#7A1CAC', '#9243bd', '#a563c8'];

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
                          size={`${30 + index * 6}dvh`}
                      />
                  ))}
        </div>
    );
}
