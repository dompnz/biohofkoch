import Navigation from "../navigation"
import Footer from "../footer"

export default function Layout({ children, showNav = true, showFooter = true }) {
	return (
		<div>
			{showNav && <Navigation />}
			<main>{children}</main>
			{showFooter && <Footer />}
		</div>
	)
}
