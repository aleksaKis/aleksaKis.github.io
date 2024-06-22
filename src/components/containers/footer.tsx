export const Footer = () => (
    <footer className="rounded-lg shadow m-4 z-50 px-6 ">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-xs sm:text-center text-zinc-300">
                © 2024 by{' '}
                <a
                    href="https://github.com/aleksaKis"
                    className="hover:underline"
                >
                    Aleksa Kis
                </a>
            </span>
            <ul className="text-xs flex flex-wrap items-center mt-3 font-medium text-zinc-300 sm:mt-0">
                <li>
                    <a href="#about" className="hover:underline me-4 md:me-6">
                        About
                    </a>
                </li>
                <li>
                    <a
                        href="mailto:kishaleksa@gmail.com"
                        className="hover:underline me-4 md:me-6"
                    >
                        Contact
                    </a>
                </li>
                <li>
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
