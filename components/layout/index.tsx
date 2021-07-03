import Head from 'next/head'
import Navigation from '../navigation'
import Footer from '../footer'
import { attributes } from '../../content/general.md'

export default function Layout({ children, showNav = true, useNavSpacer = true, showFooter = true }) {
	return (
		<div className='flex flex-col min-h-screen'>
			<Head>
				<title>{attributes.title}</title>
				<meta name='description' content={attributes.description} />
				<meta property='og:image' content={attributes.ogImage} />
			</Head>
			{showNav && <Navigation useNavSpacer={useNavSpacer} />}
			<main className='mb-auto'>{children}</main>
			{showFooter && <Footer />}
		</div>
	)
}
