import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    type?: string;
}

export const SEO = ({
    title = 'Aleksa Kis - Software Engineer',
    description = 'Portfolio of Aleksa Kis, a software engineer building scalable full stack web applications with React, TypeScript, Node.js, and modern backend technologies.',
    image = '/og-image.png',
    url = 'https://aleksakis.github.io',
    type = 'website',
}: SEOProps) => {
    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />

            {/* Open Graph Meta Tags */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content={type} />

            {/* Twitter Card Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Additional Meta Tags */}
            <meta name="theme-color" content="#000000" />
            <link rel="canonical" href={url} />
        </Helmet>
    );
};
