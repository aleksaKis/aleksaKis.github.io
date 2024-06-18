'use client';

import React from 'react';

export const TabletContainer = ({
    children,
}: {
    titleComponent?: string | React.ReactNode;
    children: React.ReactNode;
}) => {
    return (
        <div className="flex items-center justify-center  overflow-auto z-50 mt-10 mx-5">
            <Card>{children}</Card>
        </div>
    );
};

export const Card = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="max-w-5xl mx-auto h-[13rem] md:h-[40rem] w-11/12 border-4 border-[#373636] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl">
            <div className="h-full w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl md:p-4 ">
                {children}
            </div>
        </div>
    );
};
