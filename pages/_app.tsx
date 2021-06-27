import '../styles/globals.scss'
import Head from 'next/head'

import type { AppProps /*, AppContext */ } from 'next/app'
import tailwindConfig from '../tailwind.config'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className='font-sans text-gray-dark bg-gray-bg text-base break-words min-h-screen'>
			<Head>
				<meta property='og:type' content='website' />
				<meta property='og:locale' content='de_AT' />
				{/* background color for mobiles */}
				<meta name='theme-color' content={tailwindConfig.theme.extend.colors.gray.bg} />
			</Head>
			<Component {...pageProps} />
		</div>
	)
}

export default MyApp
