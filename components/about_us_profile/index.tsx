import styles from "./about-us-profile.module.scss"

export default function AboutUsProfile({ imageSrc = "", name = "", bodyText = "", quote = "", desktopImageFirst = false }) {
	const ProfileImage = () => <img src={imageSrc} alt={`Foto von ${name}`} className="absolute w-full h-full object-cover object-center" width="549" height="373" />
	const mb = "mb-4 lg:mb-14"

	return (
		<section className={`flex ${desktopImageFirst ? " flex-row-reverse" : ""}`}>
			<div className={`flex flex-col lg:w-1/2 ${desktopImageFirst ? "lg:ml-8" : "lg:mr-8"}`}>
				<div className={mb}>
					<h1 className={`${styles.header} relative inline font-handwriting text-3xl xl:text-smallheader`}>{name}</h1>
				</div>
				<div className={`${styles.imageContainer} ${mb} lg:hidden`}>
					<ProfileImage />
				</div>
				<p className={mb}>{bodyText}</p>
				<p className="font-handwriting text-2xl xl:text-smallheader mt-auto">{quote}</p>
			</div>
			<div className={`hidden lg:flex lg:items-center lg:w-1/2 ${desktopImageFirst ? "lg:mr-8" : "lg:ml-8"}`}>
				<div className={styles.imageContainer}>
					<ProfileImage />
				</div>
			</div>
		</section>
	)
}
