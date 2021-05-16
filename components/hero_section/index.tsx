import styles from "./hero-section.module.scss"
import HeroUnderlineSvg from "../animated_svgs/hero/underline"

export default function HeroSection({ imageSrc = "", headerText = "", bodyText = "" }) {
	return (
		<section className="container flex flex-col lg:flex-row lg:items-center">
			<div className="lg:w-1/2 mb-8 lg:mb-0">
				<div className={`${styles.imageContainer}`}>
					<div>
						<img src={imageSrc} alt="hero image" />
					</div>
				</div>
			</div>
			<div className="lg:w-1/2 lg:pl-32">
				<h1 className="font-handwriting text-6xl xl:text-8xl 2xl:text-hero transform lg:-translate-x-8 2xl:-translate-x-40">{headerText}</h1>
				<HeroUnderlineSvg />
				<p className="mt-8">{bodyText}</p>
			</div>
		</section>
	)
}
