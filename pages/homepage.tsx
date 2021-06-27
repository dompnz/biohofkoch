import Head from "next/head"
import { useEffect } from "react"
import { attributes, react as MarkdownContent } from "../content/startseite.md"
import Layout from "../components/layout"
import ImageSection from "../components/image_section"
import HeroSection from "../components/hero_section"
import Linkbox from "../components/linkbox"

export default function Homepage() {
	useEffect(() => {
		console.log(attributes)
	})

	return (
		<Layout>
			<Head>
				<title>{attributes.title}</title>
				<meta name="description" content={attributes.description} />
				<meta property="og:image" content={attributes.backgroundimage} />
			</Head>
			<div className="mb">
				<HeroSection imageSrc={attributes.heroImage} headerText={attributes.heroHeader} bodyText={attributes.heroText} />
			</div>
			<div className="mb">
				<ImageSection imageSrc1={attributes.galleryImage1} imageSrc2={attributes.galleryImage2} />
			</div>
			<div className="mb">
				<Linkbox text={attributes.linkboxText} link={attributes.linkboxLink} />
			</div>
		</Layout>
	)
}
