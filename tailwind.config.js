module.exports = {
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
		fontFamily: { zooja: ["Zooja", "cursive"], mplus: ["M PLUS Rounded 1c", "sans-serif"] },
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
