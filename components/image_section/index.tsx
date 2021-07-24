import styles from './image-section.module.scss'
import ReactMarkdown from 'react-markdown'
import FadeInWhenVisible from '../fade_in_when_visible'

export default function ImageSection({ imageSrcSmall = '', imageSrcBig = '', textSmall = null, textBig = null, switchedOnDesktop = false }) {
	return (
		<FadeInWhenVisible>
			<section className={`flex flex-col lg:flex-row items-center lg:justify-between ${switchedOnDesktop ? 'lg:flex-row-reverse' : ''}`}>
				{textSmall && (
					<div className={styles.textContainerSmall}>
						{typeof textSmall === 'string' && <ReactMarkdown children={textSmall} />}
						{typeof textSmall === 'object' && textSmall}
					</div>
				)}
				{imageSrcSmall && (
					<div className={styles.imageContainerSmall}>
						<div className='rounded-[3px] overflow-hidden'>
							<img src={imageSrcSmall} alt='biohof koch stimmungsbild' />
						</div>
					</div>
				)}
				{imageSrcBig && (
					<div className={styles.imageContainerBig}>
						<div className='rounded-[3px] overflow-hidden'>
							<img src={imageSrcBig} alt='biohof koch stimmungsbild' />
						</div>
					</div>
				)}
				{textBig && (
					<div className={styles.textContainerBig}>
						{typeof textSmall === 'string' && <ReactMarkdown children={textBig} />}
						{typeof textSmall === 'object' && textBig}
					</div>
				)}
			</section>
		</FadeInWhenVisible>
	)
}
