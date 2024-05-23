import everseenLogo from '../../assets/everseen_limited_logo.jpg';
import fmiLogo from '../../assets/fmi_logo.jpg';
import initDLogo from '../../assets/initd_logo.jpg';
import propelerLogo from '../../assets/propeler_logo.jpg';
import { Header } from '../../common/experience/header';

export const Experience = () => {
    return (
        <div id="experience" className="relative min-h-svh py-2 mt-2">
            <h2 className="sm:text-5xl text-4xl tracking-tight mb-4">
                Work Experience
            </h2>
            <div className="text-xs sm:text-base flex flex-col gap-3">
                <div className="rounded-lg border border-slate-300 bg-zinc-900 px-2 py-3">
                    <Header
                        location="Belgrade, Serbia"
                        link="https://everseen.com/"
                        alt="everseen-logo"
                        logoUrl={everseenLogo}
                        title="Everseen Limited– Front-end Developer"
                        date="January 2021 – Present"
                    />
                    <p className="pl-4">
                        Design, build, and maintenance of the vision annotation
                        platform with multiple front-end projects using the
                        latest development practices in modern
                        JavaScript/TypeScript frameworks such as React, and
                        Angular, effectively articulating Agile principles
                        consulting standups to ensure progress tracking. •
                        Participate in the development of the new Everseen
                        products. • Proved independence and reliability by
                        self-managing, delivering, and integrating new React
                        projects. • Responsible for code quality maintenance by
                        detailed code reviews, writing technical documentation,
                        setting testing infrastructure, GitLab pipelines CI/CD,
                        ensuring the UI responsiveness, solid UX, performance
                        optimizations, usability, and reliability of web
                        solutions. • Showed great communication skills in
                        assisting and onboarding new teammates, brainstorming
                        and debugging sessions. • Extended skill set by working
                        on backend features and bug fixes within frameworks
                        NestJS and Express.js (Node.js) with PostgreSQL and
                        MongoDB databases. • Played a crucial role in
                        coordinating release and deployment activities, ensuring
                        the timely delivery of software solutions utilizing
                        DevOps methodology.
                    </p>
                </div>
                <div className="rounded-lg border border-slate-300 bg-zinc-900 px-2 py-3">
                    <Header
                        location="Belgrade, Serbia"
                        link="/"
                        alt="initd-logo"
                        logoUrl={initDLogo}
                        title="Init.d – Front-end Developer"
                        date="May 2021 – August 2021"
                    />
                    <p className="pl-4">
                        • Contributed to developing of the Admin Dashboard
                        mobile application for monitoring and tracking items and
                        employee management utilizing React Native and Expo
                        framework. • Translated storyboards and Figma designs
                        employing React Native Paper and emotion libraries into
                        the functional application. • Played a role in defining
                        and scoping features. Participated in standups,
                        planning, and application flow designing.
                    </p>
                </div>
                <div className="rounded-lg border border-slate-300 bg-zinc-900 px-2 py-3">
                    <Header
                        location="Belgrade, Serbia"
                        link="https://everseen.com/"
                        alt="propeler-logo"
                        logoUrl={propelerLogo}
                        title="Propeler Centar – Web Developer, Internship"
                        date="October 2020 - January 2021"
                    />
                    <p className="pl-4">
                        • Designed, published, and deployed WordPress websites
                        with a focus on user-friendly interfaces and seamless
                        functionality. • Communicated with clients, content
                        writers, and designers. • Observed fresh React project
                        and documentation.
                    </p>
                </div>
                <div className="rounded-lg border border-slate-300 bg-zinc-900 px-2 py-3">
                    <Header
                        location="Belgrade, Serbia"
                        link="https://everseen.com/"
                        alt="propeler-logo"
                        logoUrl={fmiLogo}
                        title="Youth with disabilities forum – “IT Prekvalifikacija” –
                    Assistant Belgrade, Serbia"
                        date="October 2019 - July 2020"
                    />
                    <p className="pl-4">
                        Assistant of the front-end development course for people
                        with disabilities at Belgrade Faculty of Organizational
                        Sciences. The course subject was web development with
                        React and WordPress. Presented a few WordPress
                        introduction courses. • Assisted every lecturer by
                        helping attendees catch up with the course progress,
                        assisting with homework, encouraging, motivating, and
                        try resolving any issue I could help with.
                    </p>
                </div>
            </div>
        </div>
    );
};
