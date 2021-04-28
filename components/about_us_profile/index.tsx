export default function AboutUsProfile({ imageSrc = "", name = "", bodyText = "", quote = "", desktopImageFirst = false }) {
	return (
		<section className={"flex" + desktopImageFirst ? " flex-row-reverse" : ""}>
			<div className="flex flex-col">
				<h1 className="font-handwriting text-[6.25rem]">{name}</h1>
				<img src="" alt="" />
				<p>{bodyText}</p>
				<p className="font-handwriting mt-auto">{quote}</p>
			</div>
			<div className="lg:hidden">
				<img src={imageSrc} alt={`Foto von ${name}`} />
			</div>
		</section>
	)
}
