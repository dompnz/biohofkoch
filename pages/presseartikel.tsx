import Head from 'next/head'
import Layout from '../components/layout'
import HeroSection from '../components/hero_section'
import { attributes } from '../content/presseartikel.md'

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

			<div className='mb-default flex flex-col gap-4 lg:justify-between lg:flex-wrap'>
				{attributes.files?.map((file, index, { length }) => {
					return (
						<a key={file.name} href={file.path} target='_blank' className='flex justify-between py-8 border-b-3 border-black lg:w-[44%]'>
							<span>{file.name}</span>
							<img src='/assets/images/arrow-right.svg' alt='arrow-right' />
						</a>
					)
				})}
			</div>
		</Layout>
	)
}
