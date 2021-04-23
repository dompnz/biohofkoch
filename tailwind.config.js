module.exports = {
	mode: "jit",
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				handwriting: ["Zooja", "cursive"],
				sans: [
					'"M PLUS Rounded 1c"',
					"ui-sans-serif",
					"system-ui",
					"-apple-system",
					"BlinkMacSystemFont",
					'"Segoe UI"',
					"Roboto",
					'"Helvetica Neue"',
					"Arial",
					'"Noto Sans"',
					"sans-serif",
				],
			},
			fontSize: {
				sm: ["0.875rem", "1.25rem"],
				base: ["1rem", "1.875rem"],
			},
			colors: {
				gray: {
					light: "#F0F0F0",
					dark: "#262626",
					darker: "#161615",
				},
			},
			backgroundImage: (theme) => ({
				logo: "url('/assets/images/logo.svg')",
			}),
			container: {
				padding: {
					DEFAULT: "1rem",
					sm: "2rem",
					lg: "4rem",
					xl: "5rem",
					"2xl": "6rem",
				},
			},
		},
		screens: {
			sm: "540px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
