import styles from "./underline-svg.module.scss"

export default function UnderlineSvg() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="107.739" height="2.79" viewBox="0 0 107.739 2.79" className={styles.svg}>
			{/* get the stroke length by calling this in the browser:
			document.querySelector(".underline-path").getTotalLength() */}
			<path
				className={`${styles.path} underline-path`}
				d="M1629.185,108.162c12.417-.216,24.937-.7,37.361-.765,22.823-.116,45.578.767,68.36.765"
				transform="translate(-1628.168 -106.39)"
			/>
		</svg>
	)
}
