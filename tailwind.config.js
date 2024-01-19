/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                "blood-moon": "url(/bgImages/bg.webp) ",
                "night-moon": "url(/bgImages/projects-bg.jpg) ",
                "cold-moon": "url(/bgImages/cold-moon.jpg) ",
                "blood-moon-center": "url(/bgImages/mobile-bg.webp)"
            },
            fontFamily: {
                boxy: ["Exo", "sans-serif"],
                long: ["Titillium Web", "sans-serif"],
                fun: ["Bangers", "sans-serif"],
            },
        },
    },
    plugins: [],
}
