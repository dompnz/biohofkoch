import Head from 'next/head'
import { attributes } from '../../content/general.md'

export default function CustomHead({ metaTitlePrefix, metaTitle = null, metaDescription = null, ogImage = null, children = null }) {
	return (
		<Head>
			{/* in case no meta title is set we use the given prefix + general suffix */}
			<title>{metaTitle || metaTitlePrefix + attributes.titleSuffix}</title>
			<meta name='description' content={metaDescription || attributes.description} />
			<meta property='og:image' content={ogImage || attributes.ogImage} />
			{children}
		</Head>
	)
}
