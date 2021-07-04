import Head from 'next/head'
import Layout from '../components/layout'
import HeroSection from '../components/hero_section'
import ImageSection from '../components/image_section'
import { attributes } from '../content/hofladen.md'

export default function Page() {
	return (
		<Layout>
			<Head>
				{attributes.title && <title>{attributes.title}</title>}
				{attributes.description && <meta name='description' content={attributes.description} />}
				{attributes.heroImage && <meta property='og:image' content={attributes.heroImage} />}
			</Head>
			<div className='mb-default'>
				<HeroSection imageSrc={attributes.heroImage} headerText={attributes.heroHeader} bodyText={attributes.heroText} />
			</div>

			<div className='mb-default container'>
				<ImageSection textSmall={attributes.text1} imageSrcBig={attributes.image1} />
			</div>
		</Layout>
	)
}
