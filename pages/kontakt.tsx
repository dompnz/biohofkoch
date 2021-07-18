import Head from 'next/head'
import Layout from '../components/layout'
import HeroSection from '../components/hero_section'
import { attributes } from '../content/kontakt.md'
import { attributes as attributesGeneral } from '../content/general.md'
import ReactMarkdown from 'react-markdown'

export default function Page() {
	return (
		<Layout>
			<Head>
				{attributes.title && <title>{attributes.title}</title>}
				{attributes.description && <meta name='description' content={attributes.description} />}
				{attributes.heroImage && <meta property='og:image' content={attributes.heroImage} />}
			</Head>
			<div className='mb-default'>
				<HeroSection
					imageSrc={attributes.heroImage}
					headerText={attributes.heroHeader}
					bodyText={
						<div>
							<ReactMarkdown children={attributes.heroText} className='mb-4' />
							<div>
								<a href={`tel:${attributesGeneral.tel?.trim().replace(/[^0-9\+]+/g, '-')}`} className='animated-underline'>
									{attributesGeneral.tel}
								</a>
							</div>
							<div>
								<a href={`mailto:${attributesGeneral.email}`} className='animated-underline'>
									{attributesGeneral.email}
								</a>
							</div>
							<div className='mt-7'>
								<a href={attributesGeneral.facebooklink} target='_blank' rel='noreferrer' className='flex items-center flex-wrap'>
									<img
										src='/assets/images/facebook.svg'
										alt='facebook icon'
										width='22px'
										height='22px'
										className='inline mr-5 object-contain object-center'
									/>
									<span className='subheader text-sm'>{attributesGeneral.facebooktitle}</span>
								</a>
							</div>
						</div>
					}
				/>
			</div>
		</Layout>
	)
}
