import { Mail } from 'lucide-react';

export const Contact = () => {
    return (
        <section id="contact" className="section">
            <div className="container-custom">
                <div className="max-w-xl mx-auto text-center">
                    <h2 className="section-title">Get in Touch</h2>
                    <p className="text-muted-foreground mb-8">
                        Interested in working together or have a question? Feel free to reach out.
                    </p>
                    <a href="mailto:kishaleksa@gmail.com" className="btn btn-primary">
                        <Mail size={16} />
                        kishaleksa@gmail.com
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
