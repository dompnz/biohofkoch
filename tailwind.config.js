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
				//mono: ["IBM Plex Mono", "monospace"],
			},
			fontSize: {
				sm: ["0.875rem", "1.25rem"],
				base: ["1rem", "1.875rem"],
			},
			colors: {
				gray: {
					bg: "#F4F4F4",
					footer: "#E5E5E5",
					text: "#262626",
					stroke: "#161615",
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
			transitionProperty: {
				width: "width",
			},
			width: {
				"1/5": "20%",
				"1/6": "16.6666666%",
				"1/7": "14.2857143%",
				"1/8": "12.5%",
				"1/9": "11.1111111%",
				"1/10": "10%",
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
