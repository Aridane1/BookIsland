/** @type {import('tailwindcss').Config} */

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			primary: "#3FC9EB",
			secondary: "#C9EEFA",
			dark: "#116077",
			light: "#F6FEFF",
			swap: "#FFA800",
			donate: "#06CC55",
			error: "#FF0000",
		},
		extend: {},
	},
	plugins: [],
};
