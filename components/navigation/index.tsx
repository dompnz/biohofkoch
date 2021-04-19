import Link from "next/link"
import styles from "./navigation.module.scss"

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
	return (
		<nav className="bg-yellow-300 text-yellow-900">
			{/* TODO: make a better solution for containers */}
			<div className="container mx-auto py-4 flex justify-between items-center">
				{/* logo */}
				<Link href="/">
					<a className="bg-logo bg-center bg-contain bg-no-repeat w-24 h-24 flex-shrink-0 z-[1]"></a>
				</Link>
				{/* desktop menu */}
				<div className="hidden lg:block">
					{navItems.map((navItem) => {
						return (
							<Link href={`/${navItem.path}`} key={navItem.path}>
								<a className="ml-6 font-extrabold">{navItem.name}</a>
							</Link>
						)
					})}
				</div>
				{/* mobile menu */}
				<div className="lg:hidden fixed top-0 left-0 w-full h-full bg-red-300 flex flex-col justify-center items-center">
					{navItems.map((navItem) => {
						return (
							<Link href={`/${navItem.path}`} key={navItem.path}>
								<a className="mb-6 last:mb-0 font-extrabold">{navItem.name}</a>
							</Link>
						)
					})}
				</div>
				{/* burger button menu */}
				{/* TODO: make this button work with js */}
				<button className="lg:hidden relative h-4 w-4">
					<div className="absolute w-full h-[1px] top-0 bg-gray-dark"></div>
					<div className="absolute w-full h-[1px] bottom-0 bg-gray-dark"></div>
				</button>
			</div>
		</nav>
	)
}
