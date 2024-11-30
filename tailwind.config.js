/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    colors: {
      newgray: "#2E2E2E", // Added newgray as a text color
    },
  },
  fontFamily: {
    poppins: ['Poppins', 'sans-serif'], // Define Poppins font
  },
};
export const plugins = [];
