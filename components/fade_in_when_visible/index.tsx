import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer' // https://www.npmjs.com/package/react-intersection-observer
// you could use framer-motion for this but then it won't trigger on page load if initial=false on AnimatePresence
// here is how you would do it: https://stackoverflow.com/a/60324586 (might be an option so search engines can see the content on page load)

export default function FadeInWhenVisible ({children}) {
	const { ref, inView, entry } = useInView({ threshold: 0.2, triggerOnce: true }) // threshold = Number between 0 and 1 indicating the percentage that should be visible before triggering

	useEffect(() => {
		if (inView) entry.target.classList.remove('opacity-0', 'translate-y-3')
	}, [inView])

	return (
		<div ref={ref} className='opacity-0 transform translate-y-3 transition-fadein duration-500'>
			{children}
		</div>
	)
}