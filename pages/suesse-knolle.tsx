import Head from 'next/head'
import Layout from '../components/layout'
import HeroSection from '../components/hero_section'
import ImageSection from '../components/image_section'
import { attributes, react as MarkdownContent } from '../content/suesse-knolle.md'
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
				<HeroSection imageSrc={attributes.heroImage} headerText={attributes.heroHeader} bodyText={attributes.heroText} />
			</div>
			<div className='container mb-default'>
				<ImageSection textSmall={attributes.galleryText} imageSrcBig={attributes.galleryImage} />
			</div>
			<div className='container mb-default flex flex-col lg:flex-row'>
				<div className='flex items-center justify-center lg:w-1/2'>
					<img src='/assets/images/logo-suesse-knolle-with-border.svg' alt='Logo Süße Knolle' className='w-1/2 mb-10 lg:mb-0' />
				</div>
				<div className='lg:w-1/2'>
					<h2 className='mb-4 header'>{attributes.shippingHeader}</h2>
					<ReactMarkdown children={attributes.shippingText1} className='mb-8' />
					<div className='mb-8'>
						<table>
							<thead>
								<tr>
									<th colSpan={2} className='text-left subheader pb-4'>
										{attributes.priceHeader}
									</th>
								</tr>
							</thead>
							<tbody>
								{attributes.priceitems?.map((priceitem, index) => (
									<tr key={index}>
										<td className='pr-6'>{priceitem.quantity}</td>
										<td>{priceitem.text}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<ReactMarkdown children={attributes.shippingText2} />
				</div>
			</div>
			<div className='container mb-default'>
				<ImageSection imageSrcSmall={attributes.galleryImage1} imageSrcBig={attributes.galleryImage2} />
			</div>
		</Layout>
	)
}
