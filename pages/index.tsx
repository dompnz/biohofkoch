import Head from "next/head"
import Link from "next/link"
import { useEffect } from "react"
import { attributes, react as HomeContent } from "../content/platzhalter.md"
import ReactMarkdown from "react-markdown"
import Layout from "../components/layout"

export default function Home() {
	useEffect(() => {
		console.log(attributes)
	})

	return (
		<Layout showNav={false}>
			<div className="min-h-screen flex flex-col lg:flex-row">
				{/* background image container */}
				<div className="bg-blue-400 flex relative h-[40vh] lg:h-auto lg:w-2/3">
					<img src="/me.png" alt="Picture of the author" className="w-full h-full object-cover bg-pink-500" />
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
					<div className="mt-auto">DI Augustin und Lydia Koch, Lindach 4, 5122 Hochburg-Ach +43 676/821250470 biohofkoch@gmx.at</div>
					<div>
						<ReactMarkdown children={attributes.contactdata} />
					</div>
					<Link href="/facebook-page">
						<a className="mt-6 flex items-center flex-wrap">
							<img src="/assets/images/facebook.svg" alt="facebook" className="inline mr-5" />
							<span>Biohof Koch</span>
						</a>
					</Link>
				</div>
			</div>
		</Layout>
	)
}
