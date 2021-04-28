import HeroUnderlineSvg from "../animated_svgs/hero/underline"

export default function HeroSection({ imageSrc = "", headerText = "", bodyText = "" }) {
	return (
		<section>
			<img src={imageSrc} alt="hero image" />
			<h1 className="font-handwriting text-hero">{headerText}</h1>
			<HeroUnderlineSvg />
			<p>{bodyText}</p>
		</section>
	)
}
