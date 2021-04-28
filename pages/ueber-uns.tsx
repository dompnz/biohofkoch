import Layout from "../components/layout"
import HeroSection from "../components/hero_section"
import AboutUsProfile from "../components/about_us_profile"
import { attributes, react as MarkdownContent } from "../content/ueber-uns.md"
import { useEffect } from "react"

export default function Page() {
	useEffect(() => {
		console.log(attributes)
	})

	return (
		<Layout>
			<HeroSection imageSrc={attributes.heroImage} headerText={attributes.heroHeader} bodyText={attributes.heroText} />
			<AboutUsProfile />
		</Layout>
	)
}
