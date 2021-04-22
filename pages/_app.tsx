import "../styles/globals.scss"

import type { AppProps /*, AppContext */ } from "next/app"

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className="font-sans text-gray-dark">
			<Component {...pageProps} />
		</div>
	)
}

export default MyApp
