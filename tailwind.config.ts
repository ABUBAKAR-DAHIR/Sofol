/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
            },
            height: {
                header: '56px'
            },
            colors: {
                sofolRed: '#E22A31',
                sofolYellow: '#FFC329',
                sofolGreen: '#1AA260',
                sofolPurple: '#4C29B1',
                sofolBlack: '#1E1E1E'
            }
        }
    }
}