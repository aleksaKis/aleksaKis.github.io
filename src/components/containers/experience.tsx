import { motion } from 'framer-motion';
import { ReactNode, useState } from 'react';

import everseenLogo from '../../assets/everseen_limited_logo.jpg';
import fmiLogo from '../../assets/fmi_logo.jpg';
import initDLogo from '../../assets/initd_logo.jpg';
import propelerLogo from '../../assets/propeler_logo.jpg';
import { Header } from '../../common/experience/header';
import { LaptopIcon } from '../icons/laptop';

const WorkExperience = () => {
    return (
        <div
            id="experience"
            className="relative py-2 mt-2 pl-12 pr-6 max-w-[800px] mx-auto"
        >
            <h2 className="text-4xl tracking-tight mb-4 font-header flex">
                <LaptopIcon className="inline mr-2" fill="#f5f5f5" width={40} />
                Experience
            </h2>
            <ExperienceItem
                link="https://everseen.com/"
                alt="everseen-logo"
                logoUrl={everseenLogo}
                company="Everseen Limited"
                title="Front-end Developer"
                endDate="Present"
                startDate="Jan 2021"
            >
                <p className="text- mt-2">
                    - Design, build, and maintenance of the vision annotation
                    platform with multiple front-end projects using the latest
                    development practices in modern JavaScript/TypeScript
                    frameworks such as React, and Angular, effectively
                    articulating Agile principles consulting standups to ensure
                    progress tracking
                    <br />- Participate in the development of the new Everseen
                    products. • Proved independence and reliability by
                    self-managing, delivering, and integrating new React
                    projects
                    <br />- Responsible for code quality maintenance by detailed
                    code reviews, writing technical documentation, setting
                    testing infrastructure, GitLab pipelines CI/CD, ensuring the
                    UI responsiveness, solid UX, performance optimizations,
                    usability, and reliability of web solutions.
                    <br />- Showed great communication skills in assisting and
                    onboarding new teammates, brainstorming and debugging
                    sessions.
                    <br />- Extended skill set by working on backend features
                    and bug fixes within frameworks NestJS and Express.js
                    (Node.js) with PostgreSQL and MongoDB databases.
                    <br />- Played a crucial role in coordinating release and
                    deployment activities, ensuring the timely delivery of
                    software solutions utilizing DevOps methodology.
                </p>
            </ExperienceItem>
            <ExperienceItem
                link="https://init-d.io/"
                alt="initd-logo"
                logoUrl={initDLogo}
                company="Init.d"
                title="Front-end Developer"
                endDate="Dec 2023"
                startDate="May 2023"
            >
                <p className="text- mt-2">
                    - Contributed to developing of the Admin Dashboard mobile
                    application for monitoring and tracking items and employee
                    management utilizing React Native and Expo framework.
                    <br />- Translated storyboards and Figma designs employing
                    React Native Paper and emotion libraries into the functional
                    application.
                    <br />- Played a role in defining and scoping features.
                    Participated in stand-ups, planning, and application flow
                    designing.
                </p>
            </ExperienceItem>
            <ExperienceItem
                link="https://propeler.io/"
                alt="propeler-logo"
                logoUrl={propelerLogo}
                title="Web Developer, Internship"
                company="Properer Center"
                endDate="Jan 2021"
                startDate="Oct 2020"
            >
                <p className="text- mt-2">
                    - Designed, published, and deployed WordPress websites with
                    a focus on user-friendly interfaces and seamless
                    functionality.
                    <br />- Communicated with clients, content writers, and
                    designers.
                    <br />- Observed fresh React project and documentation.
                </p>
            </ExperienceItem>
            <ExperienceItem
                link="https://fmi.rs/en/home/"
                alt="propeler-logo"
                logoUrl={fmiLogo}
                company="Youth with disabilities forum - ”IT Prekvalifikacija”"
                title="Assistant"
                endDate="Jul 2020"
                startDate="Oct 2019"
            >
                <p className="text- mt-2">
                    - Assistant of the front-end development course for people
                    with disabilities at Belgrade Faculty of Organizational
                    Sciences. The course subject was web development with React
                    and WordPress. Presented a few WordPress introduction
                    courses.
                    <br />- Assisted every lecturer by helping attendees catch
                    up with the course progress, assisting with homework,
                    encouraging, motivating, and try resolving any issue I could
                    help with.
                </p>
            </ExperienceItem>
        </div>
    );
};

type ExperienceItemProps = {
    link: string;
    alt: string;
    logoUrl: string;
    company: string;
    title: string;
    startDate: string;
    endDate: string;
    children: ReactNode;
};

const ExperienceItem = ({
    link,
    alt,
    logoUrl,
    company,
    title,
    startDate,
    endDate,
    children,
}: ExperienceItemProps) => {
    const [show, setShow] = useState(window.innerWidth > 640 ? true : false);
    return (
        <div
            className="flex relative cursor-pointer"
            onClick={() => setShow(!show)}
        >
            <div className="text-end absolute right-full text-zinc-300">
                <span className="text-2xs whitespace-nowrap">{endDate}</span>
            </div>
            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
                <div className="relative z-10 size-7 flex justify-center items-center">
                    <div className="size-2 rounded-full bg-zinc-300" />
                </div>
            </div>

            <div className="grow pt-0.5 pb-2">
                <div className="rounded-lg border border-zinc-700 bg-zinc-900 px-2 py-3">
                    <Header
                        link={link}
                        alt={alt}
                        logoUrl={logoUrl}
                        company={company}
                        title={title}
                        date={startDate}
                    />
                    <motion.span
                        style={{
                            display: 'block',
                            overflow: 'hidden',
                        }}
                        animate={{ height: show ? 'auto' : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-sm"
                    >
                        {children}
                    </motion.span>
                </div>
            </div>
        </div>
    );
};

export const Experience = () => {
    return <WorkExperience />;
};
