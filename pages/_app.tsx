import "../styles/globals.scss"

import Navigation from "../components/navigation"
import type { AppProps /*, AppContext */ } from "next/app"

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className="">
			<Navigation />
			<Component {...pageProps} />
		</div>
	)
}

export default MyApp
