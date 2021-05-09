import Head from "next/head"
import Layout from "../components/layout"
import HeroSection from "../components/hero_section"
import { attributes, react as MarkdownContent } from "../content/suesse-knolle.md"
import ReactMarkdown from "react-markdown"

export default function Page() {
	return (
		<Layout>
			<Head>
				<Head>
					<title>{attributes.title}</title>
					<meta name="description" content={attributes.description} />
					<meta property="og:image" content={attributes.heroImage} />
				</Head>
				<div className="mb">
					<HeroSection imageSrc={attributes.heroImage} headerText={attributes.heroHeader} bodyText={attributes.heroText} />
				</div>
			</Head>
		</Layout>
	)
}
