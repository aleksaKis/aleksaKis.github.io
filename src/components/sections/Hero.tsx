import { Github, Linkedin, Mail } from 'lucide-react';

const SocialLinks = () => {
    const links = [
        { icon: Github, href: 'https://github.com/aleksaKis', label: 'GitHub' },
        {
            icon: Linkedin,
            href: 'https://linkedin.com/in/aleksa-kis',
            label: 'LinkedIn',
        },
        { icon: Mail, href: 'mailto:kishaleksa@gmail.com', label: 'Email' },
    ];

    return (
        <div className="flex items-center gap-2">
            {links.map(({ icon: Icon, href, label }) => (
                <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-2.5 bg-transparent text-muted-foreground hover:text-foreground border border-border hover:border-foreground/50 transition-all duration-150"
                >
                    <Icon size={16} strokeWidth={1.5} />
                </a>
            ))}
        </div>
    );
};

export const Hero = () => {
    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="min-h-screen flex items-center justify-center">
            <div className="text-center max-w-2xl mx-auto px-4">
                {/* Name */}
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold mb-3 text-foreground tracking-tight">
                    Aleksa Kis
                </h1>

                {/* Role */}
                <p className="text-sm md:text-base text-muted-foreground mb-5 tracking-widest uppercase">
                    Software Engineer
                </p>

                {/* Description */}
                <p className="text-sm text-muted-foreground max-w-md mx-auto mb-8 leading-relaxed">
                    Building scalable web applications across frontend, backend, and product
                    systems. Precision in code, clarity in design.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
                    <button type="button" onClick={scrollToProjects} className="btn btn-primary">
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
