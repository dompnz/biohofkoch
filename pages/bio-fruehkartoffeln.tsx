import CustomHead from '../components/custom_head'
import Layout from '../components/layout'
import HeroSection from '../components/hero_section'
import HeroUnderlineSvg from '../components/animated_svgs/hero/underline'
import ImageSection from '../components/image_section'
import { attributes } from '../content/bio-fruehkartoffeln.md'
import ReactMarkdown from 'react-markdown'

export default function Page() {
	return (
		<Layout>
			<CustomHead
				metaTitlePrefix={attributes.heroHeader}
				metaTitle={attributes.title}
				metaDescription={attributes.description}
				ogImage={attributes.heroImage}
			/>
			<div className='mb-default'>
				<HeroSection imageSrc={attributes.heroImage} headerText={attributes.heroHeader} bodyText={attributes.heroText} />
			</div>

			<section className='mb-default container'>
				<h2 className='header'>{attributes.title1}</h2>
				<HeroUnderlineSvg />
				<ReactMarkdown children={attributes.text1} className='mb-default mt-8 text-indented-desktop' />
				<ImageSection imageSrcSmall={attributes.image1} imageSrcBig={attributes.image2} />
			</section>
		</Layout>
	)
}
