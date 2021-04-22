import "../styles/globals.scss"
import Head from "next/head"

import type { AppProps /*, AppContext */ } from "next/app"

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className="font-sans text-gray-dark">
			<Head>
				<title></title>
			</Head>
			<Component {...pageProps} />
		</div>
	)
}

export default MyApp
