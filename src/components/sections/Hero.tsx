import { Github, Linkedin, Mail } from "lucide-react";

const SocialLinks = () => {
  const links = [
    { icon: Github, href: "https://github.com/aleksaKis", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/aleksa-kis",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:kishaleksa@gmail.com", label: "Email" },
  ];

  return (
    <div className="flex items-center gap-3">
      {links.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="p-2.5 rounded-lg bg-muted text-muted-foreground hover:text-foreground hover:border-muted-foreground/30 border border-border transition-colors duration-200"
        >
          <Icon size={18} />
        </a>
      ))}
    </div>
  );
};

export const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-3xl mx-auto px-4">
        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4 text-foreground">
          Aleksa Kis
        </h1>

        {/* Role */}
        <p className="text-lg md:text-xl text-muted-foreground mb-6">
          Frontend Developer
        </p>

        {/* Description */}
        <p className="text-base text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
          I build modern web applications with React and TypeScript. Focused on
          clean code, intuitive interfaces, and great user experiences.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
          <button
            type="button"
            onClick={scrollToProjects}
            className="btn btn-primary"
          >
            View Projects
          </button>
          <a href="mailto:kishaleksa@gmail.com" className="btn btn-secondary">
            Get in Touch
          </a>
        </div>

        {/* Social Links */}
        <SocialLinks />
      </div>
    </section>
  );
};

export default Hero;
