import { LocationIcon } from '../../components/icons/location';

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
    <div>
        <div className="flex items-center gap-1">
            <a href={link} target="_blank" rel="noreferrer">
                <img
                    className="border m-1 rounded-full w-[32px] "
                    alt={alt}
                    src={logoUrl}
                />
            </a>
            <h3 className="text-xl tracking-tight">{title}</h3>
        </div>
        <div className="flex justify-between flex-1">
            <span className="flex items-center">
                <LocationIcon />
                {location}
            </span>
            <span className=" bg-cyan-300 border-cyan-300 border shadow text-stone-950 rounded px-2 flex items-center">
                {date}
            </span>
        </div>
    </div>
);
