import Head from "next/head"
import { useEffect } from "react"
import { attributes, react as MarkdownContent } from "../content/platzhalter.md"
import Layout from "../components/layout"

export default function Home() {
	useEffect(() => {
		console.log(attributes)
	})

	return (
		<Layout showNav={false}>
			<Head>
				<title>{attributes.title}</title>
				<meta name="description" content={attributes.description} />
			</Head>
			<div className="min-h-screen flex flex-col lg:flex-row">
				{/* background image container */}
				<div className="flex relative h-[40vh] lg:h-auto lg:w-2/3">
					<img src={`/${attributes.backgroundimage}`} alt="Hintergrundbild" className="absolute w-full h-full object-cover object-top" />
					<img
						src="/assets/images/logo-with-border.svg"
						alt="Biohof Koch Logo"
						className="left-1/2 absolute top-full transform -translate-y-1/2 -translate-x-1/2 w-1/2 sm:w-1/3 md:w-1/4 lg:w-[345px] lg:left-full lg:top-1/4"
					/>
				</div>
				{/* placeholder for the overlapping part of the visible logo. should always have 1/2 of its width. */}
				<img src="/assets/images/logo-with-border.svg" alt="Logo Placeholder" className="invisible w-1/4 sm:w-1/6 md:w-1/8 lg:hidden" />
				{/* info container */}
				<div className="container max-w-none flex-grow mt-8 pb-12 lg:mt-0 lg:px-12 lg:py-20 flex flex-col lg:w-1/3">
					<div className="mt-auto mb-6 lg:mb-16">
						<h1 className="uppercase font-sans font-extrabold text-sm mb-4">Biohof Koch</h1>
						<MarkdownContent />
					</div>
					<a href={attributes.facebooklink} target="_blank" className="flex items-center flex-wrap">
						<img src="/assets/images/facebook.svg" alt="facebook" className="inline mr-5" />
						<span>Biohof Koch</span>
					</a>
				</div>
			</div>
		</Layout>
	)
}
