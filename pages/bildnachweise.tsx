import CustomHead from '../components/custom_head'
import Layout from '../components/layout'
import HeroUnderlineSvg from '../components/animated_svgs/hero/underline'
import { attributes } from '../content/bildnachweise.md'
import ReactMarkdown from 'react-markdown'

export default function Page() {
	return (
		<Layout>
			<CustomHead
				metaTitlePrefix={attributes.heroHeader}
				metaTitle={attributes.title}
				metaDescription={attributes.description}
			/>

			<section className='mb-default container'>
				<h2 className='header'>{attributes.heroHeader}</h2>
				<HeroUnderlineSvg />
				<ReactMarkdown children={attributes.heroText} className='mb-default mt-8 text-indented-desktop' />
			</section>
		</Layout>
	)
}
