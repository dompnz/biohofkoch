import CustomHead from '../components/custom_head'
import Layout from '../components/layout'
import HeroSection from '../components/hero_section'
import dynamic from 'next/dynamic'
const ImageSection = dynamic(() => import('../components/image_section'))
import { attributes } from '../content/hofladen.md'

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

			<div className='mb-default container last-p-no-mb'>
				<ImageSection textSmall={attributes.text1} imageSrcBig={attributes.image1} />
			</div>
		</Layout>
	)
}
