import { Mail } from 'lucide-react';

export const Contact = () => {
    return (
        <section id="contact" className="section">
            <div className="container-custom">
                <div className="max-w-md mx-auto text-center">
                    <h2 className="section-title">Get in Touch</h2>
                    <p className="text-sm text-muted-foreground mb-6">
                        Interested in working together? Let's connect.
                    </p>
                    <a href="mailto:kishaleksa@gmail.com" className="btn btn-primary">
                        <Mail size={14} strokeWidth={1.5} />
                        kishaleksa@gmail.com
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
