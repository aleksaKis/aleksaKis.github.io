/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            fontSize: {
                '2xs': '.625rem',
                '3xs': '.5rem',
            },
            fontFamily: {
                header: ['Montserrat', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
