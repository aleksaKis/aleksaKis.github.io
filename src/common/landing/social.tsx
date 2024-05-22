import { SocialIcon } from 'react-social-icons';

import { AnimatedTooltip } from '../../components/ui/animated-tooltip';

export function Social() {
    return (
        <div className="flex">
            <AnimatedTooltip name="LinkedIn" designation="Let's connect">
                <SocialIcon
                    network="linkedin"
                    url="https://linkedin.com/in/aleksa-kis"
                />
            </AnimatedTooltip>
            <AnimatedTooltip name="GitHub" designation="Checkout my projects">
                <SocialIcon
                    network="github"
                    url="https://github.com/aleksaKis"
                />
            </AnimatedTooltip>
            <AnimatedTooltip name="E-mail" designation="Contact me">
                <SocialIcon network="email" url="mailto:kishaleksa@gmail.com" />
            </AnimatedTooltip>
        </div>
    );
}
