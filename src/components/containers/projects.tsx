export const Projects = () => {
    return (
        <div
            className="relative py-2 pt-10 pl-12 pr-6 max-w-[800px] mx-auto mt-2"
            id="projects"
        >
            <h2 className="text-4xl mb-4">Free time projects</h2>
            <div className="flex gap-2 flex-col">
                <div className="flex flex-1 flex-col">
                    <a href="https://github.com/aleksaKis/aleksaKis.github.io">
                        <h3 className="text-xl underline hover:text-stone-100 mb-1 transition">
                            aleksa-kis (You are here)
                        </h3>
                    </a>
                    <p className="flex text-xs">
                        A personal portfolio website built with React,
                        TypeScript, Tailwind CSS, and Framer Motion. Initially
                        started as a playground for UI animations and fun with
                        elements by Aceternity UI, but it evolved into a
                        full-fledged portfolio. It is hosted on GitHub utilizing
                        GitHub actions.
                    </p>
                </div>
                <div>
                    <a href="https://github.com/aleksaKis/rand-melody">
                        <h3 className="text-xl underline hover:text-stone-100 mb-1 transition">
                            rand-melody-generator
                        </h3>
                    </a>
                    <p className="flex text-xs">
                        A simple web app that generates random melodies. You can
                        tweak the tempo, number of octaves, and the length of
                        the melody. It’s all done with vanilla JavaScript, and I
                        found some piano sounds online to make it work.
                    </p>
                </div>
                <div>
                    <a href="https://github.com/aleksaKis/beptune">
                        <h3 className="text-xl underline hover:text-stone-100 mb-1 transition">
                            beeptune
                        </h3>
                    </a>
                    <p className="flex text-xs">
                        A CLI tool I made for organizing my music collection. It
                        scans a folder and looks up each album on Spotify using
                        their API, then spits out a list of all the albums it
                        finds. It’s written in JavaScript with Node.js, and it’s
                        been super handy for my own collection.
                    </p>
                </div>
                <div>
                    <a href="https://github.com/aleksaKis/chat-app">
                        <h3 className="text-xl underline hover:text-stone-100 mb-1 transition">
                            chat-app
                        </h3>
                    </a>
                    <p className="flex text-xs">
                        Just a simple chat app I built using Angular on the
                        frontend and ExpressJS on the backend. It’s got a basic
                        UI and lets you chat with people in real time. Nothing
                        fancy, just a fun project full-stack monorepo project.
                    </p>
                </div>
                <div>
                    <a href="https://github.com/aleksaKis/heart-disease-classification">
                        <h3 className="text-xl underline hover:text-stone-100 mb-1 transition">
                            heart-disease-classification
                        </h3>
                    </a>

                    <p className="flex text-xs">
                        This project is a heart disease classification model I
                        built using Python. It uses the dataset on the UCI
                        Machine Learning Repository, and I used libraries like
                        sklearn, numpy, pandas, and matplotlib to create the
                        model and visualize the results. It’s a simple machine
                        learning project, but pretty cool!
                    </p>
                </div>
                <div>
                    <a href="https://github.com/aleksaKis/sudoku-solver">
                        <h3 className="text-xl underline hover:text-stone-100 mb-1 transition">
                            sudoku-solver
                        </h3>
                    </a>

                    <p className="flex text-xs">
                        Sudoku solver written in Python. It uses backtracking
                        algorithm to solve the sudoku puzzles. It can solve any
                        solvable puzzle and it is very fast.
                    </p>
                </div>
                <div>
                    <a href="https://github.com/aleksaKis/data-visualization">
                        <h3 className="text-xl underline hover:text-stone-100 mb-1 transition">
                            data-visualization
                        </h3>
                    </a>
                    <p className="flex text-xs">
                        A collection of fun data visualization scripts such as
                        random walk and word counter for books in PDF format. It
                        generates some neat graphs in SVG and PNG formats.
                    </p>
                </div>
            </div>
        </div>
    );
};
