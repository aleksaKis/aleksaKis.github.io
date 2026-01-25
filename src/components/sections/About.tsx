export const About = () => {
    return (
        <section id="about" className="section">
            <div className="container-custom">
                <div className="max-w-xl mx-auto">
                    <h2 className="section-title text-center">About</h2>

                    <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                        <p>
                            Frontend Developer with several years of experience building web
                            applications. Specializing in{' '}
                            <span className="text-foreground">React</span>,{' '}
                            <span className="text-foreground">TypeScript</span>, and modern CSS
                            frameworks.
                        </p>
                        <p>
                            Focused on writing maintainable, scalable code and creating interfaces
                            that are both functional and precisely crafted. I believe in attention
                            to detail and systematic problem-solving.
                        </p>
                        <p>
                            Continuously exploring new technologies and contributing to open source
                            projects.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
