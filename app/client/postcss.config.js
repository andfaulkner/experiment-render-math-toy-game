import {resolve} from 'path';

module.exports = {
    plugins: [
        // Ensure Tailwind references the right config file
        require('tailwindcss')(resolve(__dirname, './tailwind.config.js')),
        require('autoprefixer'),
    ],
};
