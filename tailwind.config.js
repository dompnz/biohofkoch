module.exports = {
	mode: "jit",
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
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
		},
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
		screens: {
			sm: "640px",
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
