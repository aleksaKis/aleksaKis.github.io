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
        <div className="flex gap-1 flex-col sm:flex-row">
            <div className="flex items-center gap-2 flex-1">
                <a href={link} target="_blank" rel="noreferrer">
                    <img
                        className="border m-1 rounded-full w-[32px] "
                        alt={alt}
                        src={logoUrl}
                    />
                </a>
                <div className="flex-1 flex flex-col">
                    <div className="flex justify-between flex-wrap flex-1 flex-col sm:flex-row items-start">
                        <h3 className="text-xl tracking-tight">{company}</h3>
                        <time
                            title="Start date"
                            className="border shadow rounded text-sm px-2 py-1"
                        >
                            {date}
                        </time>
                    </div>
                    <h3 className="text-xl tracking-tight">{title}</h3>
                </div>
            </div>
        </div>
    </div>
);
