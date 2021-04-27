import Link from "next/link"
import styles from "./navigation.module.scss"
import { useRef, useEffect } from "react"
import { useRouter } from "next/router"
import UnderlineSvg from "./underline-svg"

const navItems = [
	{
		name: "Über uns",
		path: "ueber-uns",
	},
	{
		name: "Süsse Knolle",
		path: "suesse-knolle",
	},
	{
		name: "Hofladen & Gemüsekiste",
		path: "hofladen-gemuesekiste",
	},
	{
		name: "Presseartikel",
		path: "presseartikel",
	},
	{
		name: "Kontakt",
		path: "kontakt",
	},
]

export default function Navigation() {
	const router = useRouter()
	let isMobileNavOpen = false
	const toggleButton = useRef(null)
	const mobileMenu = useRef(null)

	const openMobileNav = () => {
		mobileMenu.current.classList.remove("hidden")
		toggleButton.current.classList.add("closed")
	}

	const closeMobileNav = () => {
		mobileMenu.current.classList.add("hidden")
		toggleButton.current.classList.remove("closed")
	}

	const toggleMobileNav = () => {
		isMobileNavOpen ? closeMobileNav() : openMobileNav()
		isMobileNavOpen = !isMobileNavOpen
	}

	useEffect(() => {})

	return (
		<nav className="bg-yellow-300 w-full fixed z-20">
			<div className="container py-4 flex justify-between items-center">
				{/* logo */}
				<Link href="/">
					<a className="bg-logo bg-center bg-contain bg-no-repeat w-16 h-16 flex-shrink-0 z-20"></a>
				</Link>
				{/* desktop menu */}
				<div className="hidden lg:flex">
					{navItems.map((navItem) => {
						const isCurrentPath = router.route === "/" + navItem.path
						return (
							<span key={navItem.path} className="relative ml-6 subheader">
								<Link href={`/${navItem.path}`}>
									<a>{navItem.name}</a>
								</Link>
								<span className="absolute bottom-0 left-0 w-full">{isCurrentPath && <UnderlineSvg />}</span>
							</span>
						)
					})}
				</div>
				{/* mobile menu */}
				<div ref={mobileMenu} className="hidden lg:hidden fixed top-0 left-0 w-full h-full bg-white z-10">
					<div className="container w-full h-full flex flex-col justify-center items-start sm:items-center">
						{navItems.map((navItem) => {
							const isCurrentPath = router.route === "/" + navItem.path
							return (
								<span key={navItem.path} className="relative mb-6 last:mb-0 font-bold text-sm">
									<Link href={`/${navItem.path}`}>
										<a>{navItem.name}</a>
									</Link>
									<span className="absolute bottom-0 left-0 w-full">{isCurrentPath && <UnderlineSvg />}</span>
								</span>
							)
						})}
					</div>
				</div>
				{/* burger button menu */}
				<button
					ref={toggleButton}
					className="lg:hidden relative h-4 w-8 z-20"
					onClick={() => {
						toggleMobileNav()
					}}
				>
					<div className="absolute w-full h-[1px] top-0 bg-gray-text"></div>
					<div className="absolute w-full h-[1px] bottom-0 bg-gray-text"></div>
				</button>
			</div>
		</nav>
	)
}
