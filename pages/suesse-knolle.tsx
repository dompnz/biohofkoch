import Head from "next/head"
import Layout from "../components/layout"
import HeroSection from "../components/hero_section"
import ImageSection from "../components/image_section"
import { attributes, react as MarkdownContent } from "../content/suesse-knolle.md"
import ReactMarkdown from "react-markdown"

export default function Page() {
	return (
		<Layout>
			<Head>
				<title>{attributes.title}</title>
				<meta name="description" content={attributes.description} />
				<meta property="og:image" content={attributes.heroImage} />
			</Head>
			<div className="mb">
				<HeroSection imageSrc={attributes.heroImage} headerText={attributes.heroHeader} bodyText={attributes.heroText} />
			</div>
			<div className="container mb">
				{attributes.galleryText}
				{attributes.galleryImage}
			</div>
			<div className="container mb flex flex-col lg:flex-row">
				<div className="flex items-center justify-center lg:w-1/2">
					<img src="/assets/images/logo-suesse-knolle-with-border.svg" alt="Logo Süße Knolle" className="w-1/2 mb-8 lg:mb-0" />
				</div>
				<div className="lg:w-1/2">
					<h2 className="mb-8">{attributes.shippingHeader}</h2>
					<ReactMarkdown children={attributes.shippingText1} className="mb-8" />
					<div className="mb-8">
						<table>
							<tr>
								<th colSpan={2} className="text-left subheader pb-4">
									{attributes.priceHeader}
								</th>
							</tr>
							{attributes.priceitems?.map((priceitem, index) => (
								<tr key={index}>
									<td className="pr-4">{priceitem.quantity}</td>
									<td>{priceitem.text}</td>
								</tr>
							))}
						</table>
					</div>
					<ReactMarkdown children={attributes.shippingText2} />
				</div>
			</div>
			<div className="container mb">
				<ImageSection imageSrc1={attributes.galleryImage1} imageSrc2={attributes.galleryImage2} />
			</div>
		</Layout>
	)
}
