const technologies = {
    Languages: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'Python', 'SQL'],
    Frontend: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Redux'],
    Backend: ['Node.js', 'Express', 'NestJS', 'PostgreSQL', 'MongoDB'],
    Tools: ['Git', 'Docker', 'Figma', 'VS Code', 'CI/CD', 'Vitest'],
};

export const Skills = () => {
    return (
        <section id="skills" className="section">
            <div className="container-custom">
                <div className="section-header">
                    <h2 className="section-title">Skills</h2>
                    <p className="section-subtitle">Technologies I work with</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                    {Object.entries(technologies).map(([category, skills]) => (
                        <div key={category}>
                            <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2">
                                {category}
                            </h3>
                            <div className="flex flex-wrap gap-1.5">
                                {skills.map((skill) => (
                                    <span key={skill} className="skill-badge">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
