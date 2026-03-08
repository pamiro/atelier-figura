/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#DDBE91',
                secondary: '#34495e',
                accent: '#dfbc87',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
