import styles from "./image-section.module.scss"

export default function ImageSection({ imageSrc1 = "", imageSrc2 = "", text1 = "" }) {
	return (
		<section className="flex flex-col lg:flex-row lg:items-center">
			{text1 && (
				<div className={styles.textContainer1}>
					<p>{text1}</p>
				</div>
			)}
			{!text1 && (
				<div className={styles.imageContainer1}>
					<div>
						<img src={imageSrc1} alt="biohof koch stimmungsbild" />
					</div>
				</div>
			)}
			<div className={styles.imageContainer2}>
				<div>
					<img src={imageSrc2} alt="biohof koch stimmungsbild" />
				</div>
			</div>
		</section>
	)
}
