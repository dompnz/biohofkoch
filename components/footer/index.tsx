import { attributes, react as MarkdownContent } from "../../content/footer.md"
import ReactMarkdown from "react-markdown"

export default function Footer() {
	return (
		<footer className="bg-gray-footer">
			<div className="container pt-16 pb-32 flex flex-col md:flex-row">
				<div className="md:w-1/3 md:pr-8">
					<h3 className="subheader mb-4">{attributes.contacttitle1}</h3>
					<ReactMarkdown children={attributes.contacttext} />
				</div>
				<div className="md:w-1/3">
					<h3 className="subheader mb-4">{attributes.contacttitle2}</h3>
					<a href={`mailto:${attributes.email}`} className="block">
						{attributes.email}
					</a>
					<a href={`tel:${attributes.tel?.trim().replace(/[^0-9\+]+/g, "-")}`} className="block">
						{attributes.tel}
					</a>
				</div>
				<div className="md:w-1/3">
					<a href={attributes.facebooklink} target="_blank" rel="noreferrer" className="flex items-center flex-wrap animated-underlines">
						<img src="/assets/images/facebook.svg" alt="facebook icon" width="22px" height="22px" className="inline mr-5 object-contain object-center" />
						<span className="subheader text-sm animated-underlines-target">Biohof Koch</span>
					</a>
				</div>
			</div>
		</footer>
	)
}
