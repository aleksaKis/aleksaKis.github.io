export const About = () => {
  return (
    <section id="about" className="section">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          <h2 className="section-title text-center">About</h2>

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm a Frontend Developer with several years of experience building
              web applications. I specialize in{" "}
              <span className="text-foreground">React</span>,{" "}
              <span className="text-foreground">TypeScript</span>, and modern
              CSS frameworks.
            </p>
            <p>
              My focus is on writing maintainable code and creating interfaces
              that are both functional and pleasant to use. I enjoy solving
              complex problems and continuously improving my craft.
            </p>
            <p>
              When I'm not coding, I explore new technologies, contribute to
              open source, and keep up with the latest in web development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
