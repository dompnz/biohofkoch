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
				profilequote: ["2.5rem", "2.8125rem"],
				profileheader: ["6.25rem", "10.3125rem"],
				header: ["7.5rem"],
				hero: ["10rem", "8.75rem"],
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
				center: true,
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
				opacity: "opacity",
				burgerline: "top, bottom, transform, width",
			},
			width: {
				"1/5": "20%",
				"1/6": "16.6666666%",
				"1/7": "14.2857143%",
				"1/8": "12.5%",
				"1/9": "11.1111111%",
				"1/10": "10%",
			},
			animation: {
				"draw-stroke": "drawStroke 500ms ease forwards",
			},
			keyframes: {
				drawStroke: {
					"100%": { strokeDashoffset: 0 },
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
