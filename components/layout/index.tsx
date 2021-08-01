import Navigation from '../navigation'
import Footer from '../footer'
import { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Layout({ children, showNav = true, useNavSpacer = true, showFooter = true }) {
	/* const variants = {
		hidden: { opacity: 0, x: 0, y: 0 },
		enter: { opacity: 1, x: 0, y: 0 },
		exit: { opacity: 0, x: 0, y: 0 },
	} */
	// note: currently the exit animation causes the Navigation / svg/underline components to rerender, causing the underline to redraw twice on exit and enter.
	// no idea how to solve this. there is no callback for the exit animation from framer-motion, and preventing a rerender in react seems to only work as a performance optimization, you can't rely on it for functional purposes.

	useEffect(() => {
		scrollToHash()
	})

	const scrollToHash = () => {
		const path = window.location.hash
		if (!path || !path.includes('#')) return
		const id = path.replace('#', '')
		const el = document.getElementById(id)
		if (!el) return
		// @ts-ignore: Property 'scrollMarginTop' does not exist on type 'CSSStyleDeclaration'. see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-6.html#suppress-errors-in-ts-files-using--ts-ignore-comments
		const scrollMarginTop = parseInt(getComputedStyle(el).scrollMarginTop)
		setTimeout(() => {
			window.scrollTo({
				top: el.offsetTop - scrollMarginTop,
				behavior: 'smooth',
			})
		}, 1)
	}

	return (
		<div className='flex flex-col min-h-screen'>
			{showNav && <Navigation useNavSpacer={useNavSpacer} />}
			<motion.main
				// variants={variants}
				// initial='hidden'
				// animate='enter'
				// exit='exit'
				// transition={{ type: 'linear', duration: 0.3 }}
				className='mb-auto'
			>
				{children}
				{showFooter && <Footer />}
			</motion.main>
		</div>
	)
}
