import Head from 'next/head'
import Layout from '../components/layout'
import HeroSection from '../components/hero_section'
import HeroUnderlineSvg from '../components/animated_svgs/hero/underline'
import ImageSection from '../components/image_section'
import { attributes } from '../content/bio-fruehkartoffeln.md'

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

			<section className='mb-default container'>
				<h2 className='header'>{attributes.title1}</h2>
				<HeroUnderlineSvg />
				<p className='mb-default lg:pl-[45%] lg:w-[27%]'>{attributes.text1}</p>
				<ImageSection imageSrcSmall={attributes.image1} imageSrcBig={attributes.image2} />
			</section>
		</Layout>
	)
}
