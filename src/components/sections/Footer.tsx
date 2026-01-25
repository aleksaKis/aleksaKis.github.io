import { Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
    {
        name: 'GitHub',
        href: 'https://github.com/aleksaKis',
        icon: Github,
    },
    {
        name: 'LinkedIn',
        href: 'https://linkedin.com/in/aleksa-kis',
        icon: Linkedin,
    },
    {
        name: 'Email',
        href: 'mailto:kishaleksa@gmail.com',
        icon: Mail,
    },
];

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-8 border-t border-border">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-muted-foreground">
                        © {currentYear} Aleksa Kis. All rights reserved.
                    </p>

                    <div className="flex items-center gap-4">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.name}
                                className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <link.icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
