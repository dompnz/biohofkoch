import { attributes, react as MarkdownContent } from "../../content/footer.md"
import ReactMarkdown from "react-markdown"
import styles from "./footer.module.scss"

export default function Footer() {
	return (
		<footer className="container">
			<div className="py-16 md:pb-32 flex flex-col md:flex-row border-t-3 border-black">
				<div className={styles.column}>
					<h3 className="font-handwriting text-smallheader mb-4">{attributes.contacttitle1}</h3>
					<ReactMarkdown children={attributes.contacttext} />
				</div>
				<div className={styles.column}>
					<h3 className="font-handwriting text-smallheader mb-4">{attributes.contacttitle2}</h3>
					<div>
						<a href={`tel:${attributes.tel?.trim().replace(/[^0-9\+]+/g, "-")}`} className="animated-underline">
							{attributes.tel}
						</a>
					</div>
					<div>
						<a href={`mailto:${attributes.email}`} className="animated-underline">
							{attributes.email}
						</a>
					</div>
					<div className="mt-7">
						<a href={attributes.facebooklink} target="_blank" rel="noreferrer" className="flex items-center flex-wrap">
							<img src="/assets/images/facebook.svg" alt="facebook icon" width="22px" height="22px" className="inline mr-5 object-contain object-center" />
							<span className="subheader text-sm">Biohof Koch</span>
						</a>
					</div>
				</div>
				<div className={styles.column}>
					<div className="flex items-center">
						<div className="flex flex-col items-center">
							<img src={attributes.certificateImage1} alt="" width="60" height="80" className="object-contain mb-2" />
							<img src={attributes.certificateImage2} alt="" width="72" height="48" className="object-contain" />
						</div>
						<div>
							<ReactMarkdown children={attributes.certificatetext} />
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
