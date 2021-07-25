import styles from './hero-section.module.scss'
import HeroUnderlineSvg from '../animated_svgs/hero/underline'
import ReactMarkdown from 'react-markdown'
import { motion, useReducedMotion } from 'framer-motion'

// TODO: add scrollytelling
export default function HeroSection({ imageSrc = '', headerText = '', bodyText = null, scrollytelling = null }) {
	const shouldReduceMotion = useReducedMotion()

	return (
		<section
			className={`${styles.heroSection} container flex flex-col lg:flex-row lg:items-center overflow-hidden ${
				scrollytelling ? 'scrollytelling' : ''
			}`}
		>
			<div className={`${styles.imageContainerWrapper} mb-8 lg:mb-0`}>
				<div className={`${styles.imageContainer}`}>
					<motion.div
						initial={{ x: shouldReduceMotion ? 0 : -10 }}
						animate={{ x: 0 }}
						transition={{ type: 'linear', duration: 0.3 }} // Set the transition to linear
						className='rounded-[3px] overflow-hidden'
					>
						<img src={imageSrc} alt='hero image' />
					</motion.div>
				</div>
			</div>
			<div className={`${styles.textContainerWrapper} lg:pl-32 lg:-ml-16 2xl:ml-0`}>
				<h1 className='font-handwriting text-6xl xl:text-8xl 2xl:text-hero transform lg:-translate-x-8 2xl:-translate-x-40 2xl:w-[132%]'>
					{headerText}
				</h1>
				<HeroUnderlineSvg />
				{bodyText && (
					<div className='mt-8 md:max-w-prose lg:max-w-[420px]'>
						{typeof bodyText === 'string' && <ReactMarkdown children={bodyText} />}
						{typeof bodyText === 'object' && bodyText}
					</div>
				)}
			</div>
		</section>
	)
}
