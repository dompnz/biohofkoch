import styles from './hero-section.module.scss'
import HeroUnderlineSvg from '../animated_svgs/hero/underline'
import ReactMarkdown from 'react-markdown'
import { motion, useReducedMotion } from 'framer-motion'

export default function HeroSection({ imageSrc = '', headerText = '', bodyText = null }) {
	const shouldReduceMotion = useReducedMotion()

	return (
		<section className='container flex flex-col lg:flex-row lg:items-center'>
			<div className='lg:w-1/2 mb-8 lg:mb-0'>
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
			<div className='lg:w-1/2 lg:pl-32'>
				<h1 className='font-handwriting text-6xl xl:text-8xl 2xl:text-hero transform lg:-translate-x-8 2xl:-translate-x-40 lg:w-[120%]'>
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
