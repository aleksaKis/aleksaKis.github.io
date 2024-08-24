import { GitHubLogoIcon } from '../icons/github-logo';
import { InfoIcon } from '../icons/info';
import { MailboxIcon } from '../icons/mailbox';

export const Footer = () => (
    <footer className="rounded-lg shadow m-4 z-50 px-6 text-neutral-100">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-xs sm:text-center ">
                © 2024 by{' '}
                <a
                    href="https://github.com/aleksaKis"
                    className="hover:underline"
                >
                    Aleksa Kis
                </a>
            </span>
            <ul className="text-xs flex flex-wrap items-center mt-3 font-medium sm:mt-0">
                <li>
                    <InfoIcon className="inline mr-2" width={18} /> About
                    <a
                        href="#about"
                        className="hover:underline me-4 md:me-6"
                    ></a>
                </li>
                <li>
                    <MailboxIcon className="inline mr-2" width={18} />
                    <a
                        href="mailto:kishaleksa@gmail.com"
                        className="hover:underline me-4 md:me-6"
                    >
                        Contact
                    </a>
                </li>
                <li>
                    <GitHubLogoIcon className="inline mr-2" width={18} />
                    <a
                        href="https://github.com/aleksaKis/aleksaKis.github.io"
                        className="hover:underline me-4 md:me-6"
                    >
                        Source
                    </a>
                </li>
            </ul>
        </div>
    </footer>
);
