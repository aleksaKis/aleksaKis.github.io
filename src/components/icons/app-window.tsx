// https://phosphoricons.com/
import { SVGProps } from 'react';

export const AppWindowIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            {...props}
        >
            <rect width="256" height="256" fill="none" />
            <rect
                x="32"
                y="48"
                width="192"
                height="160"
                rx="8"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
            />
            <circle cx="68" cy="84" r="12" />
            <circle cx="108" cy="84" r="12" />
        </svg>
    );
};
