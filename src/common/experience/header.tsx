export const Header = ({
    logoUrl,
    alt,
    link,
    title,
    location,
    date,
}: {
    logoUrl: string;
    alt: string;
    link: string;
    title: string;
    location: string;
    date: string;
}) => (
    <h3 className="text-xl tracking-tight">
        <div className="flex items-center gap-1">
            <a href={link} target="_blank" rel="noreferrer">
                <img
                    className="border m-1 rounded-full w-[32px] "
                    alt={alt}
                    src={logoUrl}
                />
            </a>
            <span>{title}</span>
            <span>{location}</span>
        </div>
        <span className="bg-slate-300 text-slate-900 rounded px-1">{date}</span>
    </h3>
);
