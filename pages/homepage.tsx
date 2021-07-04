import Head from 'next/head'
import Layout from '../components/layout'
import HeroSection from '../components/hero_section'
import ImageSection from '../components/image_section'
import Link from 'next/link'
import { attributes } from '../content/startseite.md'

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
				<ImageSection imageSrcSmall={attributes.image1} imageSrcBig={attributes.image2} />
			</div>

			<div className='mb-default container'>
				<Link href='/ueber-uns'>
					<a className='flex justify-between flex-wrap gap-4 p-10 lg:py-20 lg:px-24 border-3 border-black'>
						<span className='font-handwriting text-4xl lg:text-6xl lg:ml-5'>
							Mehr über <span className='underline'>Uns</span>
						</span>
						<img src='/assets/images/arrow-right.svg' alt='arrow-right' />
					</a>
				</Link>
			</div>
		</Layout>
	)
}
