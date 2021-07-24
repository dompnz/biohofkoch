import Navigation from '../navigation'
import Footer from '../footer'
import { motion } from 'framer-motion'

export default function Layout({ children, showNav = true, useNavSpacer = true, showFooter = true }) {
	const variants = {
		hidden: { opacity: 0, x: 0, y: 0 },
		enter: { opacity: 1, x: 0, y: 0 },
		exit: { opacity: 0, x: 0, y: 0 },
	}

	return (
		<div className='flex flex-col min-h-screen'>
			{showNav && <Navigation useNavSpacer={useNavSpacer} />}
			<motion.main
				variants={variants} // Pass the variant object into Framer Motion
				initial='hidden' // Set the initial state to variants.hidden
				animate='enter' // Animated state to variants.enter
				exit='exit' // Exit state (used later) to variants.exit
				transition={{ type: 'linear', duration: 0.3 }} // Set the transition to linear
				className='mb-auto'
			>
				{children}
				{showFooter && <Footer />}
			</motion.main>
		</div>
	)
}
