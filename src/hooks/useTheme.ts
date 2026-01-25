import { useEffect } from 'react';

export const useTheme = () => {
    useEffect(() => {
        // Always set dark theme
        document.documentElement.classList.add('dark');

        // Update meta theme-color
        const metaThemeColor = document.querySelector(
            'meta[name="theme-color"]',
        );
        if (metaThemeColor) {
            metaThemeColor.setAttribute('content', '#000000');
        }
    }, []);

    return { isDarkMode: true };
};
