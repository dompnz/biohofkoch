import Link from 'next/link'
import { useRef, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import NavUnderlineSvg from '../animated_svgs/nav/underline'
import NavSpacer from './nav-spacer'
import styles from './navigation.module.scss'

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
	const burgerLinesBaseStyles = 'absolute w-full h-[1px] left-1/2 -translate-x-1/2 bg-gray-dark transition-burgerline duration-300 transform'

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
						<a
							className={`${styles.logo} transition-square duration-300 bg-logo bg-center bg-contain bg-no-repeat w-16 h-16 2xl:w-32 2xl:h-32 flex-shrink-0 z-20`}
						></a>
					</Link>
					{/* desktop menu */}
					<div className='hidden lg:flex'>
						{navItems.map((navItem) => {
							const isCurrentPath = router.route === '/' + navItem.path
							return (
								<span key={navItem.path} className='relative ml-6 subheader'>
									<Link href={`/${navItem.path}`}>
										<a>{navItem.name}</a>
									</Link>
									<span className='absolute -bottom-2 left-0 w-full'>{isCurrentPath && <NavUnderlineSvg />}</span>
								</span>
							)
						})}
					</div>
					{/* mobile menu */}
					<div
						ref={mobileMenu}
						className='opacity-0 transform translate-x-full pointer-events-none lg:hidden duration-500 fixed top-0 left-0 w-full h-full bg-gray-bg z-10'
					>
						<div className='container w-full h-full flex flex-col justify-center items-start sm:items-center'>
							{navItems.map((navItem) => {
								const isCurrentPath = router.route === '/' + navItem.path
								return (
									<span key={navItem.path} className='relative mb-6 last:mb-0 subheader'>
										<Link href={`/${navItem.path}`}>
											<a>{navItem.name}</a>
										</Link>
										<span className='absolute -bottom-1 left-0 w-full'>{isCurrentPath && <NavUnderlineSvg />}</span>
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
					>
						<div className={burgerLinesBaseStyles + ' ' + 'top-0' + ' ' + (isMobileNavOpen ? `-rotate-45 top-1/2 w-4/5` : '')}></div>
						<div className={burgerLinesBaseStyles + ' ' + 'bottom-0' + ' ' + (isMobileNavOpen ? `rotate-45 bottom-1/2 w-4/5` : '')}></div>
					</button>
				</div>
			</nav>
		</div>
	)
}
