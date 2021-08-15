import Link from 'next/link'
import { useRef, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import NavUnderlineSvg from '../animated_svgs/nav/underline'
import NavSpacer from './nav-spacer'
import styles from './navigation.module.scss'
import { attributes as attributesGeneral } from '../../content/general.md'

export const navItems = [
	{
		name: 'Über uns',
		path: 'ueber-uns',
	},
	{
		name: 'Süsse Knolle',
		path: 'suesse-knolle',
	},
	{
		name: 'Bio-Frühkartoffeln',
		path: 'bio-fruehkartoffeln',
	},
	{
		name: 'Hofladen',
		path: 'hofladen',
	},
	{
		name: 'Presseartikel',
		path: 'presseartikel',
	},
	{
		name: 'Kontakt',
		path: 'kontakt',
	},
]

export default function Navigation({ useNavSpacer = true }) {
	const router = useRouter()
	let [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
	const toggleButton = useRef(null)
	const mobileMenu = useRef(null)
	const nav = useRef(null)
	const burgerLinesBaseStyles = 'absolute w-full h-[2px] left-1/2 -translate-x-1/2 bg-gray-dark transition-burgerline duration-300 transform'

	const openMobileNav = () => {
		mobileMenu.current.classList.remove('opacity-0', 'pointer-events-none', 'translate-x-full')
	}

	const closeMobileNav = () => {
		mobileMenu.current.classList.add('opacity-0', 'pointer-events-none', 'translate-x-full')
	}

	const toggleMobileNav = () => {
		isMobileNavOpen ? closeMobileNav() : openMobileNav()
		setIsMobileNavOpen(!isMobileNavOpen)
	}

	useEffect(() => {
		window.onscroll = () => {
			if (!nav.current) return
			const top = window.pageYOffset || document.documentElement.scrollTop
			const scrolledClass = 'scrolled-down'
			top > 0 ? nav.current.classList.add(scrolledClass) : nav.current.classList.remove(scrolledClass)
		}
	}, [])

	return (
		<div>
			{useNavSpacer && <NavSpacer />}
			<nav className={`${styles.nav} bg-gray-bg w-full fixed top-0 left-0 z-20`} ref={nav}>
				<div className='container py-4 flex justify-between items-center'>
					{/* logo */}
					<Link href='/'>
						<a className={`${styles.logo} flex-shrink-0 z-20`}>
							<img
								src={attributesGeneral.logoImage}
								alt='biohof koch logo'
								className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-full'
							/>
						</a>
					</Link>
					{/* desktop menu */}
					<div className='hidden lg:flex lg:gap-6 xl:gap-12'>
						{navItems.map((navItem) => {
							const isCurrentPath = router.route === '/' + navItem.path
							return (
								<span key={navItem.path} className='relative subheader'>
									<Link href={`/${navItem.path}`}>
										<a>{navItem.name}</a>
									</Link>
									<span className='absolute -bottom-2 left-1/2 transform -translate-x-1/2'>{isCurrentPath && <NavUnderlineSvg />}</span>
								</span>
							)
						})}
					</div>
					{/* mobile menu */}
					<div
						ref={mobileMenu}
						className='opacity-0 transform translate-x-full pointer-events-none lg:hidden duration-500 fixed top-0 left-0 w-full h-full bg-gray-bg z-10'
					>
						<div className='container w-full h-full flex flex-col justify-center items-center gap-6'>
							{navItems.map((navItem) => {
								const isCurrentPath = router.route === '/' + navItem.path
								return (
									<span key={navItem.path} className='relative subheader'>
										<Link href={`/${navItem.path}`}>
											<a>{navItem.name}</a>
										</Link>
										<span className='absolute -bottom-1 left-1/2 transform -translate-x-1/2'>{isCurrentPath && <NavUnderlineSvg />}</span>
									</span>
								)
							})}
						</div>
					</div>
					{/* burger button menu */}
					<button
						ref={toggleButton}
						className='lg:hidden relative h-4 w-8 z-20'
						onClick={() => {
							toggleMobileNav()
						}}
						aria-label="navigation toggle"
					>
						<div className={burgerLinesBaseStyles + ' ' + 'top-0' + ' ' + (isMobileNavOpen ? `-rotate-45 top-1/2 -translate-y-1/2` : '')}></div>
						<div className={burgerLinesBaseStyles + ' ' + 'bottom-0' + ' ' + (isMobileNavOpen ? `rotate-45 bottom-1/2 translate-y-1/2` : '')}></div>
					</button>
				</div>
			</nav>
		</div>
	)
}
