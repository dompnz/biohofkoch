import CustomHead from '../components/custom_head'
import Layout from '../components/layout'
import HeroSection from '../components/hero_section'
import ImageSection from '../components/image_section'
import Link from 'next/link'
// import { attributes, react as MarkdownContent } to import the body of the markdown
import { attributes } from '../content/startseite.md'
import FadeInWhenVisible from '../components/fade_in_when_visible'
import HeroUnderlineSvg from '../components/animated_svgs/hero/underline'
import ReactMarkdown from 'react-markdown'

export default function Page() {
	return (
		<Layout useNavSpacer={false}>
			<CustomHead
				metaTitlePrefix={attributes.heroHeader}
				metaTitle={attributes.title}
				metaDescription={attributes.description}
				ogImage={attributes.heroImage}
			/>
			<div className='mb-default'>
				<HeroSection imageSrc={attributes.heroImage} headerText={attributes.heroHeader} bodyText={attributes.heroText} scrollytelling={true} />
			</div>

			{/* optional infotext */}
			{attributes.showInfotext && (
				<FadeInWhenVisible>
					<section className='mb-default container'>
						<h2 className='header'>{attributes.infotextTitle}</h2>
						<HeroUnderlineSvg />
						<ReactMarkdown children={attributes.infotext} className='mb-default mt-8 text-indented-desktop' />
					</section>
				</FadeInWhenVisible>
			)}

			<div className='mb-default container'>
				<ImageSection imageSrcSmall={attributes.image1} imageSrcBig={attributes.image2} />
			</div>

			<section className='mb-default container'>
				<FadeInWhenVisible>
					<Link href='/ueber-uns'>
						<a className='flex justify-between flex-wrap gap-4 p-10 lg:py-20 lg:px-24 border-3 border-black rounded-sm group'>
							<span className='font-handwriting text-4xl lg:text-6xl lg:ml-5'>{attributes.linkboxText}</span>
							<img
								src='/assets/images/arrow-right.svg'
								alt='arrow-right'
								className='ml-auto transform lg:-translate-x-8 group-hover:translate-x-0 transition-transform duration-500'
							/>
						</a>
					</Link>
				</FadeInWhenVisible>
			</section>
		</Layout>
	)
}
