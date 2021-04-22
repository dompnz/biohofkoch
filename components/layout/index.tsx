import Navigation from "../navigation"

export default function Layout({ children, showNav = true }) {
	return (
		<div>
			{showNav && <Navigation />}
			{children}
		</div>
	)
}
