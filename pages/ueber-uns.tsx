import Head from 'next/head'
import Layout from '../components/layout'
import HeroSection from '../components/hero_section'
import AboutUsProfile from '../components/about_us_profile'
import Linkbox from '../components/linkbox'
import ImageSection from '../components/image_section'
import { attributes, react as MarkdownContent } from '../content/ueber-uns.md'
import { useEffect } from 'react'

export default function Page() {
	useEffect(() => {
		console.log(attributes)
	})

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

			<div className='mb-default container lg:px-32'>
				{attributes.profiles?.map((profile, index, { length }) => {
					return (
						<div key={profile.profileName} className={`${index + 1 !== length ? 'mb-default' : ''}`}>
							<ImageSection
								textSmall={
									<>
										<h2 className='header mb-8'>{profile.profileName}</h2>
										<p>{profile.profileText}</p>
										<p>{profile.profileQuote}</p>
									</>
								}
								imageSrcBig={profile.profileImage}
								switchedOnDesktop={index % 2 !== 0}
							/>
						</div>
					)
				})}
			</div>

			<section className='mb-default container'>
				<Linkbox text={attributes.linkboxText} />
			</section>

			<div className='mb-default container'>
				<ImageSection imageSrcSmall={attributes.image1} imageSrcBig={attributes.image2} />
			</div>
		</Layout>
	)
}
