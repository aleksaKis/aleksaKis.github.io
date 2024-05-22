import { Separator } from '@radix-ui/react-separator';
import { motion } from 'framer-motion';

export function Navigation() {
    return (
        <div className="self-center text-center absolute bottom-6 flex flex-col gap-1">
            <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 2.5 }}
                exit={{ opacity: 0 }}
            >
                <a href="#experience">Work Experience</a>
            </motion.nav>
            <motion.div
                className="self-center"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: '110%', opacity: 1 }}
                transition={{ delay: 1.3, duration: 1.3 }}
                exit={{ opacity: 0 }}
            >
                <Separator className="h-[1px] bg-neutral-300" />
            </motion.div>
        </div>
    );
}
