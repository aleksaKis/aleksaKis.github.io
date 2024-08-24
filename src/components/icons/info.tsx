// https://phosphoricons.com/
import { SVGProps } from 'react';

export const InfoIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            {...props}
        >
            <rect width="256" height="256" fill="none" />
            <circle
                cx="128"
                cy="128"
                r="96"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
            />
            <path
                d="M120,120a8,8,0,0,1,8,8v40a8,8,0,0,0,8,8"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
            />
            <circle cx="124" cy="84" r="12" />
        </svg>
    );
};
