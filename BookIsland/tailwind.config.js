/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3FC9EB",
        secondary: "#C9EEFA",
        dark: "#116077",
        light: "#F6FEFF",
        error: "#FF0000",
      },
    },
  },
  plugins: [],
};
