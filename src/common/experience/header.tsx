export const Header = ({
    logoUrl,
    alt,
    link,
    title,
    company,
    date,
}: {
    logoUrl: string;
    alt: string;
    link: string;
    title: string;
    company: string;
    date: string;
}) => (
    <div>
        <div className="flex sm:items-center items-baseline gap-1 justify-between flex-col sm:flex-row">
            <div className="flex items-center gap-2">
                <a href={link} target="_blank" rel="noreferrer">
                    <img
                        className="border m-1 rounded-full w-[32px] "
                        alt={alt}
                        src={logoUrl}
                    />
                </a>
                <div>
                    <h3 className="text-xl tracking-tight">{company}</h3>
                    <h3 className="text-xl tracking-tight">{title}</h3>
                </div>
            </div>
            <time
                title="Start date"
                className="bg-gradient-to-tr from-sky-100 to-sky-500 border shadow text-stone-950 rounded text-sm px-2 py-1"
            >
                {date}
            </time>
        </div>
    </div>
);
