import { MotionValue } from 'framer-motion';

import { Aurora } from './aurora';

export function AnimatedAuroras({
    scrollYProgress,
}: {
    scrollYProgress: MotionValue<number>;
}) {
    return (
        <div className="pointer-events-none">
            <Aurora
                scrollYProgress={scrollYProgress}
                borderColor="#72FCF9"
                size={230}
            />
            <Aurora
                scrollYProgress={scrollYProgress}
                borderColor="#727BFC"
                size={300}
            />
            <Aurora
                scrollYProgress={scrollYProgress}
                borderColor="#F8FC92"
                size={360}
            />
            <Aurora
                scrollYProgress={scrollYProgress}
                borderColor="#8332AC"
                size={430}
            />
            <Aurora
                scrollYProgress={scrollYProgress}
                borderColor="#FFCAD4"
                size={500}
            />
        </div>
    );
}
