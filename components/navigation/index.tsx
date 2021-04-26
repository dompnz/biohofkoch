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
		name: "Hofladen & Bio Kiste",
		path: "hofladen-bio-kiste",
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
	const mobileMenu = useRef(null)

	const openMobileNav = () => {
		mobileMenu.current.classList.remove("hidden")
	}

	const closeMobileNav = () => {
		mobileMenu.current.classList.add("hidden")
	}

	const toggleMobileNav = () => {
		isMobileNavOpen ? closeMobileNav() : openMobileNav()
		isMobileNavOpen = !isMobileNavOpen
	}

	useEffect(() => {
		console.log(router)
	})

	return (
		<nav className="bg-yellow-300 w-full fixed z-20">
			<div className="container mx-auto py-4 flex justify-between items-center">
				{/* logo */}
				<Link href="/">
					<a className="bg-logo bg-center bg-contain bg-no-repeat w-16 h-16 flex-shrink-0 z-20"></a>
				</Link>
				{/* desktop menu */}
				<div className="hidden lg:block">
					{navItems.map((navItem) => {
						const isCurrentPath = router.route === "/" + navItem.path
						return (
							<Link href={`/${navItem.path}`} key={navItem.path}>
								<a className="relative ml-6 font-extrabold">
									<span>{navItem.name}</span>
									<span className="absolute top-full left-1/2 transform -translate-x-1/2 w-full max-w-full">{isCurrentPath && <UnderlineSvg />}</span>
								</a>
							</Link>
						)
					})}
				</div>
				{/* mobile menu */}
				<div ref={mobileMenu} className="hidden lg:hidden fixed top-0 left-0 w-full h-full bg-white z-10">
					<div className="container max-w-none w-full h-full container flex flex-col justify-center items-start sm:items-center">
						{navItems.map((navItem) => {
							const isCurrentPath = router.route === "/" + navItem.path
							return (
								<Link href={`/${navItem.path}`} key={navItem.path}>
									<a className="relative mb-6 last:mb-0 font-extrabold">
										<span>{navItem.name}</span>
										<span className="absolute top-full left-1/2 transform -translate-x-1/2 w-full max-w-full">{isCurrentPath && <UnderlineSvg />}</span>
									</a>
								</Link>
							)
						})}
					</div>
				</div>
				{/* burger button menu */}
				<button
					className="lg:hidden relative h-4 w-4 z-20"
					onClick={() => {
						toggleMobileNav()
					}}
				>
					<div className="absolute w-full h-[1px] top-0 bg-gray-dark"></div>
					<div className="absolute w-full h-[1px] bottom-0 bg-gray-dark"></div>
				</button>
			</div>
		</nav>
	)
}
